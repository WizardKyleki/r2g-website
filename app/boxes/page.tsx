import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Moving Boxes & Packing Supplies | R2G Transport & Storage",
  description:
    "Quality moving boxes and packing supplies in Cairns and Brisbane. R2G Transport & Storage stocks everything you need to pack safely. Order online or pick up in store.",
  keywords: ["moving boxes cairns", "packing boxes brisbane", "moving supplies australia", "cardboard boxes moving"],
  openGraph: {
    title: "Moving Boxes & Packing Supplies | R2G Transport & Storage",
    description: "Quality moving boxes and packing supplies in Cairns and Brisbane. Get a bundle deal today.",
    url: "https://r2g.com.au/boxes",
  },
};

const boxTypes = [
  {
    name: "Small Box",
    size: "35 x 25 x 30cm",
    ideal: "Books, files, heavy items",
    description: "Our small boxes are double-walled and perfect for heavy items like books, wine, and kitchen crockery.",
  },
  {
    name: "Medium Box",
    size: "45 x 35 x 40cm",
    ideal: "Kitchen, bathroom, general items",
    description: "The workhorse of any move. Great for kitchen essentials, bathroom goods, and general household items.",
  },
  {
    name: "Large Box",
    size: "60 x 40 x 45cm",
    ideal: "Linen, pillows, light items",
    description: "Perfect for bulky but light items like linen, pillows, cushions, and clothing.",
  },
  {
    name: "Wardrobe Box",
    size: "60 x 55 x 120cm",
    ideal: "Hanging clothes",
    description: "Includes a hanging rail so your clothes go straight from wardrobe to box — arriving crease-free.",
  },
  {
    name: "Picture / Mirror Box",
    size: "Custom sizes",
    ideal: "Artwork, mirrors, frames",
    description: "Telescoping boxes that adjust to fit artwork, mirrors, and framed pictures of all sizes.",
  },
  {
    name: "Bundle Pack",
    size: "Assorted",
    ideal: "Full home moves",
    description: "Our most popular option. Get a curated mix of box sizes to suit a 2, 3, or 4-bedroom home.",
  },
];

const supplies = [
  "Bubble wrap (rolls & sheets)",
  "Packing paper (acid-free)",
  "Packing tape & tape gun",
  "Permanent markers & labels",
  "Furniture blankets / pads",
  "Stretch wrap / plastic wrap",
  "Mattress bags",
  "Fragile stickers",
];

export default function BoxesPage() {
  return (
    <>
      <PageHero
        title="Moving Boxes & Packing Supplies"
        subtitle="Everything you need to pack your home safely — quality boxes and supplies available in Cairns and Brisbane."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Boxes" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Quality Supplies</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                The Right Box for Every Job
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-moving-boxes-packing-supplies-cairns.webp"
                  alt="R2G moving boxes and packing supplies available in Cairns and Brisbane - R2G Transport & Storage"
                  title="R2G moving boxes and packing supplies available in Cairns and Brisbane"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
                <p>
                  Using the right packing supplies makes all the difference between a smooth move and a stressful one. R2G Transport &amp; Storage stocks a full range of quality moving boxes and packing materials — available from our Cairns and Brisbane depots.
                </p>
                <p>
                  Need everything delivered to your door? We can arrange delivery of a box bundle to your home before your move date. Or, combine with our packing service and let us bring the supplies and do the packing for you.
                </p>
              </div>

              {/* Box types */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Box Types Available</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {boxTypes.map((box) => (
                  <div key={box.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#F5C400]/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-[#1A1A1A]">{box.name}</h4>
                      <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">{box.size}</span>
                    </div>
                    <p className="text-xs text-[#F5C400] font-semibold mb-2">Best for: {box.ideal}</p>
                    <p className="text-gray-500 text-sm">{box.description}</p>
                  </div>
                ))}
              </div>

              {/* Other supplies */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Other Packing Supplies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supplies.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Order Boxes &amp; Supplies</h3>
                <p className="text-gray-400 text-sm mb-6">Call us or enquire online to order boxes for delivery or pick-up.</p>
                <Link href="/quote" className="block w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors text-center mb-3">
                  Enquire Online
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full border border-white/20 text-white hover:border-[#F5C400] hover:text-[#F5C400] font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  Call {PHONE}
                </a>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-3">Want someone else to do the packing?</p>
                  <Link href="/packing-services-cairns" className="block w-full border border-[#F5C400]/40 text-[#F5C400] hover:bg-[#F5C400] hover:text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg transition-colors text-center text-sm">
                    View Packing Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need Boxes or a Full Packing Service?"
        subtext="We've got everything you need. Order supplies or let our professional packers handle it all."
      />
    </>
  );
}
