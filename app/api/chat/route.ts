import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt, CHAT_TOOLS } from "@/lib/chat-config";
import {
  saveConversationMessages,
  saveUserMessageOnly,
  autoTagConversation,
  autoSummarizeConversation,
  autoScoreConversation,
  detectStruggle,
  getRunningABTest,
  assignVariant,
  recordABTestConversation,
} from "@/lib/dashboard-db";
import { supabase } from "@/lib/supabase";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Simple in-memory rate limiter
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: "Too many messages. Please try again shortly." }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { messages, conversationId, pageUrl } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Trim to last 30 messages to control token usage
    const trimmed = messages.slice(-30);

    // Extract the latest user message for storage
    const lastUserMsg = [...messages].reverse().find(
      (m: { role: string; content: string | unknown[] }) =>
        m.role === "user" && typeof m.content === "string",
    );

    // ── Admin Takeover Check ─────────────────────────────────────────────
    if (conversationId) {
      const { data: conv } = await supabase
        .from("conversations")
        .select("admin_takeover")
        .eq("id", conversationId)
        .single();

      if (conv?.admin_takeover) {
        // Save user message only — do NOT call Claude
        const userText = lastUserMsg && typeof lastUserMsg.content === "string"
          ? lastUserMsg.content
          : "";
        if (userText) {
          saveUserMessageOnly(conversationId, userText, pageUrl)
            .catch((err: unknown) => console.error("Failed to save user message during takeover:", err));
        }

        // Return a takeover SSE response
        const encoder = new TextEncoder();
        const takeoverStream = new ReadableStream({
          start(controller) {
            const takeoverEvent = {
              type: "takeover",
              content: "You're now chatting with a team member. They'll respond shortly!",
            };
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(takeoverEvent)}\n\n`));
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          },
        });

        return new Response(takeoverStream, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
          },
        });
      }
    }

    // ── A/B Test: check for running test and assign variant ──────────────
    let abTestOverride: { sectionKey: string; content: string } | undefined;
    let abTestId: string | undefined;
    let abVariant: "A" | "B" | undefined;

    const runningTest = await getRunningABTest();
    if (runningTest && conversationId) {
      abVariant = assignVariant(conversationId, runningTest.traffic_split);
      abTestId = runningTest.id;
      abTestOverride = {
        sectionKey: runningTest.section_key,
        content: abVariant === "A" ? runningTest.variant_a : runningTest.variant_b,
      };
    }

    // Load system prompt (merges DB overrides + A/B test variant)
    const systemPrompt = await getSystemPrompt(abTestOverride);

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: systemPrompt,
      tools: CHAT_TOOLS,
      messages: trimmed,
    });

    // Accumulate assistant response text for storage
    let assistantText = "";
    const toolCalls: { name: string; input: Record<string, string> }[] = [];
    let currentToolName = "";
    let currentToolInput = "";

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            // Capture text for storage
            if (event.type === "content_block_delta") {
              const delta = event.delta as unknown as Record<string, string>;
              if (delta.type === "text_delta" && delta.text) {
                assistantText += delta.text;
              }
              if (delta.type === "input_json_delta" && delta.partial_json) {
                currentToolInput += delta.partial_json;
              }
            }
            if (event.type === "content_block_start") {
              const block = (event as unknown as Record<string, Record<string, string>>).content_block;
              if (block?.type === "tool_use") {
                currentToolName = block.name;
                currentToolInput = "";
              }
            }
            if (event.type === "content_block_stop" && currentToolName) {
              try {
                toolCalls.push({ name: currentToolName, input: JSON.parse(currentToolInput || "{}") });
              } catch { /* skip */ }
              currentToolName = "";
              currentToolInput = "";
            }

            controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();

          // Fire-and-forget: save conversation to Supabase after stream completes
          if (conversationId && lastUserMsg) {
            saveConversationMessages(
              conversationId,
              typeof lastUserMsg.content === "string" ? lastUserMsg.content : "[tool_result]",
              assistantText || "[tool_call]",
              pageUrl,
              toolCalls.length > 0 ? toolCalls : undefined,
            ).catch((err) => console.error("Failed to save conversation:", err));

            // Record A/B test assignment (first message only — checked by the function)
            if (abTestId && abVariant) {
              recordABTestConversation(abTestId, abVariant, conversationId)
                .catch((err) => console.error("A/B test record failed:", err));
            }

            // Build full conversation text for analysis
            const allText = trimmed
              .map((m: { role: string; content: string | unknown[] }) =>
                typeof m.content === "string" ? m.content : "",
              )
              .join(" ") + " " + assistantText;

            // Count user messages
            const userMsgCount = trimmed.filter(
              (m: { role: string }) => m.role === "user",
            ).length;

            // Fire-and-forget: all post-stream analysis
            autoTagConversation(conversationId, allText, toolCalls, pageUrl)
              .catch((err) => console.error("Auto-tag failed:", err));

            autoScoreConversation(conversationId, allText, toolCalls, userMsgCount)
              .catch((err) => console.error("Auto-score failed:", err));

            autoSummarizeConversation(conversationId, allText, userMsgCount)
              .catch((err) => console.error("Auto-summarize failed:", err));

            // Detect if user is frustrated with Zoey
            const lastUserText = typeof lastUserMsg.content === "string" ? lastUserMsg.content : "";
            detectStruggle(conversationId, lastUserText)
              .catch((err) => console.error("Struggle detection failed:", err));
          }
        } catch (err) {
          console.error("Chat stream error:", err);
          const errMsg = { type: "error", error: "Stream interrupted" };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(errMsg)}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(
      JSON.stringify({ error: "Our chat is temporarily unavailable. Please call 1300 959 498." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
