import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/** GET — Fetch notifications with unread count */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Math.min(parseInt(searchParams.get("limit") || "30", 10), 100);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    // Fetch notifications
    const { data: notifications, error } = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    // Get unread count
    const { count: unreadCount } = await supabase
      .from("notifications")
      .select("*", { count: "exact", head: true })
      .eq("is_read", false);

    return NextResponse.json({
      notifications: notifications || [],
      unread_count: unreadCount || 0,
    });
  } catch (err) {
    console.error("Failed to fetch notifications:", err);
    return NextResponse.json(
      { error: "Failed to fetch notifications" },
      { status: 500 },
    );
  }
}

/** PATCH — Mark notification(s) as read */
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.markAllRead) {
      // Mark all as read
      const { error } = await supabase
        .from("notifications")
        .update({ is_read: true })
        .eq("is_read", false);

      if (error) throw error;
    } else if (body.id) {
      // Mark single as read
      const { error } = await supabase
        .from("notifications")
        .update({ is_read: true })
        .eq("id", body.id);

      if (error) throw error;
    } else {
      return NextResponse.json(
        { error: "Provide 'id' or 'markAllRead: true'" },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update notifications:", err);
    return NextResponse.json(
      { error: "Failed to update notifications" },
      { status: 500 },
    );
  }
}
