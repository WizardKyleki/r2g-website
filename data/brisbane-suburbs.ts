import type { Suburb } from "./suburbs";
import { batch1Suburbs } from "./brisbane-suburbs-batch1";
import { batch2Suburbs } from "./brisbane-suburbs-batch2";
import { batch3Suburbs } from "./brisbane-suburbs-batch3";
import { batch4Suburbs } from "./brisbane-suburbs-batch4";
import { batch5Suburbs } from "./brisbane-suburbs-batch5";
import { ipswichSuburbs } from "./brisbane-suburbs-ipswich";
import { ipswich2Suburbs } from "./brisbane-suburbs-ipswich2";
import { loganSuburbs } from "./brisbane-suburbs-logan";
import { moreton1Suburbs } from "./brisbane-suburbs-moreton1";
import { moreton2Suburbs } from "./brisbane-suburbs-moreton2";
import { batch6Suburbs } from "./brisbane-suburbs-batch6";
import { batch7Suburbs } from "./brisbane-suburbs-batch7";
import { logan2Suburbs } from "./brisbane-suburbs-logan2";
import { moreton3Suburbs } from "./brisbane-suburbs-moreton3";
import { redlandSuburbs } from "./brisbane-suburbs-redland";

export interface BrisbaneSuburb extends Suburb {
  reviews: { text: string; name: string; location: string; date: string }[];
  tips: { heading: string; text: string }[];
  uniquePara3: string;
}

