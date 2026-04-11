/**
 * Daily Lead Report — runs every morning at 7 AM AEST
 * Queries Supabase for leads from the past 24 hours and emails a summary.
 *
 * Usage: node scripts/daily-lead-report.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

// AEST formatting
const fmt = (iso) =>
  new Date(iso).toLocaleString("en-AU", {
    timeZone: "Australia/Brisbane",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

async function run() {
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  // Fetch today's leads (past 24h)
  const { data: todayLeads, error: err1 } = await supabase
    .from("leads")
    .select("*")
    .gte("created_at", yesterday.toISOString())
    .order("created_at", { ascending: false });

  if (err1) {
    console.error("Supabase error (today):", err1.message);
    process.exit(1);
  }

  // Fetch previous day's leads (24-48h ago) for comparison
  const { data: prevLeads, error: err2 } = await supabase
    .from("leads")
    .select("id, type")
    .gte("created_at", twoDaysAgo.toISOString())
    .lt("created_at", yesterday.toISOString());

  if (err2) {
    console.error("Supabase error (prev):", err2.message);
    process.exit(1);
  }

  const leads = todayLeads || [];
  const prevCount = (prevLeads || []).length;

  // Skip email if zero leads
  if (leads.length === 0) {
    console.log("No leads in the past 24 hours. Skipping email.");
    process.exit(0);
  }

  // --- Breakdowns ---
  const byType = {};
  const bySource = {};
  const byPage = {};
  const paidLeads = [];

  for (const l of leads) {
    // By type
    byType[l.type] = (byType[l.type] || 0) + 1;

    // By source
    const src = l.lead_source || "Unknown";
    bySource[src] = (bySource[src] || 0) + 1;

    // By entry page
    const page = l.entry_page || l.referrer_page || l.page_url || "Direct";
    byPage[page] = (byPage[page] || 0) + 1;

    // Google Ads leads
    if (src.startsWith("Google Ads")) {
      paidLeads.push(l);
    }
  }

  // --- Build HTML email ---
  const delta = leads.length - prevCount;
  const deltaStr =
    delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : "same";
  const deltaColor = delta > 0 ? "#2e7d32" : delta < 0 ? "#c62828" : "#666";

  const reportDate = now.toLocaleDateString("en-AU", {
    timeZone: "Australia/Brisbane",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Helper: table row
  const row = (label, value, bold = false) =>
    `<tr><td style="padding:6px 12px;color:#666;border-bottom:1px solid #f0f0f0;">${label}</td><td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;${bold ? "font-weight:700;" : ""}">${value}</td></tr>`;

  // Breakdown table helper
  const breakdownRows = (obj) =>
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => row(k, v))
      .join("");

  // Lead list rows
  const leadRows = leads
    .filter((l) => l.type !== "partial")
    .map((l) => {
      const src = l.lead_source || "Unknown";
      const isPaid = src.startsWith("Google Ads");
      const route =
        l.from_address && l.to_address
          ? `${l.from_address} → ${l.to_address}`
          : "N/A";
      return `
        <tr style="${isPaid ? "background:#e8f5e9;" : ""}">
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-weight:600;">${l.name || "N/A"}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;"><a href="tel:${l.phone}" style="color:#1a73e8;text-decoration:none;">${l.phone || "N/A"}</a></td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">${l.type}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">${isPaid ? `<strong style="color:#2e7d32;">${src}</strong>` : src}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;">${route}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">${fmt(l.created_at)}</td>
        </tr>`;
    })
    .join("");

  // Partial leads (abandoned) section
  const partialLeads = leads.filter((l) => l.type === "partial");
  const partialSection =
    partialLeads.length > 0
      ? `
      <div style="margin-top:24px;">
        <h2 style="font-size:16px;color:#c62828;margin:0 0 12px;border-bottom:2px solid #c62828;padding-bottom:8px;">
          Abandoned Quotes (${partialLeads.length})
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#f9f9f9;">
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Name</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Phone</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Source</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Time</th>
          </tr>
          ${partialLeads
            .map(
              (l) => `
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-weight:600;">${l.name || "N/A"}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;"><a href="tel:${l.phone}" style="color:#1a73e8;text-decoration:none;">${l.phone || "N/A"}</a></td>
              <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">${l.lead_source || "Unknown"}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">${fmt(l.created_at)}</td>
            </tr>`
            )
            .join("")}
        </table>
      </div>`
      : "";

  // Paid leads highlight
  const paidSection =
    paidLeads.length > 0
      ? `
      <div style="background:#e8f5e9;border:2px solid #4caf50;border-radius:8px;padding:16px;margin-bottom:24px;">
        <h2 style="font-size:16px;color:#2e7d32;margin:0 0 4px;">
          Google Ads Leads: ${paidLeads.length}
        </h2>
        <p style="margin:0;font-size:14px;color:#555;">Paid leads are highlighted in green in the table below.</p>
      </div>`
      : "";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;color:#333;">
      <div style="background:#f5c518;padding:20px 24px;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;font-size:22px;color:#1a1a1a;">Daily Lead Report</h1>
        <p style="margin:4px 0 0;font-size:14px;color:#333;">${reportDate}</p>
      </div>

      <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;padding:24px;">

        <!-- Summary cards -->
        <div style="display:flex;gap:16px;margin-bottom:24px;">
          <div style="flex:1;background:#f9f9f9;border-radius:8px;padding:16px;text-align:center;">
            <div style="font-size:32px;font-weight:800;color:#1a1a1a;">${leads.length}</div>
            <div style="font-size:13px;color:#666;">Total Leads</div>
            <div style="font-size:14px;font-weight:700;color:${deltaColor};margin-top:4px;">${deltaStr} vs yesterday</div>
          </div>
          <div style="flex:1;background:#f9f9f9;border-radius:8px;padding:16px;text-align:center;">
            <div style="font-size:32px;font-weight:800;color:#1a1a1a;">${leads.filter((l) => l.type === "quote").length}</div>
            <div style="font-size:13px;color:#666;">Full Quotes</div>
          </div>
          <div style="flex:1;background:#f9f9f9;border-radius:8px;padding:16px;text-align:center;">
            <div style="font-size:32px;font-weight:800;color:#2e7d32;">${paidLeads.length}</div>
            <div style="font-size:13px;color:#666;">Google Ads</div>
          </div>
        </div>

        ${paidSection}

        <!-- By Type -->
        <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #f5c518;padding-bottom:8px;">By Type</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${breakdownRows(byType)}
        </table>

        <!-- By Source -->
        <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #f5c518;padding-bottom:8px;">By Source</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${breakdownRows(bySource)}
        </table>

        <!-- By Page -->
        <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #f5c518;padding-bottom:8px;">By Entry Page</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${breakdownRows(byPage)}
        </table>

        <!-- Full Lead List -->
        <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #f5c518;padding-bottom:8px;">
          All Leads (${leads.filter((l) => l.type !== "partial").length})
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:8px;">
          <tr style="background:#f9f9f9;">
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Name</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Phone</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Type</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Source</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Route</th>
            <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666;">Time</th>
          </tr>
          ${leadRows}
        </table>

        ${partialSection}

        <div style="margin-top:24px;padding:12px 16px;background:#f9f9f9;border-radius:6px;font-size:12px;color:#888;text-align:center;">
          Auto-generated by R2G Daily Lead Report script
        </div>
      </div>
    </div>
  `;

  // Send email
  const { error: sendError } = await resend.emails.send({
    from: "R2G Reports <noreply@r2g.com.au>",
    to: "contact@r2g.com.au",
    subject: `Daily Leads: ${leads.length} leads (${deltaStr} vs yesterday) - ${reportDate}`,
    html,
  });

  if (sendError) {
    console.error("Email send error:", sendError);
    process.exit(1);
  }

  console.log(
    `Report sent! ${leads.length} leads (${leads.filter((l) => l.type === "quote").length} quotes, ${paidLeads.length} paid, ${partialLeads.length} abandoned)`
  );
}

run().catch((err) => {
  console.error("Report failed:", err);
  process.exit(1);
});
