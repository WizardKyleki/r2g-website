import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** POST — Admin sends a message to a customer */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { content } = (await req.json()) as { content: string };

    if (!content?.trim()) {
      return NextResponse.json(
        { error: "Message content required" },
        { status: 400 },
      );
    }

    // Insert admin message as "assistant" role with is_admin flag
    const { data: message, error: msgError } = await supabase
      .from("messages")
      .insert({
        conversation_id: id,
        role: "assistant",
        content: content.trim(),
        is_admin: true,
      })
      .select()
      .single();

    if (msgError) throw msgError;

    // Update conversation counts and timestamp
    const { data: conv } = await supabase
      .from("conversations")
      .select("message_count")
      .eq("id", id)
      .single();

    if (conv) {
      await supabase
        .from("conversations")
        .update({
          message_count: conv.message_count + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);
    }

    return NextResponse.json({ message });
  } catch (err) {
    console.error("Failed to send admin message:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
