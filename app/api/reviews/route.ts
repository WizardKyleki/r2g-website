import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJIRu_vbxbkWsRknzeukHRYqM';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET() {
  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&key=${API_KEY}`;
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error(`Google API error: ${response.status}`);
    const data = await response.json();
    const reviews = (data.reviews || [])
      .filter((r: any) => r.rating === 5)
      .map((r: any) => ({
        author: r.authorAttribution?.displayName || 'Google User',
        rating: r.rating,
        text: r.text?.text || '',
        time: r.relativePublishTimeDescription || '',
        profilePhoto: r.authorAttribution?.photoUri || '',
      }));
    return NextResponse.json({ reviews, overallRating: data.rating, totalReviews: data.userRatingCount });
  } catch (error) {
    console.error('Google Reviews API error:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
