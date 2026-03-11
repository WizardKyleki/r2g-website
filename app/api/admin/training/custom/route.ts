import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** PUT — update a custom section's value, label, or description */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, value, label, description } = body as {
      id: string;
      value?: string;
      label?: string;
      description?: string;
    };

    if (!id) {
      return NextResponse.json(
        { error: "Missing section id" },
        { status: 400 },
      );
    }

    const update: Record<string, string> = {
      updated_at: new Date().toISOString(),
    };
    if (typeof value === "string") update.value = value;
    if (typeof label === "string") update.label = label.trim();
    if (typeof description === "string") update.description = description.trim();

    const { error } = await supabase
      .from("zoey_custom_sections")
      .update(update)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update custom section:", err);
    return NextResponse.json(
      { error: "Failed to update custom section" },
      { status: 500 },
    );
  }
}
