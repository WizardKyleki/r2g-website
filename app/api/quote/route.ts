import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      from, to, propertyType, movingTo, bedrooms, fromFloor, toBedrooms, toFloor,
      moveSize, date, time, name, phone, email, extras, notes, pageUrl,
    } = data as Record<string, string | string[]>;

    const submittedAt = new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" });

    const floorLabel = (v: string | undefined) => {
      if (!v && v !== "0") return null;
      const n = parseInt(v as string, 10);
      if (isNaN(n)) return null;
      if (n === 0) return "Ground Floor";
      if (n === 1) return "1st Floor";
      if (n === 2) return "2nd Floor";
      if (n === 3) return "3rd Floor";
      if (n >= 31) return "30+ Floor";
      return `${n}th Floor`;
    };

    const moveSizeLabel =
      propertyType === "Office" ? "Office Size (Staff)" :
      propertyType === "Storage" ? "Storage Size" : "Furnishing Level";

    const extrasStr = Array.isArray(extras) && extras.length > 0 ? extras.join(", ") : null;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background-color: #f5c518; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px; color: #1a1a1a;">New Quote Request</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: #333;">via R2G Website</p>
        </div>

        <div style="border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; padding: 24px;">
          <h2 style="font-size: 16px; color: #1a1a1a; margin: 0 0 12px; border-bottom: 2px solid #f5c518; padding-bottom: 8px;">Moving Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Pick-up</td>
              <td style="padding: 8px 0; font-weight: 600;">${from || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Drop-off</td>
              <td style="padding: 8px 0; font-weight: 600;">${to || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Moving From</td>
              <td style="padding: 8px 0;">${propertyType || "Not specified"}</td>
            </tr>
            ${bedrooms ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Bedrooms (from)</td>
              <td style="padding: 8px 0;">${bedrooms}</td>
            </tr>` : ""}
            ${floorLabel(fromFloor as string | undefined) ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Floor (from)</td>
              <td style="padding: 8px 0;">${floorLabel(fromFloor as string | undefined)}</td>
            </tr>` : ""}
            ${movingTo ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Moving To</td>
              <td style="padding: 8px 0;">${movingTo}</td>
            </tr>` : ""}
            ${toBedrooms ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Bedrooms (to)</td>
              <td style="padding: 8px 0;">${toBedrooms}</td>
            </tr>` : ""}
            ${floorLabel(toFloor as string | undefined) ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Floor (to)</td>
              <td style="padding: 8px 0;">${floorLabel(toFloor as string | undefined)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">${moveSizeLabel}</td>
              <td style="padding: 8px 0;">${moveSize || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Moving Date</td>
              <td style="padding: 8px 0; font-weight: 600;">${date || "Not specified"}</td>
            </tr>
            ${time ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Preferred Time</td>
              <td style="padding: 8px 0;">${time}</td>
            </tr>` : ""}
            ${extrasStr ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Extra Services</td>
              <td style="padding: 8px 0;">${extrasStr}</td>
            </tr>` : ""}
          </table>

          <h2 style="font-size: 16px; color: #1a1a1a; margin: 0 0 12px; border-bottom: 2px solid #f5c518; padding-bottom: 8px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1a73e8; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Notes</td>
              <td style="padding: 8px 0;">${notes || "None"}</td>
            </tr>
          </table>

          <div style="background-color: #f9f9f9; padding: 12px 16px; border-radius: 6px; font-size: 13px; color: #888;">
            Page: ${pageUrl || "Unknown"}<br/>
            Submitted: ${submittedAt} (AEST)
          </div>
        </div>
      </div>
    `;

    console.log("RESEND_API_KEY loaded:", process.env.RESEND_API_KEY ? "yes" : "MISSING");

    const { data: result, error: sendError } = await resend.emails.send({
      from: "R2G Website <onboarding@resend.dev>",
      to: "kyle@r2g.com.au",
      subject: `New Quote Request — ${from || "Unknown"} to ${to || "Unknown"}`,
      replyTo: email,
      html,
    });

    if (sendError) {
      console.error("Resend error:", JSON.stringify(sendError, null, 2));
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }

    console.log("Email sent successfully, id:", result?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
