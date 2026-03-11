import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE = 2 * 1024 * 1024; // 2 MB

/** POST — Upload avatar image (stored as base64 in ai_identity setting) */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 },
      );
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Use JPG, PNG, WebP, or GIF." },
        { status: 400 },
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum 2 MB." },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Read existing ai_identity to preserve other fields
    const { data: existing } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "ai_identity")
      .single();

    const currentValue =
      (existing?.value as Record<string, unknown>) || {};
    const updated = { ...currentValue, avatarBase64: base64 };

    const { error } = await supabase.from("zoey_settings").upsert({
      key: "ai_identity",
      value: updated,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Failed to save avatar:", error);
      return NextResponse.json(
        { error: "Failed to save avatar" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Avatar upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload avatar" },
      { status: 500 },
    );
  }
}

/** DELETE — Remove custom avatar */
export async function DELETE() {
  try {
    const { data: existing } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "ai_identity")
      .single();

    const currentValue =
      (existing?.value as Record<string, unknown>) || {};
    delete currentValue.avatarBase64;

    const { error } = await supabase.from("zoey_settings").upsert({
      key: "ai_identity",
      value: currentValue,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Failed to remove avatar:", error);
      return NextResponse.json(
        { error: "Failed to remove avatar" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Avatar delete error:", err);
    return NextResponse.json(
      { error: "Failed to remove avatar" },
      { status: 500 },
    );
  }
}
