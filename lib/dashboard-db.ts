import { supabase } from "@/lib/supabase";
import type {
  AnalyticsTrends,
  Conversation,
  ConversationWithMessages,
  DashboardStats,
  LeadStatus,
  NotificationType,
} from "@/lib/dashboard-types";

// ── Notifications ────────────────────────────────────────────────────────────

/** Fire-and-forget: insert a notification into the notifications table. */
export async function createNotification(params: {
  type: NotificationType;
  title: string;
  body: string;
  conversation_id: string;
  metadata?: Record<string, unknown>;
}): Promise<void> {
  try {
    await supabase.from("notifications").insert({
      type: params.type,
      title: params.title,
      body: params.body,
      conversation_id: params.conversation_id,
      metadata: params.metadata || {},
    });
  } catch (err) {
    console.error("Failed to create notification:", err);
  }
}

// ── Save / Update Conversations ─────────────────────────────────────────────

/** Create or update a conversation and append messages */
export async function saveConversationMessages(
  conversationId: string,
  userMessage: string,
  assistantMessage: string,
  pageUrl?: string,
  toolCalls?: { name: string; input: Record<string, string> }[],
) {
  try {
    // Upsert conversation
    const { data: existing } = await supabase
      .from("conversations")
      .select("id, message_count, user_message_count")
      .eq("id", conversationId)
      .single();

    if (existing) {
      // Update existing conversation
      await supabase
        .from("conversations")
        .update({
          updated_at: new Date().toISOString(),
          message_count: existing.message_count + 2,
          user_message_count: existing.user_message_count + 1,
          status: "active",
        })
        .eq("id", conversationId);
    } else {
      // Create new conversation
      await supabase.from("conversations").insert({
        id: conversationId,
        message_count: 2,
        user_message_count: 1,
        page_url: pageUrl || null,
      });

      // Notify: new chat started
      createNotification({
        type: "new_conversation",
        title: "New Chat Started",
        body: `Customer started a conversation${pageUrl ? ` on ${pageUrl}` : ""}`,
        conversation_id: conversationId,
        metadata: { page_url: pageUrl || null },
      }).catch(() => {});
    }

    // Insert user message
    await supabase.from("messages").insert({
      conversation_id: conversationId,
      role: "user",
      content: userMessage,
    });

    // Insert assistant message
    await supabase.from("messages").insert({
      conversation_id: conversationId,
      role: "assistant",
      content: assistantMessage,
      tool_name: toolCalls?.[0]?.name || null,
      tool_input: toolCalls?.[0]?.input || null,
    });
  } catch (err) {
    console.error("Failed to save conversation:", err);
  }
}

/** Save only the user message (used during admin takeover — no AI response) */
export async function saveUserMessageOnly(
  conversationId: string,
  userMessage: string,
  pageUrl?: string,
) {
  try {
    const { data: existing } = await supabase
      .from("conversations")
      .select("id, message_count, user_message_count")
      .eq("id", conversationId)
      .single();

    if (existing) {
      await supabase
        .from("conversations")
        .update({
          updated_at: new Date().toISOString(),
          message_count: existing.message_count + 1,
          user_message_count: existing.user_message_count + 1,
          status: "active",
        })
        .eq("id", conversationId);
    } else {
      await supabase.from("conversations").insert({
        id: conversationId,
        message_count: 1,
        user_message_count: 1,
        page_url: pageUrl || null,
      });
    }

    await supabase.from("messages").insert({
      conversation_id: conversationId,
      role: "user",
      content: userMessage,
    });

    // Notify: customer replied during admin takeover
    createNotification({
      type: "new_message",
      title: "Customer Reply (Takeover)",
      body: userMessage.length > 100 ? userMessage.slice(0, 100) + "…" : userMessage,
      conversation_id: conversationId,
    }).catch(() => {});
  } catch (err) {
    console.error("Failed to save user message:", err);
  }
}

