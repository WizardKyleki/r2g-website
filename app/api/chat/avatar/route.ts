import { supabase } from "@/lib/supabase";

const DEFAULT_AVATAR_URL = "/images/zoey-avatar.jpg";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.r2g.com.au";

/**
 * Public API — serves the AI chatbot's avatar image.
 * Returns the custom avatar (binary) or redirects to the default static file.
 * Cached for 5 minutes on CDN.
 */
export async function GET() {
  try {
    const { data } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "ai_identity")
      .single();

    const val = data?.value as Record<string, unknown> | undefined;
    const avatarBase64 = val?.avatarBase64 as string | undefined;

    if (avatarBase64 && avatarBase64.startsWith("data:image/")) {
      // Parse "data:image/jpeg;base64,/9j/4AAQ..."
      const commaIndex = avatarBase64.indexOf(",");
      const meta = avatarBase64.slice(0, commaIndex); // "data:image/jpeg;base64"
      const contentType = meta.split(":")[1].split(";")[0]; // "image/jpeg"
      const raw = avatarBase64.slice(commaIndex + 1);
      const buffer = Buffer.from(raw, "base64");

      return new Response(buffer, {
        headers: {
          "Content-Type": contentType,
          "Content-Length": buffer.byteLength.toString(),
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      });
    }

    // No custom avatar — redirect to default static file
    return Response.redirect(new URL(DEFAULT_AVATAR_URL, SITE_URL), 302);
  } catch {
    // Fallback redirect on any error
    return Response.redirect(new URL(DEFAULT_AVATAR_URL, SITE_URL), 302);
  }
}
