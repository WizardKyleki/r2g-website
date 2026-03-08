import type { Suburb } from "./suburbs";

export interface SunshineCoastSuburb extends Suburb {
  reviews: { text: string; name: string; location: string; date: string }[];
  tips: { heading: string; text: string }[];
  uniquePara3: string;
}

export const sunshineCoastSuburbs: SunshineCoastSuburb[] = [
  {
    slug: "maroochydore",
    name: "Maroochydore",
    region: "Sunshine Coast Central",
    state: "QLD",
    distanceFromCBD: "0km — Maroochydore CBD",
    postcode: "4558",
    latitude: -26.659,
    longitude: 153.1,
    uniquePara1:
      "Maroochydore is the commercial heart of the Sunshine Coast, home to Sunshine Plaza, the new Maroochydore City Centre development and some of the region's busiest retail and dining strips. We regularly help professionals, families and downsizers relocate within and around the Maroochydore area.",
    uniquePara2:
      "The suburb features a mix of beachside apartments, established Queenslander homes and newer townhouse developments. Properties range from walk-ups along the Esplanade to larger family homes set back towards Horton Park and Cotton Tree.",
    uniquePara3:
      "Moving in Maroochydore means navigating busy one-way streets around Sunshine Plaza and limited parking in the Cotton Tree and Esplanade precincts. Our drivers are familiar with the best loading zones and access routes, and we coordinate with body corporates for apartment building moves that require lift bookings and loading dock reservations.",
    nearbySubs: ["Mooloolaba", "Buderim", "Bli Bli"],
    priceFrom: "$179/hr",
    serviceArea: "Maroochydore & Sunshine Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Maroochydore | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Maroochydore with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a unit on Duporth Avenue to a house in Buderim. R2G handled the apartment access perfectly and had everything unpacked at the new place by mid-afternoon. Really professional team.",
        name: "Sarah M.",
        location: "Maroochydore",
        date: "February 2025",
      },
      {
        text: "We relocated our small office from the Sunshine Plaza precinct to the new Maroochydore City Centre. R2G worked around our business hours and there was zero disruption to clients. Excellent service.",
        name: "David H.",
        location: "Maroochydore CBD",
        date: "November 2024",
      },
      {
        text: "R2G moved us from Cotton Tree to Coolum Beach. They were on time, careful with our surfboards and outdoor furniture, and the quote was spot-on. No surprises.",
        name: "Lisa K.",
        location: "Cotton Tree → Coolum Beach",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Plan around Sunshine Plaza traffic.",
        text: "The streets surrounding Sunshine Plaza and Horton Parade get congested during peak shopping hours. If possible, aim for a 7am start to get loaded before traffic builds up around the centre.",
      },
      {
        heading: "Book your apartment building's lift in advance.",
        text: "Many Maroochydore apartment complexes along the Esplanade require lift bookings and loading dock reservations. Secure your slot as soon as your moving date is confirmed to avoid delays.",
      },
      {
        heading: "Check parking restrictions around Cotton Tree.",
        text: "Cotton Tree has timed parking zones that fill up quickly, especially on weekends. Let us know your exact address so we can arrange appropriate loading zone access for your move.",
      },
      {
        heading: "Watch for summer holiday congestion.",
        text: "Maroochydore is a major tourist hub and traffic intensifies during school holidays and summer. Book well ahead during December and January to lock in your preferred date and avoid peak-traffic delays.",
      },
    ],
  },
  {
    slug: "caloundra",
    name: "Caloundra",
    region: "Sunshine Coast South",
    state: "QLD",
    distanceFromCBD: "26km south of Maroochydore",
    postcode: "4551",
    latitude: -26.7997,
    longitude: 153.1264,
    uniquePara1:
      "Caloundra sits at the southern tip of the Sunshine Coast, known for its string of beautiful beaches — Kings Beach, Bulcock Beach, Shelly Beach and Golden Beach. The suburb attracts retirees, young families and sea-changers looking for a laid-back coastal lifestyle with strong local amenities.",
    uniquePara2:
      "Property in Caloundra ranges from older fibro beach cottages near the headland to modern high-rise apartments along the Esplanade and sprawling family homes in the newer estates towards Pelican Waters. The variety means our team arrives prepared for everything from tight coastal cottage access to large multi-level moves.",
    uniquePara3:
      "The narrow, hilly streets around the Caloundra headland and Kings Beach can be tricky for larger trucks. Our drivers know which streets have turning restrictions and limited parking, and we often use our smaller vehicles for headland moves to avoid access issues. For Golden Beach and Pelican Waters properties, wider streets make access easier but we plan around canal-side driveways and low clearances.",
    nearbySubs: ["Kawana Waters", "Landsborough", "Beerwah"],
    priceFrom: "$179/hr",
    serviceArea: "Caloundra & Sunshine Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Caloundra | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Caloundra with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "R2G moved us from a third-floor Kings Beach apartment to a house in Pelican Waters. They managed the narrow stairwell brilliantly and had everything set up at the new place by lunch. Couldn't be happier.",
        name: "Margaret W.",
        location: "Kings Beach → Pelican Waters",
        date: "January 2025",
      },
      {
        text: "Relocated from Brisbane to Caloundra for retirement. The R2G team were gentle with our antique furniture and the whole move was stress-free. Worth every cent.",
        name: "Graham P.",
        location: "Brisbane → Caloundra",
        date: "October 2024",
      },
      {
        text: "Used R2G for a quick unit move within Caloundra. Two guys knocked it out in under three hours and the price matched the quote exactly. Good honest service.",
        name: "Tim B.",
        location: "Caloundra",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Mention headland access when booking.",
        text: "Streets around the Caloundra headland and Kings Beach are steep and narrow with limited parking. Let us know your address so we can send the right-sized truck and plan the safest approach.",
      },
      {
        heading: "Avoid school holiday weekends.",
        text: "Caloundra is a popular holiday destination and roads get very busy during school holidays. Mid-week moves during these periods will save you time and avoid traffic delays on Caloundra Road.",
      },
      {
        heading: "Protect items from salt air.",
        text: "Coastal Caloundra properties cop salt spray year-round. If you're storing furniture before a move, let us know — we can recommend protective wrapping for leather and metal items that are vulnerable to corrosion.",
      },
      {
        heading: "Check canal-side property access.",
        text: "Pelican Waters and Golden Beach homes along the canals can have narrow side access and low-clearance carports. Share your property layout details when booking to ensure smooth access on moving day.",
      },
    ],
  },
  {
    slug: "noosa-heads",
    name: "Noosa Heads",
    region: "Sunshine Coast North",
    state: "QLD",
    distanceFromCBD: "32km north of Maroochydore",
    postcode: "4567",
    latitude: -26.3951,
    longitude: 153.0917,
    uniquePara1:
      "Noosa Heads is one of Australia's most sought-after coastal addresses, famous for its national park, world-class surf at Main Beach and the boutique dining and shopping strip along Hastings Street. The suburb draws affluent families, retirees and interstate buyers looking for premium coastal living.",
    uniquePara2:
      "Property in Noosa Heads ranges from luxury beachfront apartments on Hastings Street and Park Road to architect-designed hillside homes backing onto the National Park. Many properties are high-value with bespoke furnishings, requiring careful handling and specialist wrapping techniques.",
    uniquePara3:
      "Noosa Heads' winding hillside streets and strict council regulations on parking and truck access require careful planning. Several streets around the National Park have weight limits and turning restrictions, and Hastings Street moves need to work around pedestrian traffic and loading time windows. Our team coordinates with Noosa Council and building managers well before moving day to ensure permits and access are sorted.",
    nearbySubs: ["Peregian Springs", "Coolum Beach", "Yandina"],
    priceFrom: "$179/hr",
    serviceArea: "Noosa Heads & Sunshine Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Noosa Heads | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Noosa Heads with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "R2G moved our family from a hillside home in Noosa Heads to Sunshine Beach. They handled our grand piano and artwork with incredible care. The team knew all the tricky access points around the National Park streets.",
        name: "Annette J.",
        location: "Noosa Heads",
        date: "March 2025",
      },
      {
        text: "Relocated from Sydney to Noosa Heads — a huge interstate move. R2G was seamless from quote to delivery. Everything arrived in perfect condition and on schedule. Very impressive logistics.",
        name: "Richard T.",
        location: "Sydney → Noosa Heads",
        date: "December 2024",
      },
      {
        text: "We moved from a Hastings Street apartment to a house in Noosaville. R2G managed the building access and narrow laneway loading perfectly. Quick, professional and great value.",
        name: "Fiona D.",
        location: "Hastings Street → Noosaville",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Check council parking permits early.",
        text: "Noosa Heads has strict parking and truck access regulations, particularly around Hastings Street and the National Park. We handle permit applications but need at least a week's notice to secure approvals.",
      },
      {
        heading: "Protect high-value furnishings.",
        text: "Many Noosa Heads homes contain designer furniture, artwork and fragile items. Provide an inventory of high-value pieces when booking so we can bring specialist wrapping materials and custom crating if needed.",
      },
      {
        heading: "Plan around tourist season traffic.",
        text: "Noosa Heads roads are heavily congested during Christmas, Easter and school holidays. An early morning start — ideally before 7am — helps avoid the worst of the tourist traffic on Noosa Drive and Hastings Street.",
      },
      {
        heading: "Mention hillside or National Park access.",
        text: "Homes on the Noosa Hill and streets bordering the National Park often have steep driveways and limited truck turning space. Share your address early so we can assess the best vehicle and approach route.",
      },
    ],
  },
  {
    slug: "mooloolaba",
    name: "Mooloolaba",
    region: "Sunshine Coast Central",
    state: "QLD",
    distanceFromCBD: "4km south of Maroochydore",
    postcode: "4557",
    latitude: -26.6833,
    longitude: 153.1182,
    uniquePara1:
      "Mooloolaba is one of the Sunshine Coast's most popular beachside suburbs, centred around the Mooloolaba Esplanade, SEA LIFE aquarium and a bustling café and dining scene. The suburb attracts young professionals, couples and investors drawn to its vibrant coastal lifestyle and strong rental market.",
    uniquePara2:
      "The property landscape in Mooloolaba is dominated by apartment complexes and walk-up units along the Esplanade and Brisbane Road, with pockets of townhouses and older Queenslanders further from the beach. Many moves here involve high-rise buildings with specific lift and loading dock requirements.",
    uniquePara3:
      "Mooloolaba's high density of apartment buildings means almost every move involves body corporate coordination — loading dock reservations, lift padding, restricted moving hours and parking permits. Our team handles these logistics regularly and knows the requirements for most major buildings along the Esplanade and Alexandra Headland precinct.",
    nearbySubs: ["Maroochydore", "Buderim", "Kawana Waters"],
    priceFrom: "$179/hr",
    serviceArea: "Mooloolaba & Sunshine Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Mooloolaba | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Mooloolaba with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a 2-bedroom apartment on the Mooloolaba Esplanade to a townhouse in Buderim. R2G coordinated the loading dock booking and lift access — everything went like clockwork. Super professional.",
        name: "Chris A.",
        location: "Mooloolaba Esplanade",
        date: "January 2025",
      },
      {
        text: "R2G helped us move into a unit in Mooloolaba from interstate. They were right on time, careful in the narrow apartment corridors and the price was very fair. Highly recommend.",
        name: "Emily R.",
        location: "Melbourne → Mooloolaba",
        date: "October 2024",
      },
      {
        text: "Quick, efficient move from Alexandra Headland to Mooloolaba — literally five minutes down the road but R2G treated it with the same care as a big move. Everything wrapped, nothing damaged.",
        name: "Jason W.",
        location: "Alexandra Headland → Mooloolaba",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Book loading dock access early.",
        text: "Most Mooloolaba apartment buildings require advance loading dock bookings. Weekends and end-of-month slots fill quickly — confirm your building's requirements and book as soon as you have a moving date.",
      },
      {
        heading: "Avoid the Esplanade on weekends.",
        text: "The Mooloolaba Esplanade gets extremely busy on weekends, particularly during summer. A weekday or early Saturday morning move will save significant time on loading and access.",
      },
      {
        heading: "Protect furniture from salt and humidity.",
        text: "Mooloolaba's beachside location means salt air and humidity are constant. We use protective wrapping on leather, timber and metal furniture as standard for coastal moves.",
      },
      {
        heading: "Check apartment lift dimensions.",
        text: "Older Mooloolaba apartment lifts can be surprisingly small. Measure any large furniture pieces and share the dimensions with us at booking so we can plan stairwell alternatives if needed.",
      },
    ],
  },
  {
    slug: "buderim",
    name: "Buderim",
    region: "Sunshine Coast Central",
    state: "QLD",
    distanceFromCBD: "6km west of Maroochydore",
    postcode: "4556",
    latitude: -26.6848,
    longitude: 153.0578,
    uniquePara1:
      "Buderim is the Sunshine Coast's elevated residential heartland, perched on a plateau overlooking the coast with panoramic views from Moreton Island to the Glass House Mountains. Known for its leafy streets, village atmosphere and excellent schools, Buderim is consistently one of the Coast's most popular family suburbs.",
    uniquePara2:
      "Properties in Buderim range from grand acreage estates along Lindsay Road and the Mountain to modern family homes in estates like Brightwater and the Meadows. The suburb also has a growing number of retirement villages and over-55s communities, meaning our team handles everything from large family moves to sensitive downsizer relocations.",
    uniquePara3:
      "Buderim's elevated position means many properties sit on steep blocks with long driveways and multi-level floor plans. Rain can make access challenging on sloped driveways and grassed areas. Our team brings non-slip matting, heavy-duty trolleys and ramp boards to manage these conditions, and we know which Buderim streets have turning restrictions for larger trucks.",
    nearbySubs: ["Maroochydore", "Sippy Downs", "Palmwoods"],
    priceFrom: "$179/hr",
    serviceArea: "Buderim & Sunshine Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Buderim | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Buderim with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a 4-bedroom home on the Buderim escarpment to a townhouse in Maroochydore. R2G handled the steep driveway and heavy furniture with ease. Three guys, done by 1pm. Really impressed.",
        name: "Helen G.",
        location: "Buderim",
        date: "February 2025",
      },
      {
        text: "We downsized from a large Buderim home into a retirement village. R2G were incredibly patient and gentle with our belongings, and helped arrange storage for items we weren't ready to part with.",
        name: "Robert & June F.",
        location: "Buderim",
        date: "December 2024",
      },
      {
        text: "R2G moved our family from Brisbane to Buderim for the school catchment. Big interstate-style move but everything arrived on time and nothing was damaged. Great communication throughout.",
        name: "Michael S.",
        location: "Brisbane → Buderim",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Warn us about steep driveway access.",
        text: "Many Buderim properties have long, steep driveways that can be slippery after rain. Let us know about your driveway when booking so we can bring appropriate equipment and select the right-sized vehicle.",
      },
      {
        heading: "Plan around school traffic.",
        text: "Buderim's popular schools create heavy traffic along Gloucester Road, Dixon Road and Burnett Street during drop-off and pick-up times. A 7am start or mid-morning window helps avoid the worst congestion.",
      },
      {
        heading: "Consider a pre-move declutter.",
        text: "Buderim's larger family homes can accumulate decades of belongings, especially in garages and under-house storage. Sorting through before moving day reduces volume and can save hours on your final bill.",
      },
      {
        heading: "Check access for acreage properties.",
        text: "Acreage homes along Lindsay Road and the upper mountain may have gravel driveways, gates or limited turning areas. Share your property details so we can plan access for our trucks.",
      },
    ],
  },
  {
    slug: "nambour",
    name: "Nambour",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "14km west of Maroochydore",
    postcode: "4560",
    latitude: -26.6254,
    longitude: 152.9586,
    uniquePara1:
      "Nambour is the Sunshine Coast's original township, nestled in the hinterland foothills with a rich history in the sugar cane industry. The suburb has undergone significant revitalisation in recent years, attracting young families, creatives and first-home buyers seeking affordable entry to the Sunshine Coast property market.",
    uniquePara2:
      "Housing in Nambour includes charming weatherboard cottages from the sugar mill era, modern housing estates on the town's outskirts and multi-level Queenslander homes on the hillsides. The Nambour General Hospital precinct also drives demand for nearby rentals and townhouses.",
    uniquePara3:
      "Nambour's hilly terrain means many homes are built on elevated stumps or have split-level floor plans with stairs as the only access. Streets in the older town centre can be narrow with limited truck parking. Our team is experienced with staircase moves and brings stair-climbing trolleys, mattress slides and extra protective blankets to handle these conditions efficiently.",
    nearbySubs: ["Woombye", "Bli Bli", "Yandina"],
    priceFrom: "$179/hr",
    serviceArea: "Nambour & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Nambour | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Nambour with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a Queenslander in central Nambour to a new estate home on the edge of town. R2G handled the narrow stairs and tight doorways of the old house perfectly. Not a single mark on the walls.",
        name: "Kellie J.",
        location: "Nambour",
        date: "March 2025",
      },
      {
        text: "We relocated from Brisbane to Nambour as first-home buyers. R2G made the move seamless — they were on time, friendly and the final cost was exactly what we were quoted. Absolute legends.",
        name: "Daniel O.",
        location: "Brisbane → Nambour",
        date: "November 2024",
      },
      {
        text: "R2G helped us move my elderly mother from her Nambour home into assisted living. They were so gentle and respectful with her belongings. Truly appreciated their care.",
        name: "Wendy P.",
        location: "Nambour",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Tell us about stair-only access.",
        text: "Many older Nambour homes are high-set Queenslanders with steep external stairs as the only entry point. Let us know about stair access when booking so we bring the right equipment and allocate enough time.",
      },
      {
        heading: "Check for flood-prone areas.",
        text: "Parts of Nambour near Petrie Creek can be affected by heavy rain and localised flooding. If your property is in a low-lying area, we can help prioritise loading valuables and electronics first.",
      },
      {
        heading: "Plan around hospital shift changes.",
        text: "Streets around Nambour General Hospital get busy during shift changes. If you're moving nearby, an early start or late morning window avoids the worst of the hospital traffic.",
      },
      {
        heading: "Consider mid-week for hinterland moves.",
        text: "Nambour's main streets can be busy on weekends with market-goers and day-trippers. A mid-week move gives our team clearer road access and faster loading times.",
      },
    ],
  },
  {
    slug: "sippy-downs",
    name: "Sippy Downs",
    region: "Sunshine Coast Central",
    state: "QLD",
    distanceFromCBD: "8km south-west of Maroochydore",
    postcode: "4556",
    latitude: -26.718,
    longitude: 153.0557,
    uniquePara1:
      "Sippy Downs is a rapidly growing suburb centred around the University of the Sunshine Coast campus and the Sippy Downs Town Centre. The suburb attracts a mix of university students, young families and professionals drawn by modern housing, strong amenity and easy access to the Bruce Highway.",
    uniquePara2:
      "Property in Sippy Downs is predominantly newer — master-planned estates with modern family homes, townhouse complexes and purpose-built student accommodation near the university. The area continues to expand with new stages being released regularly, making it one of the busiest moving suburbs on the Coast.",
    uniquePara3:
      "Sippy Downs' newer estates have wide, well-planned streets that make truck access straightforward, but many townhouse complexes have shared driveways and compact garages. We regularly move students in and out of the USC precinct and are familiar with the access requirements for the area's major townhouse and apartment developments.",
    nearbySubs: ["Buderim", "Kawana Waters", "Palmwoods"],
    priceFrom: "$179/hr",
    serviceArea: "Sippy Downs & Sunshine Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Sippy Downs | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Sippy Downs with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from student accommodation in Sippy Downs to a share house in Buderim. R2G was affordable, fast and the two guys were really friendly. Perfect for a budget move.",
        name: "Jake T.",
        location: "Sippy Downs",
        date: "February 2025",
      },
      {
        text: "We relocated from a townhouse in Sippy Downs to a family home further out in Palmview. R2G packed our kitchen items and had the whole move done in under four hours. Very efficient.",
        name: "Tanya V.",
        location: "Sippy Downs → Palmview",
        date: "October 2024",
      },
      {
        text: "R2G handled our move into a new build in Sippy Downs. They worked around the builder's final clean and had everything set up same-day. Great coordination and communication.",
        name: "Andrew C.",
        location: "Nambour → Sippy Downs",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Book early during university move-in periods.",
        text: "Sippy Downs sees a huge spike in moves at the start of each university semester — particularly late January and mid-July. Book at least 3–4 weeks ahead during these periods to secure your date.",
      },
      {
        heading: "Check townhouse complex access.",
        text: "Many Sippy Downs townhouse complexes have shared driveways, speed humps and visitor parking limits. Let us know your complex name and unit number so we can plan truck positioning and access.",
      },
      {
        heading: "Take advantage of wide estate streets.",
        text: "Newer Sippy Downs estates have wide streets and good turning circles for our trucks. If you're in one of these areas, we can use our larger vehicles for faster, more cost-effective moves.",
      },
      {
        heading: "Prepare for new-build move-in logistics.",
        text: "Moving into a new build in Sippy Downs often means coordinating with builders and landscapers. Let us know your settlement date so we can schedule your move around any final works.",
      },
    ],
  },
  {
    slug: "kawana-waters",
    name: "Kawana Waters",
    region: "Sunshine Coast South",
    state: "QLD",
    distanceFromCBD: "11km south of Maroochydore",
    postcode: "4575",
    latitude: -26.7385,
    longitude: 153.1243,
    uniquePara1:
      "Kawana Waters is a well-established canal-side suburb on the southern Sunshine Coast, centred around the Kawana Shoppingworld, Sunshine Coast University Hospital and the Birtinya town centre precinct. The suburb is popular with families, hospital workers and retirees seeking a waterfront lifestyle with strong amenities.",
    uniquePara2:
      "Property types in Kawana Waters include canal-front family homes, modern apartments near the hospital precinct in Birtinya, and established lowset homes throughout the wider Kawana area. The mix of waterfront properties, medical worker housing and family estates means a wide variety of move types.",
    uniquePara3:
      "Canal-front properties in Kawana Waters often have narrow side access and driveways built for boat trailers rather than moving trucks. Our team knows how to work around these constraints using smaller vehicles for access and shuttle-loading to the main truck parked on the street. The hospital precinct area also has apartment complexes with loading dock requirements that we coordinate in advance.",
    nearbySubs: ["Caloundra", "Mooloolaba", "Sippy Downs"],
    priceFrom: "$179/hr",
    serviceArea: "Kawana Waters & Sunshine Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Kawana Waters | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Kawana Waters with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a canal-front home in Kawana Waters to a unit near the hospital in Birtinya. R2G navigated the tight side access on the canal house perfectly. Everything was wrapped and protected.",
        name: "Narelle B.",
        location: "Kawana Waters",
        date: "January 2025",
      },
      {
        text: "We relocated to Kawana Waters from Ipswich — long drive but R2G was right on schedule and incredibly careful with our furniture. The quote matched the final invoice exactly.",
        name: "Shane M.",
        location: "Ipswich → Kawana Waters",
        date: "November 2024",
      },
      {
        text: "R2G moved our 3-bedroom home within Kawana. The team was fast, polite and really well-organised. They even reassembled the kids' beds and the trampoline. Above and beyond.",
        name: "Amanda L.",
        location: "Kawana Waters",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Mention canal-front access when booking.",
        text: "Many Kawana Waters homes are on canal blocks with narrow side access, boat ramps and limited driveway space. Letting us know ensures we bring the right-sized vehicle and plan loading accordingly.",
      },
      {
        heading: "Coordinate hospital precinct apartment access.",
        text: "Apartments near Sunshine Coast University Hospital in Birtinya have specific loading dock and lift booking requirements. Confirm your building's rules and share them when booking.",
      },
      {
        heading: "Plan around Kawana Shoppingworld traffic.",
        text: "Streets around Kawana Shoppingworld get busy on weekends and public holidays. An early start or mid-week move avoids the worst congestion along Nicklin Way and Kawana Way.",
      },
      {
        heading: "Protect waterfront furniture.",
        text: "Canal-side living means outdoor furniture, BBQs and watercraft accessories are common items. Let us know about any bulky outdoor items so we can bring appropriate wrapping and plan loading space.",
      },
    ],
  },
  {
    slug: "coolum-beach",
    name: "Coolum Beach",
    region: "Sunshine Coast North",
    state: "QLD",
    distanceFromCBD: "16km north of Maroochydore",
    postcode: "4573",
    latitude: -26.528,
    longitude: 153.0859,
    uniquePara1:
      "Coolum Beach is a relaxed coastal village on the northern Sunshine Coast, known for its stunning beach, iconic Mount Coolum and a laid-back surf culture. The suburb offers a quieter alternative to Noosa and Mooloolaba, attracting families, retirees and lifestyle-focused professionals.",
    uniquePara2:
      "Property in Coolum Beach ranges from beachfront houses and walk-up apartments near the Esplanade to larger family homes in the estates behind David Low Way. The suburb also has a pocket of rural-residential properties on the western edge towards the base of Mount Coolum.",
    uniquePara3:
      "Coolum Beach's relaxed vibe belies some tricky access challenges — the streets closest to the beach are narrow and heavily parked, particularly near the surf club and village shops. Our drivers know which streets allow truck access and the best times to avoid the beach traffic. For properties backing onto Mount Coolum, we plan around steeper terrain and longer driveway access.",
    nearbySubs: ["Peregian Springs", "Maroochydore", "Bli Bli"],
    priceFrom: "$179/hr",
    serviceArea: "Coolum Beach & Sunshine Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Coolum Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Coolum Beach with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a beachfront house in Coolum to a property in Peregian Springs. R2G handled the narrow beach-side street access brilliantly and protected all our timber furniture from the salt air. Top job.",
        name: "Paul D.",
        location: "Coolum Beach",
        date: "February 2025",
      },
      {
        text: "R2G relocated us from Caboolture to Coolum Beach. Long haul but everything arrived in great condition. The team even helped position our heavy display cabinet exactly where we wanted it. Excellent service.",
        name: "Diane H.",
        location: "Caboolture → Coolum Beach",
        date: "October 2024",
      },
      {
        text: "Used R2G for a small unit move within Coolum. Two blokes, three hours, everything done. Good value and no fuss. Would use again.",
        name: "Mark E.",
        location: "Coolum Beach",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Avoid beach-side streets on weekends.",
        text: "Streets near the Coolum surf club and village shops are heavily parked on weekends and holidays. An early morning or mid-week move gives us much better access for loading and unloading.",
      },
      {
        heading: "Specify beachfront vs estate location.",
        text: "Coolum Beach access varies significantly between beachfront streets and the estates behind David Low Way. Letting us know your exact location helps us plan the right truck size and route.",
      },
      {
        heading: "Prepare for sandy paths and stairs.",
        text: "Many Coolum Beach properties have sandy paths, timber stairs and raised decking. We bring protective floor coverings and non-slip matting to protect both your home and our team.",
      },
      {
        heading: "Consider the surf club parking lot for truck access.",
        text: "For very tight beachfront streets, we sometimes use the surf club car park as a staging area with a smaller shuttle vehicle running to your property. We'll organise this in advance if needed.",
      },
    ],
  },
  {
    slug: "peregian-springs",
    name: "Peregian Springs",
    region: "Sunshine Coast North",
    state: "QLD",
    distanceFromCBD: "20km north of Maroochydore",
    postcode: "4573",
    latitude: -26.485,
    longitude: 153.085,
    uniquePara1:
      "Peregian Springs is a master-planned community on the northern Sunshine Coast, designed around green spaces, a golf course and a modern town centre with cafés, a gym and everyday shops. The suburb is hugely popular with young families drawn by St Andrew's Anglican College, Peregian Springs State School and the family-friendly streetscape.",
    uniquePara2:
      "Almost all housing in Peregian Springs is modern — built from the mid-2000s onwards — consisting of single and double-storey family homes in landscaped estates. The consistent property style means straightforward access in most cases, though some premium blocks back onto the golf course or bushland with specific driveway and gate configurations.",
    uniquePara3:
      "Peregian Springs' wide estate streets and well-planned cul-de-sacs make truck access easy in most areas. The main challenge is the high number of families moving in and out during the school holiday changeover periods — our schedule fills up fast in this suburb. Golf course-adjacent properties may have rear access restrictions and landscaping that requires careful furniture routing around pools, decking and garden features.",
    nearbySubs: ["Coolum Beach", "Noosa Heads", "Yandina"],
    priceFrom: "$179/hr",
    serviceArea: "Peregian Springs & Sunshine Coast North",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Peregian Springs | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Peregian Springs with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a 4-bedroom home in Peregian Springs to another house in the same estate. R2G made it super easy — the guys were fast and careful, and they worked around our toddler's nap schedule. Really thoughtful team.",
        name: "Stacey N.",
        location: "Peregian Springs",
        date: "March 2025",
      },
      {
        text: "R2G moved us from Mooloolaba into our first home in Peregian Springs. They were on time, quoted accurately and nothing was damaged. Great first moving experience.",
        name: "Tom & Sarah B.",
        location: "Mooloolaba → Peregian Springs",
        date: "December 2024",
      },
      {
        text: "We upgraded to a larger home backing the golf course. R2G handled the tricky rear access past the pool area and positioned the truck perfectly. Smooth and professional.",
        name: "Craig W.",
        location: "Peregian Springs",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Book early during school holiday changeovers.",
        text: "Peregian Springs is one of the Coast's busiest suburbs for family moves during school holiday periods. Book 4–6 weeks in advance during January, April, July and September to guarantee your preferred date.",
      },
      {
        heading: "Mention golf course or bushland backing.",
        text: "Homes backing the golf course or bushland reserves may have rear access constraints, pool fencing and landscaping that affect furniture routing. Share your property details when booking.",
      },
      {
        heading: "Take advantage of wide estate streets.",
        text: "Peregian Springs' well-planned streets offer excellent truck access. We can use our larger vehicles here for more cost-effective moves with fewer loads.",
      },
      {
        heading: "Coordinate with school pick-up traffic.",
        text: "The streets around St Andrew's and Peregian Springs State School get busy during pick-up and drop-off times. We plan our loading schedule around these windows to avoid delays.",
      },
    ],
  },
  {
    slug: "palmwoods",
    name: "Palmwoods",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "15km south-west of Maroochydore",
    postcode: "4555",
    latitude: -26.6876,
    longitude: 152.9619,
    uniquePara1:
      "Palmwoods is a charming hinterland village at the foot of the Blackall Range, known for its historic railway station, boutique shops and strong community spirit. The suburb offers a peaceful, semi-rural lifestyle just 15 minutes from the coast, attracting families and tree-changers seeking space and character.",
    uniquePara2:
      "Property in Palmwoods includes weatherboard cottages in the village centre, modern homes on acreage blocks along the surrounding ridgelines and small rural holdings with sheds and outbuildings. The mix of tight village streets and sprawling rural properties means our team adapts their approach for each move.",
    uniquePara3:
      "Palmwoods' village centre has narrow streets lined with heritage-listed trees that limit truck manoeuvrability, while acreage properties on the outskirts may have unsealed driveways, cattle grids and long approaches through paddocks. Our team brings the right equipment for both — smaller trucks for tight village access and heavy-duty gear for rural property moves.",
    nearbySubs: ["Buderim", "Eudlo", "Woombye"],
    priceFrom: "$179/hr",
    serviceArea: "Palmwoods & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Palmwoods | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Palmwoods with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a cottage in the Palmwoods village to an acreage property just outside town. R2G navigated the narrow village streets and then the unsealed driveway at the new place without a hitch. Impressive adaptability.",
        name: "Geoff R.",
        location: "Palmwoods",
        date: "January 2025",
      },
      {
        text: "R2G relocated us from the Gold Coast to Palmwoods. Long journey but the truck arrived exactly on schedule. Everything was wrapped perfectly and the guys reassembled all our beds. First class.",
        name: "Trish & Darren L.",
        location: "Gold Coast → Palmwoods",
        date: "October 2024",
      },
      {
        text: "We did a small move from a granny flat in Palmwoods to a house in Nambour. R2G was friendly, fast and very reasonably priced. No complaints at all.",
        name: "Joanne C.",
        location: "Palmwoods → Nambour",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Specify village or acreage location.",
        text: "Palmwoods access varies hugely between the compact village streets and rural properties on the outskirts. Your exact address helps us select the right truck and plan the approach.",
      },
      {
        heading: "Check unsealed driveway conditions.",
        text: "Acreage properties around Palmwoods may have long gravel or dirt driveways that can become boggy after rain. Let us know about your driveway surface so we can plan access and timing around the weather.",
      },
      {
        heading: "Allow extra time for rural property moves.",
        text: "Acreage moves often involve sheds, workshops and outbuildings in addition to the main house. Provide a full inventory including outdoor and shed items so we can allocate the right truck size and crew.",
      },
      {
        heading: "Avoid the Saturday morning market rush.",
        text: "Palmwoods village gets busy on Saturday mornings with markets and local foot traffic. If you're moving on a Saturday, an early 6:30am start helps us get loaded before the village fills up.",
      },
    ],
  },
  {
    slug: "beerwah",
    name: "Beerwah",
    region: "Sunshine Coast South",
    state: "QLD",
    distanceFromCBD: "28km south-west of Maroochydore",
    postcode: "4519",
    latitude: -26.8554,
    longitude: 152.9564,
    uniquePara1:
      "Beerwah is a growing hinterland town in the southern Sunshine Coast, best known as the home of Australia Zoo and its proximity to the Glass House Mountains. The town is attracting first-home buyers and young families priced out of coastal suburbs, offering affordable housing with a semi-rural feel and easy Bruce Highway access.",
    uniquePara2:
      "Property in Beerwah ranges from established homes in the original township to brand-new housing estates expanding rapidly on the town's fringes. There's also a significant number of acreage properties and hobby farms on the outskirts, along with the town's older weatherboard cottages near the railway station.",
    uniquePara3:
      "Beerwah's rapid growth means our team often moves families into brand-new estates where roads and landscaping may still be under construction. We're experienced at working around builder traffic, temporary road surfaces and muddy verges. For acreage properties, access can involve long driveways through paddocks and may require our smaller trucks for the final approach.",
    nearbySubs: ["Landsborough", "Glass House Mountains", "Caloundra"],
    priceFrom: "$179/hr",
    serviceArea: "Beerwah & Sunshine Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Beerwah | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Beerwah with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved into a new estate in Beerwah from Caboolture. R2G worked around the muddy verge at the new place and still had everything unloaded neatly by noon. Very practical team.",
        name: "Scott H.",
        location: "Caboolture → Beerwah",
        date: "February 2025",
      },
      {
        text: "R2G moved us from a 5-acre property outside Beerwah to a house in Caloundra. They handled the long driveway and heavy workshop equipment like pros. Nothing was too hard.",
        name: "Warren K.",
        location: "Beerwah (acreage)",
        date: "November 2024",
      },
      {
        text: "Quick and easy move from an older cottage in Beerwah township to a brand new home around the corner. R2G was affordable and efficient. Exactly what we needed.",
        name: "Nicole F.",
        location: "Beerwah",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Check new estate road conditions.",
        text: "Many Beerwah estates are still under construction with temporary road surfaces and limited parking. Let us know if you're moving into a new build so we can plan for potential access challenges.",
      },
      {
        heading: "Mention acreage or hobby farm properties.",
        text: "Acreage moves around Beerwah often include sheds, equipment and livestock infrastructure. Give us a detailed inventory including outbuildings so we can bring the right trucks and crew.",
      },
      {
        heading: "Plan around Australia Zoo traffic.",
        text: "Steve Irwin Way gets congested on weekends and school holidays as visitors head to Australia Zoo. A mid-week move or early Saturday start avoids this traffic.",
      },
      {
        heading: "Use the Bruce Highway advantage.",
        text: "Beerwah's direct Bruce Highway access makes it an efficient base for interstate moves. Let us know your origin or destination and we'll plan the most direct route.",
      },
    ],
  },
  {
    slug: "landsborough",
    name: "Landsborough",
    region: "Sunshine Coast South",
    state: "QLD",
    distanceFromCBD: "24km south-west of Maroochydore",
    postcode: "4550",
    latitude: -26.8085,
    longitude: 152.9631,
    uniquePara1:
      "Landsborough is a small but growing township at the gateway to the Sunshine Coast hinterland, sitting at the junction of the railway line and the scenic route up to Maleny. The town retains a genuine country feel with heritage buildings, a weekly produce market and a strong local community.",
    uniquePara2:
      "Housing in Landsborough includes original worker's cottages and Queenslanders near the railway station, modern family homes in the developing estates to the north, and hobby farms and acreage properties scattered across the surrounding hills. The variety of property types keeps our team versatile.",
    uniquePara3:
      "Landsborough's position at the base of the Blackall Range means many moves involve navigating between flat township streets and steep rural roads. The Landsborough-Maleny Road is winding and narrow in sections, requiring careful truck selection for moves heading into the hinterland. Our drivers know these roads well and select vehicles that balance capacity with safe hill navigation.",
    nearbySubs: ["Beerwah", "Caloundra", "Maleny"],
    priceFrom: "$179/hr",
    serviceArea: "Landsborough & Sunshine Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Landsborough | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Landsborough with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a cottage near Landsborough station to a new estate home on the edge of town. R2G was careful with the old house's narrow doorways and had us settled into the new place quickly. Great team.",
        name: "Brenda S.",
        location: "Landsborough",
        date: "January 2025",
      },
      {
        text: "R2G relocated our family from Logan to Landsborough — big sea-change move. They handled the long drive and a tricky rural driveway at the new property with ease. Highly recommended.",
        name: "Pete & Karen M.",
        location: "Logan → Landsborough",
        date: "October 2024",
      },
      {
        text: "Used R2G for a small move from Landsborough to Maleny up the range. They picked the right truck for the winding road and everything arrived in perfect condition. Smart operators.",
        name: "Helen A.",
        location: "Landsborough → Maleny",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Specify township or rural property.",
        text: "Landsborough access differs greatly between the flat township streets and the hilly rural roads surrounding the town. Share your property type and address so we can plan the right approach.",
      },
      {
        heading: "Consider weather for hinterland access.",
        text: "The Landsborough-Maleny Road can be affected by fog and heavy rain, especially in winter. We monitor conditions on moving day and adjust timing if needed for safe transit.",
      },
      {
        heading: "Plan around the rail crossing.",
        text: "The level crossing near Landsborough station can cause delays when trains pass. We factor this into our timing, especially for moves in the township centre.",
      },
      {
        heading: "Book early for end-of-lease moves.",
        text: "Landsborough's new estates have a high rental turnover and end-of-month is particularly busy. Book at least 2–3 weeks ahead for end-of-lease moves to secure your preferred date.",
      },
    ],
  },
  {
    slug: "maleny",
    name: "Maleny",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "28km south-west of Maroochydore",
    postcode: "4552",
    latitude: -26.7614,
    longitude: 152.8475,
    uniquePara1:
      "Maleny is a picturesque hinterland town perched atop the Blackall Range, known for its lush green dairy country, thriving arts community, boutique shopping strip and spectacular views across the Glass House Mountains. The town attracts tree-changers, retirees and creative professionals seeking a cooler-climate lifestyle away from the coast.",
    uniquePara2:
      "Property in Maleny includes charming Queenslander homes in the town centre, architecturally designed homes on acreage with sweeping views, hobby farms and rural retreats along the range roads, and a growing number of modern builds on the town's expanding edges. Many homes are high-value with bespoke features.",
    uniquePara3:
      "Moving to or from Maleny means navigating the steep, winding roads up the Blackall Range — the Landsborough-Maleny Road and the McCarthy Road approaches both have tight corners and gradient changes that require experienced driving. Our team selects trucks carefully for Maleny moves and often uses smaller vehicles to manage the range roads safely while maintaining efficiency.",
    nearbySubs: ["Landsborough", "Palmwoods", "Kenilworth"],
    priceFrom: "$179/hr",
    serviceArea: "Maleny & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Maleny | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Maleny with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "R2G moved our family from Brisbane to a 10-acre property in Maleny. They managed the winding range road and the long gravel driveway with total confidence. Not a scratch on any furniture. Exceptional service.",
        name: "Ian & Denise W.",
        location: "Brisbane → Maleny",
        date: "March 2025",
      },
      {
        text: "We downsized from our Maleny acreage to a townhouse in Caloundra. R2G helped us sort what to move and what to store, and they handled our antiques beautifully. Very caring team.",
        name: "Margaret T.",
        location: "Maleny → Caloundra",
        date: "November 2024",
      },
      {
        text: "Moved between two properties in Maleny — just up the road but with a steep driveway at the new place. R2G brought the right gear and had everything done in half a day. Top blokes.",
        name: "Greg S.",
        location: "Maleny",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Factor in range road driving time.",
        text: "The winding roads up the Blackall Range add significant transit time compared to flat coastal routes. We build extra travel time into Maleny moves so your quote accurately reflects the full job.",
      },
      {
        heading: "Prepare for cooler, wetter conditions.",
        text: "Maleny sits at over 400m elevation and gets significantly more rain and cooler temperatures than the coast. We bring extra weatherproof wrapping and plan loading around forecast conditions.",
      },
      {
        heading: "Mention acreage and outbuilding contents.",
        text: "Maleny properties often include workshops, studios, stables and storage sheds. Include all outbuilding contents in your inventory so we bring enough crew and truck space for the full move.",
      },
      {
        heading: "Check for rural driveway access.",
        text: "Many Maleny properties have long unsealed driveways, gate access and cattle grids. Share your driveway details and any access codes so we can plan our truck selection and arrival logistics.",
      },
    ],
  },
  {
    slug: "glass-house-mountains",
    name: "Glass House Mountains",
    region: "Sunshine Coast South",
    state: "QLD",
    distanceFromCBD: "35km south-west of Maroochydore",
    postcode: "4518",
    latitude: -26.8958,
    longitude: 152.9453,
    uniquePara1:
      "Glass House Mountains is a small semi-rural town at the southern edge of the Sunshine Coast, surrounded by the dramatic volcanic peaks of the Glass House Mountains National Park. The area offers an affordable, peaceful lifestyle with acreage properties, hobby farms and close-knit community feel, while still providing easy Bruce Highway access to Brisbane and the coast.",
    uniquePara2:
      "Property in Glass House Mountains includes original fibro and timber homes in the township, newer estate homes near the school and shops, and larger acreage blocks and rural properties in the surrounding countryside. The township also has a handful of heritage-listed properties near the old railway station.",
    uniquePara3:
      "Glass House Mountains' rural character means many moves involve gravel driveways, steep access tracks, farm gates and properties spread across multiple structures. The township itself has straightforward access, but outlying rural properties may require our smaller trucks for the final approach. We bring heavy-duty equipment for rural moves including moving blankets for unsealed road transit and ramp boards for uneven ground.",
    nearbySubs: ["Beerwah", "Landsborough", "Caloundra"],
    priceFrom: "$179/hr",
    serviceArea: "Glass House Mountains & Sunshine Coast South",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle:
      "Removalists Glass House Mountains | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Glass House Mountains with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a 5-acre property in Glass House Mountains to a townhouse in Caloundra. R2G managed the long gravel driveway and the rain that came midday — everything stayed dry under their wrapping. Top-notch service.",
        name: "Dennis B.",
        location: "Glass House Mountains",
        date: "February 2025",
      },
      {
        text: "R2G relocated us from Brisbane's western suburbs to Glass House Mountains. They handled a massive load including workshop equipment and were incredibly careful with our grandmother's china cabinet. Cannot fault them.",
        name: "Linda & Ray J.",
        location: "Brisbane → Glass House Mountains",
        date: "December 2024",
      },
      {
        text: "Quick move from the Glass House township to a bigger block just outside town. R2G quoted fairly and the two guys were strong, fast and friendly. Would definitely use again.",
        name: "Aaron G.",
        location: "Glass House Mountains",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Specify township or acreage property.",
        text: "Access in Glass House Mountains varies enormously between the flat township streets and rural properties on the outskirts. Share your exact location so we can plan truck selection and approach.",
      },
      {
        heading: "Mention farm sheds and outbuildings.",
        text: "Rural Glass House Mountains properties often include large sheds, workshops and storage containers. Include all structures in your move inventory so we bring enough crew and truck capacity.",
      },
      {
        heading: "Check driveway condition after rain.",
        text: "Unsealed driveways around Glass House Mountains can become soft and rutted after heavy rain. If your driveway is gravel or dirt, let us know the condition and we'll select an appropriate vehicle.",
      },
      {
        heading: "Use the Bruce Highway proximity.",
        text: "Glass House Mountains sits right on the Bruce Highway, making interstate moves efficient. Share your destination and we'll plan the most direct route for the best possible price.",
      },
    ],
  },
  {
    slug: "bli-bli",
    name: "Bli Bli",
    region: "Sunshine Coast Central",
    state: "QLD",
    distanceFromCBD: "7km west of Maroochydore",
    postcode: "4560",
    latitude: -26.6257,
    longitude: 153.0347,
    uniquePara1:
      "Bli Bli is a rapidly growing riverside suburb on the Sunshine Coast, situated along the Maroochy River and home to Bli Bli Castle and the expanding Parklakes estate. The suburb has transformed from a quiet cane farming area into one of the Coast's most popular family destinations, with new schools, shops and community facilities.",
    uniquePara2:
      "Property in Bli Bli is dominated by modern family homes in the Parklakes and surrounding estates, alongside older Queenslanders and acreage properties along the river and David Low Way. The mix of brand-new estate homes and established rural-residential properties gives the suburb a diverse character.",
    uniquePara3:
      "Bli Bli's newer estates like Parklakes have wide streets and excellent truck access, but some of the older riverside properties along the Maroochy River have narrow access roads, flood-prone ground and limited turning space. Our team selects the right vehicle for each Bli Bli move — larger trucks for the open estates and smaller vehicles for the tighter riverside and acreage properties.",
    nearbySubs: ["Maroochydore", "Nambour", "Coolum Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Bli Bli & Sunshine Coast Central",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Bli Bli | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Bli Bli with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved into Parklakes from a unit in Maroochydore. R2G took advantage of the wide streets and had the big truck backed right up to the garage. Everything unloaded and set up in record time.",
        name: "Rebecca M.",
        location: "Maroochydore → Bli Bli",
        date: "March 2025",
      },
      {
        text: "R2G moved us from an older riverside property in Bli Bli to a new home in Peregian Springs. They managed the narrow river road access perfectly and wrapped everything to protect against the dusty driveway. Very professional.",
        name: "Terry O.",
        location: "Bli Bli (riverside)",
        date: "November 2024",
      },
      {
        text: "We relocated to Bli Bli from Toowoomba with a houseful of furniture. R2G was on time, the quote was accurate and the whole family was impressed. The kids loved watching the team work. Great experience.",
        name: "Michelle & Peter W.",
        location: "Toowoomba → Bli Bli",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Specify estate or riverside location.",
        text: "Bli Bli access varies hugely between the wide streets of Parklakes and the narrow roads along the Maroochy River. Providing your exact address helps us plan the right truck and approach.",
      },
      {
        heading: "Check flood history for riverside properties.",
        text: "Some Bli Bli properties near the Maroochy River sit in flood-prone zones. If there's been recent heavy rain, let us know so we can plan ground protection and prioritise loading valuables first.",
      },
      {
        heading: "Take advantage of new estate access.",
        text: "If you're moving within the Parklakes or new estate areas, our larger trucks can access these streets easily, making your move faster and more cost-effective.",
      },
      {
        heading: "Coordinate with new-build settlements.",
        text: "Bli Bli has many new builds settling regularly. Share your settlement date so we can schedule your move and coordinate with your builder if final works are still underway.",
      },
    ],
  },
  {
    slug: "yandina",
    name: "Yandina",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "16km north-west of Maroochydore",
    postcode: "4561",
    latitude: -26.5608,
    longitude: 152.9569,
    uniquePara1:
      "Yandina is a character-filled hinterland town on the Sunshine Coast, known for the Ginger Factory, the historic Spirit House restaurant and a thriving local arts scene. The town sits along the North Maroochy River and offers a quieter, more affordable alternative to coastal suburbs while remaining just 20 minutes from the beach.",
    uniquePara2:
      "Property in Yandina includes heritage Queenslander homes in the town centre, modern homes on the expanding outskirts, rural acreage blocks along the river flats and small hobby farms in the surrounding hills. The variety means our team regularly handles everything from tight village moves to large rural relocations.",
    uniquePara3:
      "Yandina's older homes often have high stumps, steep external stairs and narrow doorways typical of traditional Queenslander construction. Rural properties along the river flats can be affected by seasonal flooding and may have long, unpaved access tracks. Our team brings stair-climbing equipment for the elevated homes and plans rural property access carefully based on recent weather conditions.",
    nearbySubs: ["Nambour", "Coolum Beach", "Peregian Springs"],
    priceFrom: "$179/hr",
    serviceArea: "Yandina & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Yandina | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Yandina with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a high-set Queenslander in Yandina to a modern home in Bli Bli. R2G navigated the steep stairs and tight doorways expertly — even got our king bed around the landing without removing the frame. Impressive skills.",
        name: "Carolyn H.",
        location: "Yandina",
        date: "February 2025",
      },
      {
        text: "R2G moved our pottery studio and home from Yandina to Eumundi. They packed and transported 200+ ceramic pieces without a single breakage. The custom wrapping was worth every cent. True professionals.",
        name: "Sam & Jo L.",
        location: "Yandina → Eumundi",
        date: "October 2024",
      },
      {
        text: "Quick move from a riverside block in Yandina to Nambour. R2G checked the driveway access after rain and planned accordingly. Everything arrived dry and damage-free.",
        name: "Phil N.",
        location: "Yandina → Nambour",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Mention high-set Queenslander access.",
        text: "Many Yandina homes are high-set with steep external stairs. Let us know about stair access so we bring stair-climbing trolleys and allocate extra time for safe furniture handling.",
      },
      {
        heading: "Check river flat conditions after rain.",
        text: "Properties along the North Maroochy River can have soft ground and access issues after heavy rain. If you're on the river flats, we'll assess conditions before moving day and adjust our vehicle selection.",
      },
      {
        heading: "Declare fragile artisan or studio items.",
        text: "Yandina has a vibrant arts community and many residents have workshops or studios with delicate items. Provide details about fragile inventory so we can bring specialist packing materials.",
      },
      {
        heading: "Avoid weekend Ginger Factory traffic.",
        text: "The Ginger Factory draws visitors on weekends, creating traffic around Pioneer Road and the town centre. A mid-week move keeps access clear and loading efficient.",
      },
    ],
  },
  {
    slug: "woombye",
    name: "Woombye",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "12km west of Maroochydore",
    postcode: "4559",
    latitude: -26.6637,
    longitude: 152.9702,
    uniquePara1:
      "Woombye is a small, tight-knit hinterland village on the Sunshine Coast, nestled between Nambour and Palmwoods along the old railway line. The town has a genuine country village atmosphere with a well-loved pub, local shops and a community that takes pride in its heritage character.",
    uniquePara2:
      "Property in Woombye ranges from original weatherboard homes and Queenslanders in the village core to newer homes on larger blocks on the surrounding hillsides. There's also a pocket of acreage properties to the west and south, plus a small number of unit developments near the town centre.",
    uniquePara3:
      "Woombye's village streets are relatively narrow with established trees and heritage kerbing that requires careful truck positioning. The hillside properties surrounding the village often have steep driveways and split-level homes that demand extra equipment and time. Our team knows Woombye well — from the tight turns around Blackall Street to the steep blocks on Hill and Paynter Streets.",
    nearbySubs: ["Nambour", "Palmwoods", "Buderim"],
    priceFrom: "$179/hr",
    serviceArea: "Woombye & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Woombye | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Woombye with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a weatherboard cottage in Woombye to a modern home in Sippy Downs. R2G handled the old house's low doorways and narrow hallways perfectly. Not a mark on the walls. Really careful team.",
        name: "Janet P.",
        location: "Woombye",
        date: "January 2025",
      },
      {
        text: "R2G relocated us from Logan to Woombye for the lifestyle change. They arrived right on time, the price was spot-on and they even helped us figure out where to position the fridge in the new kitchen. Legends.",
        name: "Dave & Lisa T.",
        location: "Logan → Woombye",
        date: "November 2024",
      },
      {
        text: "We did a short move within Woombye — from a flat block to a hillside property. R2G brought the right gear for the steep driveway and had everything set up before dark. Professional and efficient.",
        name: "Ross G.",
        location: "Woombye",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Mention heritage cottage doorway sizes.",
        text: "Woombye's older cottages and Queenslanders often have narrow doorways and low ceilings. Let us know the age of your home so we can plan furniture routing and bring removal straps for awkward angles.",
      },
      {
        heading: "Warn us about hillside driveway access.",
        text: "Properties on the hills surrounding Woombye village can have steep driveways with limited turning space. Sharing your address helps us select the right vehicle and plan safe access.",
      },
      {
        heading: "Use quiet village streets to your advantage.",
        text: "Woombye's low-traffic village streets mean truck parking and access is generally straightforward. We can often park right outside the front door for fast, efficient loading.",
      },
      {
        heading: "Coordinate with the railway timetable.",
        text: "The level crossing near Woombye station can cause brief delays. We're aware of the train schedule and time our truck movements to avoid unnecessary waits at the crossing.",
      },
    ],
  },
  {
    slug: "eudlo",
    name: "Eudlo",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "16km south-west of Maroochydore",
    postcode: "4554",
    latitude: -26.7228,
    longitude: 152.9525,
    uniquePara1:
      "Eudlo is one of the Sunshine Coast's hidden hinterland gems — a tiny village between Palmwoods and the Eudlo Creek valley. Known for its award-winning café scene, heritage railway station and peaceful semi-rural setting, Eudlo attracts buyers seeking a quiet, community-oriented lifestyle just minutes from the Bruce Highway.",
    uniquePara2:
      "Property in Eudlo is almost exclusively low-density — older timber homes on generous blocks in the village, modern homes on acreage lots along the surrounding ridgelines and rural properties along Eudlo Creek Road. There are very few townhouses or apartments, reflecting the village's commitment to preserving its rural character.",
    uniquePara3:
      "Eudlo's small size means most moves are straightforward in terms of finding the property, but access can be challenging. Village homes may be on raised stumps with external-only stair access, while acreage properties along the creek can have long driveways through dense vegetation that limit truck size. Our team brings the right equipment for both situations and plans access routes based on your specific property layout.",
    nearbySubs: ["Palmwoods", "Woombye", "Sippy Downs"],
    priceFrom: "$179/hr",
    serviceArea: "Eudlo & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Eudlo | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Eudlo with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "Moved from a raised timber home in Eudlo village to a property along Eudlo Creek Road. R2G handled the stairs at the old place and the long dirt driveway at the new place with equal ease. Very adaptable team.",
        name: "Sue & Kevin R.",
        location: "Eudlo",
        date: "February 2025",
      },
      {
        text: "R2G moved us from the Sunshine Coast to Eudlo — a tree-change move. They were so careful with our piano on the external stairs and everything was set up exactly where we wanted it. Brilliant service.",
        name: "Andrea M.",
        location: "Mooloolaba → Eudlo",
        date: "October 2024",
      },
      {
        text: "Small move from Eudlo to Palmwoods. R2G sent two guys and a small truck — perfect for the job. Done in under three hours and the price was very fair. No complaints.",
        name: "Lachlan D.",
        location: "Eudlo → Palmwoods",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Describe your property access in detail.",
        text: "Eudlo properties vary from compact village blocks to long rural driveways through bush. A detailed description of your access — including driveway surface, width and any gates — helps us plan the perfect move.",
      },
      {
        heading: "Mention raised or high-set homes.",
        text: "Many Eudlo village homes are on raised stumps with external stairs as the only entry. We bring stair-climbing equipment but need to know in advance to allocate the right crew size and time.",
      },
      {
        heading: "Check creek-side access after rain.",
        text: "Properties along Eudlo Creek can be affected by rising water levels and soft ground after heavy rain. Let us know if you're near the creek and we'll monitor conditions in the lead-up to your move.",
      },
      {
        heading: "Plan for vegetation clearance.",
        text: "Some acreage driveways around Eudlo have overhanging trees and narrow clearance. Check your truck access height and width and share any concerns so we can select the best vehicle.",
      },
    ],
  },
  {
    slug: "kenilworth",
    name: "Kenilworth",
    region: "Sunshine Coast Hinterland",
    state: "QLD",
    distanceFromCBD: "38km west of Maroochydore",
    postcode: "4574",
    latitude: -26.5881,
    longitude: 152.7361,
    uniquePara1:
      "Kenilworth is a remote hinterland town deep in the Mary Valley, surrounded by state forest, national park and some of the Sunshine Coast's most stunning dairy country. The town is famous for its cheese factory, country bakery and the annual Kenilworth Celebration of Real Food festival, drawing visitors and tree-changers seeking genuine rural seclusion.",
    uniquePara2:
      "Property in Kenilworth is predominantly rural — working cattle and dairy farms, lifestyle acreage blocks, hobby farms and a handful of timber homes in the small township. The area also has a number of off-grid and sustainable living properties that present unique moving challenges around solar equipment, water tanks and custom-built structures.",
    uniquePara3:
      "Kenilworth is the most remote suburb we service on the Sunshine Coast, reached via the winding Kenilworth-Brooloo Road or the Obi Obi Road from Mapleton. Both routes are narrow, steep in sections and add significant travel time. Our team plans Kenilworth moves with extra transit time, uses appropriate truck sizes for the road conditions, and brings heavy-duty equipment for rural property access including long gravel driveways, creek crossings and paddock approaches.",
    nearbySubs: ["Yandina", "Nambour", "Maleny"],
    priceFrom: "$179/hr",
    serviceArea: "Kenilworth & Sunshine Coast Hinterland",
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    phone: "1300 959 498",
    metaTitle: "Removalists Kenilworth | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Kenilworth with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
    reviews: [
      {
        text: "R2G moved our entire 50-acre farm's household contents from Kenilworth to a property in Maleny. The drive along the range was handled expertly and they managed a tricky creek crossing on our driveway. Outstanding team.",
        name: "Bruce & Lorraine H.",
        location: "Kenilworth",
        date: "March 2025",
      },
      {
        text: "We relocated from Brisbane to a lifestyle block in Kenilworth. R2G managed the long drive and the 800m unpaved driveway without any issues. All our furniture arrived in perfect condition despite the bumpy road.",
        name: "Steven K.",
        location: "Brisbane → Kenilworth",
        date: "December 2024",
      },
      {
        text: "Small move from Kenilworth township to the other side of town. Even for a short move, R2G was professional and careful. They respected our rural property and left no mess. Much appreciated.",
        name: "Diana F.",
        location: "Kenilworth",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Factor in extended travel time.",
        text: "Kenilworth is roughly 45 minutes from the coast via winding hinterland roads. We build this extra travel time into your quote so there are no surprises — it affects the total move duration significantly.",
      },
      {
        heading: "Describe your rural access in detail.",
        text: "Kenilworth properties can involve creek crossings, paddock gates, cattle grids and long unpaved driveways. The more detail you provide about access, the better we can plan truck selection and timing.",
      },
      {
        heading: "Mention off-grid or specialty equipment.",
        text: "Many Kenilworth properties have solar panels, battery systems, water tanks and other specialty equipment. Let us know if these need relocating so we can arrange appropriate handling and transport.",
      },
      {
        heading: "Plan for weather-dependent access.",
        text: "Heavy rain can make Kenilworth's rural roads and driveways impassable. We monitor weather forecasts closely and will contact you to reschedule if conditions make safe access impossible, at no extra charge.",
      },
    ],
  },
];

export function getSunshineCoastSuburb(slug: string): SunshineCoastSuburb | undefined {
  return sunshineCoastSuburbs.find((s) => s.slug === slug);
}

/** Map of suburb display name -> route path for Sunshine Coast suburbs that have a built page. */
export const sunshineCoastSuburbRouteMap: Record<string, string> = {
  "Sunshine Coast": "/removalists-sunshine-coast",
  ...Object.fromEntries(
    sunshineCoastSuburbs.map((s) => [s.name, `/removalists-sunshine-coast/${s.slug}`]),
  ),
};

/** Returns the route path for a Sunshine Coast suburb if a page exists, otherwise undefined. */
export function getSunshineCoastSuburbHref(name: string): string | undefined {
  return sunshineCoastSuburbRouteMap[name];
}