/** Mark a conversation as having a lead */
export async function updateConversationLead(
  conversationId: string,
  leadData: {
    name?: string;
    phone?: string;
    email?: string;
    moving_from?: string;
    moving_to?: string;
    move_type?: string;
  },
) {
  try {
    await supabase
      .from("conversations")
      .update({
        has_lead: true,
        lead_name: leadData.name || null,
        lead_phone: leadData.phone || null,
        lead_email: leadData.email || null,
        lead_moving_from: leadData.moving_from || null,
        lead_moving_to: leadData.moving_to || null,
        lead_move_type: leadData.move_type || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", conversationId);

    // Notify: new lead captured
    createNotification({
      type: "new_lead",
      title: "New Lead Captured",
      body: `${leadData.name || "Unknown"}${leadData.phone ? ` — ${leadData.phone}` : ""}`,
      conversation_id: conversationId,
      metadata: { ...leadData },
    }).catch(() => {});
  } catch (err) {
    console.error("Failed to update conversation lead:", err);
  }
}

// ── Auto-tagging ─────────────────────────────────────────────────────────────

/** Tag detection rules — keyword patterns + signals */
const TAG_RULES: {
  tag: string;
  keywords: RegExp[];
  toolSignals?: string[];
  urlSignals?: RegExp[];
}[] = [
  {
    tag: "interstate",
    keywords: [
      /\binterstate\b/i,
      /\bcross[- ]?state\b/i,
      /\bsydney\b/i,
      /\bmelbourne\b/i,
      /\bperth\b/i,
      /\badelaide\b/i,
      /\bhobart\b/i,
      /\bdarwin\b/i,
      /\bcanberra\b/i,
      /\btownsville\b/i,
      /\bmackay\b/i,
      /\brockhampton\b/i,
      /\bhervey bay\b/i,
      /\bbundaberg\b/i,
      /\bstate to state\b/i,
    ],
    urlSignals: [/interstate/i],
  },
  {
    tag: "local",
    keywords: [
      /\blocal move\b/i,
      /\blocal remov/i,
      /\bsame (suburb|city|area|town)\b/i,
      /\bnearby\b/i,
      /\bjust down the road\b/i,
      /\bnot far\b/i,
    ],
    urlSignals: [/removalists-(cairns|brisbane|gold-coast|sunshine-coast)\b/i],
  },
  {
    tag: "storage",
    keywords: [
      /\bstorage\b/i,
      /\bstore (my|our|the) (stuff|things|belongings|furniture)\b/i,
      /\bwarehouse\b/i,
      /\bkeep.*(stuff|things|belongings)\b/i,
      /\bhold.*(stuff|things|belongings)\b/i,
      /\bshort[- ]?term storage\b/i,
      /\blong[- ]?term storage\b/i,
    ],
    urlSignals: [/storage/i],
  },
  {
    tag: "packing",
    keywords: [
      /\bpacking\b/i,
      /\bpack (my|our|the)\b/i,
      /\bboxes\b/i,
      /\bbubble wrap\b/i,
      /\bwrapping\b/i,
      /\bfragile\b/i,
      /\bpacking (service|material|supplies)\b/i,
    ],
    urlSignals: [/packing|boxes/i],
  },
  {
    tag: "price-sensitive",
    keywords: [
      /\bcheap(est|er)?\b/i,
      /\bbudget\b/i,
      /\baffordable\b/i,
      /\bdiscount\b/i,
      /\bbest price\b/i,
      /\bhow much\b/i,
      /\bcost\b/i,
      /\bpric(e|ing)\b/i,
      /\bexpensive\b/i,
      /\bquote\b/i,
      /\bestimate\b/i,
    ],
    toolSignals: ["redirect_to_quote"],
  },
  {
    tag: "ndis",
    keywords: [
      /\bndis\b/i,
      /\bdisability\b/i,
      /\bparticipant\b/i,
      /\bplan[- ]?managed\b/i,
      /\bself[- ]?managed\b/i,
      /\bsupport coordinator\b/i,
    ],
    urlSignals: [/ndis/i],
  },
  {
    tag: "commercial",
    keywords: [
      /\boffice (move|remov|reloc)/i,
      /\bbusiness (move|remov|reloc)/i,
      /\bcommercial\b/i,
      /\bcorporate\b/i,
      /\bworkplace\b/i,
      /\bcompany (move|reloc)/i,
      /\bdesks?\b/i,
      /\bserver room\b/i,
    ],
    urlSignals: [/office/i],
  },
  {
    tag: "callback",
    keywords: [
      /\bcall me\b/i,
      /\bcall (us|back)\b/i,
      /\bphone me\b/i,
      /\bring me\b/i,
      /\bgive .* a call\b/i,
      /\bspeak to someone\b/i,
      /\btalk to (a |someone|an )/i,
    ],
    toolSignals: ["transfer_to_phone", "transfer_to_whatsapp"],
  },
  {
    tag: "urgent",
    keywords: [
      /\burgent(ly)?\b/i,
      /\basap\b/i,
      /\bemergency\b/i,
      /\brush\b/i,
      /\bimmediately\b/i,
      /\bthis week\b/i,
      /\btomorrow\b/i,
      /\btoday\b/i,
      /\bright away\b/i,
      /\bstraight away\b/i,
      /\blast[- ]?minute\b/i,
      /\bneed (it |this )?done (fast|quick|soon)\b/i,
    ],
  },
];

/**
 * Analyze conversation content and auto-tag.
 * Merges detected tags with existing manual tags (never removes manual ones).
 */
export async function autoTagConversation(
  conversationId: string,
  allText: string,
  toolCalls: { name: string; input: Record<string, string> }[],
  pageUrl?: string,
) {
  try {
    // Fetch existing tags so we never overwrite manual ones
    const { data: conv } = await supabase
      .from("conversations")
      .select("tags")
      .eq("id", conversationId)
      .single();

    const existingTags: string[] = conv?.tags || [];
    const detectedTags = new Set<string>(existingTags);
    const toolNames = toolCalls.map((t) => t.name);

    for (const rule of TAG_RULES) {
      // Already tagged? Skip detection
      if (detectedTags.has(rule.tag)) continue;

      let matched = false;

      // Check keywords against conversation text
      for (const kw of rule.keywords) {
        if (kw.test(allText)) {
          matched = true;
          break;
        }
      }

      // Check tool call signals
      if (!matched && rule.toolSignals) {
        for (const sig of rule.toolSignals) {
          if (toolNames.includes(sig)) {
            matched = true;
            break;
          }
        }
      }

      // Check URL signals
      if (!matched && rule.urlSignals && pageUrl) {
        for (const sig of rule.urlSignals) {
          if (sig.test(pageUrl)) {
            matched = true;
            break;
          }
        }
      }

      if (matched) detectedTags.add(rule.tag);
    }

    // Only update if we found new tags
    const newTags = Array.from(detectedTags);
    if (newTags.length > existingTags.length) {
      await supabase
        .from("conversations")
        .update({ tags: newTags })
        .eq("id", conversationId);
    }
  } catch (err) {
    console.error("Auto-tag failed:", err);
  }
}

// ── AI Conversation Summary ──────────────────────────────────────────────────

/**
 * Generate an AI summary of the conversation using Claude Haiku (cheap + fast).
 * Also auto-detects the customer's name from conversation text.
 */
export async function autoSummarizeConversation(
  conversationId: string,
  allText: string,
  userMessageCount: number,
) {
  // Only summarize conversations with 2+ user messages
  if (userMessageCount < 2) return;

  try {
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 200,
      messages: [
        {
          role: "user",
          content: `Analyze this removalist company chat conversation and return a JSON object with:
1. "summary": A 1-2 sentence summary of what the customer needs (be specific — mention locations, bedrooms, dates if mentioned)
2. "name": The customer's first name if they mentioned it, or null
3. "sentiment": One of "positive", "neutral", "negative", "frustrated"

Conversation:
${allText.slice(0, 3000)}

Return ONLY valid JSON, no markdown:`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return;

    const parsed = JSON.parse(jsonMatch[0]) as {
      summary?: string;
      name?: string | null;
      sentiment?: string;
    };

    const update: Record<string, unknown> = {};

    if (parsed.summary) update.summary = parsed.summary.slice(0, 500);
    if (parsed.sentiment && ["positive", "neutral", "negative", "frustrated"].includes(parsed.sentiment)) {
      update.sentiment = parsed.sentiment;
    }

    // Auto-set display_name if we detected a name and none is set
    if (parsed.name) {
      const { data: conv } = await supabase
        .from("conversations")
        .select("display_name, lead_name")
        .eq("id", conversationId)
        .single();

      if (conv && !conv.display_name && !conv.lead_name) {
        update.display_name = parsed.name;
      }
    }

    if (Object.keys(update).length > 0) {
      await supabase
        .from("conversations")
        .update(update)
        .eq("id", conversationId);
    }
  } catch (err) {
    console.error("Auto-summarize failed:", err);
  }
}

// ── Lead Scoring ─────────────────────────────────────────────────────────────

/**
 * Score a lead 0-5 based on engagement signals.
 * Higher score = hotter lead.
 */
export async function autoScoreConversation(
  conversationId: string,
  allText: string,
  toolCalls: { name: string; input: Record<string, string> }[],
  userMessageCount: number,
) {
  try {
    const { data: conv } = await supabase
      .from("conversations")
      .select("has_lead, lead_phone, lead_email, lead_moving_from, lead_moving_to")
      .eq("id", conversationId)
      .single();

    if (!conv) return;

    let score = 0;
    const textLower = allText.toLowerCase();

    // +1: Engaged (3+ user messages)
    if (userMessageCount >= 3) score++;

    // +1: Has phone number
    if (conv.lead_phone) score++;

    // +1: Has email
    if (conv.lead_email) score++;

    // +1: Has both origin and destination
    if (conv.lead_moving_from && conv.lead_moving_to) score++;

    // +1: Mentioned a timeline/date
    if (
      /\b(tomorrow|next week|this week|this month|next month|asap|january|february|march|april|may|june|july|august|september|october|november|december|\d{1,2}\/\d{1,2}|\d{1,2}(st|nd|rd|th))\b/i.test(textLower)
    ) score++;

    // +1: Mentioned bedrooms/size (serious enquiry)
    if (/\b(\d+)\s*(-\s*\d+\s*)?(bed(room)?s?|br)\b/i.test(textLower)) score++;

    // +1: Submitted lead form
    if (conv.has_lead) score++;

    // +1: Asked for quote or used quote tool
    if (toolCalls.some((t) => t.name === "redirect_to_quote")) score++;

    // Cap at 5
    score = Math.min(5, score);

    await supabase
      .from("conversations")
      .update({ lead_score: score })
      .eq("id", conversationId);
  } catch (err) {
    console.error("Auto-score failed:", err);
  }
}

// ── Webhook Notification ─────────────────────────────────────────────────────

/**
 * Fire webhook when a lead is submitted (if enabled in settings).
 */
export async function fireWebhook(
  leadData: {
    conversationId: string;
    name?: string;
    phone?: string;
    email?: string;
    moving_from?: string;
    moving_to?: string;
    move_type?: string;
    page_url?: string;
    summary?: string;
    lead_score?: number;
    tags?: string[];
  },
) {
  try {
    const { data: setting } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "webhook")
      .single();

    if (!setting?.value) return;
    const config = setting.value as { url?: string; enabled?: boolean };
    if (!config.enabled || !config.url) return;

    // Fire webhook (non-blocking)
    fetch(config.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "lead_submitted",
        timestamp: new Date().toISOString(),
        data: leadData,
      }),
    }).catch((err) => console.error("Webhook delivery failed:", err));
  } catch (err) {
    console.error("Webhook error:", err);
  }
}

