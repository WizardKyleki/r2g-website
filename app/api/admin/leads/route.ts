import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "30", 10);
    const status = searchParams.get("status") || "all"; // "all" | "new" | "contacted" | "converted" | "lost"
    const search = searchParams.get("search") || "";
    const dateFrom = searchParams.get("from") || "";
    const dateTo = searchParams.get("to") || "";

    // ── Pipeline Stats (always filtered to has_lead = true) ──────────────────
    let totalBase = supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .eq("has_lead", true);
    if (dateFrom) totalBase = totalBase.gte("created_at", `${dateFrom}T00:00:00`);
    if (dateTo) totalBase = totalBase.lte("created_at", `${dateTo}T23:59:59`);
    const { count: totalLeads } = await totalBase;

    // Count each status
    const statusCounts: Record<string, number> = { new: 0, contacted: 0, converted: 0, lost: 0 };
    for (const s of ["new", "contacted", "converted", "lost"] as const) {
      let q = supabase
        .from("conversations")
        .select("*", { count: "exact", head: true })
        .eq("has_lead", true)
        .eq("lead_status", s);
      if (dateFrom) q = q.gte("created_at", `${dateFrom}T00:00:00`);
      if (dateTo) q = q.lte("created_at", `${dateTo}T23:59:59`);
      const { count } = await q;
      statusCounts[s] = count || 0;
    }

    // ── Query leads ──────────────────────────────────────────────────────────
    let query = supabase
      .from("conversations")
      .select("*", { count: "exact" })
      .eq("has_lead", true)
      .order("created_at", { ascending: false });

    // Filter by lead_status
    if (status !== "all") {
      query = query.eq("lead_status", status);
    }

    // Date range filters
    if (dateFrom) query = query.gte("created_at", `${dateFrom}T00:00:00`);
    if (dateTo) query = query.lte("created_at", `${dateTo}T23:59:59`);

    if (search) {
      query = query.or(
        `lead_name.ilike.%${search}%,lead_phone.ilike.%${search}%,lead_email.ilike.%${search}%,display_name.ilike.%${search}%`,
      );
    }

    const from = (page - 1) * limit;
    query = query.range(from, from + limit - 1);

    const { data, count, error } = await query;
    if (error) throw error;

    return NextResponse.json({
      leads: data || [],
      total: count || 0,
      stats: {
        totalLeads: totalLeads || 0,
        new: statusCounts.new,
        contacted: statusCounts.contacted,
        converted: statusCounts.converted,
        lost: statusCounts.lost,
      },
    });
  } catch (err) {
    console.error("Failed to fetch leads:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 },
    );
  }
}
