import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "30", 10);
    const view = searchParams.get("view") || "all"; // "all" | "active" | "completed" | "needs-review"
    const search = searchParams.get("search") || "";
    const dateFrom = searchParams.get("from") || "";
    const dateTo = searchParams.get("to") || "";

    // ── Stats ─────────────────────────────────────────────────────────────────
    const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString();

    let totalBase = supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .gte("user_message_count", 1);
    if (dateFrom) totalBase = totalBase.gte("created_at", `${dateFrom}T00:00:00`);
    if (dateTo) totalBase = totalBase.lte("created_at", `${dateTo}T23:59:59`);
    const { count: totalAll } = await totalBase;

    const { count: totalActive } = await supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .eq("status", "active")
      .gte("updated_at", thirtyMinAgo);

    let leadsBase = supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .eq("has_lead", true);
    if (dateFrom) leadsBase = leadsBase.gte("created_at", `${dateFrom}T00:00:00`);
    if (dateTo) leadsBase = leadsBase.lte("created_at", `${dateTo}T23:59:59`);
    const { count: totalLeads } = await leadsBase;

    const { count: totalNeedsReview } = await supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .contains("tags", ["needs-review"]);

    // ── Query conversations ───────────────────────────────────────────────────
    let query = supabase
      .from("conversations")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (view === "active") {
      query = query.eq("status", "active").gte("updated_at", thirtyMinAgo);
    } else if (view === "completed") {
      // Stale or explicitly completed
      query = query.gte("user_message_count", 1);
      query = query.or(`status.eq.completed,updated_at.lt.${thirtyMinAgo}`);
    } else if (view === "needs-review") {
      query = query.contains("tags", ["needs-review"]);
    } else {
      // "all" — any conversation with at least 1 user message
      query = query.gte("user_message_count", 1);
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
      conversations: data || [],
      total: count || 0,
      stats: {
        totalAll: totalAll || 0,
        totalActive: totalActive || 0,
        totalLeads: totalLeads || 0,
        totalNeedsReview: totalNeedsReview || 0,
      },
    });
  } catch (err) {
    console.error("Failed to fetch conversations:", err);
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 },
    );
  }
}
