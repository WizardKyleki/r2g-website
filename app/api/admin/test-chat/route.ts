import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt, CHAT_TOOLS } from "@/lib/chat-config";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

/**
 * Admin-only test chat endpoint.
 * Sends a non-streaming chat request so admin can test Zoey's responses
 * after making training/KB changes — without affecting real conversation stats.
 */
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Load current system prompt (with all DB overrides)
    const systemPrompt = await getSystemPrompt();

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: systemPrompt,
      tools: CHAT_TOOLS,
      messages: messages.slice(-20),
    });

    // Extract text from response
    let text = "";
    for (const block of response.content) {
      if (block.type === "text") {
        text += block.text;
      }
    }

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Test chat error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to get response" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
