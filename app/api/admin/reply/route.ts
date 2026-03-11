import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send a follow-up email to a lead directly from the dashboard.
 */
export async function POST(req: NextRequest) {
  try {
    const { to, subject, message, leadName } = (await req.json()) as {
      to: string;
      subject: string;
      message: string;
      leadName?: string;
    };

    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <div style="padding:24px;">
          ${leadName ? `<p style="margin:0 0 16px;">Hi ${leadName},</p>` : ""}
          ${message.split("\n").map((line) => `<p style="margin:0 0 12px;line-height:1.6;">${line || "&nbsp;"}</p>`).join("")}
        </div>
        <div style="border-top:1px solid #eee;padding:16px 24px;">
          <p style="margin:0;font-size:13px;color:#888;">
            R2G Transport & Storage<br>
            📞 1300 959 498 | ✉️ contact@r2g.com.au<br>
            🌐 <a href="https://www.r2g.com.au" style="color:#a855f7;">www.r2g.com.au</a>
          </p>
        </div>
      </div>
    `;

    const { error: sendError } = await resend.emails.send({
      from: "R2G Transport & Storage <contact@r2g.com.au>",
      to: [to],
      replyTo: "contact@r2g.com.au",
      subject,
      html,
    });

    if (sendError) {
      console.error("Reply email error:", sendError);
      return NextResponse.json({ error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Reply API error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