// ── "Zoey Struggled" Detection ───────────────────────────────────────────────

const STRUGGLE_PATTERNS = [
  /\bthat'?s (wrong|incorrect|not right|not true)\b/i,
  /\byou'?re wrong\b/i,
  /\bwrong (answer|info|information|price)\b/i,
  /\bdon'?t understand\b/i,
  /\bnot what i (asked|meant|said)\b/i,
  /\bstop (saying|repeating)\b/i,
  /\buseless\b/i,
  /\bterrible\b/i,
  /\bwaste of time\b/i,
  /\bjust (give|tell|answer)\b/i,
  /\bi (said|already told you|just said)\b/i,
];

/**
 * Detect if the user is frustrated or Zoey gave bad info.
 * Auto-adds "needs-review" tag.
 */
export async function detectStruggle(
  conversationId: string,
  userText: string,
) {
  try {
    let struggled = false;
    for (const pattern of STRUGGLE_PATTERNS) {
      if (pattern.test(userText)) {
        struggled = true;
        break;
      }
    }

    if (!struggled) return;

    // Fetch existing tags and add "needs-review"
    const { data: conv } = await supabase
      .from("conversations")
      .select("tags")
      .eq("id", conversationId)
      .single();

    const existingTags: string[] = conv?.tags || [];
    if (existingTags.includes("needs-review")) return;

    await supabase
      .from("conversations")
      .update({ tags: [...existingTags, "needs-review"] })
      .eq("id", conversationId);

    // Notify: customer frustrated
    createNotification({
      type: "frustrated_customer",
      title: "Customer Frustrated",
      body: userText.length > 100 ? userText.slice(0, 100) + "…" : userText,
      conversation_id: conversationId,
    }).catch(() => {});
  } catch (err) {
    console.error("Struggle detection failed:", err);
  }
}

