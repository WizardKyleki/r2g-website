import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email, topic, description, pageUrl } = await request.json();

    // Detect lead source from UTM parameters
    const detectSource = (url: string | undefined): string => {
      if (!url) return "Direct";
      try {
        const params = new URL(url).searchParams;
        const utmSource = params.get("utm_source");
        const utmMedium = params.get("utm_medium");
        const utmCampaign = params.get("utm_campaign");
        if (utmSource === "google" && utmMedium === "cpc") {
          return `Google Ads${utmCampaign ? ` (${utmCampaign})` : ""}`;
        }
        if (utmSource) return `${utmSource}${utmMedium ? ` / ${utmMedium}` : ""}`;
        return "Organic";
      } catch { return "Organic"; }
    };
    const leadSource = detectSource(pageUrl);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
${leadSource.startsWith("Google Ads") ? "💰 PAID LEAD" : "🌿 ORGANIC LEAD"} — R2G WEBSITE
=========================

Source:  ${leadSource}
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
      subject: `${leadSource.startsWith("Google Ads") ? "[PAID] " : ""}New Enquiry — ${topic}`,
      text: emailBody,
      replyTo: email,
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
            leadSource,
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
