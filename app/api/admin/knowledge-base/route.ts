import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — List all knowledge base entries */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("zoey_knowledge_base")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;

    return NextResponse.json({ entries: data || [] });
  } catch (err) {
    console.error("Failed to fetch knowledge base:", err);
    return NextResponse.json(
      { error: "Failed to fetch knowledge base" },
      { status: 500 },
    );
  }
}

/** POST — Create a new FAQ entry */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question, answer, category } = body as {
      question: string;
      answer: string;
      category?: string;
    };

    if (!question?.trim() || !answer?.trim()) {
      return NextResponse.json(
        { error: "Question and answer are required" },
        { status: 400 },
      );
    }

    // Get next sort order
    const { data: maxRow } = await supabase
      .from("zoey_knowledge_base")
      .select("sort_order")
      .order("sort_order", { ascending: false })
      .limit(1)
      .single();

    const nextOrder = (maxRow?.sort_order ?? -1) + 1;

    const { data: inserted, error } = await supabase
      .from("zoey_knowledge_base")
      .insert({
        question: question.trim(),
        answer: answer.trim(),
        category: (category || "general").trim(),
        sort_order: nextOrder,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, entry: inserted });
  } catch (err) {
    console.error("Failed to create FAQ entry:", err);
    return NextResponse.json(
      { error: "Failed to create entry" },
      { status: 500 },
    );
  }
}

/** PUT — Update an existing FAQ entry */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, question, answer, category, enabled } = body as {
      id: string;
      question?: string;
      answer?: string;
      category?: string;
      enabled?: boolean;
    };

    if (!id) {
      return NextResponse.json(
        { error: "Missing entry id" },
        { status: 400 },
      );
    }

    const update: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };
    if (typeof question === "string") update.question = question.trim();
    if (typeof answer === "string") update.answer = answer.trim();
    if (typeof category === "string") update.category = category.trim();
    if (typeof enabled === "boolean") update.enabled = enabled;

    const { error } = await supabase
      .from("zoey_knowledge_base")
      .update(update)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update FAQ entry:", err);
    return NextResponse.json(
      { error: "Failed to update entry" },
      { status: 500 },
    );
  }
}

/** DELETE — Delete a FAQ entry */
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing entry id" },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("zoey_knowledge_base")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete FAQ entry:", err);
    return NextResponse.json(
      { error: "Failed to delete entry" },
      { status: 500 },
    );
  }
}
