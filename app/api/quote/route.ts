import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { from, to, propertyType, bedrooms, moveSize, date, time, name, phone, email, notes } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
NEW QUOTE REQUEST — R2G WEBSITE
================================

MOVING DETAILS
--------------
From:           ${from || "Not specified"}
To:             ${to || "Not specified"}
Property Type:  ${propertyType || "Not specified"}
Bedrooms:       ${bedrooms || "Not specified"}
Move Size:      ${moveSize || "Not specified"}
Moving Date:    ${date || "Not specified"}
Preferred Time: ${time || "Not specified"}

CONTACT DETAILS
---------------
Name:     ${name}
Phone:    ${phone}
Email:    ${email}
Notes:    ${notes || "None"}

================================
Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })}
    `.trim();

    await transporter.sendMail({
      from: `"R2G Website" <${process.env.EMAIL_USER}>`,
      to: "contact@r2g.com.au",
      subject: `New Quote Request — ${from || "Unknown"} to ${to || "Unknown"}`,
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
