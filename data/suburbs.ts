import { cairnsInnerSuburbs } from "./cairns-suburbs-inner";
import { cairnsBeachSuburbs } from "./cairns-suburbs-beaches";
import { cairnsSouthSuburbs } from "./cairns-suburbs-south";
import { cairnsTablelandsSuburbs } from "./cairns-suburbs-tablelands";
import { cairnsDouglasSuburbs } from "./cairns-suburbs-douglas";
import { cairnsCassowarySuburbs } from "./cairns-suburbs-cassowary";
import { cairnsCookShireSuburbs } from "./cairns-suburbs-cookshire";

export interface Suburb {
  slug: string;
  name: string;
  region: string;
  state: string;
  distanceFromCBD: string;
  postcode: string;
  latitude: number;
  longitude: number;
  uniquePara1: string;
  uniquePara2: string;
  nearbySubs: string[];
  priceFrom: string;
  serviceArea: string;
  address: string;
  phone: string;
  metaTitle: string;
  metaDescription: string;
  moveDay?: string;
  localFaqs?: { question: string; answer: string }[];
  serviceSummary?: string;
}

export interface CairnsSuburb extends Suburb {
  reviews: { text: string; name: string; location: string; date: string }[];
  tips: { heading: string; text: string }[];
  uniquePara3: string;
}

