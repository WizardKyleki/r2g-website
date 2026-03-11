import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — messages for a conversation + conversation metadata */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const full = searchParams.get("full") === "true";

    if (full) {
      // Return full conversation with all messages
      const { data: conversation, error: convError } = await supabase
        .from("conversations")
        .select("*")
        .eq("id", id)
        .single();

      if (convError || !conversation) {
        return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
      }

      const { data: messages, error: msgError } = await supabase
        .from("messages")
        .select("role, content, tool_name, tool_input, created_at")
        .eq("conversation_id", id)
        .order("created_at", { ascending: true });

      if (msgError) throw msgError;

      return NextResponse.json({ conversation, messages: messages || [] });
    }

    // Default: quick preview (last N messages)
    const { data, error } = await supabase
      .from("messages")
      .select("role, content, created_at")
      .eq("conversation_id", id)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) throw error;

    // Return in chronological order
    return NextResponse.json({ messages: (data || []).reverse() });
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 },
    );
  }
}