// ── A/B Testing ─────────────────────────────────────────────────────────────

/**
 * Fetch the currently running A/B test (if any).
 */
export async function getRunningABTest() {
  try {
    const { data } = await supabase
      .from("zoey_ab_tests")
      .select("*")
      .eq("status", "running")
      .limit(1)
      .single();

    return data as {
      id: string;
      section_key: string;
      variant_a: string;
      variant_b: string;
      traffic_split: number;
    } | null;
  } catch {
    return null;
  }
}

/**
 * Deterministically assign a variant (A or B) based on conversationId.
 * Uses a simple hash so the same conversation always gets the same variant.
 */
export function assignVariant(conversationId: string, trafficSplit: number): "A" | "B" {
  // Simple hash: sum char codes
  let hash = 0;
  for (let i = 0; i < conversationId.length; i++) {
    hash = ((hash << 5) - hash + conversationId.charCodeAt(i)) | 0;
  }
  const pct = Math.abs(hash) % 100;
  return pct < trafficSplit ? "A" : "B";
}

/**
 * Record that a conversation started under an A/B test variant.
 */
export async function recordABTestConversation(
  testId: string,
  variant: "A" | "B",
  conversationId: string,
) {
  try {
    // Tag the conversation
    await supabase
      .from("conversations")
      .update({ ab_test_id: testId, ab_variant: variant })
      .eq("id", conversationId);

    // Increment counter
    const col = variant === "A" ? "variant_a_conversations" : "variant_b_conversations";
    await supabase.rpc("increment_counter", { row_id: testId, column_name: col, table_name: "zoey_ab_tests" })
      .then(null, async () => {
        // Fallback: manual increment if RPC doesn't exist
        const { data } = await supabase.from("zoey_ab_tests").select(col).eq("id", testId).single();
        if (data) {
          await supabase.from("zoey_ab_tests").update({ [col]: ((data as Record<string, number>)[col] || 0) + 1 }).eq("id", testId);
        }
      });
  } catch (err) {
    console.error("A/B test recording failed:", err);
  }
}

