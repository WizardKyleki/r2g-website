import { NextRequest, NextResponse } from "next/server";
import { getConversation } from "@/lib/dashboard-db";
import { supabase } from "@/lib/supabase";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const conversation = await getConversation(id);

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    return NextResponse.json(conversation);
  } catch (err) {
    console.error("Failed to fetch conversation:", err);
    return NextResponse.json({ error: "Failed to fetch conversation" }, { status: 500 });
  }
}

/** PATCH — Update conversation notes, tags, or lead status */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { admin_notes, tags, lead_status, display_name } = body as {
      admin_notes?: string;
      tags?: string[];
      lead_status?: string;
      display_name?: string;
    };

    const update: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (typeof admin_notes === "string") update.admin_notes = admin_notes;
    if (Array.isArray(tags)) update.tags = tags;
    if (typeof lead_status === "string") update.lead_status = lead_status;
    if (typeof display_name === "string") update.display_name = display_name;

    const { error } = await supabase
      .from("conversations")
      .update(update)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update conversation:", err);
    return NextResponse.json(
      { error: "Failed to update conversation" },
      { status: 500 },
    );
  }
}
