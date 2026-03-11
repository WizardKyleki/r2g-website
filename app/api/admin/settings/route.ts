import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — Fetch all settings or a specific key */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");

    if (key) {
      const { data, error } = await supabase
        .from("zoey_settings")
        .select("*")
        .eq("key", key)
        .single();

      if (error) throw error;
      return NextResponse.json(data);
    }

    const { data, error } = await supabase
      .from("zoey_settings")
      .select("*")
      .order("key");

    if (error) throw error;
    return NextResponse.json({ settings: data || [] });
  } catch (err) {
    console.error("Failed to fetch settings:", err);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

/** PUT — Update a setting */
export async function PUT(req: NextRequest) {
  try {
    const { key, value } = await req.json() as { key: string; value: Record<string, unknown> };

    if (!key) {
      return NextResponse.json({ error: "Missing key" }, { status: 400 });
    }

    const { error } = await supabase
      .from("zoey_settings")
      .upsert({
        key,
        value,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update setting:", err);
    return NextResponse.json({ error: "Failed to update setting" }, { status: 500 });
  }
}
