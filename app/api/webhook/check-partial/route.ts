import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Called by n8n 10 minutes after a partial lead is captured.
 * Checks if the person has since submitted a full quote.
 * If a full quote exists for the same phone number, the partial
 * was NOT truly abandoned and n8n skips the abandoned email.
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const phone = url.searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ stillPartial: false, error: "No phone provided" });
    }

    const supabase = getSupabase();
    if (!supabase) {
      // If DB is down, don't send abandoned email (safe default)
      return NextResponse.json({ stillPartial: false });
    }

    // Check if a full quote exists for this phone in the last 30 minutes
    const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString();

    const { data: fullQuotes } = await supabase
      .from("leads")
      .select("id")
      .eq("phone", phone)
      .eq("type", "quote")
      .gte("created_at", thirtyMinAgo)
      .limit(1);

    // If a full quote was found, the person completed the form
    const stillPartial = !fullQuotes || fullQuotes.length === 0;

    return NextResponse.json({ stillPartial });
  } catch (err) {
    console.error("Check partial error:", err);
    return NextResponse.json({ stillPartial: false });
  }
}
