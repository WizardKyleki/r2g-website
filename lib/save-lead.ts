import { getSupabase } from "./supabase";
import type { LeadSourceChannel } from "./detect-lead-source";

export type LeadType = "quote" | "enquiry" | "partial";

export interface LeadData {
  type: LeadType;
  name?: string;
  phone?: string;
  email?: string;
  // Quote fields
  from_address?: string;
  to_address?: string;
  property_type?: string;
  moving_to?: string;
  bedrooms?: string;
  from_floor?: string;
  to_bedrooms?: string;
  to_floor?: string;
  move_size?: string;
  move_date?: string;
  move_time?: string;
  extras?: string[];
  notes?: string;
  // Enquiry fields
  topic?: string;
  description?: string;
  // Tracking
  lead_source?: string;
  lead_source_channel?: LeadSourceChannel;
  http_referrer?: string;
  page_url?: string;
  referrer_page?: string;
  entry_page?: string;
  is_landing_page?: boolean;
  session_id?: string;
}

/**
 * Save a lead to Supabase. Never throws — existing email + n8n flow is never affected.
 */
export async function saveLead(lead: LeadData): Promise<void> {
  try {
    const supabase = getSupabase();
    if (!supabase) return; // Supabase not configured, skip silently

    const { error } = await supabase.from("leads").insert({
      type: lead.type,
      status: "new",
      name: lead.name || null,
      phone: lead.phone || null,
      email: lead.email || null,
      from_address: lead.from_address || null,
      to_address: lead.to_address || null,
      property_type: lead.property_type || null,
      moving_to: lead.moving_to || null,
      bedrooms: lead.bedrooms || null,
      from_floor: lead.from_floor || null,
      to_bedrooms: lead.to_bedrooms || null,
      to_floor: lead.to_floor || null,
      move_size: lead.move_size || null,
      move_date: lead.move_date || null,
      move_time: lead.move_time || null,
      extras: lead.extras || [],
      notes: lead.notes || null,
      topic: lead.topic || null,
      description: lead.description || null,
      lead_source: lead.lead_source || null,
      lead_source_channel: lead.lead_source_channel || null,
      http_referrer: lead.http_referrer || null,
      page_url: lead.page_url || null,
      referrer_page: lead.referrer_page || null,
      entry_page: lead.entry_page || null,
      is_landing_page: lead.is_landing_page || false,
      session_id: lead.session_id || null,
    });
    if (error) console.error("Supabase insert error:", error.message);
  } catch (err) {
    console.error("saveLead error:", err);
  }
}
