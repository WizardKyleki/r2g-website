import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** POST — Toggle admin takeover on/off */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { active } = (await req.json()) as { active: boolean };

    const update: Record<string, unknown> = {
      admin_takeover: !!active,
      admin_takeover_at: active ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("conversations")
      .update(update)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true, admin_takeover: !!active });
  } catch (err) {
    console.error("Failed to toggle takeover:", err);
    return NextResponse.json(
      { error: "Failed to toggle takeover" },
      { status: 500 },
    );
  }
}
