import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { detectLeadSource } from "@/lib/detect-lead-source";
import { saveLead } from "@/lib/save-lead";

export async function POST(request: Request) {
  try {
    const { name, phone, email, topic, description, pageUrl, httpReferrer } = await request.json();

    const source = detectLeadSource(pageUrl, httpReferrer);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
${source.channel.startsWith("paid") ? "💰 PAID LEAD" : "🌿 ORGANIC LEAD"} — R2G WEBSITE
=========================

Source:  ${source.label}
From:    ${name}
Phone:   ${phone}
Email:   ${email}
Topic:   ${topic}

Message:
${description}

=========================
Page:      ${pageUrl || "Unknown"}
Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })}
    `.trim();

    await transporter.sendMail({
      from: `"R2G Website" <${process.env.EMAIL_USER}>`,
      to: "contact@r2g.com.au",
      subject: `${source.label.startsWith("Google Ads") ? "[GOOGLE ADS] " : source.label.startsWith("Microsoft Ads") ? "[MICROSOFT ADS] " : source.channel.startsWith("paid") ? "[PAID] " : ""}New Enquiry — ${topic}`,
      text: emailBody,
      replyTo: email,
    });

    // Save to Supabase
    await saveLead({
      type: "enquiry",
      name,
      phone,
      email,
      topic,
      description,
      lead_source: source.label,
      lead_source_channel: source.channel,
      http_referrer: httpReferrer || null,
      page_url: pageUrl,
    });

    // Send lead data to n8n webhook (must await on Vercel serverless)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "enquiry_form",
            name,
            phone,
            email,
            topic,
            description,
            pageUrl,
            leadSource: source.label,
            leadSourceChannel: source.channel,
            submittedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" }),
          }),
        });
      } catch (webhookErr) {
        console.error("n8n webhook error:", webhookErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
