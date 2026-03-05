"use client";

import { useEffect, useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  profilePhoto: string;
}

interface ReviewsData {
  reviews: Review[];
  overallRating: number;
  totalReviews: number;
}

const fallbackReviews: Review[] = [
  {
    author: "Sarah Mitchell",
    rating: 5,
    text: "R2G Transport & Storage made our move so stress-free! The team was professional, punctual, and handled all our furniture with such care. They even helped reassemble our beds at the new house. Would 100% recommend.",
    profilePhoto: "",
  },
  {
    author: "James Kowalski",
    rating: 5,
    text: "We used R2G for our interstate move to Brisbane and couldn't be happier. Everything arrived safely and on time. The communication throughout the whole process was excellent, and the pricing was very competitive.",
    profilePhoto: "",
  },
  {
    author: "Michelle Thompson",
    rating: 5,
    text: "Hired R2G to relocate our office. They worked over the weekend so we didn't lose a single day of business. The team was incredibly efficient and careful with all our IT equipment. Truly professional service.",
    profilePhoto: "",
  },
  {
    author: "David Reardon",
    rating: 5,
    text: "The packing service was worth every cent. They packed our whole 4-bedroom house in half a day and absolutely nothing was damaged. The guys were friendly, fast, and really knew what they were doing. Brilliant!",
    profilePhoto: "",
  },
  {
    author: "Karen Lewis",
    rating: 5,
    text: "R2G moved us from Cairns to Brisbane with zero stress. The team packed everything so carefully and delivered it all in perfect condition. Communication was great the whole way. Highly recommend for interstate moves.",
    profilePhoto: "",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data: ReviewsData) => {
        if (data.reviews && data.reviews.length >= 3) {
          setReviews(data.reviews.slice(0, 5));
        }
      })
      .catch(() => {
        /* keep fallback */
      });
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes reviewMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-marquee {
          animation: reviewMarquee 40s linear infinite;
        }
        .review-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
              Customer Reviews
            </span>
            <div className="w-10 h-1 bg-[#F5C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
            What Our Customers Say
          </h2>
          <div className="flex justify-center mb-6">
            <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
              <path
                d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4"
                stroke="#F5C400"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5">
            <GoogleIcon />
            <StarRating count={5} />
            <span className="text-[#1A1A1A] font-bold">4.9</span>
            <span className="text-gray-500 text-sm">900+ reviews</span>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative">
        <div className="flex w-max review-marquee">
          {/* Two identical tracks — each has pr-6 so the gap between
              the last card of track 1 and first card of track 2 matches
              the inter-card gap. translateX(-50%) shifts exactly one track. */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex items-stretch gap-6 pr-6">
              {reviews.map((review, i) => (
                <div
                  key={`${review.author}-${setIndex}-${i}`}
                  className="relative flex-shrink-0 w-[320px] sm:w-[380px] overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all flex flex-col"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-3 text-[#F5C400] text-7xl font-black leading-none opacity-[0.12] select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <StarRating count={review.rating} />
                    <GoogleIcon />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    {review.profilePhoto ? (
                      <img
                        src={review.profilePhoto}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-bold text-sm shrink-0">
                        {review.author[0]}
                      </div>
                    )}
                    <p className="font-semibold text-[#1A1A1A] text-sm">{review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