/**
 * Increment lead count for an A/B test variant.
 */
export async function recordABTestLead(conversationId: string) {
  try {
    const { data: conv } = await supabase
      .from("conversations")
      .select("ab_test_id, ab_variant")
      .eq("id", conversationId)
      .single();

    if (!conv?.ab_test_id || !conv?.ab_variant) return;

    const col = conv.ab_variant === "A" ? "variant_a_leads" : "variant_b_leads";
    const { data } = await supabase.from("zoey_ab_tests").select(col).eq("id", conv.ab_test_id).single();
    if (data) {
      await supabase
        .from("zoey_ab_tests")
        .update({ [col]: ((data as Record<string, number>)[col] || 0) + 1 })
        .eq("id", conv.ab_test_id);
    }
  } catch (err) {
    console.error("A/B lead recording failed:", err);
  }
}

// ── Settings Helpers ─────────────────────────────────────────────────────────

export async function getSetting<T = Record<string, unknown>>(key: string): Promise<T | null> {
  try {
    const { data } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", key)
      .single();

    return (data?.value as T) || null;
  } catch {
    return null;
  }
}

// ── Read Conversations (Dashboard) ──────────────────────────────────────────

export async function getConversations(
  page = 1,
  limit = 20,
  filters?: { hasLead?: boolean; status?: string; search?: string },
): Promise<{ conversations: Conversation[]; total: number }> {
  let query = supabase
    .from("conversations")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (filters?.hasLead !== undefined) {
    query = query.eq("has_lead", filters.hasLead);
  }
  if (filters?.status && filters.status !== "all") {
    query = query.eq("status", filters.status);
  }
  if (filters?.search) {
    query = query.or(
      `lead_name.ilike.%${filters.search}%,lead_phone.ilike.%${filters.search}%,lead_email.ilike.%${filters.search}%`,
    );
  }

  const from = (page - 1) * limit;
  query = query.range(from, from + limit - 1);

  const { data, count, error } = await query;
  if (error) throw error;

  // Auto-complete stale conversations (no activity for 30 min)
  const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  const conversations = (data || []).map((c) => ({
    ...c,
    status:
      c.status === "active" && c.updated_at < thirtyMinAgo
        ? ("completed" as const)
        : c.status,
  }));

  return { conversations, total: count || 0 };
}