const coreSuburbs: BrisbaneSuburb[] = [
  {
    slug: "sunnybank",
    name: "Sunnybank",
    region: "Brisbane South",
    state: "QLD",
    distanceFromCBD: "13km south of Brisbane CBD",
    postcode: "4109",
    latitude: -27.5849,
    longitude: 153.0530,
    uniquePara1:
      "Sunnybank is one of Brisbane's most vibrant and culturally diverse suburbs, known for its incredible Asian dining scene, bustling market precinct and strong community feel. We regularly help families, students and professionals relocate to and from the Sunnybank area.",
    uniquePara2:
      "The mix of modern townhouses, established family homes and apartment complexes in Sunnybank means our team comes prepared for everything from tight unit access to large multi-level household moves.",
    uniquePara3:
      "Many Sunnybank properties share driveways or have compact garages typical of the area's medium-density developments. Our drivers are skilled at positioning trucks in tight spaces, and our team uses furniture trolleys and protective runners to navigate narrow paths between neighbouring properties without causing damage.",
    nearbySubs: ["Mt Gravatt", "Carindale", "Annerley"],
    priceFrom: "$160/hr",
    serviceArea: "Sunnybank & Brisbane South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Sunnybank | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Sunnybank with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved our 3-bedroom home from Sunnybank to Carindale. The R2G team navigated the shared driveway perfectly and had everything loaded in under two hours. Really impressed with the care they took wrapping our dining table.",
        name: "Karen L.",
        location: "Sunnybank",
        date: "January 2025",
      },
      {
        text: "We needed a last-minute move from a unit in Sunnybank Hills to a house in Runcorn. R2G fit us in within three days and the price was exactly as quoted. Friendly team, no damage. Will use again.",
        name: "Tom N.",
        location: "Sunnybank Hills",
        date: "November 2024",
      },
      {
        text: "R2G helped us relocate from Sunnybank to Archerfield — only a short move but they treated it with the same professionalism as a long-distance job. Everything arrived in perfect condition.",
        name: "Jenny C.",
        location: "Sunnybank → Archerfield",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Check driveway access before moving day.",
        text: "Many Sunnybank properties have shared driveways or limited truck access. Let us know your address when booking so we can plan the best truck size and approach for your street.",
      },
      {
        heading: "Book early during Lunar New Year.",
        text: "Sunnybank sees a spike in moves around Lunar New Year as families settle before the celebrations. Book at least 3–4 weeks ahead during this period to secure your preferred date.",
      },
      {
        heading: "Prepare for summer storms.",
        text: "Brisbane's south side is prone to heavy afternoon storms in summer. Our team brings weatherproof wrapping, but it helps to have a clear path from your door to the truck so we can load quickly between showers.",
      },
      {
        heading: "Notify us about unit complex parking rules.",
        text: "Many Sunnybank unit complexes have visitor parking restrictions and narrow basement entries. Let us know your building details when booking so we can arrange the right-sized truck and avoid parking fines.",
      },
    ],
  },
  {
    slug: "carindale",
    name: "Carindale",
    region: "Brisbane East",
    state: "QLD",
    distanceFromCBD: "10km east of Brisbane CBD",
    postcode: "4152",
    latitude: -27.5001,
    longitude: 153.1077,
    uniquePara1:
      "Carindale is a well-established eastern suburb of Brisbane anchored by the Westfield Carindale shopping centre, making it a popular destination for families seeking modern living with excellent amenities. We frequently move families into and out of the Carindale area.",
    uniquePara2:
      "With a mix of spacious family homes, townhouse complexes and newer estate developments, Carindale moves often involve large household volumes. Our team is experienced with the area's varied property types and access requirements.",
    uniquePara3:
      "The hilly terrain around Carindale and neighbouring Carina Heights means many homes are split-level or built on elevated blocks with steep driveways. Our team arrives with the right equipment — including heavy-duty dollies and ramp boards — to handle multi-level access safely and efficiently.",
    nearbySubs: ["Coorparoo", "Mt Gravatt", "Wynnum"],
    priceFrom: "$160/hr",
    serviceArea: "Carindale & Brisbane East",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Carindale | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Carindale with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a split-level in Carindale to a townhouse in Camp Hill. The R2G boys handled the steep driveway like pros — not a single scratch on any furniture. Would absolutely use them again.",
        name: "Steve & Julie M.",
        location: "Carindale",
        date: "February 2025",
      },
      {
        text: "R2G relocated our family from Carina Heights to Carindale. They were punctual, efficient and took real care wrapping our antique sideboard. Pricing was competitive and transparent.",
        name: "Deepa R.",
        location: "Carina Heights → Carindale",
        date: "December 2024",
      },
      {
        text: "Excellent service for a large 4-bedroom move in Carindale. Three removalists, everything wrapped properly, beds reassembled at the new house. Done by 2pm. Very happy.",
        name: "Ben T.",
        location: "Carindale",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Warn us about steep driveways.",
        text: "Many Carindale homes sit on elevated blocks with steep or narrow driveways. Mentioning this when you book helps us bring the right truck size and equipment for safe, efficient access.",
      },
      {
        heading: "Time your move around school traffic.",
        text: "Carindale's streets get congested during school drop-off and pick-up times. If possible, aim for a mid-morning start to avoid delays around the local schools and Westfield traffic.",
      },
      {
        heading: "Use the opportunity to declutter.",
        text: "A big family home in Carindale can accumulate years of belongings. Sort through wardrobes, the garage and storage areas before moving day — less volume means a faster, cheaper move.",
      },
      {
        heading: "Protect outdoor furniture from summer storms.",
        text: "Carindale's east-side position catches Brisbane's afternoon storms. If you have outdoor furniture being moved, let us know so we can schedule loading around the weather.",
      },
    ],
  },
  {
    slug: "chermside",
    name: "Chermside",
    region: "Brisbane North",
    state: "QLD",
    distanceFromCBD: "10km north of Brisbane CBD",
    postcode: "4032",
    latitude: -27.3878,
    longitude: 153.0286,
    uniquePara1:
      "Chermside is one of Brisbane's most active northern suburbs, centred around Westfield Chermside and a growing health precinct near the Prince Charles Hospital. The suburb attracts young professionals, families and medical workers looking for convenient northern living.",
    uniquePara2:
      "The rapid development of apartments and townhouses alongside established homes in Chermside means our team handles everything from compact unit moves to large family home relocations with equal expertise.",
    uniquePara3:
      "Chermside's booming apartment market means many moves involve building management rules — loading dock bookings, lift reservations and restricted access hours. We coordinate with body corporates regularly and know how to plan around these requirements so your move runs smoothly.",
    nearbySubs: ["Aspley", "Indooroopilly", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Chermside & Brisbane North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Chermside | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Chermside with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from an apartment in Chermside to a house in Aspley. R2G handled the building's loading dock process perfectly and had everything unloaded at the new place before lunch. Super efficient.",
        name: "Matt D.",
        location: "Chermside → Aspley",
        date: "January 2025",
      },
      {
        text: "R2G moved our 2-bedroom unit in Chermside. They were careful with the apartment hallways and lift, wrapped everything properly and were done faster than I expected. Great value.",
        name: "Sophie K.",
        location: "Chermside",
        date: "November 2024",
      },
      {
        text: "Used R2G for a hospital worker relocation to Chermside. They were flexible with timing around my shifts and the whole move was seamless. Friendly crew, fair pricing.",
        name: "Liam J.",
        location: "Kedron → Chermside",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Book your building's loading dock early.",
        text: "Many Chermside apartments require advance loading dock bookings. Secure your slot as soon as you have a moving date — popular time slots on weekends fill up fast.",
      },
      {
        heading: "Avoid Westfield traffic on weekends.",
        text: "Chermside's streets around Westfield get very busy on Saturdays. If you're moving on a weekend, a 7am start helps you get loaded before the shopping traffic builds.",
      },
      {
        heading: "Let us know about lift restrictions.",
        text: "Some Chermside apartment buildings have small lifts or restrict furniture moves to certain hours. Share these details when booking so we can plan the most efficient approach.",
      },
      {
        heading: "Prepare for hospital precinct road changes.",
        text: "Ongoing development around the Prince Charles Hospital and Chermside health precinct means road layouts and detours can change frequently. We stay across local road updates so your move runs smoothly.",
      },
    ],
  },
  {
    slug: "logan",
    name: "Logan",
    region: "Logan City",
    state: "QLD",
    distanceFromCBD: "28km south of Brisbane CBD",
    postcode: "4114",
    latitude: -27.6391,
    longitude: 153.1093,
    uniquePara1:
      "Logan is one of South-East Queensland's fastest-growing regions, offering affordable housing and easy access to both Brisbane and the Gold Coast. We regularly move families and young professionals into the growing estates and established suburbs throughout Logan.",
    uniquePara2:
      "Properties in Logan range from modern estate homes to older established houses and rural acreage blocks on the outskirts. Our team is well-equipped for all property types and the varied access requirements across the Logan region.",
    uniquePara3:
      "Logan's rapid growth means many of our moves here involve brand-new homes in estates like Yarrabilba, Flagstone and Park Ridge. We're experienced with builder handover schedules, new-build access constraints and the care required when moving into homes with freshly painted walls and new flooring.",
    nearbySubs: ["Sunnybank", "Springfield", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Logan City & South Brisbane",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Logan | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Logan with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a rental in Woodridge to our first home in Yarrabilba. R2G were fantastic — careful with our new floors, fast and affordable. Exactly what we needed as first home buyers.",
        name: "Ash & Kayla B.",
        location: "Woodridge → Yarrabilba",
        date: "February 2025",
      },
      {
        text: "R2G handled our move from Logan Central to Marsden with ease. Three bedrooms, lots of heavy furniture, and they had it all done in under four hours. Really professional team.",
        name: "Daniel F.",
        location: "Logan Central",
        date: "December 2024",
      },
      {
        text: "We moved from Brisbane to a new estate in Park Ridge. R2G were punctual, well-organised and took great care of our belongings. The quote was accurate to the dollar. Highly recommend.",
        name: "Priya S.",
        location: "Brisbane → Park Ridge",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Confirm new estate access before moving day.",
        text: "If you're moving into a new Logan estate like Yarrabilba or Flagstone, check that roads are sealed and your driveway is accessible for a truck. Construction zones can limit access on certain days.",
      },
      {
        heading: "Protect new floors and paint.",
        text: "Moving into a brand-new home? Let us know so we bring extra floor runners and door frame protectors. We take extra care to avoid scuffs on fresh paint and new flooring.",
      },
      {
        heading: "Use the M1 advantage.",
        text: "Logan's proximity to the M1 makes moves to the Gold Coast or northern Brisbane efficient. Time your move to avoid peak-hour motorway congestion — an 8am or 9:30am start usually works best.",
      },
      {
        heading: "Declutter before the move.",
        text: "Moving to a new home is the perfect time to sort through your belongings. The less we move, the faster and more affordable your relocation will be.",
      },
    ],
  },
  {
    slug: "springfield",
    name: "Springfield",
    region: "Ipswich & Western Corridor",
    state: "QLD",
    distanceFromCBD: "30km southwest of Brisbane CBD",
    postcode: "4300",
    latitude: -27.6667,
    longitude: 152.9167,
    uniquePara1:
      "Springfield is one of Australia's fastest-growing master-planned communities, featuring modern homes, excellent schools, a university campus and a major shopping centre. We frequently help families relocate to Springfield's new estates and townhouse developments.",
    uniquePara2:
      "The predominantly new housing stock in Springfield makes for efficient moves, but the volume of new residents moving in means our team is well-practised with the area's streets, estate layouts and builder handover schedules.",
    uniquePara3:
      "Springfield Lakes, Brookwater and Augustine Heights each have their own estate rules around truck access, parking and moving hours. We've moved hundreds of families into these communities and know the specific requirements for each, saving you the hassle of figuring it out yourself.",
    nearbySubs: ["Ipswich", "Logan", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Springfield & Western Corridor",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Springfield | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Springfield with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Relocated from Ipswich to a new build in Springfield Lakes. R2G knew exactly where to park the truck and how to navigate the estate streets. Everything wrapped perfectly, zero damage. Top service.",
        name: "Michael & Tina R.",
        location: "Ipswich → Springfield Lakes",
        date: "January 2025",
      },
      {
        text: "R2G moved us into our first home in Augustine Heights. They were gentle with our brand-new floors and walls. Two guys, four hours, done. Couldn't be happier with the result.",
        name: "Jasmine H.",
        location: "Augustine Heights",
        date: "November 2024",
      },
      {
        text: "Third time using R2G. This time moving from Forest Lake to Brookwater. Always reliable, always on time, always careful. They're our go-to removalists in the western corridor.",
        name: "Greg P.",
        location: "Forest Lake → Brookwater",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Check estate truck restrictions.",
        text: "Some Springfield estates restrict truck sizes or access times. Share your estate name when booking so we can confirm any rules and bring the right-sized vehicle.",
      },
      {
        heading: "Protect brand-new finishes.",
        text: "Many Springfield homes are less than five years old with pristine flooring and paintwork. We bring floor runners and door frame protectors as standard, but letting us know it's a new home helps us take extra care.",
      },
      {
        heading: "Time your move to beat Centenary Motorway traffic.",
        text: "The Centenary Motorway into Springfield gets congested during peak hours. An early start (before 7:30am) or a mid-morning booking avoids the worst of it.",
      },
      {
        heading: "Confirm utility connections at your new build.",
        text: "Many Springfield homes are brand new, so electricity, gas and internet may not be connected yet. Arrange utility connections before moving day so you have power and water when you arrive.",
      },
    ],
  },
  {
    slug: "ipswich",
    name: "Ipswich",
    region: "Ipswich & Western Corridor",
    state: "QLD",
    distanceFromCBD: "40km west of Brisbane CBD",
    postcode: "4305",
    latitude: -27.6167,
    longitude: 152.7667,
    uniquePara1:
      "Ipswich is a historic city west of Brisbane with a charming mix of heritage Queenslander homes, modern estates and a vibrant community atmosphere. We regularly service the Ipswich region for both local moves and relocations to and from Brisbane.",
    uniquePara2:
      "The heritage homes and character properties common in Ipswich often require extra care with staircases, verandahs and narrow hallways. Our experienced removalists treat every heritage property with the respect and care it deserves.",
    uniquePara3:
      "Ipswich's character Queenslanders present unique challenges — steep external stairs, narrow front doors and low-clearance verandahs. Our team brings stair-climbing trolleys, furniture tilting straps and protective padding specifically for these heritage moves, ensuring your home and belongings are both protected.",
    nearbySubs: ["Springfield", "Logan", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Ipswich & Western Corridor",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Ipswich | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Ipswich with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a Queenslander in East Ipswich to a new home in Ripley. They were incredibly careful on the narrow stairs — not a mark on the walls. Professional from start to finish.",
        name: "Sandra W.",
        location: "East Ipswich → Ripley",
        date: "February 2025",
      },
      {
        text: "Fantastic Ipswich removalists. Moved our 3-bedroom home in Brassall quickly and affordably. The guys were friendly, efficient and handled our piano with real expertise.",
        name: "Ryan G.",
        location: "Brassall",
        date: "December 2024",
      },
      {
        text: "Used R2G for a move from Brisbane to Ipswich. Fair price, on time, careful with everything. They even helped rearrange heavy furniture in the lounge room after unloading. Great service.",
        name: "Megan K.",
        location: "Brisbane → Ipswich",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Measure doorways in Queenslanders.",
        text: "Heritage homes in Ipswich often have narrower doorways than modern builds. Measure your largest furniture against your new home's doors — we can disassemble items if needed, but it helps to know in advance.",
      },
      {
        heading: "Allow extra time for stairs.",
        text: "Many Ipswich Queenslanders are raised on stumps with steep external stairs. Moves take a little longer with stair access, so we factor this into our planning. Let us know at booking.",
      },
      {
        heading: "Book midweek for the best availability.",
        text: "Ipswich moves are popular on weekends. If your schedule allows, a Tuesday to Thursday move often gives you more date options and a quieter experience.",
      },
      {
        heading: "Check flood zone history for your new property.",
        text: "Parts of Ipswich near the Bremer River are flood-prone. If your new home is in a low-lying area, consider storing valuables on upper levels and ask us about our short-term storage options as a backup plan.",
      },
    ],
  },
  {
    slug: "redcliffe",
    name: "Redcliffe",
    region: "Moreton Bay",
    state: "QLD",
    distanceFromCBD: "35km north of Brisbane CBD",
    postcode: "4020",
    latitude: -27.2297,
    longitude: 153.1319,
    uniquePara1:
      "Redcliffe is a popular seaside peninsula north of Brisbane, known for its beautiful waterfront, relaxed lifestyle and strong community atmosphere. We frequently help families and retirees relocate to this sought-after coastal suburb.",
    uniquePara2:
      "Coastal properties in Redcliffe often feature outdoor entertaining areas, waterfront decks and salt-air exposed furnishings requiring extra protection. Our team wraps and protects all items carefully for every Redcliffe move.",
    uniquePara3:
      "Salt air is a real consideration when moving on the Redcliffe Peninsula. We use quality furniture blankets and stretch wrap to protect timber, leather and metal items from moisture during transit. Our team also takes care with outdoor furniture that may be more fragile due to long-term coastal exposure.",
    nearbySubs: ["Caboolture", "Aspley", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Redcliffe & Moreton Bay",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Redcliffe | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Redcliffe with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Scarborough to Margate — just a short move but they were fantastic. Wrapped all our outdoor furniture carefully and even protected the timber deck from trolley marks. Lovely team.",
        name: "Helen & Peter B.",
        location: "Scarborough → Margate",
        date: "January 2025",
      },
      {
        text: "Relocated from Brisbane north to Redcliffe for retirement. R2G handled our downsizing move perfectly — careful with the antiques, efficient with the heavy stuff. Couldn't recommend them enough.",
        name: "Graham S.",
        location: "Brisbane → Redcliffe",
        date: "November 2024",
      },
      {
        text: "Moved a 2-bedroom unit in Clontarf. Quick, clean, professional. The pricing was transparent and the guys were genuinely friendly. Will use R2G again for our next move.",
        name: "Natalie T.",
        location: "Clontarf",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Protect items from salt air.",
        text: "Coastal moves on the Redcliffe Peninsula mean exposure to salt air. We wrap all furniture in protective blankets, but consider wiping down metal and timber items before the move for extra protection.",
      },
      {
        heading: "Plan around peninsula traffic.",
        text: "Redcliffe's roads can get congested, especially on weekends and during events at the waterfront. An early morning start helps beat the traffic heading in and out of the peninsula.",
      },
      {
        heading: "Downsize before your coastal move.",
        text: "Many people moving to Redcliffe are downsizing. Take the opportunity to sell or donate items that won't fit your new home — it makes the move faster and more affordable.",
      },
      {
        heading: "Secure outdoor items for the sea breeze.",
        text: "Redcliffe's exposed peninsula position means strong sea breezes are common. If we're loading or unloading lightweight items like patio umbrellas or cushions, we secure everything carefully to prevent wind damage during transit.",
      },
    ],
  },
  {
    slug: "caboolture",
    name: "Caboolture",
    region: "Moreton Bay",
    state: "QLD",
    distanceFromCBD: "50km north of Brisbane CBD",
    postcode: "4510",
    latitude: -27.0667,
    longitude: 152.9500,
    uniquePara1:
      "Caboolture is a thriving township in the northern Moreton Bay region, popular with families seeking affordable housing and a semi-rural lifestyle within commuting distance of Brisbane. We service Caboolture regularly for both local and Brisbane-bound moves.",
    uniquePara2:
      "Properties in Caboolture range from compact town homes to larger acreage blocks on the outskirts. Our team is well-versed in the area's road network and comes equipped for large-volume moves with the right trucks and protective materials.",
    uniquePara3:
      "Caboolture's semi-rural outskirts around Morayfield, Burpengary and Narangba include properties on unsealed driveways and larger acreage blocks. Our team brings the right trucks for rural access and plans routes carefully to avoid any issues with soft ground or narrow rural lanes.",
    nearbySubs: ["Redcliffe", "Aspley", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Caboolture & Moreton Bay North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Caboolture | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Caboolture with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from Caboolture to Morayfield with R2G. The team handled our large workshop equipment alongside the household furniture — no problems at all. Efficient and well-priced.",
        name: "Craig M.",
        location: "Caboolture → Morayfield",
        date: "February 2025",
      },
      {
        text: "R2G relocated us from Brisbane to an acreage property in Burpengary. They managed the long driveway perfectly and the team was careful with every item. Outstanding professionalism.",
        name: "Louise & Ken A.",
        location: "Brisbane → Burpengary",
        date: "December 2024",
      },
      {
        text: "First-time home buyer moving into Narangba. R2G were friendly, fast and made the whole experience stress-free. Two guys had my entire unit packed up and moved in three hours flat.",
        name: "Jake R.",
        location: "Narangba",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Check rural driveway access.",
        text: "If you're on an acreage property around Caboolture, let us know about unsealed driveways, gates or cattle grids so we can plan truck access accordingly.",
      },
      {
        heading: "Factor in travel time from Brisbane.",
        text: "Caboolture is about 50km from Brisbane CBD. Moves between Caboolture and Brisbane typically involve a longer travel component, which we factor into your quote transparently.",
      },
      {
        heading: "Prepare large sheds and garages early.",
        text: "Caboolture homes often have large sheds and garages full of tools and equipment. Sorting and packing these areas a few days before moving day saves significant time and money.",
      },
      {
        heading: "Plan for hot weather during summer moves.",
        text: "Caboolture's inland position makes it one of Brisbane's hotter areas in summer. We keep our team hydrated and working efficiently, but having cold drinks available and keeping doors open for airflow helps the move go smoothly.",
      },
    ],
  },
  {
    slug: "mt-gravatt",
    name: "Mt Gravatt",
    region: "Brisbane South",
    state: "QLD",
    distanceFromCBD: "9km south of Brisbane CBD",
    postcode: "4122",
    latitude: -27.5432,
    longitude: 153.0794,
    uniquePara1:
      "Mt Gravatt is a well-established southern Brisbane suburb offering elevated positions with stunning city views, excellent schools and convenient access to the CBD. The suburb attracts families and professionals seeking a central yet residential lifestyle.",
    uniquePara2:
      "The hilly terrain and mix of older character homes, split-level properties and modern builds in Mt Gravatt means our team arrives fully prepared for access challenges including steep driveways and multi-level moves.",
    uniquePara3:
      "Mt Gravatt's elevated position means many homes are accessed via steep, winding driveways that require careful truck placement. Our experienced drivers assess access before unloading, and the team uses stair-climbing trolleys and ramp boards to safely navigate the split-level layouts common throughout the suburb.",
    nearbySubs: ["Sunnybank", "Carindale", "Coorparoo"],
    priceFrom: "$160/hr",
    serviceArea: "Mt Gravatt & Brisbane South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Mt Gravatt | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Mt Gravatt with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Our Mt Gravatt home has a nightmare driveway — steep and narrow. R2G handled it like absolute professionals. Not a scratch on the truck, the house or our furniture. Incredible work.",
        name: "Paul H.",
        location: "Mt Gravatt",
        date: "January 2025",
      },
      {
        text: "Moved from Upper Mt Gravatt to Holland Park. The R2G team navigated both split-level homes with ease. Everything was wrapped carefully and they reassembled all our beds perfectly.",
        name: "Wendy T.",
        location: "Upper Mt Gravatt → Holland Park",
        date: "November 2024",
      },
      {
        text: "Quick and painless 2-bedroom move in Mt Gravatt East. The guys were polite, worked hard and finished well ahead of schedule. Great hourly rate too. Five stars from me.",
        name: "Aaron L.",
        location: "Mt Gravatt East",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Tell us about steep driveway access.",
        text: "Mt Gravatt's hilly streets mean steep driveways are common. Let us know your situation when booking so we can bring the right truck and equipment for safe access.",
      },
      {
        heading: "Plan for split-level homes.",
        text: "Many Mt Gravatt properties are split-level with internal stairs. If you have heavy items on upper levels, mention this at booking so we send enough removalists for safe handling.",
      },
      {
        heading: "Take advantage of your central location.",
        text: "Mt Gravatt's central position means shorter travel times to most Brisbane suburbs. This often translates to a more affordable move — our hourly rate clock starts when we arrive.",
      },
      {
        heading: "Clear garden paths on elevated blocks.",
        text: "Many Mt Gravatt homes have long garden paths or stepped walkways between the street and the front door. Trim overhanging branches and clear any loose pavers before moving day to give our team a safe, clear route.",
      },
    ],
  },
  {
    slug: "indooroopilly",
    name: "Indooroopilly",
    region: "Brisbane West",
    state: "QLD",
    distanceFromCBD: "7km west of Brisbane CBD",
    postcode: "4068",
    latitude: -27.5000,
    longitude: 152.9667,
    uniquePara1:
      "Indooroopilly is one of Brisbane's premier western suburbs, known for its leafy streets, excellent schools, proximity to the University of Queensland and the popular Indooroopilly Shopping Centre. We frequently assist families and professionals with moves in this sought-after area.",
    uniquePara2:
      "The larger, well-appointed homes in Indooroopilly often involve significant furniture volumes and high-value items. Our team takes particular care with premium furnishings and ensures everything arrives in perfect condition.",
    uniquePara3:
      "Indooroopilly's leafy, established streets mean many properties are shaded by mature trees with overhanging branches. Our drivers are skilled at positioning trucks to avoid low branches, and we take care to protect garden beds and landscaping during the move — your home's kerb appeal matters to us.",
    nearbySubs: ["Toowong", "Kenmore", "Paddington"],
    priceFrom: "$160/hr",
    serviceArea: "Indooroopilly & Brisbane West",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Indooroopilly | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Indooroopilly with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved our large family home in Indooroopilly — five bedrooms, a study and a full double garage. They sent three guys who worked steadily all day and treated our antique furniture with real care.",
        name: "Richard & Anne S.",
        location: "Indooroopilly",
        date: "February 2025",
      },
      {
        text: "Relocated from Taringa to Indooroopilly. The R2G team was incredibly careful with our timber floors at both ends and navigated the narrow streets perfectly. Professional and courteous throughout.",
        name: "Catherine M.",
        location: "Taringa → Indooroopilly",
        date: "December 2024",
      },
      {
        text: "Used R2G for a UQ student move into Indooroopilly. Fast, affordable and friendly. They even helped carry boxes up to the second floor. Would recommend to any student or family.",
        name: "James L.",
        location: "Indooroopilly",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Protect timber floors in older homes.",
        text: "Many Indooroopilly homes feature polished timber floors. We bring floor runners as standard, but letting us know helps us take extra precautions with heavy furniture.",
      },
      {
        heading: "Watch for narrow, leafy streets.",
        text: "Indooroopilly's established streets can be narrow with overhanging trees. Trimming any low branches near your driveway before moving day helps our truck access your property safely.",
      },
      {
        heading: "Consider off-peak timing near UQ.",
        text: "Streets around UQ and Indooroopilly Shopping Centre get busy during semester and weekends. A weekday or early-morning move avoids congestion.",
      },
      {
        heading: "Prepare for humidity in older homes.",
        text: "Indooroopilly's leafy, shaded properties can hold moisture, especially under the house. If you're storing boxes in lower levels before the move, keep them off the ground and consider using moisture-absorbing products to protect contents.",
      },
    ],
  },
  {
    slug: "paddington",
    name: "Paddington",
    region: "Brisbane Inner West",
    state: "QLD",
    distanceFromCBD: "3km west of Brisbane CBD",
    postcode: "4064",
    latitude: -27.4667,
    longitude: 152.9833,
    uniquePara1:
      "Paddington is one of Brisbane's most character-rich inner-city suburbs, famous for its stunning Queenslander homes, boutique shopping strips and vibrant cafe scene. We know the streets of Paddington well and come fully prepared for elevated access and narrow driveways.",
    uniquePara2:
      "The heritage-style homes common in Paddington often require extra care with steep staircases, narrow hallways and verandahs. Our experienced removalists treat every character property with the respect it deserves.",
    uniquePara3:
      "Parking is notoriously tight in Paddington, with many homes having no off-street parking at all. Our team is experienced at securing street access, using smaller vehicles when needed, and carrying items longer distances from truck to front door. We plan for these challenges so you don't have to stress about them.",
    nearbySubs: ["Toowong", "Indooroopilly", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Paddington & Inner West Brisbane",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Paddington | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Paddington with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a beautiful Queenslander in Paddington to a townhouse in Bardon. R2G navigated the steep front stairs and narrow hallway without a single mark on the walls. These guys really know heritage homes.",
        name: "Kate & Simon R.",
        location: "Paddington → Bardon",
        date: "January 2025",
      },
      {
        text: "R2G were brilliant for our Paddington move. Street parking was a challenge but they sorted it out, worked quickly and treated our antique furniture with incredible care. Highly recommend.",
        name: "Oliver J.",
        location: "Paddington",
        date: "November 2024",
      },
      {
        text: "Small unit move in Paddington — just a 1-bedder. R2G still treated it as a proper job. Everything wrapped, nothing damaged, done in 90 minutes. Great service regardless of move size.",
        name: "Emily T.",
        location: "Paddington",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Arrange street parking in advance.",
        text: "Paddington has very limited parking. If your home has no driveway, consider reserving a parking spot or letting neighbours know a truck will be on the street during your move.",
      },
      {
        heading: "Measure doorways and hallways.",
        text: "Queenslander homes in Paddington often have narrower internal doors than modern homes. Measure your largest furniture pieces against doorways so we can plan disassembly if needed.",
      },
      {
        heading: "Protect verandahs and timber features.",
        text: "Heritage verandahs and timber details are part of Paddington's charm. We use corner protectors and padding on all contact points to ensure your home's character features stay pristine.",
      },
      {
        heading: "Start early to beat Latrobe Terrace traffic.",
        text: "Paddington's main roads get busy during peak hours. A 7am start lets us load before the commuter rush hits Given Terrace and Latrobe Terrace.",
      },
    ],
  },
  {
    slug: "toowong",
    name: "Toowong",
    region: "Brisbane Inner West",
    state: "QLD",
    distanceFromCBD: "5km west of Brisbane CBD",
    postcode: "4066",
    latitude: -27.4833,
    longitude: 152.9833,
    uniquePara1:
      "Toowong is a popular inner-western suburb of Brisbane, offering excellent public transport, proximity to the University of Queensland and a strong mix of apartment living and family homes. Students, professionals and families frequently move to and from Toowong.",
    uniquePara2:
      "With a high proportion of apartment and unit complexes alongside traditional homes, Toowong moves often require careful navigation of building access, lifts and loading docks. Our team is experienced with all types of Toowong property moves.",
    uniquePara3:
      "Toowong Village and the surrounding apartment towers mean a significant number of our moves here involve high-rise buildings with specific body corporate rules. We coordinate lift bookings, floor protection requirements and loading dock schedules as part of our service — it's all included in the quote.",
    nearbySubs: ["Paddington", "Indooroopilly", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Toowong & Inner West Brisbane",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Toowong | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Toowong with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a Toowong apartment into a house in St Lucia. R2G managed the loading dock booking and lift access perfectly. Everything was out of the apartment in under two hours. Smooth as.",
        name: "Daniel K.",
        location: "Toowong → St Lucia",
        date: "February 2025",
      },
      {
        text: "R2G helped with our UQ end-of-semester move out of Toowong. Quick, affordable and they were really careful with my TV and PC setup. Perfect for student moves.",
        name: "Lily W.",
        location: "Toowong",
        date: "November 2024",
      },
      {
        text: "Three-bedroom townhouse move in Toowong. The team was friendly, fast and took great care of our kids' furniture. No damage, fair price, would absolutely call them again.",
        name: "Mark & Sarah P.",
        location: "Toowong",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Book your loading dock and lift early.",
        text: "Toowong apartment buildings often require advance bookings for loading docks and service lifts. Secure your slot as soon as you have a move date — we can help coordinate with your body corporate.",
      },
      {
        heading: "Plan around UQ semester dates.",
        text: "Toowong gets busy with student moves at the end of each semester. If you're not a student, avoid the last two weeks of June and November for a quieter experience.",
      },
      {
        heading: "Use Toowong's train access to your advantage.",
        text: "If you're downsizing or don't need to supervise every moment, Toowong's excellent public transport means you can be at your new place ready to direct the unload while we handle the rest.",
      },
      {
        heading: "Check body corporate moving rules in advance.",
        text: "Toowong's many apartment complexes each have their own rules on moving hours, floor protection and lift usage. Request these from your body corporate at least two weeks before your move so we can prepare accordingly.",
      },
    ],
  },
  {
    slug: "bulimba",
    name: "Bulimba",
    region: "Brisbane East",
    state: "QLD",
    distanceFromCBD: "4km east of Brisbane CBD",
    postcode: "4171",
    latitude: -27.4500,
    longitude: 153.0500,
    uniquePara1:
      "Bulimba is one of Brisbane's most prestigious riverside suburbs, known for its village atmosphere, Oxford Street dining precinct and beautiful character homes. We frequently assist families and professionals with premium moves in this highly sought-after neighbourhood.",
    uniquePara2:
      "Properties in Bulimba range from heritage Queenslanders to modern riverfront homes and luxury apartments. Our team handles every Bulimba move with the extra care and discretion that premium properties demand.",
    uniquePara3:
      "Bulimba's tree-lined streets and heritage properties require a careful approach. Many homes here feature polished timber floors, designer kitchens and high-value artwork. Our team uses felt pads, floor runners and custom wrapping to protect every surface, ensuring your premium home looks exactly the same after the move.",
    nearbySubs: ["Coorparoo", "Wynnum", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Bulimba & Brisbane East",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Bulimba | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Bulimba with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us within Bulimba — from a Queenslander on Oxford Street to a riverfront home. They protected every polished floor, wrapped artwork individually and even wore shoe covers inside. Exceptional attention to detail.",
        name: "Andrew & Claire D.",
        location: "Bulimba",
        date: "January 2025",
      },
      {
        text: "Moved from Hawthorne to Bulimba. The R2G crew treated our heritage furniture like museum pieces. Careful, efficient and respectful of both properties. Worth every dollar.",
        name: "Margaret H.",
        location: "Hawthorne → Bulimba",
        date: "December 2024",
      },
      {
        text: "Used R2G for a Bulimba apartment move. Small job but they gave it the same level of care as a big one. Quick, professional and no damage. Would recommend to anyone on the east side.",
        name: "Nick F.",
        location: "Bulimba",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Protect polished floors and premium finishes.",
        text: "Bulimba homes often feature polished timber, marble or designer tiles. We bring floor runners and felt pads, but letting us know about premium flooring helps us take extra precautions.",
      },
      {
        heading: "Arrange parking on narrow streets.",
        text: "Some Bulimba streets are narrow with cars parked on both sides. Clearing a spot near your front gate before the truck arrives saves time and avoids complications.",
      },
      {
        heading: "Plan for high-value and fragile items.",
        text: "If you have artwork, antiques or high-value electronics, mention them when booking. We bring specialist wrapping materials and can allocate extra time for careful handling.",
      },
      {
        heading: "Consider ferry-side traffic on weekends.",
        text: "Bulimba's proximity to the CityCat ferry and Oxford Street dining precinct means street traffic and parking can be busy on weekends. A weekday or early Saturday morning move avoids the crowds.",
      },
    ],
  },
  {
    slug: "wynnum",
    name: "Wynnum",
    region: "Brisbane Bayside",
    state: "QLD",
    distanceFromCBD: "14km east of Brisbane CBD",
    postcode: "4178",
    latitude: -27.4667,
    longitude: 153.1667,
    uniquePara1:
      "Wynnum is a charming bayside suburb east of Brisbane, popular with families who love the coastal lifestyle, waterfront parks and relaxed community feel. We help residents move to and from this popular bayside community year-round.",
    uniquePara2:
      "With a strong mix of character Queenslanders, waterfront properties and modern family homes, Wynnum moves often require careful handling of outdoor and coastal lifestyle items alongside standard household furniture.",
    uniquePara3:
      "Wynnum and neighbouring Manly are known for their bayside Queenslanders, many of which sit on elevated stumps with external stairs and wraparound verandahs. Our team is experienced with these classic Queensland homes and brings the right equipment to navigate stairs safely while protecting both the property and your furniture.",
    nearbySubs: ["Carindale", "Bulimba", "Cleveland"],
    priceFrom: "$160/hr",
    serviceArea: "Wynnum & Brisbane Bayside",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Wynnum | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Wynnum with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a raised Queenslander in Wynnum to a modern home in Manly West. R2G navigated the external stairs with a fridge and a sofa bed — no drama at all. Really skilled team.",
        name: "Tony & Jan M.",
        location: "Wynnum → Manly West",
        date: "February 2025",
      },
      {
        text: "R2G relocated us from Lota to Wynnum. They took great care with our outdoor furniture and even wrapped the barbecue. Bayside specialists for sure. Will use again.",
        name: "Steph A.",
        location: "Lota → Wynnum",
        date: "December 2024",
      },
      {
        text: "Quick, friendly move in Wynnum. Two guys, three hours, everything done. They were gentle with our daughter's nursery furniture and reassembled the cot perfectly. Highly recommend.",
        name: "Chris B.",
        location: "Wynnum",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Prepare for raised Queenslander access.",
        text: "Many Wynnum homes are raised on stumps with external stairs. Let us know so we can bring stair-climbing equipment and allocate enough team members for safe heavy-item handling.",
      },
      {
        heading: "Wrap outdoor and marine items.",
        text: "Bayside homes often have salt-air-exposed outdoor furniture, kayaks and fishing gear. We'll wrap everything carefully, but grouping outdoor items together makes the process faster.",
      },
      {
        heading: "Time your move around Wynnum Road traffic.",
        text: "Wynnum Road is the main artery into the bayside suburbs and gets congested during peak hours. An early start or mid-morning booking helps avoid delays.",
      },
      {
        heading: "Disassemble outdoor entertaining areas early.",
        text: "Wynnum's bayside lifestyle means many homes have large outdoor setups — gazebos, shade sails and barbecue stations. Disassembling these the day before speeds up loading and avoids delays on moving day.",
      },
    ],
  },
  {
    slug: "cleveland",
    name: "Cleveland",
    region: "Redlands",
    state: "QLD",
    distanceFromCBD: "22km east of Brisbane CBD",
    postcode: "4163",
    latitude: -27.5260,
    longitude: 153.2651,
    uniquePara1:
      "Cleveland is the heart of the Redlands region, a thriving bayside community known for its waterfront dining, ferry access to the bay islands and strong family lifestyle. We regularly service Cleveland and the broader Redlands area for both local moves and Brisbane relocations.",
    uniquePara2:
      "The mix of established family homes, waterfront properties and newer developments in Cleveland means our team arrives prepared for all property types. We understand the unique character of Redlands properties and deliver every move with care.",
    uniquePara3:
      "Cleveland's position as the Redlands hub means we often help families relocate between Cleveland, Victoria Point, Thornlands and the bay islands via the Toondah Harbour ferry. We coordinate moves that involve ferry schedules and island logistics, providing a seamless experience for bayside and island residents.",
    nearbySubs: ["Wynnum", "Carindale", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Cleveland & Redlands",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Cleveland | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Cleveland with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Cleveland to Thornlands. Punctual, professional and genuinely careful. They protected our hardwood floors at both homes and reassembled all beds perfectly. Excellent service.",
        name: "Rob & Lisa C.",
        location: "Cleveland → Thornlands",
        date: "January 2025",
      },
      {
        text: "Moved from Brisbane south to a waterfront home in Cleveland. R2G handled the long move efficiently and took extra care with items going into the new home. Very impressed.",
        name: "Sandra E.",
        location: "Brisbane → Cleveland",
        date: "November 2024",
      },
      {
        text: "Used R2G for a local Redlands move from Victoria Point to Cleveland. Quick, clean, no damage. The pricing was upfront and the team were friendly. Would use again without hesitation.",
        name: "Trevor K.",
        location: "Victoria Point → Cleveland",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Plan around ferry schedules if island-bound.",
        text: "If your move involves a bay island, let us know early so we can coordinate timing around the Toondah Harbour ferry schedule for the smoothest possible transition.",
      },
      {
        heading: "Consider Redlands traffic patterns.",
        text: "Cleveland Road and the Old Cleveland Road corridor can be congested during peak hours. A mid-morning start often works best for moves heading into or out of the Redlands.",
      },
      {
        heading: "Protect coastal and outdoor items.",
        text: "Cleveland's bayside position means many homes have significant outdoor living areas. Group outdoor furniture and bayside items together so we can wrap and load them efficiently.",
      },
      {
        heading: "Allow extra time for Redlands travel.",
        text: "Cleveland is about 22km from Brisbane CBD with limited motorway access. We factor travel time into your quote transparently, and an early start helps us make the most of the day for longer-distance moves.",
      },
    ],
  },
  {
    slug: "kenmore",
    name: "Kenmore",
    region: "Brisbane West",
    state: "QLD",
    distanceFromCBD: "12km west of Brisbane CBD",
    postcode: "4069",
    latitude: -27.5000,
    longitude: 152.9333,
    uniquePara1:
      "Kenmore is a family-friendly western suburb of Brisbane, known for its leafy streets, excellent schools, bushland surroundings and strong community spirit. The suburb is a popular choice for families seeking space and tranquillity while remaining close to the city.",
    uniquePara2:
      "The larger homes and generous block sizes in Kenmore typically involve significant furniture volumes. Our team is experienced with high-volume family home moves and comes fully equipped for the suburb's varied terrain and access requirements.",
    uniquePara3:
      "Kenmore and Kenmore Hills properties often back onto bushland reserves, which means some homes have long driveways, steep access and limited turning areas for larger trucks. We assess access before the move and select the right vehicle to ensure a smooth, damage-free relocation every time.",
    nearbySubs: ["Indooroopilly", "Toowong", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Kenmore & Brisbane West",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Kenmore | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Kenmore with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved our large 5-bedroom home in Kenmore Hills. The steep driveway didn't faze them at all — they brought the right truck and had a detailed plan. Everything delivered safely. Brilliant team.",
        name: "Stuart & Rachel W.",
        location: "Kenmore Hills",
        date: "February 2025",
      },
      {
        text: "Moved from Kenmore to Chapel Hill. R2G were careful with our grand piano and wrapped it perfectly. Four hours for a full 4-bedroom home — incredibly efficient.",
        name: "Angela F.",
        location: "Kenmore → Chapel Hill",
        date: "December 2024",
      },
      {
        text: "Used R2G for a Kenmore to Fig Tree Pocket move. They protected the polished floors, worked quietly and cleanly, and left both homes spotless. Proper professionals.",
        name: "David H.",
        location: "Kenmore → Fig Tree Pocket",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Tell us about long or steep driveways.",
        text: "Kenmore Hills properties often have steep, winding driveways. Let us know your access situation so we can select the best truck size and plan for safe manoeuvring.",
      },
      {
        heading: "Plan for large family home volumes.",
        text: "Kenmore homes tend to be spacious with large garages and storage areas. Doing a thorough declutter before moving day can significantly reduce your move time and cost.",
      },
      {
        heading: "Watch for wildlife on rural-fringe properties.",
        text: "Properties backing onto bushland may have wildlife near driveways. We're careful around native habitats, but clearing any debris or fallen branches from the driveway access before moving day helps.",
      },
      {
        heading: "Secure pool equipment before the move.",
        text: "Many Kenmore homes have swimming pools with pumps, filters and accessories. Drain and disconnect pool equipment the day before and group loose items like pool toys and cleaning gear together for efficient loading.",
      },
    ],
  },
  {
    slug: "aspley",
    name: "Aspley",
    region: "Brisbane North",
    state: "QLD",
    distanceFromCBD: "12km north of Brisbane CBD",
    postcode: "4034",
    latitude: -27.3667,
    longitude: 153.0167,
    uniquePara1:
      "Aspley is a well-established northern suburb of Brisbane popular with families and retirees, offering great shopping, parks and easy access to major motorways. We complete a high volume of moves in the Aspley area year-round.",
    uniquePara2:
      "The predominantly established housing stock in Aspley includes a mix of lowset brick homes, renovated Queenslanders and newer townhouse developments. Our team is familiar with the area's streets and property types, allowing us to plan and execute moves efficiently.",
    uniquePara3:
      "Aspley's mix of 1970s-80s lowset brick homes and more recent townhouse infill means our team encounters a wide range of access scenarios — from straightforward single-level homes to properties with narrow side gates and rear-access garages. We come prepared for every layout and make the process seamless.",
    nearbySubs: ["Chermside", "Redcliffe", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Aspley & Brisbane North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Aspley | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Aspley with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Aspley to Zillmere — a quick move but they were thorough and careful. Everything was blanket-wrapped, the truck was clean and the price matched the quote exactly.",
        name: "Ian T.",
        location: "Aspley → Zillmere",
        date: "January 2025",
      },
      {
        text: "Fantastic service moving our retired parents from Aspley to a smaller unit in Chermside. The team was patient, respectful and handled the downsizing move with real sensitivity. Highly recommend.",
        name: "Rebecca L.",
        location: "Aspley → Chermside",
        date: "November 2024",
      },
      {
        text: "Moved a 3-bedroom home in Aspley. Two guys, loaded and unloaded in about five hours total. They navigated the narrow side access gate at the new place like it was nothing. Good work.",
        name: "Shane D.",
        location: "Aspley",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Check side gate and rear access widths.",
        text: "Some Aspley homes require furniture to be carried through narrow side gates. Measure the gate width and let us know — we can plan to disassemble larger items if needed.",
      },
      {
        heading: "Take advantage of motorway access.",
        text: "Aspley sits near the Gateway Motorway and Gympie Road, making it well-connected for moves across Brisbane. This often translates to shorter travel times and a more efficient move.",
      },
      {
        heading: "Consider a downsizing strategy.",
        text: "If you're moving to a smaller home or unit, make decisions about what to keep before moving day. We can advise on what's worth moving versus donating or disposing of.",
      },
      {
        heading: "Arrange pet care for moving day.",
        text: "Aspley is a family-friendly suburb with many pet owners. Arrange for pets to stay with a friend or neighbour on moving day — open doors and heavy foot traffic can be stressful and risky for animals.",
      },
    ],
  },
  {
    slug: "coorparoo",
    name: "Coorparoo",
    region: "Brisbane Inner South",
    state: "QLD",
    distanceFromCBD: "5km south of Brisbane CBD",
    postcode: "4151",
    latitude: -27.4833,
    longitude: 153.0500,
    uniquePara1:
      "Coorparoo is a vibrant inner-south suburb of Brisbane, popular with young professionals and families drawn to its character homes, village atmosphere and excellent CBD access. We frequently move residents into and out of this highly desirable neighbourhood.",
    uniquePara2:
      "The mix of beautifully renovated Queenslanders, modern townhouses and apartment developments in Coorparoo means our team handles a wide variety of property types with the expertise that inner-city moves demand.",
    uniquePara3:
      "Coorparoo's popularity has brought a wave of new apartment and townhouse developments alongside its heritage homes. Our team is equally comfortable navigating a loading dock in a modern complex as we are carrying a sofa down the stairs of a century-old Queenslander — versatility is key in this suburb.",
    nearbySubs: ["Bulimba", "Annerley", "Carindale"],
    priceFrom: "$160/hr",
    serviceArea: "Coorparoo & Brisbane Inner South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Coorparoo | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Coorparoo with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a renovated Queenslander in Coorparoo to a new apartment in Woolloongabba. R2G handled both ends beautifully — careful on the heritage stairs and efficient in the new building's loading dock.",
        name: "Sarah G.",
        location: "Coorparoo → Woolloongabba",
        date: "February 2025",
      },
      {
        text: "R2G relocated our young family within Coorparoo. They were gentle with the kids' toys and furniture, wrapped everything properly and had us settled in by mid-afternoon. Great experience.",
        name: "Tim & Lucy N.",
        location: "Coorparoo",
        date: "December 2024",
      },
      {
        text: "Used R2G for a Greenslopes to Coorparoo move. Affordable, punctual and professional. The two removalists worked hard and nothing was damaged. Would definitely book again.",
        name: "Jo M.",
        location: "Greenslopes → Coorparoo",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Check parking restrictions on your street.",
        text: "Coorparoo's inner-city streets often have parking restrictions. Check for permit zones or time limits near your home and let us know if street parking will be limited on moving day.",
      },
      {
        heading: "Communicate heritage home details.",
        text: "If you're moving from or into a Queenslander, let us know about narrow doors, steep stairs or any heritage features that need special protection. We'll plan accordingly.",
      },
      {
        heading: "Book early for end-of-month moves.",
        text: "Coorparoo is a popular rental suburb, so end-of-month dates fill up quickly. Book as early as possible if your move aligns with a lease changeover date.",
      },
      {
        heading: "Protect garden and courtyard plants.",
        text: "Coorparoo's character homes often have established gardens and courtyard plants. If you're taking potted plants with you, group them near the truck loading point and let us know so we can load them last for easy unloading.",
      },
    ],
  },
  {
    slug: "annerley",
    name: "Annerley",
    region: "Brisbane Inner South",
    state: "QLD",
    distanceFromCBD: "4km south of Brisbane CBD",
    postcode: "4103",
    latitude: -27.5167,
    longitude: 153.0333,
    uniquePara1:
      "Annerley is a well-connected inner-south suburb of Brisbane, offering a mix of affordable living and character-filled streets just minutes from the CBD. Students, young professionals and families are drawn to Annerley for its convenience and sense of community.",
    uniquePara2:
      "With a diverse mix of Queenslanders, units, share houses and modern builds, Annerley moves range from compact single-bedroom relocations to full family home moves. Our team handles them all with the same professional care.",
    uniquePara3:
      "Annerley's Ipswich Road corridor is one of Brisbane's busiest, which means traffic management and truck positioning require local knowledge. Our team plans arrival times and parking locations to minimise disruption and maximise efficiency — especially for properties on or near the main road.",
    nearbySubs: ["Coorparoo", "Sunnybank", "Brisbane City"],
    priceFrom: "$160/hr",
    serviceArea: "Annerley & Brisbane Inner South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Annerley | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Annerley with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a share house in Annerley to my own unit in Yeronga. R2G were friendly, fast and affordable — perfect for a first solo move. Had me settled in by lunchtime.",
        name: "Sam W.",
        location: "Annerley → Yeronga",
        date: "January 2025",
      },
      {
        text: "R2G handled our family move from Annerley to Tarragindi. They were careful with our old Queenslander's verandah and wrapped everything thoroughly. Fair pricing and genuine care. Five stars.",
        name: "Maria & Joe D.",
        location: "Annerley → Tarragindi",
        date: "November 2024",
      },
      {
        text: "Quick 1-bedroom unit move in Annerley. R2G arrived on time, worked efficiently and charged exactly what was quoted. No fuss, no stress. Exactly what you want from a removalist.",
        name: "Alex H.",
        location: "Annerley",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Avoid Ipswich Road peak hours.",
        text: "Annerley's main road is heavily trafficked during peak hours. An early-morning or mid-morning start time helps us access your property without traffic delays.",
      },
      {
        heading: "Note any shared access or rear-entry driveways.",
        text: "Some Annerley properties share driveways with neighbouring homes or have rear-lane access. Let us know at booking so we can plan truck positioning and access routes.",
      },
      {
        heading: "Bundle small moves for better value.",
        text: "If you're a student or in a share house, our minimum 2-hour booking covers most small Annerley moves. Coordinate with a flatmate if possible to make the most of the time.",
      },
      {
        heading: "Check council bin collection days.",
        text: "Annerley's narrow streets can be tricky when council bins are out. Check your bin collection schedule and try to avoid moving on those days, or move bins aside early to clear space for our truck.",
      },
    ],
  },
  {
    slug: "archerfield",
    name: "Archerfield",
    region: "Brisbane South",
    state: "QLD",
    distanceFromCBD: "10km south of Brisbane CBD",
    postcode: "4108",
    latitude: -27.5726,
    longitude: 153.0282,
    uniquePara1:
      "Archerfield is home to our Brisbane depot, making it the launchpad for all our Brisbane, Gold Coast and South-East Queensland removals. Located near the major arterial routes, we can reach any Brisbane suburb quickly and efficiently from our Archerfield base.",
    uniquePara2:
      "Being based in Archerfield gives us intimate knowledge of Brisbane's southern suburbs and fast access to the M1, Ipswich Motorway and Logan Motorway. This strategic location means shorter travel times and better value for our customers across the greater Brisbane region.",
    uniquePara3:
      "Because our depot is right here in Archerfield, moves in the local area benefit from virtually zero travel time. This means more of your booking is spent on actual moving — not on us driving to and from our base. It's one of the reasons we offer such competitive rates for Brisbane's south side.",
    nearbySubs: ["Sunnybank", "Annerley", "Logan"],
    priceFrom: "$160/hr",
    serviceArea: "Archerfield & Brisbane South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Archerfield | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Archerfield with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Living near R2G's Archerfield depot meant they arrived within minutes of the booking start time. Fastest, most efficient move I've ever had. Two-bedroom unit done in under two hours.",
        name: "Gary P.",
        location: "Archerfield",
        date: "January 2025",
      },
      {
        text: "Moved from Archerfield to Coopers Plains — just a short hop. R2G were brilliant. Minimal travel time on the clock, everything wrapped and loaded quickly. Great value for money.",
        name: "Linda S.",
        location: "Archerfield → Coopers Plains",
        date: "November 2024",
      },
      {
        text: "R2G are based right here in Archerfield and it shows — they know every street. Moved our 3-bedroom home to Salisbury with zero issues. Professional, friendly and affordable.",
        name: "Raj & Priya M.",
        location: "Archerfield → Salisbury",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Enjoy the local depot advantage.",
        text: "Our depot is at 122 Ashover Circuit, Archerfield. Moves starting nearby benefit from minimal travel time, which means more of your booking goes towards actual moving work.",
      },
      {
        heading: "Use our storage if needed.",
        text: "Because our depot is in Archerfield, short-term storage between move-out and move-in dates is easy to arrange. Ask about our secure storage options when booking.",
      },
      {
        heading: "Book a quick-turnaround move.",
        text: "Archerfield's central south-side location means we can often accommodate same-day or next-day bookings. Call us to check availability if you need a fast turnaround.",
      },
      {
        heading: "Be mindful of industrial area traffic.",
        text: "Archerfield has a busy industrial precinct with truck traffic during business hours. If your property is near the commercial zone, a weekend or early-morning weekday move avoids the heaviest industrial traffic.",
      },
    ],
  },
  {
    slug: "brisbane-cbd",
    name: "Brisbane CBD",
    region: "Brisbane Central",
    state: "QLD",
    distanceFromCBD: "Brisbane City centre",
    postcode: "4000",
    latitude: -27.4705,
    longitude: 153.0260,
    uniquePara1:
      "Brisbane CBD is the bustling heart of Queensland's capital, home to thousands of apartments, offices and heritage buildings. We regularly help residents and businesses move within the CBD and between the city centre and surrounding suburbs.",
    uniquePara2:
      "Moving in Brisbane CBD comes with unique challenges — building management approvals, loading dock bookings, lift access windows and tight parking. Our team is experienced with high-rise apartment moves and CBD logistics, ensuring a smooth relocation every time.",
    uniquePara3:
      "CBD apartment buildings often have strict moving windows — typically weekday business hours only — and require insurance certificates, floor protection and lift padding. We handle all of this as part of our service, coordinating directly with your building manager so you don't have to chase paperwork on moving day.",
    nearbySubs: ["Paddington", "Bulimba", "Toowong"],
    priceFrom: "$160/hr",
    serviceArea: "Brisbane CBD & Inner City",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Brisbane CBD | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Brisbane CBD with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us out of a 25th-floor apartment in the CBD to a house in New Farm. They coordinated the loading dock, padded the lift and had everything out in under three hours. Incredible efficiency.",
        name: "Jessica & Liam T.",
        location: "Brisbane CBD → New Farm",
        date: "February 2025",
      },
      {
        text: "Moved into a Brisbane CBD apartment from Toowong. R2G handled all the building paperwork and insurance certs — I didn't have to do anything except hand them the keys. Seamless.",
        name: "Monica R.",
        location: "Toowong → Brisbane CBD",
        date: "December 2024",
      },
      {
        text: "Office relocation in Brisbane CBD. R2G moved our 15-person office over a weekend without a hitch. Desks, chairs, IT equipment — everything placed exactly where we needed it Monday morning.",
        name: "Nathan K.",
        location: "Brisbane CBD",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Book your building's moving slot immediately.",
        text: "CBD apartments have limited moving windows — often only weekdays between 9am and 3pm. Secure your building's moving slot as soon as you set a date, then book us to match.",
      },
      {
        heading: "Confirm insurance and compliance requirements.",
        text: "Most CBD buildings require removalists to provide insurance certificates and comply with specific rules. Share your building's requirements when booking — we handle this regularly and will have paperwork ready.",
      },
      {
        heading: "Consider weekday moves for the CBD.",
        text: "Weekend CBD moves can be cheaper for parking but may conflict with building rules. Weekday moves align with most building management schedules and often run more smoothly.",
      },
      {
        heading: "Plan for limited parking.",
        text: "Street parking near CBD buildings is scarce. If your building has a loading dock, that's ideal. Otherwise, let us know so we can plan the best truck positioning strategy.",
      },
    ],
  },
  {
    slug: "redlands",
    name: "Redlands",
    region: "Redlands",
    state: "QLD",
    distanceFromCBD: "25km east of Brisbane CBD",
    postcode: "4163",
    latitude: -27.5360,
    longitude: 153.2000,
    uniquePara1:
      "The Redlands region stretches from the bayside suburbs of Cleveland and Victoria Point to the hinterland areas of Mount Cotton and Sheldon. We service the entire Redlands Coast for local moves, Brisbane relocations and interstate transport.",
    uniquePara2:
      "Properties across the Redlands range from waterfront homes with bay views to acreage blocks in the hinterland and modern estates in Redland Bay and Thornlands. Our team arrives prepared for every property type and access requirement the region presents.",
    uniquePara3:
      "The Redlands is a diverse region where a morning move might take us from a modern estate in Thornlands to a rural acreage block in Sheldon, then to a waterfront property in Raby Bay. Our versatile fleet and experienced team handle every environment with equal confidence, bringing the right truck and equipment for each unique property.",
    nearbySubs: ["Cleveland", "Wynnum", "Carindale"],
    priceFrom: "$160/hr",
    serviceArea: "Redlands Coast & Brisbane East",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Redlands | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Redlands with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from an acreage property in Sheldon to a townhouse in Victoria Point. They managed the long rural driveway and then the tight townhouse access without any issues. Versatile team.",
        name: "Bill & Judy R.",
        location: "Sheldon → Victoria Point",
        date: "January 2025",
      },
      {
        text: "Relocated from Brisbane to a waterfront home in Raby Bay. R2G took extra care with our furniture on the polished concrete floors and were incredibly professional from start to finish.",
        name: "Michelle L.",
        location: "Brisbane → Raby Bay",
        date: "November 2024",
      },
      {
        text: "Moved within the Redlands from Thornlands to Wellington Point. Two guys, quick and efficient, everything wrapped and nothing damaged. R2G are our go-to Redlands removalists now.",
        name: "Patrick S.",
        location: "Thornlands → Wellington Point",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Specify your exact Redlands suburb.",
        text: "The Redlands covers a wide area — from Mount Cotton to the bay islands. Giving us your exact address at booking helps us plan the most efficient route and truck selection.",
      },
      {
        heading: "Check acreage property access.",
        text: "Hinterland Redlands properties in Sheldon and Mount Cotton may have unsealed driveways or limited truck turning areas. Let us know about any access challenges when you book.",
      },
      {
        heading: "Coordinate bay island moves early.",
        text: "If your move involves a Moreton Bay island, we need to plan around ferry schedules and barge availability. Contact us early so we can coordinate logistics for a seamless island move.",
      },
      {
        heading: "Pack for varied terrain across the region.",
        text: "A Redlands move might go from a flat coastal street to a steep hinterland block in Mount Cotton. Share both addresses when booking so we can select a truck and equipment suited to the terrain at each end.",
      },
    ],
  },
];

