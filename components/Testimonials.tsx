import { RATING_VALUE, REVIEW_DISPLAY } from "@/lib/constants";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Cairns North",
    date: "January 2025",
    text: "R2G Transport & Storage made our move so stress-free! The team was professional, punctual, and handled all our furniture with such care. They even helped reassemble our beds at the new house. Would 100% recommend.",
    stars: 5,
    initial: "S",
  },
  {
    name: "James Kowalski",
    location: "Brisbane, QLD",
    date: "November 2024",
    text: "We used R2G for our interstate move to Brisbane and couldn't be happier. Everything arrived safely and on time. The communication throughout the whole process was excellent, and the pricing was very competitive.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Michelle Thompson",
    location: "Gold Coast, QLD",
    date: "October 2024",
    text: "Hired R2G to relocate our office. They worked over the weekend so we didn't lose a single day of business. The team was incredibly efficient and careful with all our IT equipment. Truly professional service.",
    stars: 5,
    initial: "M",
  },
  {
    name: "David Reardon",
    location: "Sunshine Coast, QLD",
    date: "September 2024",
    text: "The packing service was worth every cent. They packed our whole 4-bedroom house in half a day and absolutely nothing was damaged. The guys were friendly, fast, and really knew what they were doing. Brilliant!",
    stars: 5,
    initial: "D",
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

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Customer Reviews</span>
            <div className="w-10 h-1 bg-[#F5C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
            What Our Customers Say
          </h2>
          <div className="flex justify-center mb-4">
            <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
              <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
            Thousands of happy customers across Cairns, Brisbane, Gold Coast and Sunshine Coast trust R2G Transport &amp; Storage.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <StarRating count={5} />
            <span className="font-semibold text-[#1A1A1A]">{RATING_VALUE}</span>
            <span>from {REVIEW_DISPLAY} Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all flex flex-col"
            >
              <span aria-hidden="true" className="absolute top-2 right-3 text-[#F5C400] text-7xl font-black leading-none opacity-[0.12] select-none pointer-events-none">&ldquo;</span>
              <div className="flex items-center justify-between mb-4">
                <StarRating count={t.stars} />
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location} · {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
