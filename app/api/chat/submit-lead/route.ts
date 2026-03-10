import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, moving_from, moving_to, move_type, property_type, bedrooms, preferred_date, notes, description } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
NEW LEAD — R2G WEBSITE CHATBOT
================================

Name:           ${name || "Not provided"}
Phone:          ${phone || "Not provided"}
Email:          ${email || "Not provided"}

Moving From:    ${moving_from || "Not specified"}
Moving To:      ${moving_to || "Not specified"}
Move Type:      ${move_type || "Not specified"}
Property:       ${property_type || "Not specified"}
Bedrooms:       ${bedrooms || "Not specified"}
Preferred Date: ${preferred_date || "Not specified"}

Notes:
${notes || "None"}

Conversation Summary:
${description || "No summary available"}

================================
Source:    AI Chat Widget
Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })}
    `.trim();

    await transporter.sendMail({
      from: `"R2G Website" <${process.env.EMAIL_USER}>`,
      to: "contact@r2g.com.au",
      subject: `New Chat Lead — ${name || "Unknown"} — ${move_type || "General Enquiry"}`,
      text: emailBody,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat lead email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
