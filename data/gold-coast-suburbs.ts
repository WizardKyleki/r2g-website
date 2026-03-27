import type { Suburb } from "./suburbs";
import { goldCoastNorthSuburbs } from "./gold-coast-suburbs-north";
import { goldCoastCentralSuburbs } from "./gold-coast-suburbs-central";
import { goldCoastHinterlandSuburbs } from "./gold-coast-suburbs-hinterland";

export interface GoldCoastSuburb extends Suburb {
  reviews: { text: string; name: string; location: string; date: string }[];
  tips: { heading: string; text: string }[];
  uniquePara3: string;
}

const coreSuburbs: GoldCoastSuburb[] = [
  {
    slug: "surfers-paradise",
    name: "Surfers Paradise",
    region: "Gold Coast Central",
    state: "QLD",
    distanceFromCBD: "0km — Gold Coast CBD",
    postcode: "4217",
    latitude: -28.0024,
    longitude: 153.4297,
    uniquePara1:
      "Surfers Paradise is the beating heart of the Gold Coast — a dense, high-energy beachside strip packed with high-rise apartments, holiday rentals and a constant flow of residents moving in and out. We regularly help tenants, owner-occupiers and investors relocate within and out of Surfers Paradise.",
    uniquePara2:
      "The suburb is dominated by high-rise towers and mid-rise unit blocks, with very few freestanding houses remaining. Moves here typically involve navigating building managers, shared lifts and basement car parks, which our team handles daily.",
    uniquePara3:
      "Lift bookings, loading dock reservations and tight basement access are the biggest challenges in Surfers Paradise. Many buildings along the Esplanade and Orchid Avenue require 48-hour notice for removalist access, and some restrict moves to weekday business hours only. Our team coordinates directly with building managers to lock in your time slot and ensure we have the right trolleys and blankets for lift-based moves.",
    nearbySubs: ["Broadbeach", "Southport", "Ashmore"],
    priceFrom: "$179/hr",
    serviceArea: "Surfers Paradise & Gold Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle:
      "Removalists Surfers Paradise | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Surfers Paradise with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a 22nd-floor apartment in Surfers to a townhouse in Robina. The R2G team managed the lift booking and loading dock perfectly — everything was wrapped and loaded without a scratch. Very professional.",
        name: "Karen L.",
        location: "Surfers Paradise",
        date: "January 2025",
      },
      {
        text: "We had a tight window to vacate our Surfers unit before the new tenants arrived. R2G were on time, worked fast and even helped disassemble our bed frame. Great value for the price.",
        name: "Daniel W.",
        location: "Surfers Paradise → Southport",
        date: "October 2024",
      },
      {
        text: "R2G handled our move from a holiday apartment on the Esplanade into a family home at Ashmore. The guys were careful with our glass dining table and had everything set up by lunchtime.",
        name: "Priya S.",
        location: "Surfers Paradise",
        date: "March 2025",
      },
    ],
    tips: [
      {
        heading: "Book your building's loading dock early.",
        text: "Most Surfers Paradise high-rises require a loading dock reservation 48 hours in advance. Share your building name when booking so we can coordinate timing with your body corporate or building manager.",
      },
      {
        heading: "Check lift dimensions before moving day.",
        text: "Some older Surfers towers have narrow lifts that won't fit king-size mattresses or large sofas. Let us know your building details so we can plan whether items need to go via the fire stairs or freight lift.",
      },
      {
        heading: "Avoid moving during Schoolies and major events.",
        text: "Surfers Paradise is gridlocked during Schoolies (late November), the Gold Coast 600 and major holiday weekends. If possible, schedule your move outside these periods to avoid traffic delays and parking issues.",
      },
      {
        heading: "Plan for paid parking and loading zones.",
        text: "Street parking in Surfers is metered and strictly patrolled. If your building doesn't have a loading dock, let us know so we can arrange a council parking permit or plan an alternative loading area.",
      },
    ],
  },
  {
    slug: "southport",
    name: "Southport",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "4km north of Surfers Paradise",
    postcode: "4215",
    latitude: -27.9714,
    longitude: 153.3980,
    uniquePara1:
      "Southport is the Gold Coast's official CBD and administrative hub, home to Griffith University's Gold Coast campus, the Gold Coast University Hospital and the Broadwater foreshore. It attracts a steady stream of students, medical professionals and young families relocating for work and study.",
    uniquePara2:
      "The suburb offers an unusually broad property mix — from modern waterfront apartments and older walk-up units along the Broadwater to established Queenslanders and newer townhouse estates further inland near Ferry Road.",
    uniquePara3:
      "Southport's mix of older weatherboard homes with narrow hallways and modern high-rise towers with loading dock requirements means no two moves here are the same. Our team comes prepared with both furniture blankets for Queenslander verandah moves and trolley systems for tower relocations. The light rail along Gold Coast Highway can restrict truck parking, so we plan routes that avoid tram zones.",
    nearbySubs: ["Surfers Paradise", "Labrador", "Ashmore"],
    priceFrom: "$179/hr",
    serviceArea: "Southport & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Southport | Professional Movers",
    metaDescription:
      "Trusted removalists in Southport with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Relocated from a 2-bedroom unit near Griffith Uni to a house in Helensvale. R2G were punctual, friendly and really efficient. They even wrapped my TV in a custom box. Couldn't be happier.",
        name: "Josh P.",
        location: "Southport",
        date: "February 2025",
      },
      {
        text: "We moved our elderly parents from their Queenslander in Southport to a retirement village in Runaway Bay. The team was incredibly patient and respectful with their belongings. Highly recommend.",
        name: "Michelle T.",
        location: "Southport → Runaway Bay",
        date: "August 2024",
      },
      {
        text: "R2G helped me move from a Broadwater apartment into a townhouse off Ferry Road — same suburb, just a short trip. They treated it like a full job. Everything arrived in perfect condition.",
        name: "Alex K.",
        location: "Southport",
        date: "December 2024",
      },
    ],
    tips: [
      {
        heading: "Watch for light rail disruptions.",
        text: "The G:link tram runs through the heart of Southport along Gold Coast Highway. Some streets near tram stops have restricted truck access or no-stopping zones. Share your address so we can plan the best approach.",
      },
      {
        heading: "Book around uni semester dates.",
        text: "Southport sees a surge in moves at the start and end of Griffith University semesters (February and November). Book 3–4 weeks ahead during these periods to lock in your preferred date.",
      },
      {
        heading: "Plan for older home layouts.",
        text: "Many Southport Queenslanders have narrow hallways, steep front stairs and low doorframes. Let us know about any tight access so we can bring the right equipment and plan furniture disassembly if needed.",
      },
    ],
  },
  {
    slug: "robina",
    name: "Robina",
    region: "Gold Coast Central",
    state: "QLD",
    distanceFromCBD: "10km south-west of Surfers Paradise",
    postcode: "4226",
    latitude: -28.0728,
    longitude: 153.3825,
    uniquePara1:
      "Robina is one of the Gold Coast's most popular master-planned communities, centred around Robina Town Centre, Bond University and Robina Stadium. The suburb draws families, professionals and students who value proximity to shops, transport and quality schools.",
    uniquePara2:
      "Properties in Robina range from large family homes in gated estates to modern townhouses and apartments near the Town Centre. Many homes sit on well-sized blocks with double garages, making truck access generally straightforward compared to beachside suburbs.",
    uniquePara3:
      "Robina's gated communities — including Robina Woods and several estates off Robina Parkway — sometimes have entry restrictions for large vehicles. Our team coordinates with estate security in advance to arrange gate codes and confirm truck size limits. For moves near Bond University, we also time arrivals to avoid the student traffic peaks around campus access roads.",
    nearbySubs: ["Varsity Lakes", "Mudgeeraba", "Mermaid Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Robina & Gold Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Robina | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Robina with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved our 4-bedroom house from Robina Woods to Varsity Lakes. The R2G crew handled the gated estate entry smoothly and had everything loaded by midday. Beds were reassembled at the new place — top service.",
        name: "Steve B.",
        location: "Robina",
        date: "January 2025",
      },
      {
        text: "We relocated from a Bond Uni apartment to a townhouse in Robina. Quick, careful and well-priced. The guys wrapped every piece of furniture and nothing was damaged. Would absolutely use R2G again.",
        name: "Liam H.",
        location: "Robina",
        date: "September 2024",
      },
      {
        text: "R2G moved us from Mudgeeraba into a new build in Robina. They were flexible when our settlement was delayed by a day and rescheduled without any extra charge. Really appreciated that.",
        name: "Nina J.",
        location: "Mudgeeraba → Robina",
        date: "November 2024",
      },
    ],
    tips: [
      {
        heading: "Confirm gated estate access.",
        text: "Several Robina estates have security gates with vehicle size limits or require advance notice for removalist trucks. Share your estate name when booking so we can arrange access codes and confirm our truck will fit.",
      },
      {
        heading: "Time your move around school runs.",
        text: "Robina Parkway and the streets around Robina State School and Somerset College get very congested during morning and afternoon school runs. An early-morning start can save significant time on moving day.",
      },
      {
        heading: "Use our storage if settlement dates don't align.",
        text: "Robina moves frequently involve buying into new estates where settlement dates shift. We offer short-term storage at our Brisbane depot so your belongings are safe if there's a gap between move-out and move-in.",
      },
    ],
  },
  {
    slug: "nerang",
    name: "Nerang",
    region: "Gold Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "10km west of Surfers Paradise",
    postcode: "4211",
    latitude: -27.9943,
    longitude: 153.3369,
    uniquePara1:
      "Nerang is the gateway to the Gold Coast Hinterland, sitting at the foot of the ranges where suburbia meets bushland. The suburb has a country-town feel with a strong local community, an active main street and easy access to both the M1 and Springbrook Road.",
    uniquePara2:
      "Property types in Nerang vary enormously — from compact units and townhouses near the train station to large acreage blocks and older brick-and-tile homes backing onto the Nerang River. Moves here often span the full spectrum of household sizes.",
    uniquePara3:
      "The western end of Nerang transitions into semi-rural blocks with long driveways, gravel access roads and properties set back from the street. Our trucks handle unsealed driveways regularly, and we bring extra trolleys and ramps for properties where the truck can't get close to the front door. For moves near the river, we also keep an eye on flood access during the wet season.",
    nearbySubs: ["Ashmore", "Pacific Pines", "Mudgeeraba"],
    priceFrom: "$179/hr",
    serviceArea: "Nerang & Gold Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Nerang | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Nerang with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from an acreage property in Nerang to a townhouse in Southport. Long driveway, lots of furniture — R2G handled it all without fuss. Really careful with our antique dresser too.",
        name: "Greg M.",
        location: "Nerang",
        date: "March 2025",
      },
      {
        text: "R2G relocated us from a unit near Nerang station to a house in Pacific Pines. On time, friendly crew and the quote was spot on — no surprise charges. Great experience overall.",
        name: "Sarah W.",
        location: "Nerang → Pacific Pines",
        date: "July 2024",
      },
      {
        text: "We needed to move quickly after selling our Nerang home. R2G fit us in within a week and stored some items at their depot until our new place was ready. Flexible and professional.",
        name: "Dave C.",
        location: "Nerang",
        date: "November 2024",
      },
    ],
    tips: [
      {
        heading: "Check driveway conditions on acreage blocks.",
        text: "Many Nerang properties on the hinterland side have long gravel or unsealed driveways. Let us know about your access so we can choose the right truck and bring extra equipment if needed.",
      },
      {
        heading: "Be aware of flood-prone streets near the river.",
        text: "Parts of Nerang near the Nerang River can be affected by flooding during heavy rain. If you're moving during the wet season, we'll monitor conditions and communicate any timing adjustments early.",
      },
      {
        heading: "Use the M1 advantage for interstate moves.",
        text: "Nerang's proximity to the M1 makes it one of the fastest Gold Coast suburbs to move to or from Brisbane. An early-morning start means we can beat the Coomera–Helensvale traffic and keep your move efficient.",
      },
    ],
  },
  {
    slug: "burleigh-heads",
    name: "Burleigh Heads",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "10km south of Surfers Paradise",
    postcode: "4220",
    latitude: -28.0847,
    longitude: 153.4433,
    uniquePara1:
      "Burleigh Heads is one of the Gold Coast's most sought-after beachside suburbs, known for its iconic headland, thriving cafe culture, boutique shopping along James Street and a laid-back village atmosphere that draws young professionals and families alike.",
    uniquePara2:
      "The suburb features a mix of renovated mid-century houses on the hillside, modern apartment blocks along the Esplanade and older walk-up units through the village precinct. Property values here are among the highest on the Coast, and moves often involve high-value furniture and artwork.",
    uniquePara3:
      "Burleigh's hillside streets are steep, narrow and often have no dedicated parking — particularly around the headland and along Goodwin Terrace. Our team uses smaller trucks or shuttle vehicles when needed to navigate the tight turns, and we bring extra padding for high-value items common in Burleigh homes. We also time moves to avoid the weekend cafe and beach traffic that congests James Street and the Gold Coast Highway.",
    nearbySubs: ["Palm Beach", "Varsity Lakes", "Mermaid Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Burleigh Heads & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Burleigh Heads | Professional Movers",
    metaDescription:
      "Trusted removalists in Burleigh Heads with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a hillside house in Burleigh to a beachfront unit in Palm Beach. The R2G crew navigated the steep driveway with care and wrapped our artwork perfectly. Couldn't fault the service.",
        name: "Fiona R.",
        location: "Burleigh Heads",
        date: "February 2025",
      },
      {
        text: "R2G helped us downsize from a 4-bedroom Burleigh home to a 2-bedroom apartment in Broadbeach. They were patient, organised and gave us honest advice about what would fit. Top-notch team.",
        name: "Mark D.",
        location: "Burleigh Heads → Broadbeach",
        date: "June 2024",
      },
      {
        text: "Quick and careful move from a unit on the Esplanade to a house in Mudgeeraba. The guys protected every piece of furniture and finished ahead of schedule. Will definitely use R2G again.",
        name: "Jen H.",
        location: "Burleigh Heads",
        date: "October 2024",
      },
    ],
    tips: [
      {
        heading: "Plan for steep and narrow hillside streets.",
        text: "Many Burleigh Heads properties sit on steep blocks with limited truck access. Share photos of your driveway or street when booking so we can plan the best approach and truck size.",
      },
      {
        heading: "Avoid weekend morning moves near James Street.",
        text: "The James Street cafe precinct and surrounding streets are packed on weekend mornings. A weekday or early Saturday start avoids the worst of the foot and vehicle traffic.",
      },
      {
        heading: "Protect high-value art and furnishings.",
        text: "Burleigh homes often feature valuable artwork, designer furniture and surfboards. Let us know about any special items so we can bring custom crating, art boxes and extra protective wrapping.",
      },
      {
        heading: "Check council parking permits for beachfront moves.",
        text: "Properties along the Esplanade and Goodwin Terrace have limited street parking. We can arrange a temporary council parking permit if needed to guarantee a loading zone close to your door.",
      },
    ],
  },
  {
    slug: "broadbeach",
    name: "Broadbeach",
    region: "Gold Coast Central",
    state: "QLD",
    distanceFromCBD: "3km south of Surfers Paradise",
    postcode: "4218",
    latitude: -28.0275,
    longitude: 153.4316,
    uniquePara1:
      "Broadbeach is a polished beachside suburb that pairs resort-style living with a thriving dining and entertainment scene centred around The Star Casino, Oasis Shopping Centre and Pacific Fair. It's a popular choice for professionals, downsizers and investors.",
    uniquePara2:
      "The suburb is heavily apartment-dominated, with a skyline of modern high-rises and mid-rise complexes stretching from the beach to the light rail corridor. A handful of townhouse pockets exist closer to Mermaid Beach, but most moves here are unit-based.",
    uniquePara3:
      "Like Surfers Paradise, Broadbeach moves revolve around building logistics — loading docks, freight lifts and body corporate rules. Many towers along Surf Parade and the Esplanade have strict move-in windows, often limited to weekday business hours. Our team handles these bookings routinely and arrives with the right trolleys and blanket wraps to move efficiently through shared corridors and lifts without damaging common areas.",
    nearbySubs: ["Surfers Paradise", "Mermaid Beach", "Robina"],
    priceFrom: "$179/hr",
    serviceArea: "Broadbeach & Gold Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Broadbeach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Broadbeach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Relocated from a 1-bedroom in Broadbeach to a 3-bedroom unit in Robina. R2G coordinated the building access, wrapped everything carefully and were done in under three hours. Fantastic service.",
        name: "Tina G.",
        location: "Broadbeach",
        date: "January 2025",
      },
      {
        text: "We moved into a high-rise near Pacific Fair. R2G worked within the building's strict 9am–3pm move window and still finished with time to spare. Very impressed with the efficiency.",
        name: "Ryan O.",
        location: "Broadbeach",
        date: "September 2024",
      },
      {
        text: "R2G moved our furniture from Broadbeach to a storage unit while we travelled overseas for six months. Everything was inventoried, wrapped and stored safely. Picked it all up when we got back — perfect condition.",
        name: "Laura M.",
        location: "Broadbeach",
        date: "May 2024",
      },
    ],
    tips: [
      {
        heading: "Confirm body corporate move-in rules.",
        text: "Most Broadbeach towers have specific move-in days and time slots, often requiring a deposit or bond. Share your building details when booking so we can coordinate with your body corporate.",
      },
      {
        heading: "Allow extra time during conventions and events.",
        text: "The Gold Coast Convention Centre in Broadbeach hosts major events year-round. Road closures and traffic spikes around these events can add time to your move — check the events calendar before locking in a date.",
      },
      {
        heading: "Use the light rail for access planning.",
        text: "The G:link tram runs through Broadbeach, and some streets near stations have no-stopping zones. If you're near a tram stop, let us know so we can plan a loading approach that avoids restricted areas.",
      },
    ],
  },
  {
    slug: "coomera",
    name: "Coomera",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "20km north of Surfers Paradise",
    postcode: "4209",
    latitude: -27.8635,
    longitude: 153.3150,
    uniquePara1:
      "Coomera is one of the Gold Coast's fastest-growing suburbs, with new housing estates, a major Westfield shopping centre and proximity to Dreamworld and the Coomera train station drawing young families from across south-east Queensland.",
    uniquePara2:
      "The suburb is overwhelmingly new-build, with modern 3- to 5-bedroom houses dominating the estates that have sprung up over the past decade. Townhouse developments are also increasing near the town centre and station precinct.",
    uniquePara3:
      "Coomera's rapid growth means many streets in newer estates are still being finished — incomplete footpaths, temporary speed humps and construction vehicles can affect truck access. Our team scouts new estates regularly and knows which streets are fully accessible. We also time moves to avoid the morning M1 southbound bottleneck at the Coomera interchange, which can add 30 minutes to a trip to the southern Gold Coast.",
    nearbySubs: ["Helensvale", "Ormeau", "Pacific Pines"],
    priceFrom: "$179/hr",
    serviceArea: "Coomera & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Coomera | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Coomera with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved into our brand-new home in Coomera Springs from a rental in Southport. R2G were careful with our furniture on the new floors and even laid down protective runners. Very thoughtful crew.",
        name: "Emma F.",
        location: "Southport → Coomera",
        date: "March 2025",
      },
      {
        text: "R2G relocated us from Sydney to Coomera — a full interstate move. Everything arrived on schedule and undamaged. The team reassembled beds, bookshelves and our kids' bunk beds. Outstanding service.",
        name: "Paul & Kim R.",
        location: "Sydney → Coomera",
        date: "December 2024",
      },
      {
        text: "Quick local move from an apartment near Coomera station to a house in the new estate. R2G were efficient, affordable and the guys were genuinely friendly. Would recommend to anyone.",
        name: "Tahlia N.",
        location: "Coomera",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Check if your new estate has truck access.",
        text: "Many Coomera estates are still under construction and some streets may not yet be fully accessible for large trucks. Share your lot number and estate name when booking so we can verify access.",
      },
      {
        heading: "Start early to beat M1 traffic.",
        text: "The M1 through Coomera gets heavily congested during morning peak. An early start (before 7am) means we can load and hit the road before the worst of the southbound traffic.",
      },
      {
        heading: "Protect new floors in brand-new homes.",
        text: "Moving into a new build in Coomera? We lay down protective runners and use felt pads on furniture legs to avoid scratching freshly laid timber or tile floors.",
      },
      {
        heading: "Coordinate with your builder's timeline.",
        text: "New Coomera homes sometimes have last-minute handover delays. Our flexible booking policy means we can reschedule at short notice if your settlement or handover date shifts.",
      },
    ],
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "14km north of Surfers Paradise",
    postcode: "4212",
    latitude: -27.9093,
    longitude: 153.3415,
    uniquePara1:
      "Helensvale is a well-established northern Gold Coast suburb with excellent transport links — it's home to both a train station and the northern terminus of the G:link light rail. The suburb is popular with commuting families who want space, good schools and easy access to both Brisbane and the Coast.",
    uniquePara2:
      "The area is characterised by spacious family homes on generous blocks, many in well-maintained estates like The Observatory and Helensvale Town Centre precinct. There's also a growing number of townhouse and villa developments catering to downsizers.",
    uniquePara3:
      "Helensvale's leafy, wide streets generally offer excellent truck access, making it one of the more straightforward suburbs to move in and out of on the Gold Coast. The main consideration is timing — the interchange where Hope Island Road meets the M1 can gridlock during peak hours. We schedule Helensvale moves to avoid these windows, and for larger homes with double garages, we often use our biggest trucks to minimise trips.",
    nearbySubs: ["Pacific Pines", "Runaway Bay", "Coomera"],
    priceFrom: "$179/hr",
    serviceArea: "Helensvale & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Helensvale | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Helensvale with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved our large 5-bedroom home from Helensvale to a downsized townhouse nearby. R2G sent three removalists and had the entire house packed onto the truck in under four hours. Incredibly efficient.",
        name: "Bob & Jan W.",
        location: "Helensvale",
        date: "February 2025",
      },
      {
        text: "R2G helped us relocate from Brisbane to Helensvale. The interstate logistics were seamless — everything arrived on the agreed day, perfectly wrapped. The crew even hung our TV on the wall.",
        name: "Chris A.",
        location: "Brisbane → Helensvale",
        date: "October 2024",
      },
      {
        text: "We used R2G for a quick move from Helensvale to Pacific Pines. Only a few streets apart but they treated it like any big job — careful, professional and no shortcuts. Great team.",
        name: "Samira E.",
        location: "Helensvale → Pacific Pines",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Avoid the M1 interchange during peak hours.",
        text: "The Hope Island Road and M1 interchange gets very congested between 7–9am and 3:30–5:30pm. Schedule your move start before 7am or after 9am to keep travel time between locations minimal.",
      },
      {
        heading: "Take advantage of wide streets and good access.",
        text: "Helensvale's generous street widths and driveways often allow our largest trucks. Let us know your home size so we can send the right truck and potentially complete your move in a single load.",
      },
      {
        heading: "Plan around school zones on Helensvale Road.",
        text: "Several schools along Helensvale Road create congestion during drop-off and pick-up times. If your move route passes these, an early start or mid-morning departure works best.",
      },
    ],
  },
  {
    slug: "varsity-lakes",
    name: "Varsity Lakes",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "12km south of Surfers Paradise",
    postcode: "4227",
    latitude: -28.0877,
    longitude: 153.4090,
    uniquePara1:
      "Varsity Lakes is a modern master-planned suburb built around a chain of man-made lakes, offering a family-friendly environment with walking paths, parks and easy access to Robina Town Centre and Bond University. It's particularly popular with young families and professionals.",
    uniquePara2:
      "The suburb is predominantly made up of modern two-storey homes, townhouse complexes and lakeside villas built from the early 2000s onwards. Most properties have good driveways and garages, though some townhouse clusters have shared access lanes.",
    uniquePara3:
      "The interconnected lake system means some Varsity Lakes streets have narrow road bridges and weight-restricted crossings that limit our truck options. Our drivers know which routes to take and which bridges to avoid with a fully loaded truck. For the townhouse complexes along Varsity Parade, we use smaller vehicles to navigate the shared driveways and tight visitor parking areas.",
    nearbySubs: ["Robina", "Burleigh Heads", "Mudgeeraba"],
    priceFrom: "$179/hr",
    serviceArea: "Varsity Lakes & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Varsity Lakes | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Varsity Lakes with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a lakeside villa in Varsity Lakes to a house in Burleigh. R2G knew exactly which streets to take to avoid the narrow bridges. Everything was delivered safely and on time.",
        name: "Amanda B.",
        location: "Varsity Lakes",
        date: "January 2025",
      },
      {
        text: "We relocated from a townhouse near Bond Uni to a family home in Varsity Lakes. R2G's team of two worked tirelessly and had us fully set up by 3pm. Great communication throughout.",
        name: "Jason T.",
        location: "Varsity Lakes",
        date: "November 2024",
      },
      {
        text: "R2G moved our family from Melbourne to Varsity Lakes — full interstate move. Not a single item was damaged over the entire journey. The crew was friendly and reassembled all our furniture perfectly.",
        name: "Mel & Scott V.",
        location: "Melbourne → Varsity Lakes",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Check bridge access near lakeside properties.",
        text: "Some Varsity Lakes streets have narrow bridges with weight restrictions. Share your exact address so we can plan a route that avoids restricted crossings and select the right truck size.",
      },
      {
        heading: "Navigate townhouse shared driveways.",
        text: "Many townhouse complexes have shared driveways and limited turning space. If you're in a townhouse cluster, let us know so we can send an appropriately sized vehicle.",
      },
      {
        heading: "Make the most of easy highway access.",
        text: "Varsity Lakes has direct access to the M1 via Varsity Parade, making it efficient for interstate and long-distance moves. An early start lets us get loaded and on the motorway before peak traffic.",
      },
    ],
  },
  {
    slug: "mudgeeraba",
    name: "Mudgeeraba",
    region: "Gold Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "12km south-west of Surfers Paradise",
    postcode: "4213",
    latitude: -28.0803,
    longitude: 153.3666,
    uniquePara1:
      "Mudgeeraba is a leafy hinterland suburb with a village atmosphere, set between the M1 motorway and the foothills of Springbrook National Park. It's known for its excellent schools — including Somerset College and Mudgeeraba Creek State School — and appeals to families wanting space and a quieter lifestyle.",
    uniquePara2:
      "Properties range from sprawling acreage blocks in the upper reaches near Bonogin to modern family homes in the estates closer to the M1. Older brick-and-tile homes along Mudgeeraba Road sit alongside newer builds, giving the suburb a pleasantly varied character.",
    uniquePara3:
      "The hinterland end of Mudgeeraba features steep, winding roads and properties set well back from the street on large blocks. Our team regularly handles these semi-rural moves with extended carry distances, using hand trolleys and ramps to bridge the gap between truck and front door. For properties up towards Bonogin and Springbrook Road, we also monitor weather conditions as heavy rain can make unsealed sections slippery.",
    nearbySubs: ["Robina", "Varsity Lakes", "Nerang"],
    priceFrom: "$179/hr",
    serviceArea: "Mudgeeraba & Gold Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Mudgeeraba | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Mudgeeraba with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from an acreage property in upper Mudgeeraba to a townhouse in Robina. They handled the long driveway and heavy furniture with ease. Wrapped everything perfectly — not a mark on anything.",
        name: "Linda P.",
        location: "Mudgeeraba",
        date: "March 2025",
      },
      {
        text: "We moved from Mudgeeraba to Helensvale — a big family home with a pool table and gym equipment. The R2G team brought the right gear and knew exactly how to handle the heavy items. Brilliant job.",
        name: "James K.",
        location: "Mudgeeraba → Helensvale",
        date: "August 2024",
      },
      {
        text: "Smooth and professional move from a Mudgeeraba village unit to a house in Varsity Lakes. R2G quoted fairly, arrived on time and finished early. Highly recommend them.",
        name: "Christine Y.",
        location: "Mudgeeraba",
        date: "December 2024",
      },
    ],
    tips: [
      {
        heading: "Warn us about long or unsealed driveways.",
        text: "Upper Mudgeeraba and Bonogin properties often have long, steep or gravel driveways. Let us know the access details so we can choose the right truck and bring extra carrying equipment.",
      },
      {
        heading: "Allow extra time for hinterland moves.",
        text: "Moves from upper Mudgeeraba properties take longer due to carry distances and winding road access. We factor this into our quotes, but it helps to start early to make the most of daylight.",
      },
      {
        heading: "Secure outdoor furniture and garden items.",
        text: "Mudgeeraba acreage homes often have substantial outdoor settings, BBQs and garden equipment. Make a list of outdoor items so we can bring the right covers and strapping for these.",
      },
    ],
  },
  {
    slug: "pacific-pines",
    name: "Pacific Pines",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "11km north-west of Surfers Paradise",
    postcode: "4211",
    latitude: -27.9553,
    longitude: 153.3268,
    uniquePara1:
      "Pacific Pines is a well-planned residential suburb on the Gold Coast's northern ridge, offering families spacious homes, excellent schools and a quiet, community-focused lifestyle with views out to the hinterland ranges and the coast.",
    uniquePara2:
      "The suburb consists almost entirely of modern family homes on well-sized blocks, built from the late 1990s onwards. Properties are generally well-maintained with double garages and accessible driveways, though some streets on the steeper sections have sharper inclines.",
    uniquePara3:
      "Pacific Pines sits on elevated terrain with some streets featuring steep grades and cul-de-sacs that can challenge larger trucks. Our team knows which streets require smaller vehicles and which allow full-size trucks to turn easily. The suburb's position near the intersection of the M1 and Nerang–Broadbeach Road means we can access any Gold Coast destination quickly once loaded, making Pacific Pines an efficient suburb for local moves.",
    nearbySubs: ["Helensvale", "Nerang", "Ashmore"],
    priceFrom: "$179/hr",
    serviceArea: "Pacific Pines & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Pacific Pines | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Pacific Pines with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved our 4-bedroom home from Pacific Pines to Helensvale. The R2G team navigated the steep cul-de-sac without any issues and had the truck loaded in three hours flat. Excellent work.",
        name: "Tony B.",
        location: "Pacific Pines",
        date: "February 2025",
      },
      {
        text: "R2G relocated us from Ashmore to Pacific Pines. They were punctual, wrapped everything securely and reassembled our kids' beds at the new house. Very happy with the service.",
        name: "Natalie S.",
        location: "Ashmore → Pacific Pines",
        date: "October 2024",
      },
      {
        text: "Great experience with R2G for a local Pacific Pines to Nerang move. Friendly team, fair pricing, and they even moved our heavy piano without batting an eye. Would use again.",
        name: "Peter G.",
        location: "Pacific Pines",
        date: "May 2024",
      },
    ],
    tips: [
      {
        heading: "Note any steep cul-de-sacs or inclines.",
        text: "Some Pacific Pines streets have significant grades that affect truck access. Share your street name when booking so we can check access and select the best-sized truck.",
      },
      {
        heading: "Take advantage of central Gold Coast access.",
        text: "Pacific Pines' position near the M1 and Nerang–Broadbeach Road makes it a great base for moves to any part of the Gold Coast. Let us know your destination so we can plan the most efficient route.",
      },
      {
        heading: "Prepare large family homes for a full-day move.",
        text: "Pacific Pines homes tend to be spacious — 4 to 5 bedrooms with double garages full of items. An honest inventory helps us send the right crew size and truck to get the job done in one trip.",
      },
    ],
  },
  {
    slug: "ashmore",
    name: "Ashmore",
    region: "Gold Coast Central",
    state: "QLD",
    distanceFromCBD: "5km west of Surfers Paradise",
    postcode: "4214",
    latitude: -27.9882,
    longitude: 153.3815,
    uniquePara1:
      "Ashmore is a central Gold Coast suburb that quietly offers one of the best value propositions on the Coast — close to Surfers Paradise and Southport yet more affordable, with good schools, established parklands and a genuine suburban feel.",
    uniquePara2:
      "The suburb features a comfortable mix of older Queenslanders and brick-and-tile homes from the 1980s alongside modern renovations and new dual-occupancy builds. Townhouse pockets are growing, particularly near Ashmore City shopping centre.",
    uniquePara3:
      "Ashmore's older streetscapes mean some properties have narrow driveways, overgrown hedges or carports that restrict truck positioning. Our team carries battery-powered hedge trimmers for overhanging branches (with your permission) and uses furniture trolleys to manage the longer carries common when trucks can't park right at the door. The suburb's central position also means we can schedule back-to-back moves efficiently, often fitting Ashmore clients into convenient morning or afternoon slots.",
    nearbySubs: ["Southport", "Nerang", "Surfers Paradise"],
    priceFrom: "$179/hr",
    serviceArea: "Ashmore & Gold Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Ashmore | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Ashmore with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a 3-bed brick home in Ashmore to a unit in Southport. R2G's team was respectful of the older property, carefully manoeuvring our wide sofa through the narrow hallway. No damage at all.",
        name: "Helen W.",
        location: "Ashmore",
        date: "January 2025",
      },
      {
        text: "R2G handled our move from Ashmore to Surfers — a short trip but with loads of furniture. The two-man team worked non-stop and had everything set up by early afternoon. Excellent value.",
        name: "Marcus D.",
        location: "Ashmore → Surfers Paradise",
        date: "November 2024",
      },
      {
        text: "We used R2G to move my parents from their family home of 30 years in Ashmore to a villa in Benowa. The team was patient and compassionate — they understood it was an emotional day. Truly professional.",
        name: "Rachel Q.",
        location: "Ashmore",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Check narrow driveways and carport clearance.",
        text: "Many older Ashmore homes have single-width driveways or low carports that won't fit a large truck. Share your driveway details when booking so we can plan accordingly.",
      },
      {
        heading: "Clear overhanging vegetation before moving day.",
        text: "Established Ashmore properties often have mature trees and hedges that overhang driveways. Trimming these back before your move helps us position the truck as close to your door as possible.",
      },
      {
        heading: "Consider a mid-week move for the best scheduling.",
        text: "Ashmore's central location means we can often fit moves here into mid-week slots at short notice. If your dates are flexible, ask about our mid-week availability for the most convenient time slots.",
      },
    ],
  },
  {
    slug: "mermaid-beach",
    name: "Mermaid Beach",
    region: "Gold Coast Central",
    state: "QLD",
    distanceFromCBD: "5km south of Surfers Paradise",
    postcode: "4218",
    latitude: -28.0430,
    longitude: 153.4370,
    uniquePara1:
      "Mermaid Beach is an upscale coastal suburb between Broadbeach and Burleigh Heads, known for its Hedges Avenue millionaire row, boutique dining scene along the Gold Coast Highway and a mix of luxury living with older beach shacks being progressively replaced by prestige builds.",
    uniquePara2:
      "The property landscape here is rapidly evolving — original 1960s beach cottages sit alongside multimillion-dollar new homes and high-end apartment developments. Moves in Mermaid Beach often involve high-value furnishings, delicate art and custom-built pieces.",
    uniquePara3:
      "Hedges Avenue and surrounding beachfront streets are narrow with on-street parking at a premium, making truck positioning a key challenge. Our team uses shuttle vehicles when needed and brings extra protective materials for the high-value items typical of Mermaid Beach homes. For moves involving new builds under construction, we coordinate with site managers to ensure safe access around scaffolding and building materials.",
    nearbySubs: ["Broadbeach", "Burleigh Heads", "Robina"],
    priceFrom: "$179/hr",
    serviceArea: "Mermaid Beach & Gold Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Mermaid Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Mermaid Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us into our new Mermaid Beach home from a unit in Surfers. They brought extra blankets for our artwork and designer furniture, and the crew was incredibly careful throughout. First-class service.",
        name: "Victoria L.",
        location: "Surfers Paradise → Mermaid Beach",
        date: "March 2025",
      },
      {
        text: "Moved from Mermaid Beach to an acreage in Mudgeeraba. The R2G team handled the narrow street access beautifully and had everything loaded despite limited parking out front. Very professional.",
        name: "Andrew J.",
        location: "Mermaid Beach",
        date: "August 2024",
      },
      {
        text: "We downsized from a large Mermaid Beach house to a beachfront apartment in Broadbeach. R2G helped us work out what would fit and stored the overflow at their depot. Seamless process.",
        name: "Sue & Ian K.",
        location: "Mermaid Beach → Broadbeach",
        date: "December 2024",
      },
    ],
    tips: [
      {
        heading: "Plan for narrow beachfront street access.",
        text: "Hedges Avenue and surrounding beachside streets are narrow with heavy parking. Share your address so we can assess whether a smaller shuttle vehicle is needed alongside our main truck.",
      },
      {
        heading: "Protect high-value and custom furnishings.",
        text: "Mermaid Beach homes often contain designer furniture, artwork and custom cabinetry. Let us know about any high-value or oversized items so we can bring custom crating and additional padding.",
      },
      {
        heading: "Coordinate around active construction sites.",
        text: "With so many new builds in Mermaid Beach, your new or old address may be near active construction. Let us know about any nearby building works so we can plan safe access and timing.",
      },
    ],
  },
  {
    slug: "coolangatta",
    name: "Coolangatta",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "25km south of Surfers Paradise",
    postcode: "4225",
    latitude: -28.1666,
    longitude: 153.5369,
    uniquePara1:
      "Coolangatta sits at the southern tip of the Gold Coast, right on the NSW border, and is home to the Gold Coast Airport. The suburb has a relaxed, small-town beach vibe with stunning views from Point Danger and Snapper Rocks, attracting retirees, surfers and families seeking an affordable beachside lifestyle.",
    uniquePara2:
      "Properties in Coolangatta range from older walk-up apartment blocks and fibro beach cottages to renovated townhouses and modern beachfront developments along Marine Parade. The terrain is hilly near the headland, with flatter pockets closer to the airport.",
    uniquePara3:
      "Coolangatta's position at the far southern end of the Gold Coast means moves to or from northern suburbs involve a longer travel component along the M1 or Gold Coast Highway. Our team factors this into quotes so there are no surprises. For properties near the headland, steep driveways and limited street width are common challenges — we use smaller trucks when needed and bring extra securing straps for the inclined driveways.",
    nearbySubs: ["Tugun", "Currumbin", "Palm Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Coolangatta & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Coolangatta | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Coolangatta with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Relocated from Coolangatta to Tweed Heads — literally across the state border. R2G handled it efficiently and at a great price. The crew was friendly and careful with our vintage surf memorabilia.",
        name: "Wayne S.",
        location: "Coolangatta",
        date: "February 2025",
      },
      {
        text: "We moved my mum from her hillside unit near Point Danger to a retirement home in Southport. R2G managed the steep access perfectly and treated her belongings with real care.",
        name: "Debbie M.",
        location: "Coolangatta → Southport",
        date: "September 2024",
      },
      {
        text: "R2G moved us from Brisbane to Coolangatta for a sea change. Full 4-bedroom house move, everything arrived in perfect condition. The team was outstanding — nothing was too much trouble.",
        name: "Rick & Tanya J.",
        location: "Brisbane → Coolangatta",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Factor in travel time for northern Gold Coast moves.",
        text: "Coolangatta is 25km south of Surfers Paradise. Moves involving the northern Gold Coast or Brisbane will include travel time — we quote this transparently so there are no surprises.",
      },
      {
        heading: "Check headland property access.",
        text: "Properties near Point Danger and Snapper Rocks often have steep driveways and narrow streets. Share photos or access details so we can plan the right truck size and approach.",
      },
      {
        heading: "Cross-border moves into NSW are no problem.",
        text: "Coolangatta borders Tweed Heads in NSW. We handle cross-border moves daily and there's no additional charge for crossing the state line on local moves.",
      },
    ],
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "14km south of Surfers Paradise",
    postcode: "4221",
    latitude: -28.1114,
    longitude: 153.4597,
    uniquePara1:
      "Palm Beach is a popular southern Gold Coast beachside suburb with a growing reputation as a food and lifestyle destination. The Palm Beach Parklands, beachfront dining strip and family-friendly atmosphere make it one of the most in-demand suburbs for young families and professionals.",
    uniquePara2:
      "The suburb has a diverse property mix — from older beach houses and walk-up units to contemporary townhouses and new mid-rise apartment buildings along the Gold Coast Highway. The beachside blocks east of the highway are particularly sought after and often feature renovated homes.",
    uniquePara3:
      "Palm Beach's main moving challenges come from the narrow east-west streets between the highway and the beach, where on-street parking from beachgoers can block truck access. Our team often schedules beachside Palm Beach moves for early mornings — before the parking fills up — and uses smaller trucks to navigate the tighter streets. For newer apartment buildings, we coordinate loading dock access and lift bookings in advance.",
    nearbySubs: ["Burleigh Heads", "Currumbin", "Tugun"],
    priceFrom: "$179/hr",
    serviceArea: "Palm Beach & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Palm Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Palm Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a beachside cottage in Palm Beach to a new townhouse in Varsity Lakes. R2G arrived early to beat the beach parking rush and had us loaded by mid-morning. Smart planning, great crew.",
        name: "Kate F.",
        location: "Palm Beach",
        date: "January 2025",
      },
      {
        text: "R2G relocated us from Currumbin to Palm Beach — just a quick local move. They were punctual, friendly and took great care with our heavy timber furniture. Pricing was very fair.",
        name: "Simon R.",
        location: "Currumbin → Palm Beach",
        date: "November 2024",
      },
      {
        text: "We moved into a new apartment on the Palm Beach highway strip. R2G coordinated with the building manager, booked the freight lift and had everything moved in by 2pm. Very smooth process.",
        name: "Olivia C.",
        location: "Palm Beach",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Start early for beachside properties.",
        text: "Streets east of the Gold Coast Highway fill with beachgoer parking by mid-morning, especially on weekends. An early start ensures our truck has clear access to your property.",
      },
      {
        heading: "Check apartment building move-in rules.",
        text: "Newer apartment buildings along the highway have specific move-in procedures. Share your building details when booking so we can coordinate lift access and loading dock availability.",
      },
      {
        heading: "Protect outdoor and beach lifestyle items.",
        text: "Palm Beach homes often include surfboards, paddleboards, kayaks and outdoor dining settings. Let us know about these items so we can bring appropriate racks and strapping.",
      },
    ],
  },
  {
    slug: "tugun",
    name: "Tugun",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "20km south of Surfers Paradise",
    postcode: "4224",
    latitude: -28.1479,
    longitude: 153.4989,
    uniquePara1:
      "Tugun is a quiet, unpretentious beach suburb nestled between Palm Beach and Coolangatta, with a tight-knit community feel, a charming village shopping strip and a beautiful stretch of uncrowded beach. It's increasingly popular with families priced out of neighbouring Burleigh and Palm Beach.",
    uniquePara2:
      "The suburb features a mix of older fibro and brick cottages, renovated beach houses and a growing number of modern duplexes and townhouses replacing the original stock. Most properties are single-level or low-set, making furniture access relatively straightforward.",
    uniquePara3:
      "Tugun's proximity to Gold Coast Airport means some streets experience aircraft noise, but the flat terrain and grid-pattern streets make it one of the easier southern suburbs to move in and out of. The main challenge is the limited parking on the narrow residential streets during school hours near Tugun State School. Our team times moves around school drop-off and pick-up to avoid getting boxed in.",
    nearbySubs: ["Coolangatta", "Palm Beach", "Currumbin"],
    priceFrom: "$179/hr",
    serviceArea: "Tugun & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Tugun | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Tugun with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a cute fibro cottage in Tugun to a new build in Coomera. R2G treated our old place with respect and navigated the narrow street easily. Everything arrived without a scratch.",
        name: "Brooke H.",
        location: "Tugun",
        date: "March 2025",
      },
      {
        text: "R2G helped us relocate from Coolangatta to Tugun — a quick move but they were just as thorough as for a big job. Great value and the guys were genuinely nice to deal with.",
        name: "Gary N.",
        location: "Coolangatta → Tugun",
        date: "October 2024",
      },
      {
        text: "We used R2G for a Tugun to Robina move. Smooth from start to finish. The team was efficient, friendly and had everything set up before dinner. Would definitely use them again.",
        name: "Angela T.",
        location: "Tugun → Robina",
        date: "May 2024",
      },
    ],
    tips: [
      {
        heading: "Avoid school zone parking congestion.",
        text: "Streets near Tugun State School are very tight during drop-off (8:30–9am) and pick-up (2:30–3:15pm). Schedule your move start before or after these windows for the smoothest access.",
      },
      {
        heading: "Take advantage of flat, easy access.",
        text: "Tugun's flat terrain and low-set homes make it one of the easier suburbs to move in. This often means faster loading times and a more efficient move overall.",
      },
      {
        heading: "Let us know about renovated versus original homes.",
        text: "Original Tugun cottages can have narrow doorways and low ceilings that need careful furniture manoeuvring. If your home is an older build, share the details so we can plan for any tight spots.",
      },
    ],
  },
  {
    slug: "ormeau",
    name: "Ormeau",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "30km north of Surfers Paradise",
    postcode: "4208",
    latitude: -27.7611,
    longitude: 153.2451,
    uniquePara1:
      "Ormeau is one of the northern Gold Coast's fastest-growing suburbs, straddling the M1 corridor between Brisbane and the Gold Coast. Its affordability, new estates and proximity to the Ormeau train station make it a magnet for first-home buyers and young families relocating from both Brisbane and the southern Gold Coast.",
    uniquePara2:
      "The suburb is split between an established western side with older homes on larger blocks and the rapidly expanding eastern side featuring brand-new housing estates with modern 4-bedroom homes, parks and community facilities.",
    uniquePara3:
      "Like Coomera, Ormeau's newer estates can have incomplete road infrastructure — temporary roundabouts, missing kerbing and construction traffic. Our drivers are familiar with the major estates and know which access points are clear. Ormeau's position at the northern fringe also means moves to southern Gold Coast destinations involve the full M1 journey, so we schedule strategically to avoid the worst congestion between Coomera and Nerang.",
    nearbySubs: ["Coomera", "Helensvale", "Pacific Pines"],
    priceFrom: "$179/hr",
    serviceArea: "Ormeau & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Ormeau | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Ormeau with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a rental in Logan to our first home in Ormeau. R2G were affordable, reliable and incredibly careful with our things. They even helped rearrange the lounge room at the new place. Legends.",
        name: "Jake & Steph L.",
        location: "Logan → Ormeau",
        date: "February 2025",
      },
      {
        text: "R2G handled our move from Ormeau to Southport. Long drive but they planned the timing perfectly to miss M1 traffic. Everything was wrapped properly and arrived in great shape.",
        name: "Donna F.",
        location: "Ormeau → Southport",
        date: "September 2024",
      },
      {
        text: "We relocated from Sydney to Ormeau for a tree change. R2G managed the entire interstate move seamlessly — pickup in Sydney, delivery three days later, everything accounted for. Excellent communication throughout.",
        name: "Matt P.",
        location: "Sydney → Ormeau",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Verify access in new housing estates.",
        text: "Ormeau's rapidly developing eastern estates may have incomplete roads or construction zones. Share your lot and estate details so we can confirm the best truck access point.",
      },
      {
        heading: "Plan M1 travel around peak times.",
        text: "Ormeau is 30km from Surfers Paradise via the M1. Moves involving the southern Gold Coast benefit from a pre-7am departure or a mid-morning start to avoid motorway congestion.",
      },
      {
        heading: "Consider our Brisbane depot for storage.",
        text: "Ormeau sits roughly halfway between Brisbane and the Gold Coast. Our Archerfield depot is convenient for Ormeau residents who need short-term storage during a settlement gap.",
      },
      {
        heading: "Protect new-build floors and walls.",
        text: "Moving into a brand-new Ormeau home? We use protective runners, corner guards and felt pads to ensure your new walls and floors stay pristine on move-in day.",
      },
    ],
  },
  {
    slug: "runaway-bay",
    name: "Runaway Bay",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "8km north of Surfers Paradise",
    postcode: "4216",
    latitude: -27.9364,
    longitude: 153.3973,
    uniquePara1:
      "Runaway Bay is a waterfront suburb on the Broadwater, popular with boating families and retirees who love the marina lifestyle, calm waterways and proximity to Harbour Town outlet shopping. The suburb has a relaxed, established feel with tree-lined streets and well-kept homes.",
    uniquePara2:
      "Properties in Runaway Bay range from waterfront canal homes with private pontoons to retirement villages, townhouse complexes and established brick homes on standard suburban blocks. The canal estates are the standout feature, with many homes designed around water access.",
    uniquePara3:
      "Canal-front properties in Runaway Bay often have pontoons, jetties and boat-related equipment that need careful handling during a move. Our team has experience relocating marine accessories and outdoor fixtures. For the retirement village moves — which are common in this suburb — we bring smaller, more manoeuvrable vehicles suited to the narrow internal roads and covered carpark entries typical of these complexes.",
    nearbySubs: ["Labrador", "Southport", "Helensvale"],
    priceFrom: "$179/hr",
    serviceArea: "Runaway Bay & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Runaway Bay | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Runaway Bay with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from our canal home in Runaway Bay to a retirement villa in the same suburb. R2G handled the downsizing move beautifully — they stored what we couldn't keep and delivered the rest gently.",
        name: "Margaret & Ron H.",
        location: "Runaway Bay",
        date: "January 2025",
      },
      {
        text: "R2G relocated us from Labrador to Runaway Bay. The team manoeuvred our large L-shaped sofa through a tricky doorway without a scratch. Friendly, fast and well-priced.",
        name: "David T.",
        location: "Labrador → Runaway Bay",
        date: "August 2024",
      },
      {
        text: "We moved from a 3-bed waterfront home in Runaway Bay to Helensvale. R2G even carefully disconnected and transported our outdoor shower and garden features. Above and beyond service.",
        name: "Julie W.",
        location: "Runaway Bay → Helensvale",
        date: "November 2024",
      },
    ],
    tips: [
      {
        heading: "Note waterfront property features.",
        text: "Canal-front homes often have pontoon accessories, fishing gear and marine items that need special handling. List any outdoor or waterfront items when booking so we can plan appropriately.",
      },
      {
        heading: "Check retirement village access rules.",
        text: "Runaway Bay has several retirement complexes with narrow internal roads, visitor parking limits and height-restricted entries. Share your village name so we can arrange a suitably sized vehicle.",
      },
      {
        heading: "Protect items from Broadwater salt air.",
        text: "If your belongings have been in a waterfront property, metal items may need extra wrapping to prevent salt-air corrosion during transit. We provide weather-resistant covers for sensitive items.",
      },
    ],
  },
  {
    slug: "labrador",
    name: "Labrador",
    region: "Gold Coast North",
    state: "QLD",
    distanceFromCBD: "6km north of Surfers Paradise",
    postcode: "4215",
    latitude: -27.9481,
    longitude: 153.3965,
    uniquePara1:
      "Labrador is an established Broadwater-facing suburb between Southport and Runaway Bay, offering affordable waterfront living and a growing dining scene along the foreshore. It's increasingly popular with first-home buyers and investors drawn to its proximity to the CBD and improving infrastructure.",
    uniquePara2:
      "The suburb has a broad property mix — from 1970s walk-up unit blocks and older fibro cottages to renovated canal homes and new apartment developments rising near the light rail extension. This variety means moves here range from compact unit relocations to full family home transitions.",
    uniquePara3:
      "Labrador's older unit blocks are among the most common move types we handle here — many have narrow stairwells, no lifts and limited driveway space for trucks. Our team is experienced with walk-up apartment moves and brings compact trolleys, stair-climbing equipment and extra blankets to protect furniture on tight turns. For the canal-side streets, we also manage the challenges of narrow access and one-way traffic flow.",
    nearbySubs: ["Southport", "Runaway Bay", "Surfers Paradise"],
    priceFrom: "$179/hr",
    serviceArea: "Labrador & Gold Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Labrador | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Labrador with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a 2nd-floor walk-up in Labrador to a house in Helensvale. The R2G guys carried everything down narrow stairs without any damage. Strong, careful and great attitudes.",
        name: "Tom A.",
        location: "Labrador",
        date: "March 2025",
      },
      {
        text: "R2G helped us relocate from Labrador to Robina. The quote was straightforward, the crew arrived early and everything was in the new house before lunch. No complaints at all.",
        name: "Cindy L.",
        location: "Labrador → Robina",
        date: "October 2024",
      },
      {
        text: "We needed to move out of our Labrador unit quickly before our lease ended. R2G fit us in at short notice and the team was fast without being careless. Really appreciate the flexibility.",
        name: "Ben S.",
        location: "Labrador",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Warn us about walk-up unit access.",
        text: "Many Labrador units are in older blocks without lifts or wide stairwells. Let us know your floor level and whether there's a lift so we can send the right crew and equipment.",
      },
      {
        heading: "Plan for narrow canal-side streets.",
        text: "Some Labrador streets along the canals are one-way or have limited passing room. Share your address early so we can check truck access and plan the best approach.",
      },
      {
        heading: "Take advantage of light rail proximity.",
        text: "The G:link extension is improving Labrador's connectivity. If you're moving near a tram stop, be aware of temporary road changes or no-stopping zones and let us know your address for route planning.",
      },
    ],
  },
  {
    slug: "currumbin",
    name: "Currumbin",
    region: "Gold Coast South",
    state: "QLD",
    distanceFromCBD: "18km south of Surfers Paradise",
    postcode: "4223",
    latitude: -28.1381,
    longitude: 153.4829,
    uniquePara1:
      "Currumbin is a scenic southern Gold Coast suburb known for the iconic Currumbin Wildlife Sanctuary, Currumbin Creek and a relaxed surf-village atmosphere. The suburb stretches from beachside flats along the coast back into the valley, where larger properties sit among native bushland.",
    uniquePara2:
      "Property types in Currumbin are diverse — beachfront apartments and townhouses near the creek mouth transition to family homes on standard blocks through the middle, then acreage properties and hillside houses as you head up Currumbin Creek Road into the valley.",
    uniquePara3:
      "The Currumbin Valley end of the suburb features winding, narrow roads with overhanging trees and properties accessed via steep driveways or private roads. Our team brings smaller trucks for valley moves and uses extra securing straps on inclined driveways. Closer to the beach, the flat streets are easier to navigate but beachgoer parking around Currumbin Alley can be a challenge on weekends — we time these moves for early mornings to secure truck positioning.",
    nearbySubs: ["Tugun", "Palm Beach", "Coolangatta"],
    priceFrom: "$179/hr",
    serviceArea: "Currumbin & Gold Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Currumbin | Professional Movers",
    metaDescription:
      "Trusted removalists in Currumbin with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a valley property in Currumbin to a unit in Coolangatta. The steep driveway was no problem for the crew — they had the right equipment and worked safely throughout. Highly recommend.",
        name: "Craig B.",
        location: "Currumbin",
        date: "February 2025",
      },
      {
        text: "We moved from Tugun to a beachside townhouse in Currumbin. The R2G team was efficient, well-organised and treated our furniture as if it were their own. Perfect move experience.",
        name: "Sandy M.",
        location: "Tugun → Currumbin",
        date: "November 2024",
      },
      {
        text: "Relocated from Currumbin to Brisbane for work. R2G handled the full interstate-style move — packed, transported and set up at the other end. Not a single item was damaged. Exceptional service.",
        name: "Aiden W.",
        location: "Currumbin → Brisbane",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Specify if you're beachside or valley.",
        text: "Currumbin spans from the coast to the valley, and the access requirements are very different. Let us know your exact location so we can send the right truck and plan for any steep or narrow access.",
      },
      {
        heading: "Time beachside moves for early morning.",
        text: "The streets near Currumbin Alley and the creek mouth fill with parked cars by mid-morning on weekends. An early start ensures clear truck access for beachside properties.",
      },
      {
        heading: "Prepare for longer carry distances in the valley.",
        text: "Currumbin Valley properties often have the house set back from the road with a long path or steep stairs. Include photos of your access when booking so we can plan the right equipment and crew size.",
      },
      {
        heading: "Watch for wildlife on moving day.",
        text: "Currumbin Valley is home to native wildlife including bush turkeys and possums. Keep doors closed during the move to prevent curious visitors from entering your home while furniture is being carried out.",
      },
    ],
  },
];

export const goldCoastSuburbs: GoldCoastSuburb[] = [
  ...coreSuburbs,
  ...goldCoastNorthSuburbs,
  ...goldCoastCentralSuburbs,
  ...goldCoastHinterlandSuburbs,
];

export function getGoldCoastSuburb(slug: string): GoldCoastSuburb | undefined {
  return goldCoastSuburbs.find((s) => s.slug === slug);
}

export const goldCoastSuburbRouteMap: Record<string, string> = {
  "Gold Coast": "/removalists-gold-coast",
  ...Object.fromEntries(
    goldCoastSuburbs.map((s) => [s.name, `/removalists-gold-coast/${s.slug}`]),
  ),
};

export function getGoldCoastSuburbHref(name: string): string | undefined {
  return goldCoastSuburbRouteMap[name];
}
