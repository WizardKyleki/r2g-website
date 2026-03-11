import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — Lightweight polling endpoint for ChatWidget during admin takeover.
 *  Returns new messages after a given timestamp + takeover status.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get("id");
    const after = searchParams.get("after"); // ISO timestamp

    if (!conversationId) {
      return NextResponse.json(
        { error: "Missing conversation id" },
        { status: 400 },
      );
    }

    // Check takeover status
    const { data: conv } = await supabase
      .from("conversations")
      .select("admin_takeover")
      .eq("id", conversationId)
      .single();

    const takeover = conv?.admin_takeover ?? false;

    // Fetch new messages
    let query = supabase
      .from("messages")
      .select("id, conversation_id, role, content, tool_name, tool_input, created_at, is_admin")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true })
      .limit(20);

    if (after) {
      query = query.gt("created_at", after);
    }

    const { data: messages, error } = await query;
    if (error) throw error;

    return NextResponse.json({
      messages: messages || [],
      takeover,
    });
  } catch (err) {
    console.error("Chat poll error:", err);
    return NextResponse.json(
      { error: "Failed to poll messages" },
      { status: 500 },
    );
  }
}
