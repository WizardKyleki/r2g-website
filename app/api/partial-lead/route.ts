import { NextResponse } from "next/server";
import { detectLeadSource } from "@/lib/detect-lead-source";
import { saveLead } from "@/lib/save-lead";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { quoteSessionId, name, phone, email, extras, pageUrl, referrerPage, httpReferrer } =
      await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 },
      );
    }

    // Skip if a completed quote already exists for this session (prevents duplicates)
    if (quoteSessionId) {
      const supabase = getSupabase();
      if (supabase) {
        const { data: existing } = await supabase
          .from("leads")
          .select("id")
          .eq("session_id", quoteSessionId)
          .eq("type", "quote")
          .limit(1);
        if (existing && existing.length > 0) {
          return NextResponse.json({ success: true, skipped: true });
        }
      }
    }

    const submittedAt = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Brisbane",
    });
    const source = detectLeadSource(pageUrl, httpReferrer);

    // Save to Supabase
    await saveLead({
      type: "partial",
      name,
      phone,
      email: email || undefined,
      extras: extras || [],
      lead_source: source.label,
      lead_source_channel: source.channel,
      http_referrer: httpReferrer || undefined,
      page_url: pageUrl,
      referrer_page: referrerPage,
      session_id: quoteSessionId,
    });

    // Send to n8n webhook (must await on Vercel serverless)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "quote_form_partial",
            status: "incomplete",
            quoteSessionId,
            name,
            phone,
            email: email || "",
            extras: extras || [],
            pageUrl,
            referrerPage,
            leadSource: source.label,
            leadSourceChannel: source.channel,
            submittedAt,
          }),
        });
      } catch (webhookErr) {
        console.error("n8n partial-lead webhook error:", webhookErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Partial lead error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save partial lead" },
      { status: 500 },
    );
  }
}