export async function getConversation(
  id: string,
): Promise<ConversationWithMessages | null> {
  const { data: conversation, error: convError } = await supabase
    .from("conversations")
    .select("*")
    .eq("id", id)
    .single();

  if (convError || !conversation) return null;

  const { data: messages, error: msgError } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", id)
    .order("created_at", { ascending: true });

  if (msgError) throw msgError;

  return { ...conversation, messages: messages || [] };
}

// ── Analytics ───────────────────────────────────────────────────────────────

export async function getDashboardStats(
  days = 30,
): Promise<DashboardStats> {
  const since = new Date(
    Date.now() - days * 24 * 60 * 60 * 1000,
  ).toISOString();
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  // Total conversations in period
  const { count: totalConversations } = await supabase
    .from("conversations")
    .select("*", { count: "exact", head: true })
    .gte("created_at", since);

  // Active conversations (updated in last 30 min)
  const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  const { count: activeConversations } = await supabase
    .from("conversations")
    .select("*", { count: "exact", head: true })
    .eq("status", "active")
    .gte("updated_at", thirtyMinAgo);

  // Total leads in period
  const { count: totalLeads } = await supabase
    .from("conversations")
    .select("*", { count: "exact", head: true })
    .eq("has_lead", true)
    .gte("created_at", since);

  // Today's conversations
  const { count: todayConversations } = await supabase
    .from("conversations")
    .select("*", { count: "exact", head: true })
    .gte("created_at", todayStart.toISOString());

  // Today's leads
  const { count: todayLeads } = await supabase
    .from("conversations")
    .select("*", { count: "exact", head: true })
    .eq("has_lead", true)
    .gte("created_at", todayStart.toISOString());

  // Daily breakdown + hourly + ratings + top pages
  const { data: allConversations } = await supabase
    .from("conversations")
    .select("created_at, has_lead, rating, page_url")
    .gte("created_at", since)
    .order("created_at", { ascending: true });

  const dailyMap = new Map<
    string,
    { conversations: number; leads: number }
  >();
  const hourlyMap = new Map<number, number>();
  const pageMap = new Map<string, number>();
  let thumbsUp = 0;
  let thumbsDown = 0;
  let totalRatingsCount = 0;

  for (const c of allConversations || []) {
    const date = c.created_at.slice(0, 10);
    const entry = dailyMap.get(date) || { conversations: 0, leads: 0 };
    entry.conversations++;
    if (c.has_lead) entry.leads++;
    dailyMap.set(date, entry);

    // Hourly breakdown
    const hour = new Date(c.created_at).getHours();
    hourlyMap.set(hour, (hourlyMap.get(hour) || 0) + 1);

    // Ratings
    if (c.rating === 1) { thumbsUp++; totalRatingsCount++; }
    if (c.rating === -1) { thumbsDown++; totalRatingsCount++; }

    // Top pages
    if (c.page_url) {
      pageMap.set(c.page_url, (pageMap.get(c.page_url) || 0) + 1);
    }
  }

  const dailyBreakdown = Array.from(dailyMap.entries()).map(
    ([date, stats]) => ({ date, ...stats }),
  );

  const hourlyBreakdown = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    conversations: hourlyMap.get(i) || 0,
  }));

  const topPages = Array.from(pageMap.entries())
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const total = totalConversations || 0;
  const leads = totalLeads || 0;

  return {
    totalConversations: total,
    activeConversations: activeConversations || 0,
    totalLeads: leads,
    conversionRate: total > 0 ? Math.round((leads / total) * 100) : 0,
    todayConversations: todayConversations || 0,
    todayLeads: todayLeads || 0,
    dailyBreakdown,
    avgRating: totalRatingsCount > 0 ? Math.round((thumbsUp / totalRatingsCount) * 100) : 0,
    totalRatings: totalRatingsCount,
    thumbsUp,
    thumbsDown,
    hourlyBreakdown,
    topPages,
  };
}

