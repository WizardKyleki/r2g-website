export interface Suburb {
  slug: string;
  name: string;
  region: string;
  state: string;
  distanceFromCBD: string;
  postcode: string;
  uniquePara1: string;
  uniquePara2: string;
  nearbySubs: string[];
  priceFrom: string;
  serviceArea: string;
  address: string;
  phone: string;
  metaTitle: string;
  metaDescription: string;
}

export const suburbs: Suburb[] = [
  {
    slug: "smithfield",
    name: "Smithfield",
    region: "Northern Cairns",
    state: "QLD",
    distanceFromCBD: "14km north of Cairns City",
    postcode: "4878",
    uniquePara1:
      "Smithfield is home to James Cook University and Cairns' largest shopping precinct, making it one of the city's most active moving hubs. We regularly help students, academics and families relocate to and from the Smithfield area.",
    uniquePara2:
      "The mix of older residential streets and newer estates in Smithfield means our team comes prepared for everything from tight unit driveways to large family home moves across multiple levels.",
    nearbySubs: ["Trinity Beach", "Yorkeys Knob", "Caravonica"],
    priceFrom: "$179/hr",
    serviceArea: "Smithfield & Northern Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Smithfield | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Smithfield with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
  },
  {
    slug: "trinity-beach",
    name: "Trinity Beach",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "25km north of Cairns City",
    postcode: "4879",
    uniquePara1:
      "Trinity Beach is one of Cairns' most sought-after coastal suburbs, known for its relaxed lifestyle and beachfront living. We frequently move families and retirees into this beautiful northern beaches community.",
    uniquePara2:
      "Many homes in Trinity Beach feature elevated decks, open-plan living areas and large outdoor furniture — our team is experienced with coastal property moves and the care required for beachside relocations.",
    nearbySubs: ["Kewarra Beach", "Clifton Beach", "Smithfield"],
    priceFrom: "$179/hr",
    serviceArea: "Trinity Beach & Northern Beaches",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Trinity Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Trinity Beach. Coastal property specialists with 10+ years experience. Local moves from $179/hr. Fully insured, no hidden fees. Get a free quote today.",
  },
  {
    slug: "palm-cove",
    name: "Palm Cove",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "27km north of Cairns City",
    postcode: "4879",
    uniquePara1:
      "Palm Cove is one of Far North Queensland's most prestigious addresses, featuring luxury resorts, boutique apartments and high-end beachfront homes. Our team handles Palm Cove moves with the extra care and discretion that premium properties demand.",
    uniquePara2:
      "Salt air exposure is a real consideration when moving in Palm Cove — we use quality furniture wrapping and protective materials on every move to protect your belongings from the coastal environment.",
    nearbySubs: ["Trinity Beach", "Kewarra Beach", "Ellis Beach"],
    priceFrom: "$179/hr",
    serviceArea: "Palm Cove & Northern Beaches",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Palm Cove | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Premium removalists in Palm Cove. Luxury and beachfront property specialists. Local moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 for a free quote.",
  },
  {
    slug: "edge-hill",
    name: "Edge Hill",
    region: "Cairns Inner North",
    state: "QLD",
    distanceFromCBD: "4km north of Cairns City",
    postcode: "4870",
    uniquePara1:
      "Edge Hill is one of Cairns' most character-rich suburbs, featuring Queenslander homes, steep blocks and lush tropical gardens. We know the streets of Edge Hill well and come fully prepared for elevated access and narrow driveways.",
    uniquePara2:
      "The heritage-style homes common in Edge Hill often require extra care with staircases and verandahs — our experienced removalists treat every property with the respect it deserves.",
    nearbySubs: ["Whitfield", "Cairns City", "Freshwater"],
    priceFrom: "$179/hr",
    serviceArea: "Edge Hill & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Edge Hill | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Edge Hill specialising in Queenslander homes and character properties. 10+ years experience. From $179/hr. Fully insured, no hidden fees. Get a free quote.",
  },
  {
    slug: "redlynch",
    name: "Redlynch",
    region: "Cairns Western Suburbs",
    state: "QLD",
    distanceFromCBD: "12km west of Cairns City",
    postcode: "4870",
    uniquePara1:
      "Redlynch is a fast-growing western suburb of Cairns popular with families seeking larger homes and a quieter lifestyle. The area has seen significant new development, and we regularly move families into the estates and new builds throughout the valley.",
    uniquePara2:
      "With a mix of established homes and new housing estates, Redlynch moves often involve large family households. Our team is experienced with high-volume moves and can handle full house relocations efficiently.",
    nearbySubs: ["Caravonica", "Smithfield", "Freshwater"],
    priceFrom: "$179/hr",
    serviceArea: "Redlynch & Western Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Redlynch | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Redlynch. Family home and new estate specialists with 10+ years experience. From $179/hr. Fully insured, no hidden fees. Call 1300 959 498 for a free quote.",
  },
  {
    slug: "gordonvale",
    name: "Gordonvale",
    region: "Cairns South",
    state: "QLD",
    distanceFromCBD: "24km south of Cairns City",
    postcode: "4865",
    uniquePara1:
      "Gordonvale is a charming sugar-cane town located south of Cairns, popular with families looking for a rural lifestyle within commuting distance of the city. We service Gordonvale regularly for both local moves and relocations to and from Cairns.",
    uniquePara2:
      "Rural properties and acreage homes are common in the Gordonvale area — our team is well-equipped for moves that involve large items, outdoor furniture and rural property access.",
    nearbySubs: ["Edmonton", "Babinda", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Gordonvale & South Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Gordonvale | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Gordonvale. Rural and acreage property specialists. Local and Cairns moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 for a free quote.",
  },
  {
    slug: "yorkeys-knob",
    name: "Yorkeys Knob",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "18km north of Cairns City",
    postcode: "4878",
    uniquePara1:
      "Yorkeys Knob is a relaxed beachside suburb north of Cairns, known for its marina, fishing community and laid-back atmosphere. We help residents move in and out of this popular coastal community year-round.",
    uniquePara2:
      "With a strong mix of waterfront properties, holiday homes and permanent residences, Yorkeys Knob moves often require careful handling of outdoor and marine lifestyle equipment alongside standard household furniture.",
    nearbySubs: ["Holloways Beach", "Smithfield", "Caravonica"],
    priceFrom: "$179/hr",
    serviceArea: "Yorkeys Knob & Northern Beaches",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Yorkeys Knob | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Yorkeys Knob. Coastal and waterfront property specialists. Local moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 for a free quote today.",
  },
  {
    slug: "whitfield",
    name: "Whitfield",
    region: "Cairns Inner North",
    state: "QLD",
    distanceFromCBD: "5km north of Cairns City",
    postcode: "4870",
    uniquePara1:
      "Whitfield is a prestigious residential suburb nestled at the foot of the rainforest ranges, known for its large homes, quiet streets and proximity to Cairns CBD. It is a popular choice for professionals and executives relocating within Cairns.",
    uniquePara2:
      "The larger, well-appointed homes in Whitfield typically involve significant furniture volumes and high-value items — our team takes particular care with premium furnishings and ensures everything arrives in perfect condition.",
    nearbySubs: ["Edge Hill", "Freshwater", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Whitfield & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Whitfield | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Whitfield. Premium residential and executive property specialists. Local moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 for a free quote.",
  },
  {
    slug: "freshwater",
    name: "Freshwater",
    region: "Cairns Inner North",
    state: "QLD",
    distanceFromCBD: "8km north of Cairns City",
    postcode: "4870",
    uniquePara1:
      "Freshwater is a well-established suburban community that offers the perfect balance of city convenience and residential calm. Families and professionals frequently choose Freshwater for its schools, parks and easy access to the CBD.",
    uniquePara2:
      "With a variety of housing styles from older Queenslanders to modern builds, our Freshwater removalist team is experienced with all property types and come prepared for any access challenges the suburb presents.",
    nearbySubs: ["Edge Hill", "Whitfield", "Redlynch"],
    priceFrom: "$179/hr",
    serviceArea: "Freshwater & Inner North Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Freshwater | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Freshwater with 10+ years local experience. All property types from Queenslanders to modern builds. From $179/hr. Fully insured, no hidden fees. Free quote online.",
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    region: "Cairns South",
    state: "QLD",
    distanceFromCBD: "12km south of Cairns City",
    postcode: "4869",
    uniquePara1:
      "Edmonton is one of Cairns' most affordable and accessible southern suburbs, popular with young families and first home buyers. The suburb has grown rapidly in recent years and we complete a high volume of moves in the Edmonton area.",
    uniquePara2:
      "The predominantly modern housing stock in Edmonton makes for efficient moves — our team is familiar with the area's estates and street layouts, allowing us to plan and execute moves quickly and cost-effectively.",
    nearbySubs: ["Gordonvale", "Cairns City", "Mount Sheridan"],
    priceFrom: "$179/hr",
    serviceArea: "Edmonton & South Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Edmonton | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Edmonton. Family home and new estate specialists with 10+ years experience. Local moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 today.",
  },
  {
    slug: "atherton",
    name: "Atherton",
    region: "Atherton Tablelands",
    state: "QLD",
    distanceFromCBD: "80km southwest of Cairns City",
    postcode: "4883",
    uniquePara1:
      "Atherton is the commercial heart of the Atherton Tablelands, a thriving rural community known for its rich volcanic soil, dairy farms and stunning natural scenery. We regularly help families and businesses relocate to and from the Tablelands region.",
    uniquePara2:
      "Moves to and from Atherton often involve acreage properties, farm equipment and large household volumes. Our team is experienced with rural property access and the mountain road conditions between Cairns and the Tablelands.",
    nearbySubs: ["Mareeba", "Innisfail", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Atherton Tablelands",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Atherton | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Atherton and the Atherton Tablelands. Local and interstate moves from $179/hr. Fully insured, experienced with rural properties.",
  },
  {
    slug: "innisfail",
    name: "Innisfail",
    region: "Cassowary Coast",
    state: "QLD",
    distanceFromCBD: "88km south of Cairns City",
    postcode: "4860",
    uniquePara1:
      "Innisfail is a charming Art Deco town south of Cairns, known for its multicultural heritage, banana and sugar cane farming, and proximity to the World Heritage Wet Tropics rainforest. We service Innisfail and the surrounding Cassowary Coast region regularly.",
    uniquePara2:
      "The mix of heritage Queenslanders and modern homes in Innisfail means our team comes prepared for all property types. We understand the unique challenges of moving in tropical Far North Queensland and plan accordingly.",
    nearbySubs: ["Cairns City", "Gordonvale", "Atherton"],
    priceFrom: "$179/hr",
    serviceArea: "Cassowary Coast and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Innisfail | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Professional removalists in Innisfail and the Cassowary Coast. Local and long distance moves from $179/hr. Fully insured with 10+ years experience.",
  },
  {
    slug: "port-douglas",
    name: "Port Douglas",
    region: "Douglas Shire",
    state: "QLD",
    distanceFromCBD: "67km north of Cairns City",
    postcode: "4877",
    uniquePara1:
      "Port Douglas is one of Far North Queensland's most iconic destinations, blending luxury resort living with a tight-knit residential community. We frequently assist permanent residents, holiday homeowners and hospitality workers with moves to and from Port Douglas.",
    uniquePara2:
      "Many properties in Port Douglas are high-end homes, apartments and villas that require extra care and attention. Our team handles premium relocations with the discretion and professionalism that Port Douglas residents expect.",
    nearbySubs: ["Mossman", "Palm Cove", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Douglas Shire and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Port Douglas | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Port Douglas. Premium local and interstate moves from $179/hr. Fully insured, experienced with luxury properties and resort relocations.",
  },
  {
    slug: "mareeba",
    name: "Mareeba",
    region: "Atherton Tablelands",
    state: "QLD",
    distanceFromCBD: "60km west of Cairns City",
    postcode: "4880",
    uniquePara1:
      "Mareeba is a vibrant agricultural town on the Atherton Tablelands, famous for its coffee, mangoes and rodeo. It serves as a major hub for the surrounding rural communities and we regularly complete moves throughout the Mareeba district.",
    uniquePara2:
      "Properties in Mareeba range from compact town homes to sprawling rural acreage. Our team is well-versed in the Tablelands road network and comes equipped for large-volume rural moves with the right trucks and protective materials.",
    nearbySubs: ["Atherton", "Cairns City", "Port Douglas"],
    priceFrom: "$179/hr",
    serviceArea: "Mareeba & Atherton Tablelands",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Mareeba | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Removalists in Mareeba and the Atherton Tablelands. Rural and residential moves from $179/hr. Fully insured with 10+ years experience. Call 1300 959 498.",
  },
  {
    slug: "babinda",
    name: "Babinda",
    region: "Cairns South",
    state: "QLD",
    distanceFromCBD: "58km south of Cairns City",
    postcode: "4861",
    uniquePara1:
      "Babinda is a small, tight-knit community nestled between the rainforest and cane fields south of Cairns, known for the famous Babinda Boulders and its strong local character. We service Babinda and the surrounding rural communities with reliable, friendly removalist services.",
    uniquePara2:
      "Properties in Babinda range from classic Queenslanders to rural acreage blocks. Our team is experienced with the access requirements of rural Far North Queensland properties and handles every move with care.",
    nearbySubs: ["Innisfail", "Gordonvale", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Cairns South and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Babinda | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Reliable removalists in Babinda and surrounding areas. Local and long distance moves from $179/hr. Fully insured with 10+ years experience in Far North Queensland.",
  },
  {
    slug: "mossman",
    name: "Mossman",
    region: "Douglas Shire",
    state: "QLD",
    distanceFromCBD: "75km north of Cairns City",
    postcode: "4873",
    uniquePara1:
      "Mossman is the gateway to the Daintree Rainforest and a charming rural town in the Douglas Shire, known for the Mossman Gorge and its sugar cane heritage. We regularly move families and professionals to and from Mossman and the broader Douglas Shire region.",
    uniquePara2:
      "The relaxed lifestyle and natural beauty of Mossman attracts a mix of long-term locals and sea-changers. Our team understands the unique character of Douglas Shire properties and delivers moves with the care and professionalism the community expects.",
    nearbySubs: ["Port Douglas", "Cairns City", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Douglas Shire and Far North Queensland",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Mossman | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Mossman and the Douglas Shire. Local and interstate moves from $179/hr. Fully insured, experienced with Far North Queensland properties.",
  },
  {
    slug: "clifton-beach",
    name: "Clifton Beach",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "22km north of Cairns City",
    postcode: "4879",
    uniquePara1:
      "Clifton Beach is one of Cairns' most popular northern beaches suburbs, offering a relaxed coastal lifestyle just minutes from the city. Families and professionals are drawn to its beachside streets, parks and strong community atmosphere.",
    uniquePara2:
      "Coastal properties in Clifton Beach often feature outdoor entertaining areas, beach furniture and salt-air exposed items requiring extra protection. Our team wraps and protects all items carefully for every Clifton Beach move.",
    nearbySubs: ["Trinity Beach", "Kewarra Beach", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Beaches Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Clifton Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Professional removalists in Clifton Beach, Cairns. Local and interstate moves from $179/hr. Fully insured, experienced with northern beaches properties.",
  },
  {
    slug: "kewarra-beach",
    name: "Kewarra Beach",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "23km north of Cairns City",
    postcode: "4879",
    uniquePara1:
      "Kewarra Beach is a quiet, leafy northern beaches suburb popular with families seeking a peaceful coastal lifestyle close to Cairns. The suburb is known for its lush tropical vegetation, friendly streets and proximity to the beach.",
    uniquePara2:
      "Many Kewarra Beach properties feature tropical gardens, pool areas and large outdoor living spaces. Our experienced removalists handle all property types in the northern beaches corridor with efficiency and care.",
    nearbySubs: ["Clifton Beach", "Trinity Beach", "Palm Cove"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Beaches Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Kewarra Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Trusted removalists in Kewarra Beach, Cairns. Local and interstate moves from $179/hr. Fully insured with expert knowledge of the northern beaches area.",
  },
  {
    slug: "machans-beach",
    name: "Machans Beach",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "12km north of Cairns City",
    postcode: "4878",
    uniquePara1:
      "Machans Beach is a relaxed beachside community just north of Cairns, popular with locals who love the laid-back coastal lifestyle while staying close to the city. It is one of Cairns' hidden gems with a strong sense of community.",
    uniquePara2:
      "The mix of older beach houses and newer builds in Machans Beach means our team is prepared for all property styles. We handle every move in the northern beaches area with the same professional care regardless of property size.",
    nearbySubs: ["Holloways Beach", "Yorkeys Knob", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Beaches Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Machans Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Reliable removalists in Machans Beach, Cairns. Local and interstate moves from $179/hr. Fully insured with 10+ years experience in Far North Queensland.",
  },
  {
    slug: "holloways-beach",
    name: "Holloways Beach",
    region: "Northern Beaches",
    state: "QLD",
    distanceFromCBD: "10km north of Cairns City",
    postcode: "4878",
    uniquePara1:
      "Holloways Beach is a charming beachside suburb just north of Cairns, known for its quiet streets, waterfront properties and friendly neighbourhood feel. It is a popular choice for families and retirees looking for coastal living close to the city.",
    uniquePara2:
      "Waterfront and near-beach properties in Holloways Beach often require careful handling of outdoor furniture and lifestyle items. Our team arrives fully equipped for every type of move in this popular northern beaches community.",
    nearbySubs: ["Machans Beach", "Yorkeys Knob", "Cairns City"],
    priceFrom: "$179/hr",
    serviceArea: "Northern Beaches Cairns",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Holloways Beach | R2G Transport & Storage | From $179/hr",
    metaDescription:
      "Professional removalists in Holloways Beach, Cairns. Local and interstate moves from $179/hr. Fully insured, experienced with beachside property moves.",
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}

/** Map of suburb display name → route path for suburbs that have a built page. */
const suburbRouteMap: Record<string, string> = {
  "Cairns City": "/removalists-cairns",
  ...Object.fromEntries(suburbs.map((s) => [s.name, `/removalists-${s.slug}`])),
};

/** Returns the route path for a suburb if a page exists, otherwise undefined. */
export function getSuburbHref(name: string): string | undefined {
  return suburbRouteMap[name];
}
