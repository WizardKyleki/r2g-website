import { NextRequest, NextResponse } from "next/server";
import { getDashboardStats, getAnalyticsTrends } from "@/lib/dashboard-db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const days = parseInt(searchParams.get("days") || "90", 10);
    const view = searchParams.get("view") || "trends";

    if (view === "overview") {
      const stats = await getDashboardStats(days);
      return NextResponse.json(stats);
    }

    const trends = await getAnalyticsTrends(days);
    return NextResponse.json(trends);
  } catch (err) {
    console.error("Failed to fetch analytics:", err);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 },
    );
  }
}
