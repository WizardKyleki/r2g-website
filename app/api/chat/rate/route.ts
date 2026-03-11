import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** POST — Submit a chat rating (1 = thumbs up, -1 = thumbs down) */
export async function POST(req: NextRequest) {
  try {
    const { conversationId, rating, feedback } = await req.json();

    if (!conversationId || (rating !== 1 && rating !== -1)) {
      return NextResponse.json(
        { error: "Invalid rating" },
        { status: 400 },
      );
    }

    const update: Record<string, unknown> = { rating };
    if (typeof feedback === "string" && feedback.trim()) {
      update.rating_feedback = feedback.trim();
    }

    const { error } = await supabase
      .from("conversations")
      .update(update)
      .eq("id", conversationId);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to save rating:", err);
    return NextResponse.json(
      { error: "Failed to save rating" },
      { status: 500 },
    );
  }
}
