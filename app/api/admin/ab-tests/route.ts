import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — List all A/B tests */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("zoey_ab_tests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ tests: data || [] });
  } catch (err) {
    console.error("Failed to fetch A/B tests:", err);
    return NextResponse.json(
      { error: "Failed to fetch A/B tests" },
      { status: 500 },
    );
  }
}

/** POST — Create a new A/B test */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, section_key, variant_a, variant_b, traffic_split } = body as {
      name: string;
      section_key: string;
      variant_a: string;
      variant_b: string;
      traffic_split?: number;
    };

    if (!name?.trim() || !section_key?.trim() || !variant_a?.trim() || !variant_b?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const { data: inserted, error } = await supabase
      .from("zoey_ab_tests")
      .insert({
        name: name.trim(),
        section_key: section_key.trim(),
        variant_a: variant_a.trim(),
        variant_b: variant_b.trim(),
        traffic_split: traffic_split || 50,
        status: "draft",
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, test: inserted });
  } catch (err) {
    console.error("Failed to create A/B test:", err);
    return NextResponse.json(
      { error: "Failed to create test" },
      { status: 500 },
    );
  }
}

/** PUT — Update an A/B test (start, stop, edit) */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, name, variant_a, variant_b, traffic_split } = body as {
      id: string;
      status?: string;
      name?: string;
      variant_a?: string;
      variant_b?: string;
      traffic_split?: number;
    };

    if (!id) {
      return NextResponse.json({ error: "Missing test id" }, { status: 400 });
    }

    const update: Record<string, unknown> = {};

    if (status === "running") {
      // Check no other test is running for same section
      const { data: running } = await supabase
        .from("zoey_ab_tests")
        .select("id")
        .eq("status", "running")
        .neq("id", id)
        .limit(1);

      if (running && running.length > 0) {
        return NextResponse.json(
          { error: "Another A/B test is already running. Stop it first." },
          { status: 409 },
        );
      }

      update.status = "running";
      update.started_at = new Date().toISOString();
    } else if (status === "completed") {
      update.status = "completed";
      update.completed_at = new Date().toISOString();
    } else if (status === "draft") {
      update.status = "draft";
      update.started_at = null;
      update.completed_at = null;
      update.variant_a_conversations = 0;
      update.variant_a_leads = 0;
      update.variant_b_conversations = 0;
      update.variant_b_leads = 0;
    }

    if (typeof name === "string") update.name = name.trim();
    if (typeof variant_a === "string") update.variant_a = variant_a.trim();
    if (typeof variant_b === "string") update.variant_b = variant_b.trim();
    if (typeof traffic_split === "number") update.traffic_split = traffic_split;

    const { error } = await supabase
      .from("zoey_ab_tests")
      .update(update)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update A/B test:", err);
    return NextResponse.json(
      { error: "Failed to update test" },
      { status: 500 },
    );
  }
}

/** DELETE — Delete an A/B test */
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing test id" }, { status: 400 });
    }

    const { error } = await supabase
      .from("zoey_ab_tests")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete A/B test:", err);
    return NextResponse.json(
      { error: "Failed to delete test" },
      { status: 500 },
    );
  }
}
