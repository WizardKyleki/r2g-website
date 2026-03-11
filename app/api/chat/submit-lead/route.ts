import { NextResponse } from "next/server";
import { Resend } from "resend";
import { updateConversationLead, fireWebhook, recordABTestLead } from "@/lib/dashboard-db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, moving_from, moving_to, move_type, property_type, bedrooms, preferred_date, notes, description, conversationId } = data;

    const submittedAt = new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background-color: #f5c518; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px; color: #1a1a1a;">New Chat Lead</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: #333;">via Zoey — AI Chat Widget</p>
        </div>

        <div style="border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; padding: 24px;">
          <h2 style="font-size: 16px; color: #1a1a1a; margin: 0 0 12px; border-bottom: 2px solid #f5c518; padding-bottom: 8px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1a73e8; text-decoration: none; font-weight: 600;">${phone || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email || "Not provided"}</a></td>
            </tr>
          </table>

          <h2 style="font-size: 16px; color: #1a1a1a; margin: 0 0 12px; border-bottom: 2px solid #f5c518; padding-bottom: 8px;">Moving Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Moving From</td>
              <td style="padding: 8px 0; font-weight: 600;">${moving_from || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Moving To</td>
              <td style="padding: 8px 0; font-weight: 600;">${moving_to || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Move Type</td>
              <td style="padding: 8px 0;">${move_type || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Property</td>
              <td style="padding: 8px 0;">${property_type || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Bedrooms</td>
              <td style="padding: 8px 0;">${bedrooms || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Preferred Date</td>
              <td style="padding: 8px 0;">${preferred_date || "Not specified"}</td>
            </tr>
            ${notes ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Notes</td>
              <td style="padding: 8px 0;">${notes}</td>
            </tr>` : ""}
          </table>

          ${description ? `
          <h2 style="font-size: 16px; color: #1a1a1a; margin: 0 0 12px; border-bottom: 2px solid #f5c518; padding-bottom: 8px;">Conversation Summary</h2>
          <p style="margin: 0 0 24px; line-height: 1.6; color: #555;">${description}</p>
          ` : ""}

          <div style="background-color: #f9f9f9; padding: 12px 16px; border-radius: 6px; font-size: 13px; color: #888;">
            Source: Zoey AI Chat Widget<br/>
            Submitted: ${submittedAt} (AEST)
          </div>
        </div>
      </div>
    `;

    const { data: result, error: sendError } = await resend.emails.send({
      from: "R2G Website <noreply@r2g.com.au>",
      to: ["contact@r2g.com.au", "kyle@r2g.com.au"],
      subject: `🔔 New Chat Lead — ${name || "Unknown"} — ${move_type || "General Enquiry"}`,
      replyTo: email || undefined,
      html,
    });

    if (sendError) {
      console.error("Resend error:", JSON.stringify(sendError, null, 2));
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }

    console.log("Chat lead email sent, id:", result?.id);

    // Store lead data in Supabase (fire-and-forget)
    if (conversationId) {
      updateConversationLead(conversationId, {
        name, phone, email, moving_from, moving_to, move_type,
      }).catch((err) => console.error("Failed to store lead data:", err));
    }

    // Track A/B test lead conversion (fire-and-forget)
    if (conversationId) {
      recordABTestLead(conversationId)
        .catch((err) => console.error("A/B lead record failed:", err));
    }

    // Fire webhook notification (fire-and-forget)
    fireWebhook({
      conversationId: conversationId || "unknown",
      name, phone, email, moving_from, moving_to, move_type,
      page_url: data.page_url,
    }).catch((err) => console.error("Webhook failed:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat lead email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