// ── Leads ────────────────────────────────────────────────────────────────────

export async function getLeads(
  page = 1,
  limit = 20,
  filters?: { status?: LeadStatus | "all"; search?: string },
): Promise<{ leads: Conversation[]; total: number }> {
  let query = supabase
    .from("conversations")
    .select("*", { count: "exact" })
    .eq("has_lead", true)
    .order("created_at", { ascending: false });

  if (filters?.status && filters.status !== "all") {
    query = query.eq("lead_status", filters.status);
  }
  if (filters?.search) {
    query = query.or(
      `lead_name.ilike.%${filters.search}%,lead_phone.ilike.%${filters.search}%,lead_email.ilike.%${filters.search}%`,
    );
  }

  const from = (page - 1) * limit;
  query = query.range(from, from + limit - 1);

  const { data, count, error } = await query;
  if (error) throw error;

  return { leads: data || [], total: count || 0 };
}

export async function updateLeadStatus(
  conversationId: string,
  status: LeadStatus,
): Promise<void> {
  const { error } = await supabase
    .from("conversations")
    .update({ lead_status: status, updated_at: new Date().toISOString() })
    .eq("id", conversationId);

  if (error) throw error;
}

// ── Analytics Trends ─────────────────────────────────────────────────────────

/** Get the ISO week string (YYYY-Wnn) for a date */
function getISOWeek(d: Date): string {
  const date = new Date(d.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const week1 = new Date(date.getFullYear(), 0, 4);
  const weekNum =
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7,
    );
  return `${date.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

/** Format week label like "Mar 3" (Monday of that week) */
function getWeekLabel(d: Date): string {
  const date = new Date(d.getTime());
  date.setHours(0, 0, 0, 0);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Monday
  date.setDate(diff);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()}`;
}

/**
 * Comprehensive analytics data for the trends page.
 * Queries all conversations in the period and computes aggregated metrics.
 */
