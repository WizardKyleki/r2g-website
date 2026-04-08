import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const status = url.searchParams.get("status");
    const source = url.searchParams.get("source");
    const channel = url.searchParams.get("channel");
    const search = url.searchParams.get("search");
    const fromDate = url.searchParams.get("from");
    const toDate = url.searchParams.get("to");
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "25", 10);
    const sort = url.searchParams.get("sort") || "created_at";
    const order = url.searchParams.get("order") || "desc";

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("leads")
      .select("*", { count: "exact" })
      .order(sort, { ascending: order === "asc" })
      .range(from, to);

    if (type) query = query.eq("type", type);
    if (status) query = query.eq("status", status);
    if (channel) query = query.eq("lead_source_channel", channel);
    if (source) query = query.ilike("lead_source", `%${source}%`);
    if (fromDate) query = query.gte("created_at", new Date(fromDate).toISOString());
    if (toDate) {
      const end = new Date(toDate);
      end.setHours(23, 59, 59, 999);
      query = query.lte("created_at", end.toISOString());
    }
    if (search) {
      query = query.or(
        `name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`,
      );
    }

    const { data, count, error } = await query;

    if (error) {
      console.error("Leads query error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      leads: data || [],
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
