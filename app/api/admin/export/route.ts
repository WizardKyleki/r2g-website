import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — Export conversations or leads as CSV */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "leads"; // "leads" | "conversations"

    let query = supabase
      .from("conversations")
      .select("*")
      .order("created_at", { ascending: false });

    if (type === "leads") {
      query = query.eq("has_lead", true);
    }

    const { data, error } = await query;
    if (error) throw error;

    const rows = data || [];

    // Build CSV
    const headers = [
      "Date",
      "Name",
      "Phone",
      "Email",
      "Moving From",
      "Moving To",
      "Move Type",
      "Messages",
      "Has Lead",
      "Lead Status",
      "Rating",
      "Tags",
      "Admin Notes",
      "Page URL",
    ];

    const csvRows = rows.map((r) => [
      new Date(r.created_at).toLocaleString("en-AU", { timeZone: "Australia/Brisbane" }),
      r.lead_name || "",
      r.lead_phone || "",
      r.lead_email || "",
      r.lead_moving_from || "",
      r.lead_moving_to || "",
      r.lead_move_type || "",
      r.message_count || 0,
      r.has_lead ? "Yes" : "No",
      r.lead_status || "new",
      r.rating === 1 ? "Thumbs Up" : r.rating === -1 ? "Thumbs Down" : "",
      (r.tags || []).join("; "),
      (r.admin_notes || "").replace(/[\r\n]+/g, " "),
      r.page_url || "",
    ]);

    const csv = [
      headers.join(","),
      ...csvRows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
      ),
    ].join("\n");

    const filename = `zoey-${type}-${new Date().toISOString().slice(0, 10)}.csv`;

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    console.error("Failed to export:", err);
    return NextResponse.json(
      { error: "Failed to export" },
      { status: 500 },
    );
  }
}