export async function getAnalyticsTrends(days = 90): Promise<AnalyticsTrends> {
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const { data: allConversations } = await supabase
    .from("conversations")
    .select(
      "created_at, has_lead, rating, page_url, tags, lead_score, sentiment, message_count, user_message_count",
    )
    .gte("created_at", since)
    .order("created_at", { ascending: true });

  const conversations = allConversations || [];

  // ── Daily breakdown ──
  const dailyMap = new Map<string, { conversations: number; leads: number }>();
  // ── Weekly breakdown ──
  const weeklyMap = new Map<
    string,
    {
      weekLabel: string;
      conversations: number;
      leads: number;
      thumbsUp: number;
      thumbsDown: number;
    }
  >();
  // ── Hourly ──
  const hourlyMap = new Map<number, number>();
  // ── Tags ──
  const tagMap = new Map<string, number>();
  // ── Pages ──
  const pageMap = new Map<string, number>();
  // ── Sentiment ──
  const sentimentCounts = { positive: 0, neutral: 0, negative: 0, frustrated: 0, unrated: 0 };
  // ── Score distribution (0-5) ──
  const scoreDist = [0, 0, 0, 0, 0, 0]; // indices 0-5
  // ── Aggregates ──
  let totalThumbsUp = 0;
  let totalThumbsDown = 0;
  let totalMessages = 0;
  let totalLeadScore = 0;
  let scoredConversations = 0;

  for (const c of conversations) {
    const date = c.created_at.slice(0, 10);
    const d = new Date(c.created_at);

    // Daily
    const dayEntry = dailyMap.get(date) || { conversations: 0, leads: 0 };
    dayEntry.conversations++;
    if (c.has_lead) dayEntry.leads++;
    dailyMap.set(date, dayEntry);

    // Weekly
    const week = getISOWeek(d);
    const weekEntry = weeklyMap.get(week) || {
      weekLabel: getWeekLabel(d),
      conversations: 0,
      leads: 0,
      thumbsUp: 0,
      thumbsDown: 0,
    };
    weekEntry.conversations++;
    if (c.has_lead) weekEntry.leads++;
    if (c.rating === 1) weekEntry.thumbsUp++;
    if (c.rating === -1) weekEntry.thumbsDown++;
    weeklyMap.set(week, weekEntry);

    // Hourly
    const hour = d.getHours();
    hourlyMap.set(hour, (hourlyMap.get(hour) || 0) + 1);

    // Tags
    if (c.tags && Array.isArray(c.tags)) {
      for (const tag of c.tags) {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      }
    }

    // Pages
    if (c.page_url) {
      pageMap.set(c.page_url, (pageMap.get(c.page_url) || 0) + 1);
    }

    // Sentiment
    if (c.sentiment && c.sentiment in sentimentCounts) {
      sentimentCounts[c.sentiment as keyof typeof sentimentCounts]++;
    } else {
      sentimentCounts.unrated++;
    }

    // Lead score
    const score = typeof c.lead_score === "number" ? c.lead_score : 0;
    if (score >= 0 && score <= 5) scoreDist[score]++;
    if (c.has_lead) {
      totalLeadScore += score;
      scoredConversations++;
    }

    // Ratings
    if (c.rating === 1) totalThumbsUp++;
    if (c.rating === -1) totalThumbsDown++;

    // Messages
    totalMessages += c.message_count || 0;
  }

  // Build arrays
  const dailyConversations = Array.from(dailyMap.entries()).map(
    ([dateStr, stats]) => ({ date: dateStr, ...stats }),
  );

  const weeklyTrends = Array.from(weeklyMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, stats]) => ({
      week,
      weekLabel: stats.weekLabel,
      conversations: stats.conversations,
      leads: stats.leads,
      conversionRate:
        stats.conversations > 0
          ? Math.round((stats.leads / stats.conversations) * 100)
          : 0,
    }));

  const satisfactionTrend = Array.from(weeklyMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, stats]) => ({
      week,
      weekLabel: stats.weekLabel,
      thumbsUp: stats.thumbsUp,
      thumbsDown: stats.thumbsDown,
      rate:
        stats.thumbsUp + stats.thumbsDown > 0
          ? Math.round(
              (stats.thumbsUp / (stats.thumbsUp + stats.thumbsDown)) * 100,
            )
          : -1, // -1 = no data
    }));

  const hourlyBreakdown = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    conversations: hourlyMap.get(i) || 0,
  }));

  const tagDistribution = Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  const topPages = Array.from(pageMap.entries())
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const total = conversations.length;
  const leads = conversations.filter((c) => c.has_lead).length;

  return {
    weeklyTrends,
    dailyConversations,
    sentimentBreakdown: sentimentCounts,
    tagDistribution,
    scoreDistribution: scoreDist,
    hourlyBreakdown,
    topPages,
    satisfactionTrend,
    totalConversations: total,
    totalLeads: leads,
    conversionRate: total > 0 ? Math.round((leads / total) * 100) : 0,
    avgLeadScore:
      scoredConversations > 0
        ? Math.round((totalLeadScore / scoredConversations) * 10) / 10
        : 0,
    avgMessagesPerConvo:
      total > 0 ? Math.round((totalMessages / total) * 10) / 10 : 0,
    avgResponseRate:
      totalThumbsUp + totalThumbsDown > 0
        ? Math.round(
            (totalThumbsUp / (totalThumbsUp + totalThumbsDown)) * 100,
          )
        : 0,
    totalThumbsUp,
    totalThumbsDown,
  };
}