const coreSuburbs: CairnsSuburb[] = [
  {
    slug: "smithfield",
    name: "Smithfield",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "14km north of Cairns City",
    postcode: "4878",
    latitude: -16.8174,
    longitude: 145.6997,
    uniquePara1:
      "Smithfield is home to James Cook University and Cairns' largest shopping precinct, making it one of the city's most active moving hubs. We regularly help students, academics and families relocate to and from the Smithfield area.",
    uniquePara2:
      "The mix of older residential streets and newer estates in Smithfield means our team comes prepared for everything from tight unit driveways to large family home moves across multiple levels.",
    uniquePara3:
      "Access around the JCU campus precinct and Smithfield Shopping Centre can get congested during semester start and end periods. Our team knows the back streets and service roads that keep your move running smoothly, and we use smaller trucks when needed for the compact townhouse complexes common along McGregor Road and the surrounding student accommodation areas.",
    nearbySubs: ["Trinity Beach", "Yorkeys Knob", "Caravonica"],
    priceFrom: "$179/hr",
    serviceArea: "Smithfield & Northern Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Smithfield | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Smithfield with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "Moved from a unit near JCU into a house in Caravonica. The R2G lads were quick, careful and knew exactly where to park the truck near campus. Everything arrived without a scratch — couldn't be happier.",
        name: "Daniel W.",
        location: "Smithfield",
        date: "February 2025",
      },
      {
        text: "We relocated our 4-bedroom home from Smithfield to Redlynch. The team handled the steep driveway at our old place like pros and had the truck loaded before lunch. Great value for what you get.",
        name: "Rachel P.",
        location: "Smithfield",
        date: "November 2024",
      },
      {
        text: "R2G helped us move from Smithfield Heights to Edmonton. They turned up on time, wrapped everything properly and were done in under four hours. The quote was accurate and the guys were genuinely friendly.",
        name: "Steve M.",
        location: "Smithfield Heights",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Avoid JCU semester changeover periods.",
        text: "Smithfield gets extremely busy with student moves at the start and end of university semesters (late February and late June). If you can, schedule your move outside these windows to avoid traffic congestion around the campus and shopping centre.",
      },
      {
        heading: "Check truck access on your street.",
        text: "Many Smithfield townhouse complexes and older streets have narrow driveways or visitor parking restrictions. Let us know your address when booking so we can plan the right truck size and parking approach for your specific property.",
      },
      {
        heading: "Watch for afternoon storms in the wet.",
        text: "Smithfield sits at the base of the range and cops heavy afternoon storms from November through April. We schedule around weather when possible, but having items boxed and ready to go quickly helps us load between downpours.",
      },
      {
        heading: "Coordinate parking near the shopping centre.",
        text: "If you're moving into a unit or townhouse near Smithfield Shopping Centre, parking for removal trucks can be competitive during business hours. We recommend booking a morning move and reserving visitor parking through your body corporate the day before to guarantee our truck has a clear loading spot.",
      },
    ],
  },
  {
    slug: "trinity-beach",
    name: "Trinity Beach",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "25km north of Cairns City",
    postcode: "4879",
    latitude: -16.7985,
    longitude: 145.6996,
    uniquePara1:
      "Trinity Beach is one of Cairns' most sought-after coastal suburbs, known for its relaxed lifestyle and beachfront living. We frequently move families and retirees into this beautiful northern beaches community.",
    uniquePara2:
      "Many homes in Trinity Beach feature elevated decks, open-plan living areas and large outdoor furniture — our team is experienced with coastal property moves and the care required for beachside relocations.",
    uniquePara3:
      "Properties along the Trinity Beach Esplanade and surrounding streets often have steep, narrow driveways that require careful truck positioning. Our drivers know the area well and come prepared with ramps and trolleys suited to elevated coastal homes. We also take extra precautions wrapping outdoor furniture and items exposed to salt air to prevent any transit damage.",
    nearbySubs: ["Kewarra Beach", "Clifton Beach", "Smithfield"],
    priceFrom: "$179/hr",
    serviceArea: "Trinity Beach & Northern Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Trinity Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Trinity Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a townhouse in Trinity Beach to a house in Kewarra Beach. The team was incredibly careful carrying furniture down our steep front stairs and nothing was damaged. Really professional service.",
        name: "Megan H.",
        location: "Trinity Beach",
        date: "January 2025",
      },
      {
        text: "We relocated from inner-city Cairns to Trinity Beach and R2G made it seamless. They knew exactly how to navigate the tight esplanade streets and had our 3-bedroom home fully unpacked by mid-afternoon.",
        name: "James R.",
        location: "Trinity Beach",
        date: "December 2024",
      },
      {
        text: "Fantastic team. Moved our beachside unit in Trinity Beach — they wrapped every piece of outdoor furniture and were extra careful with our salt-air-affected timber pieces. Highly recommend for any northern beaches move.",
        name: "Carol B.",
        location: "Trinity Beach",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Plan for esplanade parking.",
        text: "Street parking along Trinity Beach Esplanade is limited, especially on weekends and public holidays. Let us know your exact address so we can arrange the best loading approach — we may need to use a smaller truck or reserve a spot in advance.",
      },
      {
        heading: "Protect items from salt air damage.",
        text: "If you've been living beachside, outdoor furniture and metal items may have salt corrosion. Point out any fragile or corroded pieces to our team on the day so we can wrap them with extra padding to prevent further damage during transit.",
      },
      {
        heading: "Book ahead for school holiday periods.",
        text: "Trinity Beach is a popular destination for families relocating during school holidays. These periods fill up fast — book at least 3-4 weeks in advance between December and January to secure your preferred moving date.",
      },
      {
        heading: "Consider the Captain Cook Highway.",
        text: "All northern beaches moves travel via the Captain Cook Highway. Morning and afternoon peak hours (7-9am and 3:30-5:30pm) can slow things down considerably. A mid-morning start often works best for Trinity Beach moves.",
      },
    ],
  },
  {
    slug: "palm-cove",
    name: "Palm Cove",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "27km north of Cairns City",
    postcode: "4879",
    latitude: -16.7453,
    longitude: 145.6681,
    uniquePara1:
      "Palm Cove is one of Far North Queensland's most prestigious addresses, featuring luxury resorts, boutique apartments and high-end beachfront homes. Our team handles Palm Cove moves with the extra care and discretion that premium properties demand.",
    uniquePara2:
      "Salt air exposure is a real consideration when moving in Palm Cove — we use quality furniture wrapping and protective materials on every move to protect your belongings from the coastal environment.",
    uniquePara3:
      "Many Palm Cove properties are located within resort complexes or gated communities that have specific access times, loading dock requirements and lift booking procedures. Our team liaises directly with body corporates and building managers ahead of time to ensure your move runs without delays. We also carry specialised padding for marble floors and premium finishes commonly found in Palm Cove residences.",
    nearbySubs: ["Trinity Beach", "Kewarra Beach", "Ellis Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Palm Cove & Northern Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Palm Cove | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Palm Cove with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G relocated us from a luxury apartment on Williams Esplanade to a home in Port Douglas. They coordinated with our building manager, protected the marble lobby floors and treated our antique furniture with real care. First-class service.",
        name: "Geoff & Diana S.",
        location: "Palm Cove",
        date: "March 2025",
      },
      {
        text: "Moved from a resort-style unit in Palm Cove down to Cairns City. The R2G team were punctual, polite and handled our designer furniture like it was their own. Not a single mark on anything.",
        name: "Rebecca F.",
        location: "Palm Cove",
        date: "October 2024",
      },
      {
        text: "We downsized from a large Palm Cove home into a smaller apartment in Trinity Beach. R2G helped us work out what would fit, moved everything efficiently and even took the excess items to storage. Brilliant service.",
        name: "Arthur M.",
        location: "Palm Cove",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Book resort complex access in advance.",
        text: "Most Palm Cove apartment and resort buildings require advance booking for loading docks and lifts. Let us know your building name when you book and we'll coordinate access so there are no surprises on moving day.",
      },
      {
        heading: "Protect premium furnishings.",
        text: "Palm Cove homes often feature high-value furniture, artwork and delicate items. Point out anything requiring special attention during your quote and we'll bring extra padding, custom crating and art-specific wrapping materials.",
      },
      {
        heading: "Avoid peak tourist season if possible.",
        text: "Palm Cove is a major tourist destination and the esplanade area gets very congested between June and October (dry season). Midweek moves during these months are much smoother than weekend bookings.",
      },
      {
        heading: "Arrange lift and lobby access for apartments.",
        text: "Many Palm Cove apartment buildings have a single service lift and strict lobby access times for moving. Confirm lift availability and any floor-protection requirements with your building manager at least a week before your move so we can schedule accordingly and bring the right protective coverings.",
      },
    ],
  },
  {
    slug: "edge-hill",
    name: "Edge Hill",
    region: "Inner Cairns",
    state: "QLD",
    distanceFromCBD: "4km north of Cairns City",
    postcode: "4870",
    latitude: -16.9050,
    longitude: 145.7600,
    uniquePara1:
      "Edge Hill is one of Cairns' most character-rich suburbs, featuring Queenslander homes, steep blocks and lush tropical gardens. We know the streets of Edge Hill well and come fully prepared for elevated access and narrow driveways.",
    uniquePara2:
      "The heritage-style homes common in Edge Hill often require extra care with staircases and verandahs — our experienced removalists treat every property with the respect it deserves.",
    uniquePara3:
      "Edge Hill's steep, winding streets like Collins Avenue and Walsh Street can challenge large trucks. Our team assesses access before moving day and selects the right vehicle for your property — sometimes a smaller truck with shuttle runs is faster and safer than trying to squeeze a large vehicle up a narrow hillside driveway. We're also experienced with navigating narrow Queenslander hallways and tight staircase turns.",
    nearbySubs: ["Whitfield", "Cairns City", "Freshwater"],
    priceFrom: "$179/hr",
    serviceArea: "Edge Hill & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Edge Hill | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Edge Hill with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us out of a raised Queenslander on Collins Avenue. The staircase was narrow and steep but the guys handled every piece of heavy furniture without a single bump on the walls. Genuinely impressed.",
        name: "Paula J.",
        location: "Edge Hill",
        date: "January 2025",
      },
      {
        text: "We moved from Edge Hill to Whitfield — just a short trip but the access at both ends was tricky. R2G used a smaller truck and got everything done in half a day. Great crew, great price.",
        name: "Nick D.",
        location: "Edge Hill",
        date: "October 2024",
      },
      {
        text: "Moved our family from a modern home in Edmonton up to a character Queenslander in Edge Hill. The R2G team took real care getting our large furniture up the narrow staircase. Professional from start to finish.",
        name: "Simone T.",
        location: "Edge Hill",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Assess staircase and hallway widths.",
        text: "Many Edge Hill Queenslanders have narrow internal hallways and steep external staircases. Measure your largest items (beds, sofas, fridges) before moving day and let us know — we can plan disassembly or alternative entry points in advance.",
      },
      {
        heading: "Check street parking for the truck.",
        text: "Edge Hill's hilly streets often have limited driveway access. If your property can't fit a truck in the driveway, let us know so we can plan on-street parking — and we'll bring extra trolleys for the longer carry distance.",
      },
      {
        heading: "Watch for overhanging branches.",
        text: "Edge Hill's lush tropical gardens and mature trees can obstruct truck access. If you have low-hanging branches over your driveway or front path, trimming them before moving day helps us get the truck closer and speeds up the job.",
      },
      {
        heading: "Protect verandahs and timber floors.",
        text: "Heritage Queenslanders in Edge Hill often have polished timber floors and painted verandahs. We lay protective runners and use felt pads on furniture legs, but please let us know about any freshly painted or recently polished surfaces.",
      },
    ],
  },
  {
    slug: "redlynch",
    name: "Redlynch",
    region: "Western Suburbs",
    state: "QLD",
    distanceFromCBD: "12km west of Cairns City",
    postcode: "4870",
    latitude: -16.8596,
    longitude: 145.6849,
    uniquePara1:
      "Redlynch is a fast-growing western suburb of Cairns popular with families seeking larger homes and a quieter lifestyle. The area has seen significant new development, and we regularly move families into the estates and new builds throughout the valley.",
    uniquePara2:
      "With a mix of established homes and new housing estates, Redlynch moves often involve large family households. Our team is experienced with high-volume moves and can handle full house relocations efficiently.",
    uniquePara3:
      "The Redlynch Valley is nestled at the base of the Kuranda Range, and properties backing onto the rainforest can have damp, muddy driveways during the wet season. Our team brings protective matting for soft ground and plans routes through newer estates like Redlynch Knolls and Freshwater Rise where wide streets and double garages make loading straightforward.",
    nearbySubs: ["Caravonica", "Smithfield", "Freshwater"],
    priceFrom: "$179/hr",
    serviceArea: "Redlynch & Western Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Redlynch | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Redlynch with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved our 5-bedroom family home from Redlynch to a new build in the Knolls estate. With three kids' worth of stuff it was a big job, but the team had everything packed and relocated in one day. Exceptional effort.",
        name: "Andrew & Kate B.",
        location: "Redlynch",
        date: "February 2025",
      },
      {
        text: "We moved from a unit in Cairns City out to Redlynch Valley. The R2G crew handled the Kuranda Range Road drive with our furniture perfectly — everything arrived in great condition despite the winding road.",
        name: "Michelle G.",
        location: "Redlynch Valley",
        date: "November 2024",
      },
      {
        text: "Great service moving our elderly parents from their large home in Redlynch to a smaller place in Freshwater. The guys were patient, respectful and incredibly careful with Mum's antique china cabinet.",
        name: "David L.",
        location: "Redlynch",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Watch out for wet-season mud.",
        text: "Properties on the western edge of Redlynch Valley, backing onto the range, can get very muddy driveways in the wet season. Let us know if your driveway is unsealed or slippery — we'll bring ground mats and adjust our approach.",
      },
      {
        heading: "Plan for large household volumes.",
        text: "Redlynch homes tend to be larger than Cairns average — 4-5 bedrooms with double garages full of outdoor and sports equipment. Be upfront about your total volume when requesting a quote so we bring the right size truck.",
      },
      {
        heading: "Use the Redlynch Connection Road.",
        text: "If you're moving within the valley or to the northern beaches, the Redlynch Connection Road avoids CBD traffic entirely. Our drivers know the most efficient routes from every part of Redlynch to anywhere in the Cairns region.",
      },
      {
        heading: "Protect belongings from range humidity.",
        text: "Redlynch Valley sits close to the rainforest ranges and experiences higher humidity than coastal suburbs, especially overnight. If you have leather furniture, musical instruments or electronics that have been stored in non-air-conditioned rooms, let us know so we can use moisture-barrier wrapping during transit.",
      },
    ],
  },
  {
    slug: "gordonvale",
    name: "Gordonvale",
    region: "Southern Suburbs",
    state: "QLD",
    distanceFromCBD: "24km south of Cairns City",
    postcode: "4865",
    latitude: -17.0977,
    longitude: 145.7839,
    uniquePara1:
      "Gordonvale is a charming sugar-cane town located south of Cairns, popular with families looking for a rural lifestyle within commuting distance of the city. We service Gordonvale regularly for both local moves and relocations to and from Cairns.",
    uniquePara2:
      "Rural properties and acreage homes are common in the Gordonvale area — our team is well-equipped for moves that involve large items, outdoor furniture and rural property access.",
    uniquePara3:
      "Gordonvale properties often sit on larger blocks with long gravel driveways and separate sheds housing ride-on mowers, tools and outdoor equipment. Our team brings the right vehicles for rural access — including smaller shuttle trucks when main driveways can't accommodate a full-size removal truck. We also know the Bruce Highway well and time our Gordonvale runs to avoid the worst of the Cairns commuter traffic.",
    nearbySubs: ["Edmonton", "Babinda", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Gordonvale & South Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Gordonvale | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Gordonvale with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a house in Cairns North down to a 5-acre property in Gordonvale. They navigated the long gravel driveway without any issues and even helped us move the ride-on mower into the new shed. Top blokes.",
        name: "Wayne R.",
        location: "Gordonvale",
        date: "January 2025",
      },
      {
        text: "We downsized from acreage in Gordonvale to a unit in Edmonton. R2G were upfront about what would fit and what wouldn't, helped us plan the move, and had everything done efficiently. No hidden charges.",
        name: "Barbara K.",
        location: "Gordonvale",
        date: "October 2024",
      },
      {
        text: "Moved our family home from Gordonvale into town. The R2G team arrived right on time despite the Bruce Highway being busy. Everything was wrapped carefully and delivered in perfect condition to our new place in Cairns City.",
        name: "Chris A.",
        location: "Gordonvale",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Time your move around Bruce Highway traffic.",
        text: "Gordonvale is 24km south of Cairns on the Bruce Highway. Morning peak (7-8:30am) heading north and afternoon peak (4-5:30pm) heading south can add significant time. A 9am start usually avoids the worst of it.",
      },
      {
        heading: "Prepare rural driveways for the truck.",
        text: "If your Gordonvale property has a long gravel or dirt driveway, check that it's in good condition before moving day — especially after wet season rain. Potholes and soft edges can slow things down.",
      },
      {
        heading: "Don't forget the shed.",
        text: "Gordonvale properties often have large sheds full of tools, mowers and outdoor equipment. Make sure to include shed contents in your inventory when requesting a quote — it's a common oversight that can affect truck size and timing.",
      },
      {
        heading: "Watch for cane trains during harvest.",
        text: "During the crushing season (June-November), cane trains cross roads around Gordonvale and can cause brief delays. It's a minor factor but worth knowing if you're on a tight schedule.",
      },
    ],
  },
  {
    slug: "yorkeys-knob",
    name: "Yorkeys Knob",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "18km north of Cairns City",
    postcode: "4878",
    latitude: -16.8279,
    longitude: 145.7267,
    uniquePara1:
      "Yorkeys Knob is a relaxed beachside suburb north of Cairns, known for its marina, fishing community and laid-back atmosphere. We help residents move in and out of this popular coastal community year-round.",
    uniquePara2:
      "With a strong mix of waterfront properties, holiday homes and permanent residences, Yorkeys Knob moves often require careful handling of outdoor and marine lifestyle equipment alongside standard household furniture.",
    uniquePara3:
      "The Half Moon Bay estate and marina precinct in Yorkeys Knob feature a mix of modern homes and canal-front properties with boat ramps and outdoor entertaining areas. Our team is experienced with handling kayaks, fishing gear, outdoor kitchens and marine equipment that are common in these coastal homes. We also know the single-access road into Yorkeys Knob well and plan accordingly to avoid bottlenecks.",
    nearbySubs: ["Holloways Beach", "Smithfield", "Caravonica"],
    priceFrom: "$179/hr",
    serviceArea: "Yorkeys Knob & Northern Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Yorkeys Knob | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Yorkeys Knob with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from the Half Moon Bay estate to a home in Palm Cove. They handled our outdoor kitchen setup, kayak and all the fishing gear alongside the household furniture. Everything arrived perfectly. Great crew.",
        name: "Brett F.",
        location: "Yorkeys Knob",
        date: "February 2025",
      },
      {
        text: "We relocated from Cairns City to a canal-front home in Yorkeys Knob. The R2G team knew the streets around the marina and positioned the truck perfectly despite the tight access. Professional and friendly throughout.",
        name: "Sandra W.",
        location: "Yorkeys Knob",
        date: "November 2024",
      },
      {
        text: "Moved our holiday home contents from Yorkeys Knob into storage at R2G's depot while we renovated. They were flexible with timing and the whole process was hassle-free. Will definitely use them again when we move back in.",
        name: "Greg P.",
        location: "Yorkeys Knob",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Plan around the single access road.",
        text: "Yorkeys Knob is accessed via a single road off the Captain Cook Highway. During school drop-off and pick-up times this road can get busy. A mid-morning start avoids the peak and gives our team clear runs.",
      },
      {
        heading: "Include marina and outdoor items in your quote.",
        text: "Yorkeys Knob homes often come with kayaks, stand-up paddleboards, fishing gear, outdoor kitchens and marine equipment. Include everything in your inventory when requesting a quote so we bring the right truck and packing materials.",
      },
      {
        heading: "Secure loose items before cyclone season moves.",
        text: "If you're moving into Yorkeys Knob during cyclone season (November-April), make sure outdoor items are secured quickly after unloading. Our team can help position heavy items in sheltered spots as we unload.",
      },
      {
        heading: "Drain and prepare watercraft for transport.",
        text: "Many Yorkeys Knob homes have kayaks, tinnies or stand-up paddleboards stored near the marina or in garages. Drain any water, remove loose fittings and let us know the dimensions when booking so we can secure them properly on the truck alongside your household items.",
      },
    ],
  },
  {
    slug: "whitfield",
    name: "Whitfield",
    region: "Inner Cairns",
    state: "QLD",
    distanceFromCBD: "5km north of Cairns City",
    postcode: "4870",
    latitude: -16.8900,
    longitude: 145.7350,
    uniquePara1:
      "Whitfield is a prestigious residential suburb nestled at the foot of the rainforest ranges, known for its large homes, quiet streets and proximity to Cairns CBD. It is a popular choice for professionals and executives relocating within Cairns.",
    uniquePara2:
      "The larger, well-appointed homes in Whitfield typically involve significant furniture volumes and high-value items — our team takes particular care with premium furnishings and ensures everything arrives in perfect condition.",
    uniquePara3:
      "Whitfield properties on the range side often sit on steep blocks with elevated driveways and multi-level layouts. Some homes on streets like Dobell Close and Boden Court require our smaller shuttle truck to access the driveway before transferring items to the main vehicle at street level. We're experienced with these logistics and always do a pre-move site assessment for Whitfield properties to plan the most efficient approach.",
    nearbySubs: ["Edge Hill", "Freshwater", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Whitfield & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Whitfield | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Whitfield with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G handled our executive relocation from Whitfield to a new position in Brisbane. They packed our entire 5-bedroom home, managed the storage of items we weren't taking, and delivered everything to our Brisbane home a week later. Seamless.",
        name: "Dr. Anthony C.",
        location: "Whitfield",
        date: "March 2025",
      },
      {
        text: "We moved from a steep block on the range side of Whitfield. R2G used a shuttle truck for the driveway and transferred everything to a larger vehicle at the street. Smart approach and nothing was damaged.",
        name: "Karen & Rob E.",
        location: "Whitfield",
        date: "December 2024",
      },
      {
        text: "Moved my parents from their long-time Whitfield home into a smaller place in Edge Hill. The R2G crew was incredibly respectful of their belongings and took extra care with fragile family heirlooms. Outstanding service.",
        name: "Sarah N.",
        location: "Whitfield",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Request a pre-move site visit.",
        text: "Whitfield properties vary dramatically in access — from easy flat driveways to steep, winding hillside approaches. A pre-move assessment helps us plan the right vehicle and team size for your specific property.",
      },
      {
        heading: "Protect premium finishes.",
        text: "Many Whitfield homes have polished timber floors, stone benchtops and premium fixtures. Let us know about any delicate surfaces and we'll lay protective coverings before moving any furniture through the house.",
      },
      {
        heading: "Plan for wildlife encounters.",
        text: "Whitfield borders the rainforest and it's common to encounter cassowaries, turkeys and other wildlife on moving day. Keep doors closed between loads to prevent curious animals from wandering in — our team is used to this in FNQ.",
      },
      {
        heading: "Allow extra time for steep driveway shuttles.",
        text: "Some Whitfield properties on streets like Dobell Close and Boden Court have driveways too steep for our full-size truck. In these cases we use a smaller shuttle vehicle to ferry items to the street. Factor in a little extra time when planning your day — it keeps the move safe and your driveway undamaged.",
      },
    ],
  },
  {
    slug: "freshwater",
    name: "Freshwater",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "8km north of Cairns City",
    postcode: "4870",
    latitude: -16.8735,
    longitude: 145.7129,
    uniquePara1:
      "Freshwater is a well-established suburban community that offers the perfect balance of city convenience and residential calm. Families and professionals frequently choose Freshwater for its schools, parks and easy access to the CBD.",
    uniquePara2:
      "With a variety of housing styles from older Queenslanders to modern builds, our Freshwater removalist team is experienced with all property types and come prepared for any access challenges the suburb presents.",
    uniquePara3:
      "Freshwater's older sections near the Freshwater Creek corridor feature raised Queenslander homes with narrow staircases and timber verandahs, while newer pockets along Quigley Street and around the Freshwater Christian College have wide driveways and modern layouts. Our team adjusts their approach based on the property — from using stairclimber trolleys on older homes to quick driveway loads on newer builds.",
    nearbySubs: ["Edge Hill", "Whitfield", "Redlynch"],
    priceFrom: "$179/hr",
    serviceArea: "Freshwater & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Freshwater | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Freshwater with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from an older Queenslander in Freshwater to a modern home in Redlynch. They were fantastic navigating the steep stairs at our old place and super-efficient loading at the new house. Best removalists we've used in Cairns.",
        name: "Tim & Lucy O.",
        location: "Freshwater",
        date: "January 2025",
      },
      {
        text: "We needed a quick move from a rental in Freshwater to another rental in Edge Hill. R2G quoted us fairly, turned up on time and finished well ahead of schedule. No fuss, no surprises. Exactly what you want.",
        name: "Josh S.",
        location: "Freshwater",
        date: "November 2024",
      },
      {
        text: "Moved our family home near Freshwater Station to a bigger place further up the valley. The R2G crew handled our piano and heavy bookshelf with real expertise. Everything placed exactly where we wanted it at the new house.",
        name: "Angela D.",
        location: "Freshwater",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Check clearance on raised Queenslanders.",
        text: "Many older Freshwater homes are raised on stilts with steep, narrow stairs. Measure your largest furniture pieces and let us know — we'll bring the right equipment and plan whether items need to go in through doors, windows, or verandahs.",
      },
      {
        heading: "Avoid school zone times.",
        text: "Freshwater has several popular schools and childcare centres. Streets near the Freshwater Christian College and state school get very congested during drop-off (8-9am) and pick-up (2:30-3:30pm). Scheduling your move outside these windows saves time.",
      },
      {
        heading: "Be mindful of creek flooding.",
        text: "Properties near Freshwater Creek can be affected by flash flooding during heavy wet-season rain. If your property is in a low-lying area, let us know and we'll monitor weather conditions and adjust the schedule if needed.",
      },
      {
        heading: "Arrange utility connections early.",
        text: "Freshwater is a popular suburb with high rental turnover, and utility providers can have a backlog during peak moving periods. Book your electricity, water and internet connections at least two weeks before your move so everything is live when you arrive — especially important if you need air conditioning running for unpacking in the tropical heat.",
      },
    ],
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    region: "Southern Suburbs",
    state: "QLD",
    distanceFromCBD: "12km south of Cairns City",
    postcode: "4869",
    latitude: -17.0197,
    longitude: 145.7530,
    uniquePara1:
      "Edmonton is one of Cairns' most affordable and accessible southern suburbs, popular with young families and first home buyers. The suburb has grown rapidly in recent years and we complete a high volume of moves in the Edmonton area.",
    uniquePara2:
      "The predominantly modern housing stock in Edmonton makes for efficient moves — our team is familiar with the area's estates and street layouts, allowing us to plan and execute moves quickly and cost-effectively.",
    uniquePara3:
      "Edmonton's newer estates like Mount Peter and Bentley Park feature wide streets and standard driveways that make truck access straightforward. However, some older sections of Edmonton along the Bruce Highway have narrower lots and carport-only access. Our team knows the difference and plans accordingly — most Edmonton moves are among our most efficient because the modern layouts suit our larger trucks perfectly.",
    nearbySubs: ["Gordonvale", "Cairns City", "Mount Sheridan"],
    priceFrom: "$179/hr",
    serviceArea: "Edmonton & South Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Edmonton | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Edmonton with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us into our first home in the Mount Peter estate. They were great — really friendly, careful with everything, and even gave us tips on settling in. Best value removalists in Cairns.",
        name: "Bryce & Emma H.",
        location: "Edmonton",
        date: "February 2025",
      },
      {
        text: "We relocated from a rental in Edmonton to a house in Gordonvale. R2G had our 3-bedroom home packed up and delivered in under four hours. The price was exactly what they quoted. No complaints at all.",
        name: "Tina V.",
        location: "Edmonton",
        date: "December 2024",
      },
      {
        text: "Moved from an older place on the Bruce Highway side of Edmonton to a newer estate near the shopping centre. The R2G team handled the narrow carport at the old place with no issues and were done well ahead of time.",
        name: "Marcus J.",
        location: "Edmonton",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Take advantage of wide estate streets.",
        text: "Most Edmonton estates have wide streets and standard double driveways, which means our large trucks can park close to your front door. This speeds up loading significantly — Edmonton moves are often our fastest in the Cairns region.",
      },
      {
        heading: "Avoid Bruce Highway peak hours.",
        text: "If your move involves travelling north to Cairns CBD, avoid the 7-8:30am rush on the Bruce Highway. A 9am or later start saves you money on the clock and gets our team to you with less stress.",
      },
      {
        heading: "Label rooms clearly at the new house.",
        text: "Edmonton homes typically have similar-looking rooms across the estates. Labelling each room at your new place before we arrive means our team can place boxes and furniture exactly where you want them — saving you time unpacking later.",
      },
      {
        heading: "Disconnect and prepare outdoor play equipment.",
        text: "Edmonton family homes often have trampolines, swing sets and cubby houses in the backyard. Disassemble what you can before moving day and bag all bolts and screws in labelled zip-lock bags. This saves our team time on site and ensures nothing goes missing during the move.",
      },
    ],
  },
  {
    slug: "atherton",
    name: "Atherton",
    region: "Western Suburbs",
    state: "QLD",
    distanceFromCBD: "80km southwest of Cairns City",
    postcode: "4883",
    latitude: -17.2667,
    longitude: 145.4833,
    uniquePara1:
      "Atherton is the commercial heart of the Western Suburbs, a thriving rural community known for its rich volcanic soil, dairy farms and stunning natural scenery. We regularly help families and businesses relocate to and from the Tablelands region.",
    uniquePara2:
      "Moves to and from Atherton often involve acreage properties, farm equipment and large household volumes. Our team is experienced with rural property access and the mountain road conditions between Cairns and the Tablelands.",
    uniquePara3:
      "The drive between Cairns and Atherton involves either the Gillies Highway or the Kuranda Range Road — both winding mountain passes that require careful load securing. Our drivers are experienced with these routes and tie down every item for the mountain journey. Atherton properties range from compact town homes near the main street to sprawling rural blocks on the outskirts, and our team brings the right combination of vehicles to handle both.",
    nearbySubs: ["Mareeba", "Innisfail", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Western Suburbs",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Atherton | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Atherton with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved our entire farm workshop and household from Atherton to a new property outside Mareeba. They brought two trucks, handled the range road with no issues and had everything in place by the end of the day. Couldn't believe how smooth it was.",
        name: "Warren & Jo T.",
        location: "Atherton",
        date: "March 2025",
      },
      {
        text: "We relocated from Cairns City up to Atherton for a tree change. R2G navigated the Gillies Highway perfectly and secured our furniture so well that not a single item shifted on the mountain bends. Very professional.",
        name: "Linda H.",
        location: "Atherton",
        date: "October 2024",
      },
      {
        text: "Moved Mum's home in Atherton town to a smaller unit nearby. R2G were patient, careful and helped us sort what was going to storage versus the new place. Really caring team — Mum was very happy.",
        name: "Peter G.",
        location: "Atherton",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Allow extra time for the range drive.",
        text: "The Gillies Highway and Kuranda Range Road are winding mountain passes that take 1-1.5 hours from Cairns with a loaded truck. We factor this into our quotes, but it's worth knowing that Atherton moves take longer due to travel time.",
      },
      {
        heading: "Prepare for cooler Tablelands temperatures.",
        text: "Atherton sits at 750m elevation and can be 5-10°C cooler than Cairns — especially in winter mornings. If you're moving fragile electronics or instruments, the temperature difference is rarely an issue but worth noting.",
      },
      {
        heading: "Include farm and shed items in your inventory.",
        text: "Atherton properties commonly have sheds with tools, farm equipment, and outdoor supplies. Walk through every building on your property when preparing your quote inventory — farm sheds often hold more than people expect.",
      },
      {
        heading: "Check road conditions after heavy rain.",
        text: "The Gillies Highway can occasionally close after very heavy rain or landslips. During the wet season, we monitor road conditions and will contact you if we need to reschedule or use an alternative route via Mareeba.",
      },
    ],
  },
  {
    slug: "innisfail",
    name: "Innisfail",
    region: "Southern Suburbs",
    state: "QLD",
    distanceFromCBD: "88km south of Cairns City",
    postcode: "4860",
    latitude: -17.5237,
    longitude: 146.0317,
    uniquePara1:
      "Innisfail is a charming Art Deco town south of Cairns, known for its multicultural heritage, banana and sugar cane farming, and proximity to the World Heritage Wet Tropics rainforest. We service Innisfail and the surrounding Southern Suburbs region regularly.",
    uniquePara2:
      "The mix of heritage Queenslanders and modern homes in Innisfail means our team comes prepared for all property types. We understand the unique challenges of moving in tropical Far North Queensland and plan accordingly.",
    uniquePara3:
      "Innisfail is one of Australia's wettest towns, receiving over 3,500mm of rain annually. Our team takes extra waterproofing precautions on every Innisfail move — using heavy-duty plastic wrap and waterproof covers on all furniture and boxes. Many older Innisfail homes are raised high on stilts as flood mitigation, which means navigating steep external stairs. We bring stairclimber equipment and extra hands when needed for these elevated properties.",
    nearbySubs: ["Cairns City", "Gordonvale", "Atherton"],
    priceFrom: "$179/hr",
    serviceArea: "Southern Suburbs and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Innisfail | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Innisfail with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from an elevated Queenslander in Innisfail to a modern home in Edmonton. The stairs at our old place were steep and narrow but the crew handled our heavy furniture down them like absolute pros. Nothing damaged.",
        name: "Tony & Maria C.",
        location: "Innisfail",
        date: "January 2025",
      },
      {
        text: "We needed to move from Innisfail to Cairns urgently for work. R2G fit us in within a week, drove the Bruce Highway carefully with our belongings, and delivered everything in perfect condition. Very reliable.",
        name: "Joanne P.",
        location: "Innisfail",
        date: "October 2024",
      },
      {
        text: "Moved from a rural property outside Innisfail into town. The R2G team navigated the dirt road to our old place and loaded up even our heaviest shed items. They were thorough and honest with the pricing.",
        name: "Frank S.",
        location: "South Innisfail",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Prepare for rain — always.",
        text: "Innisfail averages over 3,500mm of rain per year. Even in the 'dry' season, showers are common. We waterproof all loads as standard, but having your boxes sealed and items ready to load quickly makes a big difference.",
      },
      {
        heading: "Check if your home is flood-raised.",
        text: "Many older Innisfail homes are raised on high stilts for flood protection. This means steep stairs that require careful handling of heavy furniture. Let us know your property type so we can bring the right equipment.",
      },
      {
        heading: "Factor in the Bruce Highway travel time.",
        text: "Innisfail is 88km south of Cairns — approximately 1-1.5 hours on the Bruce Highway. We include travel time in our quotes and plan the route to avoid roadworks and peak traffic around Gordonvale.",
      },
      {
        heading: "Air out stored items before packing.",
        text: "Innisfail's extreme humidity means items stored in sheds, under houses or in non-ventilated rooms can develop mould and mildew. Wipe down and air out furniture, books and clothing a few days before your move to prevent transferring moisture and musty odours into your new home.",
      },
    ],
  },
  {
    slug: "port-douglas",
    name: "Port Douglas",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "67km north of Cairns City",
    postcode: "4877",
    latitude: -16.4837,
    longitude: 145.4649,
    uniquePara1:
      "Port Douglas is one of Far North Queensland's most iconic destinations, blending luxury resort living with a tight-knit residential community. We frequently assist permanent residents, holiday homeowners and hospitality workers with moves to and from Port Douglas.",
    uniquePara2:
      "Many properties in Port Douglas are high-end homes, apartments and villas that require extra care and attention. Our team handles premium relocations with the discretion and professionalism that Port Douglas residents expect.",
    uniquePara3:
      "The Port Douglas peninsula has narrow one-way streets around Macrossan Street and the marina precinct that require careful truck navigation. Many apartments and resort villas have body corporate rules about loading times and lift bookings — our team coordinates with building managers ahead of your move to avoid delays. The scenic Captain Cook Highway drive from Cairns is stunning but winding, and we secure every load thoroughly for the journey.",
    nearbySubs: ["Mossman", "Palm Cove", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Port Douglas | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Port Douglas with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G relocated us from a villa near Four Mile Beach to a home in Palm Cove. They coordinated with our body corporate, protected the common area floors and handled our artwork with gallery-level care. Exceptional service.",
        name: "David & Helen M.",
        location: "Port Douglas",
        date: "February 2025",
      },
      {
        text: "We moved from Cairns to a permanent home in Port Douglas. The R2G team drove the Captain Cook Highway carefully and had everything unloaded and placed perfectly in our new home by mid-afternoon. Professional start to finish.",
        name: "Rachel T.",
        location: "Port Douglas",
        date: "November 2024",
      },
      {
        text: "Needed to move our holiday apartment contents out of Port Douglas and into storage. R2G handled the building access, navigated the tight marina-area streets and stored everything safely. Will use them again when we move back.",
        name: "Ian W.",
        location: "Port Douglas Marina",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Coordinate building access in advance.",
        text: "Most Port Douglas apartments and resort villas have body corporate rules about moving times, loading docks and lift bookings. Give us your building name when you book and we'll arrange access ahead of time so your move goes smoothly.",
      },
      {
        heading: "Avoid peak tourist season for easier access.",
        text: "Port Douglas is packed with tourists from June through October. Macrossan Street and the marina precinct become very congested. If you can schedule a midweek move during these months, you'll avoid the worst traffic.",
      },
      {
        heading: "Secure loads for the Captain Cook Highway.",
        text: "The winding coastal road between Cairns and Port Douglas has sharp bends and steep grades. We secure every load carefully for this drive, but if you have any particularly fragile or top-heavy items, let us know so we can position them strategically.",
      },
      {
        heading: "Plan for the full travel distance.",
        text: "Port Douglas is 67km north of Cairns — about 1 hour's drive. We factor travel time into our pricing, and a morning start ensures we maximise the working day at your Port Douglas property.",
      },
    ],
  },
  {
    slug: "mareeba",
    name: "Mareeba",
    region: "Western Suburbs",
    state: "QLD",
    distanceFromCBD: "60km west of Cairns City",
    postcode: "4880",
    latitude: -17.0017,
    longitude: 145.4233,
    uniquePara1:
      "Mareeba is a vibrant agricultural town on the Western Suburbs, famous for its coffee, mangoes and rodeo. It serves as a major hub for the surrounding rural communities and we regularly complete moves throughout the Mareeba district.",
    uniquePara2:
      "Properties in Mareeba range from compact town homes to sprawling rural acreage. Our team is well-versed in the Tablelands road network and comes equipped for large-volume rural moves with the right trucks and protective materials.",
    uniquePara3:
      "Mareeba sits in the dry tropics, and the red dust common on rural properties can affect furniture and belongings during a move. Our team uses dust covers and sealed wrapping for Mareeba moves to keep items clean in transit. Properties on the outskirts — along Dimbulah Road, Biboohra Road and the surrounding farming areas — often have long unsealed driveways, and we bring vehicles suited to gravel and dirt access.",
    nearbySubs: ["Atherton", "Cairns City", "Port Douglas"],
    priceFrom: "$179/hr",
    serviceArea: "Mareeba & Western Suburbs",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Mareeba | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Mareeba with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved our family from a mango farm outside Mareeba into town. They handled the long dirt driveway, loaded the truck carefully despite the dust, and had us settled in the new place by sunset. Really good operators.",
        name: "Darren & Sue K.",
        location: "Mareeba",
        date: "January 2025",
      },
      {
        text: "We relocated from Mareeba to Cairns for work. R2G drove the Kennedy Highway with our full house load and nothing shifted. The team was friendly, efficient and the price was very fair for the distance involved.",
        name: "Amy L.",
        location: "Mareeba",
        date: "October 2024",
      },
      {
        text: "Moved from a rental in Mareeba town to an acreage block at Biboohra. Short distance but lots of stuff including workshop tools. R2G brought the right truck and handled everything with care. No complaints whatsoever.",
        name: "Colin R.",
        location: "Mareeba",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Factor in the Kennedy Highway drive.",
        text: "Mareeba is about 60km from Cairns via the Kennedy Highway through Kuranda. This winding mountain road adds travel time — we factor it into every quote and secure loads carefully for the bends and grades.",
      },
      {
        heading: "Prepare for dry tropics dust.",
        text: "Rural Mareeba properties often have red dust and unsealed driveways. We use dust covers and sealed wrapping, but sweeping down items and paths before we arrive speeds up loading and keeps your belongings cleaner.",
      },
      {
        heading: "Include workshop and farm items.",
        text: "Mareeba properties frequently have workshops, farm sheds and large outdoor areas full of tools and equipment. Walk through every outbuilding when preparing your inventory — these items add significant volume to a move.",
      },
      {
        heading: "Schedule around Mareeba's dry-season heat.",
        text: "Mareeba sits in the dry tropics and temperatures regularly exceed 35°C from September through December. An early morning start (6-7am) is ideal for moving during these months — it keeps our crew working efficiently and protects heat-sensitive items like candles, vinyl records and electronics from the intense afternoon sun.",
      },
    ],
  },
  {
    slug: "babinda",
    name: "Babinda",
    region: "Southern Suburbs",
    state: "QLD",
    distanceFromCBD: "58km south of Cairns City",
    postcode: "4861",
    latitude: -17.3446,
    longitude: 145.9252,
    uniquePara1:
      "Babinda is a small, tight-knit community nestled between the rainforest and cane fields south of Cairns, known for the famous Babinda Boulders and its strong local character. We service Babinda and the surrounding rural communities with reliable, friendly removalist services.",
    uniquePara2:
      "Properties in Babinda range from classic Queenslanders to rural acreage blocks. Our team is experienced with the access requirements of rural Far North Queensland properties and handles every move with care.",
    uniquePara3:
      "Babinda holds the record as one of Australia's wettest towns, and the lush tropical vegetation around properties can make access challenging — especially during the wet season when overgrown paths and muddy yards are common. Our team brings protective ground covers and wears appropriate footwear for muddy conditions. The town's compact layout means most Babinda moves are straightforward once we're on site, but the Bruce Highway drive from Cairns takes about 45 minutes and we plan accordingly.",
    nearbySubs: ["Innisfail", "Gordonvale", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Southern Suburbs and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Babinda | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Babinda with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Babinda to Cairns City. Despite the wet weather and muddy driveway at our old place, the team handled everything carefully and wrapped our furniture extra well for the highway drive. Very reliable crew.",
        name: "John & Mary B.",
        location: "Babinda",
        date: "February 2025",
      },
      {
        text: "We moved from a Queenslander in Babinda to a modern home in Edmonton. The R2G guys were great with the steep stairs at our old place and had us completely settled in the new house by the afternoon. Good value too.",
        name: "Tracey M.",
        location: "Babinda",
        date: "September 2024",
      },
      {
        text: "Needed to move some heavy furniture from a deceased estate in Babinda into storage in Cairns. R2G were respectful, careful and got it done efficiently. Would recommend them to anyone in the Babinda area.",
        name: "Neil F.",
        location: "Babinda",
        date: "May 2024",
      },
    ],
    tips: [
      {
        heading: "Prepare for tropical rain.",
        text: "Babinda is one of the wettest places in Australia. Even in the drier months, sudden downpours are common. We always waterproof loads from Babinda, but having your items boxed and ready to load quickly minimises exposure to rain.",
      },
      {
        heading: "Clear garden paths before moving day.",
        text: "The tropical vegetation around Babinda properties grows quickly, especially in the wet season. Trimming overhanging branches and clearing garden paths before we arrive helps us carry items safely and speeds up the move.",
      },
      {
        heading: "Allow time for highway travel.",
        text: "Babinda is 58km south of Cairns on the Bruce Highway — about 45 minutes' drive with a loaded truck. We factor this into our pricing and schedule, but an early start ensures we maximise daylight working time.",
      },
      {
        heading: "Check under-house storage areas.",
        text: "Many raised Babinda homes use the space underneath for storage — bikes, tools, camping gear and old furniture accumulate over the years. Do a thorough walk-through of under-house areas when preparing your inventory, as these spaces often hold more than expected and can change the truck size required.",
      },
    ],
  },
  {
    slug: "mossman",
    name: "Mossman",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "75km north of Cairns City",
    postcode: "4873",
    latitude: -16.4667,
    longitude: 145.3667,
    uniquePara1:
      "Mossman is the gateway to the Daintree Rainforest and a charming rural town in the Northern Cairns, known for the Mossman Gorge and its sugar cane heritage. We regularly move families and professionals to and from Mossman and the broader Northern Cairns region.",
    uniquePara2:
      "The relaxed lifestyle and natural beauty of Mossman attracts a mix of long-term locals and sea-changers. Our team understands the unique character of Northern Cairns properties and delivers moves with the care and professionalism the community expects.",
    uniquePara3:
      "Mossman's older town centre features workers' cottages and weatherboard homes on smaller lots with narrow street access, while properties along the Mossman-Daintree Road and surrounding cane country sit on larger rural blocks. Our team adjusts vehicles and crew size accordingly — sometimes a smaller truck is best for the town streets while larger properties need our full-size vehicle. The Captain Cook Highway drive from Cairns is scenic but takes over an hour with a loaded truck, and we secure every item for the journey.",
    nearbySubs: ["Port Douglas", "Cairns City", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Mossman | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Mossman with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Cairns to Mossman when we decided to make the tree change. They drove the Captain Cook Highway carefully, secured everything perfectly and even helped us arrange items in our new cottage. Excellent service.",
        name: "Phil & Jane A.",
        location: "Mossman",
        date: "March 2025",
      },
      {
        text: "We moved from a cane farm outside Mossman into a unit in Port Douglas. R2G handled the rural access, the farm shed cleanout and the tight parking at the Port Douglas apartment complex without any hassle.",
        name: "Donna C.",
        location: "Mossman",
        date: "November 2024",
      },
      {
        text: "Relocated from Mossman to Smithfield for work. R2G were honest about the travel time cost, arrived when they said they would, and moved our 3-bedroom house in one load. Great experience from start to finish.",
        name: "Sam K.",
        location: "Mossman",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Plan for the distance from Cairns.",
        text: "Mossman is 75km north of Cairns — over an hour's drive with a loaded truck via the Captain Cook Highway and Port Douglas turnoff. We include travel time in all quotes and recommend an early start to maximise your moving day.",
      },
      {
        heading: "Check the Daintree River ferry if moving north.",
        text: "If you're moving to properties north of the Daintree River, the cable ferry has weight limits and operating hours. Let us know your exact location so we can plan vehicle size and timing around the ferry schedule.",
      },
      {
        heading: "Prepare for tropical humidity.",
        text: "Mossman's tropical climate means high humidity year-round. Items stored in sheds or garages can develop mould. We recommend airing out and wiping down stored items before packing them for transport to your new home.",
      },
      {
        heading: "Notify us about rural or cane-road access.",
        text: "Properties on the outskirts of Mossman along cane roads and rural tracks may have unsealed driveways or weight-limited bridges. Give us your exact property address when booking so we can check access ahead of time and bring the appropriate vehicle — avoiding delays or the need to shuttle items from the road.",
      },
    ],
  },
  {
    slug: "clifton-beach",
    name: "Clifton Beach",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "22km north of Cairns City",
    postcode: "4879",
    latitude: -16.7648,
    longitude: 145.6780,
    uniquePara1:
      "Clifton Beach is one of Cairns' most popular northern beaches suburbs, offering a relaxed coastal lifestyle just minutes from the city. Families and professionals are drawn to its beachside streets, parks and strong community atmosphere.",
    uniquePara2:
      "Coastal properties in Clifton Beach often feature outdoor entertaining areas, beach furniture and salt-air exposed items requiring extra protection. Our team wraps and protects all items carefully for every Clifton Beach move.",
    uniquePara3:
      "Clifton Beach properties on the elevated side of Captain Cook Highway sit on sloping blocks with steep driveways and multi-level homes. Our drivers assess these properties before moving day and choose the right truck size for safe driveway access. The beachside streets are quieter but often lined with parked cars — we arrive early to secure the best loading position near your property.",
    nearbySubs: ["Trinity Beach", "Kewarra Beach", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Clifton Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Clifton Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a unit in Cairns City to a house in Clifton Beach. The team navigated the steep driveway at our new place perfectly and set everything up exactly where we wanted it. Great attention to detail.",
        name: "Laura & Simon J.",
        location: "Clifton Beach",
        date: "January 2025",
      },
      {
        text: "We relocated from Clifton Beach to Trinity Beach — just a short move but the R2G team treated it with the same care as a major relocation. All our beach and outdoor furniture was wrapped perfectly. No damage at all.",
        name: "Fiona G.",
        location: "Clifton Beach",
        date: "October 2024",
      },
      {
        text: "Moved our family home from Clifton Beach to Redlynch. R2G arrived early, worked efficiently through the heat and had everything done before the afternoon storms rolled in. Smart, experienced team.",
        name: "Ryan B.",
        location: "Clifton Beach",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Check driveway slope access.",
        text: "Many Clifton Beach homes on the hill side have steep driveways that may not suit large trucks. Let us know your address when booking and we'll assess whether a smaller vehicle or shuttle approach is needed.",
      },
      {
        heading: "Wrap outdoor and beach furniture well.",
        text: "Salt-air exposed furniture from Clifton Beach homes often has minor corrosion on metal parts. Point out any fragile outdoor items to our team so we can use extra protection and prevent further deterioration during the move.",
      },
      {
        heading: "Start early to beat the heat.",
        text: "The northern beaches can get very hot and humid, especially from October to March. An early morning start (7-8am) means the hardest physical work is done before the worst afternoon heat and potential storms.",
      },
      {
        heading: "Secure pool equipment and chemicals separately.",
        text: "Many Clifton Beach homes have swimming pools with pumps, filters, cleaning equipment and chemical supplies. Pool chemicals must be transported separately from household goods for safety. Drain and disconnect pool equipment the day before your move, and we'll load it securely in a dedicated section of the truck.",
      },
    ],
  },
  {
    slug: "kewarra-beach",
    name: "Kewarra Beach",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "23km north of Cairns City",
    postcode: "4879",
    latitude: -16.7731,
    longitude: 145.6847,
    uniquePara1:
      "Kewarra Beach is a quiet, leafy northern beaches suburb popular with families seeking a peaceful coastal lifestyle close to Cairns. The suburb is known for its lush tropical vegetation, friendly streets and proximity to the beach.",
    uniquePara2:
      "Many Kewarra Beach properties feature tropical gardens, pool areas and large outdoor living spaces. Our experienced removalists handle all property types in the northern beaches corridor with efficiency and care.",
    uniquePara3:
      "Kewarra Beach's leafy streets and mature tropical trees create a beautiful canopy but can restrict truck access on some properties. Our drivers know which streets can handle a full-size truck and where we need to use a smaller vehicle. The resort-style properties common along Kewarra Street and near the Kewarra Beach Resort often have pool furniture, sun shelters and tropical garden features that need careful handling alongside standard household items.",
    nearbySubs: ["Clifton Beach", "Trinity Beach", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Kewarra Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Kewarra Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from a resort-style home in Kewarra Beach to a townhouse in Smithfield. They wrapped our pool furniture and outdoor items just as carefully as the indoor pieces. Everything arrived spotless.",
        name: "Christine V.",
        location: "Kewarra Beach",
        date: "February 2025",
      },
      {
        text: "We relocated from Cairns to a quiet street in Kewarra Beach. The R2G driver found our house despite the overgrown trees hiding the number, parked the truck expertly and the team worked fast in the tropical heat. Highly recommend.",
        name: "Ben & Alicia N.",
        location: "Kewarra Beach",
        date: "December 2024",
      },
      {
        text: "Moved a single large piano from our Kewarra Beach home to a friend's place in Palm Cove. R2G quoted a fair price for the single item, sent two experienced guys who knew exactly how to handle it. Perfect job.",
        name: "Margaret O.",
        location: "Kewarra Beach",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Trim overhanging branches beforehand.",
        text: "Kewarra Beach is known for its lush tropical canopy. If you have low-hanging branches or dense vegetation over your driveway and paths, trimming them before moving day allows our truck to get closer and our team to work faster.",
      },
      {
        heading: "Include pool and garden items.",
        text: "Many Kewarra Beach properties have pool furniture, shade sails, BBQs and tropical garden features. Include all outdoor items in your quote inventory — they add up and can affect the truck size we need.",
      },
      {
        heading: "Use the Captain Cook Highway strategically.",
        text: "All Kewarra Beach moves go via the Captain Cook Highway. Avoid the morning rush (7-9am southbound) and afternoon rush (3:30-5:30pm northbound). A 9:30am start hits the sweet spot for clear runs in both directions.",
      },
      {
        heading: "Relocate pets with a plan in place.",
        text: "Kewarra Beach's leafy streets and open yards mean many households have outdoor pets. On moving day, secure dogs and cats in a safe area away from the loading zone — an open front door with removalists carrying furniture in and out is a recipe for an escaped pet. Consider a friend's house or a local pet daycare for the day.",
      },
    ],
  },
  {
    slug: "machans-beach",
    name: "Machans Beach",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "12km north of Cairns City",
    postcode: "4878",
    latitude: -16.8482,
    longitude: 145.7427,
    uniquePara1:
      "Machans Beach is a relaxed beachside community just north of Cairns, popular with locals who love the laid-back coastal lifestyle while staying close to the city. It is one of Cairns' hidden gems with a strong sense of community.",
    uniquePara2:
      "The mix of older beach houses and newer builds in Machans Beach means our team is prepared for all property styles. We handle every move in the northern beaches area with the same professional care regardless of property size.",
    uniquePara3:
      "Machans Beach is a compact suburb with narrow residential streets that weren't originally designed for large trucks. Our team often uses medium-sized vehicles for Machans Beach moves to navigate the tight corners and limited turnaround space. Many of the older beach houses are built on stilts with steep timber stairs — we bring stairclimber trolleys and use furniture sliders to protect both your belongings and the timber steps.",
    nearbySubs: ["Holloways Beach", "Yorkeys Knob", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Machans Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Machans Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from an old beach house on stilts in Machans Beach. The steep stairs were a challenge but the team had the right equipment and got everything down safely. Not a single scratch on our furniture or the staircase.",
        name: "Kevin D.",
        location: "Machans Beach",
        date: "March 2025",
      },
      {
        text: "We moved from a newer home in Machans Beach to Smithfield. R2G used a medium truck that fit perfectly on our narrow street and had us loaded and delivered in under four hours. Friendly team, fair price.",
        name: "Hayley R.",
        location: "Machans Beach",
        date: "November 2024",
      },
      {
        text: "Needed to move just a few heavy items — a fridge, washing machine and large cabinet — from our Machans Beach place. R2G didn't try to upsell or overcharge. Quick, honest service for a small job.",
        name: "George T.",
        location: "Machans Beach",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Let us know about narrow street access.",
        text: "Machans Beach has some very tight residential streets. Give us your exact address when booking so we can choose the right truck size — a medium vehicle is often faster and more practical than trying to squeeze a large truck through.",
      },
      {
        heading: "Protect timber stairs during the move.",
        text: "Many older Machans Beach homes have timber external stairs that can be scratched or dented by heavy furniture. We use furniture sliders and protective padding, but pointing out any freshly painted or delicate surfaces helps us take extra care.",
      },
      {
        heading: "Check tidal and storm surge areas.",
        text: "Some lower-lying Machans Beach properties can be affected by king tides and storm surge. If you're moving during the wet season, let us know your property's flood risk so we can plan the timing and protect items accordingly.",
      },
      {
        heading: "Disassemble outdoor furniture the day before.",
        text: "Machans Beach homes often have large outdoor settings, sun loungers and BBQ setups designed for the coastal lifestyle. Breaking down tables, removing umbrella stands and folding outdoor chairs the evening before your move saves valuable time on the day and helps our team load the truck more efficiently on the narrow streets.",
      },
    ],
  },
  {
    slug: "holloways-beach",
    name: "Holloways Beach",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "10km north of Cairns City",
    postcode: "4878",
    latitude: -16.8535,
    longitude: 145.7371,
    uniquePara1:
      "Holloways Beach is a charming beachside suburb just north of Cairns, known for its quiet streets, waterfront properties and friendly neighbourhood feel. It is a popular choice for families and retirees looking for coastal living close to the city.",
    uniquePara2:
      "Waterfront and near-beach properties in Holloways Beach often require careful handling of outdoor furniture and lifestyle items. Our team arrives fully equipped for every type of move in this popular northern beaches community.",
    uniquePara3:
      "Holloways Beach is one of the closest northern beaches suburbs to Cairns Airport, and flight noise can be a factor for moves requiring concentration on packing fragile items. Our team is used to working in this environment and stays focused regardless. The suburb's quiet residential streets have good access for medium and large trucks, and the flat terrain makes loading straightforward compared to hillier northern beaches suburbs.",
    nearbySubs: ["Machans Beach", "Yorkeys Knob", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Cairns Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Holloways Beach | Reliable & Affordable",
    metaDescription:
      "Trusted removalists in Holloways Beach with 10+ years experience. Reliable, affordable & fully insured — no hidden fees. Get a free quote today.",
    reviews: [
      {
        text: "R2G moved us from Holloways Beach to a bigger home in Smithfield. They arrived right on time, the flat streets at Holloways made loading quick, and the team placed every box in the right room at our new place. Seamless move.",
        name: "Paul & Wendy S.",
        location: "Holloways Beach",
        date: "January 2025",
      },
      {
        text: "We downsized from a 4-bedroom home in Holloways Beach to a unit in Cairns City. R2G helped us work out what would fit and what should go to storage. Very practical, honest advice and a well-executed move.",
        name: "Judith H.",
        location: "Holloways Beach",
        date: "October 2024",
      },
      {
        text: "Moved from a rental in Holloways Beach to another rental in Machans Beach — just a short trip. R2G still turned up fully professional with blankets, trolleys and the lot. Treated our small move like a big one. Appreciated.",
        name: "Liam C.",
        location: "Holloways Beach",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Take advantage of flat terrain.",
        text: "Holloways Beach is one of the flattest northern beaches suburbs with good street access. This means faster loading times compared to hillier suburbs — let us know if you're on a tight schedule and we'll maximise the efficiency advantage.",
      },
      {
        heading: "Secure outdoor items for coastal weather.",
        text: "Being close to the beach means outdoor furniture, bikes and garden items may have salt corrosion. Let our team know about any fragile outdoor items so we wrap them with extra care for the journey.",
      },
      {
        heading: "Plan around airport traffic.",
        text: "Holloways Beach is near the Captain Cook Highway on-ramp close to Cairns Airport. Traffic can spike around flight arrival times. Our local knowledge helps us time departures to avoid the worst congestion heading into or out of the suburb.",
      },
      {
        heading: "Consider short-term storage for staged moves.",
        text: "If you're moving out of Holloways Beach but your new home isn't ready yet, our secure storage facility in Cairns is a convenient option. The short drive from Holloways Beach means we can load your items and have them in storage the same morning — and deliver them to your new place whenever you're ready.",
      },
    ],
  },
];

export const suburbs: CairnsSuburb[] = [
  ...coreSuburbs,
  ...cairnsInnerSuburbs,
  ...cairnsBeachSuburbs,
  ...cairnsSouthSuburbs,
  ...cairnsTablelandsSuburbs,
  ...cairnsDouglasSuburbs,
  ...cairnsCassowarySuburbs,
  ...cairnsCookShireSuburbs,
];

export function getSuburb(slug: string): CairnsSuburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}

/** Map of suburb display name → route path for suburbs that have a built page. */
const suburbRouteMap: Record<string, string> = {
  "Cairns City": "/removalists-cairns",
  ...Object.fromEntries(suburbs.map((s) => [s.name, `/removalists-cairns/${s.slug}`])),
};

/** Returns the route path for a suburb if a page exists, otherwise undefined. */
export function getSuburbHref(name: string): string | undefined {
  return suburbRouteMap[name];
}
