import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { PROMPT_SECTIONS } from "@/lib/chat-config";
import type { ZoeyConfig } from "@/lib/chat-config";

/** GET — return the current training config (DB overrides merged with defaults) + custom sections */
export async function GET() {
  try {
    // Fetch built-in config overrides
    const { data, error } = await supabase
      .from("zoey_config")
      .select("*")
      .eq("id", "default")
      .single();

    const dbConfig = !error && data ? (data as ZoeyConfig) : null;

    const sections = PROMPT_SECTIONS.map((section) => {
      const dbValue = dbConfig?.[section.key as keyof ZoeyConfig];
      const hasOverride = typeof dbValue === "string" && dbValue.length > 0;
      return {
        key: section.key,
        label: section.label,
        description: section.description,
        value: hasOverride ? (dbValue as string) : section.default,
        isDefault: !hasOverride,
        isCustom: false,
      };
    });

    // Fetch user-created custom sections
    const { data: customRows } = await supabase
      .from("zoey_custom_sections")
      .select("*")
      .order("sort_order", { ascending: true });

    const customSections = (customRows || []).map((row) => ({
      key: row.section_key,
      label: row.label,
      description: row.description,
      value: row.value,
      isDefault: false,
      isCustom: true,
      id: row.id,
    }));

    return NextResponse.json({
      sections,
      customSections,
      updatedAt: dbConfig?.updated_at || null,
    });
  } catch (err) {
    console.error("Failed to fetch training config:", err);
    return NextResponse.json(
      { error: "Failed to fetch training config" },
      { status: 500 },
    );
  }
}

/** PUT — update one or more built-in sections */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { sections } = body as {
      sections: { key: string; value: string | null }[];
    };

    if (!sections || !Array.isArray(sections)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    // Validate section keys
    const validKeys = PROMPT_SECTIONS.map((s) => s.key);
    for (const s of sections) {
      if (!validKeys.includes(s.key)) {
        return NextResponse.json(
          { error: `Invalid section key: ${s.key}` },
          { status: 400 },
        );
      }
    }

    // Build update object — null means "reset to default"
    const update: Record<string, string | null> = {
      updated_at: new Date().toISOString(),
    };
    for (const s of sections) {
      update[s.key] = s.value;
    }

    const { error } = await supabase
      .from("zoey_config")
      .upsert({ id: "default", ...update });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update training config:", err);
    return NextResponse.json(
      { error: "Failed to update training config" },
      { status: 500 },
    );
  }
}

/** POST — create a new custom section */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { label, description, value } = body as {
      label: string;
      description?: string;
      value?: string;
    };

    if (!label || !label.trim()) {
      return NextResponse.json(
        { error: "Label is required" },
        { status: 400 },
      );
    }

    // Generate a section_key from the label
    const sectionKey = label
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");

    // Check it doesn't clash with built-in keys
    const builtInKeys = PROMPT_SECTIONS.map((s) => s.key);
    if (builtInKeys.includes(sectionKey)) {
      return NextResponse.json(
        { error: "This name conflicts with a built-in section" },
        { status: 400 },
      );
    }

    // Get the next sort_order
    const { data: maxRow } = await supabase
      .from("zoey_custom_sections")
      .select("sort_order")
      .order("sort_order", { ascending: false })
      .limit(1)
      .single();

    const nextOrder = (maxRow?.sort_order ?? -1) + 1;

    const { data: inserted, error } = await supabase
      .from("zoey_custom_sections")
      .insert({
        section_key: sectionKey,
        label: label.trim(),
        description: (description || "").trim(),
        value: (value || "").trim(),
        sort_order: nextOrder,
      })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "A custom section with this name already exists" },
          { status: 409 },
        );
      }
      throw error;
    }

    return NextResponse.json({
      success: true,
      section: {
        key: inserted.section_key,
        label: inserted.label,
        description: inserted.description,
        value: inserted.value,
        isDefault: false,
        isCustom: true,
        id: inserted.id,
      },
    });
  } catch (err) {
    console.error("Failed to create custom section:", err);
    return NextResponse.json(
      { error: "Failed to create custom section" },
      { status: 500 },
    );
  }
}

/** DELETE — delete a custom section by id */
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing section id" },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("zoey_custom_sections")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete custom section:", err);
    return NextResponse.json(
      { error: "Failed to delete custom section" },
      { status: 500 },
    );
  }
}