export const brisbaneSuburbs: BrisbaneSuburb[] = [
  ...coreSuburbs,
  ...batch1Suburbs,
  ...batch2Suburbs,
  ...batch3Suburbs,
  ...batch4Suburbs,
  ...batch5Suburbs,
  ...batch6Suburbs,
  ...batch7Suburbs,
  ...ipswichSuburbs,
  ...ipswich2Suburbs,
  ...loganSuburbs,
  ...logan2Suburbs,
  ...moreton1Suburbs,
  ...moreton2Suburbs,
  ...moreton3Suburbs,
  ...redlandSuburbs,
];

export function getBrisbaneSuburb(slug: string): BrisbaneSuburb | undefined {
  return brisbaneSuburbs.find((s) => s.slug === slug);
}

/** Map of suburb display name -> route path for Brisbane suburbs that have a built page. */
export const brisbaneSuburbRouteMap: Record<string, string> = {
  "Brisbane City": "/removalists-brisbane",
  ...Object.fromEntries(
    brisbaneSuburbs.map((s) => [s.name, `/removalists-brisbane/${s.slug}`]),
  ),
};

/** Returns the route path for a Brisbane suburb if a page exists, otherwise undefined. */
export function getBrisbaneSuburbHref(name: string): string | undefined {
  return brisbaneSuburbRouteMap[name];
}
