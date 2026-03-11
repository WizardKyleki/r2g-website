import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — Load conversation history for returning visitors */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get("id");

    if (!conversationId) {
      return NextResponse.json(
        { error: "Missing conversation id" },
        { status: 400 },
      );
    }

    // Check conversation exists and isn't too old (7 days max)
    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString();

    const { data: conversation } = await supabase
      .from("conversations")
      .select("id, created_at")
      .eq("id", conversationId)
      .gte("created_at", sevenDaysAgo)
      .single();

    if (!conversation) {
      return NextResponse.json({ messages: [], expired: true });
    }

    // Load last 30 messages
    const { data: messages, error } = await supabase
      .from("messages")
      .select("role, content, tool_name, tool_input, created_at")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true })
      .limit(30);

    if (error) throw error;

    return NextResponse.json({
      messages: messages || [],
      expired: false,
    });
  } catch (err) {
    console.error("Failed to load chat history:", err);
    return NextResponse.json(
      { error: "Failed to load history" },
      { status: 500 },
    );
  }
}
