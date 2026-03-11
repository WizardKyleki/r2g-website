import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * Public API — returns AI identity (name, gender, greeting) for the chat widget.
 * Cached for 60 seconds to avoid DB hits on every page load.
 */
export async function GET() {
  try {
    const { data } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "ai_identity")
      .single();

    if (data?.value) {
      const val = data.value as Record<string, unknown>;
      return NextResponse.json(
        {
          name: (val.name as string) || "Zoey",
          gender: (val.gender as string) || "female",
          greeting:
            (val.greeting as string) ||
            "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊",
        },
        {
          headers: {
            "Cache-Control":
              "public, s-maxage=60, stale-while-revalidate=120",
          },
        },
      );
    }

    // Return defaults — ChatWidget will use these
    return NextResponse.json(
      {
        name: "Zoey",
        gender: "female",
        greeting:
          "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊",
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=60, stale-while-revalidate=120",
        },
      },
    );
  } catch {
    return NextResponse.json({
      name: "Zoey",
      gender: "female",
      greeting:
        "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊",
    });
  }
}
