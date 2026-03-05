import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const input = req.nextUrl.searchParams.get("input");
  if (!input || input.length < 2) {
    return NextResponse.json({ predictions: [] });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json");
  url.searchParams.set("input", input);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("components", "country:au");
  url.searchParams.set("types", "geocode");
  url.searchParams.set("language", "en-AU");

  const res = await fetch(url.toString());
  const data = await res.json();

  return NextResponse.json({
    predictions: data.predictions?.map((p: any) => ({
      description: p.description,
      place_id: p.place_id,
    })) ?? [],
  });
}
