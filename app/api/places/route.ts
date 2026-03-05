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

  const res = await fetch(
    "https://places.googleapis.com/v1/places:autocomplete",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
      },
      body: JSON.stringify({
        input,
        includedRegionCodes: ["au"],
        languageCode: "en-AU",
      }),
    }
  );

  const data = await res.json();

  const predictions = (data.suggestions ?? [])
    .map((s: any) => ({
      description: s.placePrediction?.text?.text ?? "",
      place_id: s.placePrediction?.placeId ?? "",
    }))
    .filter((p: any) => p.description);

  return NextResponse.json({ predictions });
}
