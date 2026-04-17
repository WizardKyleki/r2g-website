import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Webhook endpoint for MoverMate/n8n to sync job status updates.
 *
 * n8n sends a POST whenever a job is created, updated, or completed in MoverMate.
 * This endpoint matches the job to an existing lead (by email or phone) and updates
 * the lead status, values, and timestamps accordingly.
 *
 * Expected payload:
 * {
 *   "secret": "r2g-webhook-sync-2026",
 *   "job_id": "JOB3591",
 *   "name": "Susan Nel",
 *   "phone": "+61474042041",
 *   "email": "susan@freefly.au",
 *   "status": "completed" | "assigned" | "unassigned" | "ongoing" | "cancelled" | "lost",
 *   "job_date": "2026-04-25",
 *   "job_type": "Local Move",
 *   "source": "R2G Website",
 *   "invoice_total": 945,        // optional, actual invoiced amount
 *   "balance": 0,                // optional, remaining balance
 *   "lost_reason": "Too expensive" // optional, when status=lost/cancelled
 * }
 *
 * Can also accept an array of jobs for batch sync:
 * { "secret": "...", "jobs": [ {...}, {...} ] }
 */

const WEBHOOK_SECRET = process.env.WEBHOOK_SYNC_SECRET || "r2g-webhook-sync-2026";

// Map MoverMate statuses to lead statuses
function mapStatus(moverMateStatus: string): string {
  const s = moverMateStatus.toLowerCase();
  if (s === "completed") return "won";
  if (s === "ongoing" || s === "assigned") return "quoted";
  if (s === "unassigned") return "new";
  if (s === "cancelled" || s === "lost") return "lost";
  return "new";
}

// Normalize AU phone: +61412345678 -> 0412345678
function normalizePhone(phone: string | undefined): string | null {
  if (!phone) return null;
  let p = phone.replace(/\s+/g, "").replace(/[^0-9+]/g, "");
  if (p.startsWith("+61")) p = "0" + p.slice(3);
  return p || null;
}

async function syncJob(
  supabase: ReturnType<typeof getSupabase>,
  job: Record<string, unknown>,
): Promise<{ matched: boolean; lead_id?: string; error?: string }> {
  if (!supabase) return { matched: false, error: "Database not configured" };

  const email = (job.email as string || "").toLowerCase().trim();
  const phone = normalizePhone(job.phone as string);
  const leadStatus = mapStatus(job.status as string || "");
  const invoiceTotal = job.invoice_total as number | undefined;
  const lostReason = job.lost_reason as string | undefined;
  const jobDate = job.job_date as string | undefined;

  if (!email && !phone) {
    return { matched: false, error: "No email or phone provided" };
  }

  // Find matching lead by email first, then phone
  let query = supabase.from("leads").select("id, status, created_at").limit(1);
  if (email) {
    query = query.ilike("email", email);
  } else if (phone) {
    query = query.eq("phone", phone);
  }

  const { data: matches, error: findError } = await query;
  if (findError) return { matched: false, error: findError.message };
  if (!matches || matches.length === 0) {
    // No matching lead, could be a phone/walk-in job. Insert as new won lead.
    const { data: inserted, error: insertError } = await supabase.from("leads").insert({
      type: "quote",
      status: leadStatus,
      name: job.name as string || null,
      phone: phone,
      email: email || null,
      move_date: jobDate || null,
      lead_source: job.source as string || "Phone call",
      lead_source_channel: "direct",
      actual_value: invoiceTotal || null,
      estimated_value: invoiceTotal || null,
      lost_reason: lostReason || null,
      closed_at: leadStatus === "won" || leadStatus === "lost" ? new Date().toISOString() : null,
    }).select("id").single();

    if (insertError) return { matched: false, error: insertError.message };
    return { matched: true, lead_id: inserted?.id };
  }

  // Update existing lead
  const lead = matches[0];
  const updates: Record<string, unknown> = { status: leadStatus };

  if (invoiceTotal !== undefined) {
    updates.actual_value = invoiceTotal;
    if (!lead.status || lead.status === "new") {
      updates.estimated_value = invoiceTotal;
    }
  }

  if (leadStatus === "won" || leadStatus === "lost") {
    updates.closed_at = new Date().toISOString();
  }
  if (leadStatus === "quoted" || leadStatus === "won") {
    updates.quoted_at = updates.quoted_at || new Date().toISOString();
  }
  if (leadStatus !== "new" && lead.status === "new") {
    updates.first_contacted_at = new Date().toISOString();
  }
  if (lostReason) {
    updates.lost_reason = lostReason;
  }

  const { error: updateError } = await supabase
    .from("leads")
    .update(updates)
    .eq("id", lead.id);

  if (updateError) return { matched: true, lead_id: lead.id, error: updateError.message };
  return { matched: true, lead_id: lead.id };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Auth check
    if (body.secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    // Support single job or batch
    const jobs: Record<string, unknown>[] = body.jobs || [body];
    const results = [];

    for (const job of jobs) {
      if (!job.name && !job.email && !job.phone) continue;
      const result = await syncJob(supabase, job);
      results.push({ job_id: job.job_id, ...result });
    }

    return NextResponse.json({
      synced: results.filter((r) => r.matched).length,
      failed: results.filter((r) => !r.matched).length,
      results,
    });
  } catch (err) {
    console.error("Job sync webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
