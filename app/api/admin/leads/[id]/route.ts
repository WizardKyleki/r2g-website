import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const { id } = await params;
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Lead detail error:", err);
    return NextResponse.json({ error: "Failed to fetch lead" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const { id } = await params;
    const updates = await request.json();

    // First, fetch current lead to detect status transitions
    const { data: current } = await supabase
      .from("leads")
      .select("status")
      .eq("id", id)
      .single();

    const allowed: Record<string, unknown> = {};

    // Allowed fields
    if (updates.status) allowed.status = updates.status;
    if (updates.admin_notes !== undefined) allowed.admin_notes = updates.admin_notes;
    if (updates.estimated_value !== undefined) allowed.estimated_value = updates.estimated_value;
    if (updates.actual_value !== undefined) allowed.actual_value = updates.actual_value;
    if (updates.lost_reason !== undefined) allowed.lost_reason = updates.lost_reason;

    // Auto-set timestamps on status transitions
    if (updates.status && current) {
      const oldStatus = current.status;
      const newStatus = updates.status;

      // First contact: any transition from "new"
      if (oldStatus === "new" && newStatus !== "new") {
        allowed.first_contacted_at = new Date().toISOString();
      }

      // Quoted
      if (newStatus === "quoted" && oldStatus !== "quoted") {
        allowed.quoted_at = new Date().toISOString();
      }

      // Closed (won or lost)
      if ((newStatus === "won" || newStatus === "lost") && oldStatus !== "won" && oldStatus !== "lost") {
        allowed.closed_at = new Date().toISOString();
      }
    }

    if (Object.keys(allowed).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("leads")
      .update(allowed)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Lead update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Lead PATCH error:", err);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}
