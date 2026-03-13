import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email, topic, description, pageUrl } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
NEW ENQUIRY — R2G WEBSITE
=========================

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
      subject: `New Enquiry — ${topic}`,
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
