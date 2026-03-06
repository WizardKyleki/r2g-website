// ═══════════════════════════════════════════════════════
//  INTERSTATE ROUTE DATA — R2G Transport & Storage
// ═══════════════════════════════════════════════════════

export interface CityData {
  state: string;
  region: string;
  depot?: string;
  suburbs: string[];
  reasons: { icon: string; title: string; desc: string }[];
}

export interface RouteStop {
  town: string;
  km: string;
  note: string;
}

export interface RouteData {
  from: string;
  to: string;
  slug: string;
  km: string;
  days: string;
  highway: string;
  stops: RouteStop[];
}

// ═══════════════════════════════════════════════════════
//  CITY DATA
// ═══════════════════════════════════════════════════════

export const CITIES: Record<string, CityData> = {
  Brisbane: {
    state: "QLD",
    region: "South East Queensland",
    depot: "our Archerfield depot in southern Brisbane",
    suburbs: [
      "Brisbane CBD", "South Brisbane", "Fortitude Valley", "New Farm", "West End",
      "Paddington", "Toowong", "Indooroopilly", "Ipswich", "Springfield",
      "Logan", "Carindale", "Mount Gravatt", "Sunnybank", "Acacia Ridge",
      "Archerfield", "Oxley", "Chermside", "Nundah", "Redcliffe",
      "Caboolture", "North Lakes", "Strathpine",
    ],
    reasons: [
      { icon: "💼", title: "Career & Employment", desc: "Brisbane is Queensland's economic hub with strong job markets in professional services, tech, healthcare and government. Many Queenslanders relocate to Brisbane for career advancement and higher salaries." },
      { icon: "🎓", title: "Education", desc: "Home to UQ, QUT, Griffith and numerous TAFE campuses, Brisbane attracts students and families seeking access to some of Australia's top-ranked universities and schools." },
      { icon: "🏙️", title: "Urban Lifestyle", desc: "South Bank, Fortitude Valley, West End and New Farm offer a vibrant cultural scene. Restaurants, live music, galleries and sport — Brisbane delivers big-city amenities with a relaxed Queensland attitude." },
      { icon: "🌊", title: "Proximity to Coast", desc: "Brisbane sits an hour from the Gold Coast and Sunshine Coast. Many people relocate to Brisbane for the balance of city work and weekend beach access without the commute of living on the coast." },
    ],
  },
  Cairns: {
    state: "QLD",
    region: "Far North Queensland",
    depot: "our Cairns City depot",
    suburbs: [
      "Cairns City", "Cairns North", "Edge Hill", "Whitfield", "Manunda",
      "Westcourt", "Parramatta Park", "Earlville", "Woree", "Mount Sheridan",
      "Smithfield", "Trinity Beach", "Palm Cove", "Clifton Beach", "Redlynch",
      "Freshwater", "Bentley Park", "Gordonvale", "Port Douglas", "Mareeba",
      "Atherton", "Innisfail", "Mission Beach",
    ],
    reasons: [
      { icon: "🌴", title: "Tropical Lifestyle", desc: "Warm winters, the Great Barrier Reef on your doorstep, and the Daintree Rainforest in your backyard. Cairns offers a lifestyle that larger cities simply cannot match for those who value nature and outdoor living." },
      { icon: "⛏️", title: "Mining & FIFO Work", desc: "Cairns and the surrounding region serve as a base for FIFO workers in the Bowen Basin, Moranbah and Charters Towers. Moving to Cairns puts workers closer to mine sites with shorter fly-in rotations." },
      { icon: "🏡", title: "Cost of Living", desc: "Property prices in Cairns remain significantly lower than Brisbane and the Gold Coast. For families priced out of South East Queensland, Far North Queensland offers more affordable housing with strong community infrastructure." },
      { icon: "🌅", title: "Retirement", desc: "Cairns is one of Australia's most popular retirement destinations. Warm climate year-round, access to healthcare, international airport connectivity, and a relaxed coastal atmosphere attract retirees from across the country." },
    ],
  },
  Townsville: {
    state: "QLD",
    region: "North Queensland",
    depot: undefined,
    suburbs: [
      "Townsville CBD", "North Ward", "South Townsville", "West End", "Railway Estate",
      "Hermit Park", "Mundingburra", "Aitkenvale", "Cranbrook", "Kirwan",
      "Thuringowa", "Douglas", "Annandale", "Idalia", "Belgian Gardens",
      "Castle Hill", "Magnetic Island", "Bohle Plains", "Burdell",
    ],
    reasons: [
      { icon: "🎖️", title: "Defence & Military", desc: "Lavarack Barracks and RAAF Base Townsville make the city one of Australia's largest military hubs. Defence personnel and their families regularly relocate to Townsville for postings and deployments." },
      { icon: "⛏️", title: "Mining Proximity", desc: "Townsville serves as a major service centre for the Bowen Basin mining region. FIFO workers and contractors relocate to Townsville for a more affordable base closer to mine sites than Brisbane." },
      { icon: "🏡", title: "Affordable Housing", desc: "Compared to Brisbane, Townsville offers significantly more affordable property. Families can purchase larger homes with yards, closer to the coast, at a fraction of South East Queensland prices." },
      { icon: "🌊", title: "Coastal Lifestyle", desc: "The Strand, Magnetic Island, and access to the Great Barrier Reef make Townsville an attractive destination for those seeking a tropical coastal lifestyle without the tourist crowds of Cairns." },
    ],
  },
  Mackay: {
    state: "QLD",
    region: "the Mackay Region",
    depot: undefined,
    suburbs: [
      "Mackay CBD", "South Mackay", "North Mackay", "West Mackay", "East Mackay",
      "Andergrove", "Beaconsfield", "Slade Point", "Bucasia", "Blacks Beach",
      "Rural View", "Eimeo", "Shoal Point", "Walkerston", "Marian",
    ],
    reasons: [
      { icon: "⛏️", title: "Mining & Resources", desc: "Mackay is the gateway to the Bowen Basin — Australia's largest coal mining region. Many workers relocate to Mackay for direct access to mines in Moranbah, Dysart and Middlemount without the FIFO lifestyle." },
      { icon: "🏖️", title: "Coastal Living", desc: "Despite its mining connections, Mackay offers beautiful beaches, the Great Barrier Reef, and Eungella National Park. It's a coastal city with strong infrastructure and a relaxed regional atmosphere." },
      { icon: "💰", title: "High Earning Potential", desc: "Mining-related salaries in the Mackay region are among the highest in Queensland. Combined with lower property costs than Brisbane, Mackay offers strong earning and savings potential for families." },
      { icon: "👨‍👩‍👧‍👦", title: "Family-Friendly", desc: "Good schools, modern hospitals, sporting facilities, and a growing retail sector make Mackay an increasingly popular choice for families seeking a balanced regional lifestyle with strong employment." },
    ],
  },
  Rockhampton: {
    state: "QLD",
    region: "Central Queensland",
    depot: undefined,
    suburbs: [
      "Rockhampton CBD", "The Range", "Wandal", "Allenstown", "Depot Hill",
      "Park Avenue", "Berserker", "North Rockhampton", "Norman Gardens", "Kawana",
      "Gracemere", "Yeppoon", "Emu Park", "Lakes Creek",
    ],
    reasons: [
      { icon: "🐄", title: "Agriculture & Beef Capital", desc: "Rockhampton is the beef capital of Australia. The region's strong agricultural sector provides stable employment in cattle, farming and related industries, attracting workers from across Queensland." },
      { icon: "🏡", title: "Affordable Property", desc: "Rockhampton offers some of the most affordable housing in Queensland. Large family homes with land are available at a fraction of Brisbane prices, making it attractive for first-home buyers and families." },
      { icon: "⛏️", title: "Mining Gateway", desc: "Rocky sits at the junction of the Bruce Highway and Capricorn Highway, serving as a base for workers heading to the Emerald, Blackwater and Bowen Basin mining regions." },
      { icon: "🌊", title: "Capricorn Coast", desc: "Yeppoon and Emu Park on the Capricorn Coast are just 30 minutes from Rockhampton, offering residents beach access and a coastal lifestyle without the price tag of the Sunshine Coast or Gold Coast." },
    ],
  },
  Sydney: {
    state: "NSW",
    region: "Greater Sydney",
    depot: undefined,
    suburbs: [
      "Sydney CBD", "Surry Hills", "Newtown", "Bondi", "Manly",
      "Parramatta", "Chatswood", "North Sydney", "Ryde", "Strathfield",
      "Liverpool", "Penrith", "Campbelltown", "Hornsby", "Cronulla",
      "Bankstown", "Hurstville", "Marrickville", "Randwick", "Mosman",
    ],
    reasons: [
      { icon: "💼", title: "Career & Opportunity", desc: "Sydney is Australia's largest economy. Finance, tech, media, healthcare and professional services all have their national headquarters here. Career opportunities and salaries are among the highest in the country." },
      { icon: "🌉", title: "World-Class City", desc: "The Harbour Bridge, Opera House, Bondi Beach — Sydney offers a globally recognised lifestyle. Dining, culture, sport and nightlife are unmatched in Australia." },
      { icon: "🎓", title: "Education Hub", desc: "USYD, UNSW, UTS and Macquarie University make Sydney one of the strongest education centres in the Asia-Pacific. Families relocate for school catchments and university access." },
      { icon: "✈️", title: "International Access", desc: "Sydney's international airport is the largest in Australia. For professionals who travel regularly or have family overseas, Sydney offers the best flight connectivity in the country." },
    ],
  },
  Melbourne: {
    state: "VIC",
    region: "Greater Melbourne",
    depot: undefined,
    suburbs: [
      "Melbourne CBD", "South Yarra", "Fitzroy", "Richmond", "Carlton",
      "St Kilda", "Brunswick", "Collingwood", "Prahran", "Footscray",
      "Docklands", "Southbank", "Brighton", "Hawthorn", "Kew",
      "Box Hill", "Dandenong", "Frankston", "Geelong", "Werribee",
    ],
    reasons: [
      { icon: "🎭", title: "Culture & Arts", desc: "Melbourne is Australia's cultural capital — live music, theatre, galleries, street art and a world-class food scene. It consistently ranks among the world's most liveable cities." },
      { icon: "☕", title: "Food & Coffee", desc: "Melbourne's laneway cafes, fine dining, and multicultural food scene are legendary. For food lovers, Melbourne offers a culinary experience that no other Australian city can match." },
      { icon: "💼", title: "Professional Services", desc: "Australia's second-largest economy with strong financial, legal, tech and creative industries. Many professionals relocate to Melbourne for career opportunities across diverse sectors." },
      { icon: "🏟️", title: "Sport & Events", desc: "The MCG, Australian Open, Formula 1 Grand Prix, and AFL — Melbourne is the sporting capital of Australia. For sports fans, there's no better city to call home." },
    ],
  },
  "Gold Coast": {
    state: "QLD",
    region: "South East Queensland",
    depot: undefined,
    suburbs: [
      "Surfers Paradise", "Broadbeach", "Southport", "Robina", "Burleigh Heads",
      "Coolangatta", "Palm Beach", "Currumbin", "Nerang", "Coomera",
      "Helensvale", "Mudgeeraba", "Varsity Lakes", "Mermaid Beach", "Miami",
    ],
    reasons: [
      { icon: "🏄", title: "Beach Lifestyle", desc: "Some of Australia's best surf beaches, year-round sunshine, and an outdoor lifestyle that revolves around the ocean. The Gold Coast is the ultimate coastal destination for beach lovers." },
      { icon: "🎢", title: "Tourism & Entertainment", desc: "Theme parks, nightlife, shopping and a booming hospitality industry make the Gold Coast one of Australia's most dynamic cities — and one of its largest employers." },
      { icon: "🏠", title: "Growing Economy", desc: "The Gold Coast has evolved from a tourist town to a serious economic centre. Health, education, tech and construction sectors are growing rapidly, creating career opportunities beyond tourism." },
      { icon: "👨‍👩‍👧‍👦", title: "Family-Friendly", desc: "Excellent schools, safe neighbourhoods, and an outdoor lifestyle make the Gold Coast increasingly popular with families relocating from Sydney and Melbourne for a better quality of life." },
    ],
  },
  Toowoomba: {
    state: "QLD",
    region: "the Darling Downs",
    depot: undefined,
    suburbs: [
      "Toowoomba CBD", "East Toowoomba", "Harristown", "Darling Heights",
      "Rangeville", "Middle Ridge", "Newtown", "Centenary Heights",
      "Highfields", "Withcott", "Gatton", "Pittsworth",
    ],
    reasons: [
      { icon: "🌸", title: "Garden City Lifestyle", desc: "Known as the Garden City, Toowoomba offers a cooler climate, beautiful parks and a relaxed pace of life. The annual Carnival of Flowers attracts visitors from across Australia." },
      { icon: "🏡", title: "Affordable Housing", desc: "Toowoomba property prices are significantly lower than Brisbane and the Gold Coast. Families can purchase large homes with land at a fraction of the cost — just 90 minutes from Brisbane." },
      { icon: "🎓", title: "Education", desc: "USQ and strong public and private school options make Toowoomba an attractive destination for families prioritising education without the cost and congestion of Brisbane." },
      { icon: "🌾", title: "Agriculture Hub", desc: "The Darling Downs is one of Australia's richest agricultural regions. Toowoomba serves as the service centre for the region's farming, grazing and agribusiness industries." },
    ],
  },
  "Sunshine Coast": {
    state: "QLD",
    region: "the Sunshine Coast",
    depot: undefined,
    suburbs: [
      "Maroochydore", "Mooloolaba", "Caloundra", "Noosa Heads", "Nambour",
      "Buderim", "Sippy Downs", "Coolum Beach", "Peregian Beach", "Kawana",
      "Birtinya", "Palmwoods", "Maleny", "Montville", "Beerwah",
    ],
    reasons: [
      { icon: "🏖️", title: "Beach & Hinterland", desc: "The Sunshine Coast offers the best of both worlds — pristine beaches from Caloundra to Noosa, and a lush hinterland with Maleny, Montville and the Glass House Mountains just minutes away." },
      { icon: "👨‍👩‍👧‍👦", title: "Family-Friendly", desc: "Excellent schools, safe communities, and an outdoor lifestyle make the Sunshine Coast one of Australia's most popular family relocation destinations, especially for those leaving Sydney and Melbourne." },
      { icon: "💼", title: "Growing Economy", desc: "The new Sunshine Coast University Hospital, expanding airport, and growing tech sector are driving economic growth. The Sunshine Coast is no longer just a retirement destination — it's a serious employment centre." },
      { icon: "🌅", title: "Lifestyle & Wellbeing", desc: "Lower stress, cleaner air, and a community focused on health and wellbeing. Many professionals are relocating to the Sunshine Coast for remote work, trading the city commute for a morning surf." },
    ],
  },
  Moranbah: {
    state: "QLD",
    region: "the Bowen Basin",
    depot: undefined,
    suburbs: [
      "Moranbah", "Coppabella", "Glenden", "Dysart", "Middlemount",
      "Nebo", "Clermont",
    ],
    reasons: [
      { icon: "⛏️", title: "Mining Employment", desc: "Moranbah is the heart of Queensland's Bowen Basin coal mining industry. BHP, Anglo American and other major operators have mines within minutes of town, offering some of Australia's highest-paying jobs." },
      { icon: "💰", title: "High Wages", desc: "Mining salaries in Moranbah are among the highest in the country. Combined with employer-subsidised housing, workers can save significantly more than in capital cities." },
      { icon: "🏡", title: "Community Living", desc: "Despite its mining focus, Moranbah has strong community infrastructure — schools, a swimming pool, sporting clubs and modern shopping. Families who embrace regional living find it a welcoming town." },
      { icon: "🚫", title: "End the FIFO Commute", desc: "Many workers relocate to Moranbah to eliminate the fly-in fly-out lifestyle. Living locally means more time with family and less time in airports and mining camps." },
    ],
  },
  Emerald: {
    state: "QLD",
    region: "the Central Highlands",
    depot: undefined,
    suburbs: [
      "Emerald", "Blackwater", "Springsure", "Capella", "Clermont",
      "Sapphire", "Rubyvale", "Anakie",
    ],
    reasons: [
      { icon: "⛏️", title: "Mining & Resources", desc: "Emerald is the service centre for the Central Queensland mining region. Coal, gas and sapphire mining provide strong employment, with major mines within 30–60 minutes of town." },
      { icon: "🌾", title: "Agriculture", desc: "The Central Highlands produce cotton, cattle and grain. Emerald serves as the agricultural hub for the region, with steady employment in farming, irrigation and agribusiness." },
      { icon: "🏡", title: "Regional Lifestyle", desc: "Emerald offers a genuine country-town lifestyle with modern amenities. Affordable housing, good schools, and a strong community make it attractive for families." },
      { icon: "💎", title: "Gemfields", desc: "The Sapphire Gemfields near Emerald are world-famous. Fossicking, tourism and gemstone cutting add a unique character to the region that attracts people from across Australia." },
    ],
  },
  "Airlie Beach": {
    state: "QLD",
    region: "the Whitsunday Region",
    depot: undefined,
    suburbs: [
      "Airlie Beach", "Cannonvale", "Proserpine", "Jubilee Pocket",
      "Shute Harbour", "Mount Julian", "Flametree", "Woodwark",
    ],
    reasons: [
      { icon: "⛵", title: "Whitsundays & Sailing", desc: "Airlie Beach is the gateway to the 74 Whitsunday Islands — one of the world's premier sailing destinations. For ocean lovers, there's nowhere better in Australia." },
      { icon: "🏖️", title: "Tropical Paradise", desc: "White sand beaches, turquoise water, and a relaxed village atmosphere make Airlie Beach a dream destination for those escaping the city grind." },
      { icon: "🍽️", title: "Tourism Industry", desc: "The Whitsunday tourism industry provides strong employment in hospitality, marine tourism, retail and property management. Seasonal work is abundant and year-round roles are growing." },
      { icon: "🌴", title: "Lifestyle Change", desc: "Many people move to Airlie Beach for a complete lifestyle reset — swapping corporate careers for marine work, hospitality or remote employment in a tropical setting." },
    ],
  },
  Charleville: {
    state: "QLD",
    region: "Western Queensland",
    depot: undefined,
    suburbs: [
      "Charleville", "Augathella", "Morven", "Tambo", "Blackall",
      "Longreach", "Quilpie",
    ],
    reasons: [
      { icon: "🌾", title: "Agriculture & Grazing", desc: "Charleville sits in the heart of Queensland's wool and cattle country. The Warrego and Paroo shires offer steady employment in pastoral industries for those who love the land." },
      { icon: "🏡", title: "Outback Lifestyle", desc: "Wide open spaces, stunning night skies, and a tight-knit community. Charleville offers a genuine outback lifestyle that appeals to those seeking quiet, space and connection to country." },
      { icon: "💰", title: "Affordable Living", desc: "Housing in Charleville is among the most affordable in Queensland. For retirees or those seeking financial freedom, the low cost of living is a strong drawcard." },
      { icon: "🔭", title: "Unique Attractions", desc: "The Cosmos Centre, Bilby Experience and stunning outback landscapes make Charleville a unique destination with a growing tourism economy and strong community pride." },
    ],
  },
  Adelaide: {
    state: "SA",
    region: "Greater Adelaide",
    depot: undefined,
    suburbs: [
      "Adelaide CBD", "North Adelaide", "Glenelg", "Norwood", "Unley",
      "Burnside", "Prospect", "Semaphore", "Port Adelaide", "Henley Beach",
      "Mitcham", "Blackwood", "Salisbury", "Elizabeth", "Marion",
    ],
    reasons: [
      { icon: "🍷", title: "Wine Country", desc: "Barossa Valley, McLaren Vale and Adelaide Hills are on Adelaide's doorstep. For wine lovers and food enthusiasts, Adelaide offers a lifestyle centred around some of the world's best wine regions." },
      { icon: "🎭", title: "Arts & Culture", desc: "Home to the Adelaide Festival, Adelaide Fringe and WOMADelaide, the city has a thriving arts and cultural scene that punches well above its weight." },
      { icon: "🏡", title: "Affordable City Living", desc: "Adelaide offers genuine city living at a fraction of Sydney or Melbourne prices. The 20-minute city concept means most amenities are within easy reach." },
      { icon: "🌳", title: "Green & Liveable", desc: "Extensive parklands, clean beaches, and a well-planned city layout make Adelaide one of Australia's most liveable cities. Lower congestion and shorter commutes add to the appeal." },
    ],
  },
};

// ═══════════════════════════════════════════════════════
//  ROUTE DATA (36 routes)
// ═══════════════════════════════════════════════════════

export const ROUTES: RouteData[] = [
  // ── BRISBANE DEPARTURES ──
  {
    from: "Brisbane", to: "Cairns", slug: "brisbane-to-cairns", km: "1,700", days: "2–3", highway: "Bruce Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Bundaberg", km: "360 km", note: "First major service point north" },
      { town: "Gladstone", km: "530 km", note: "Industrial port city, shared load stop" },
      { town: "Rockhampton", km: "640 km", note: "Common overnight stop, Central QLD gateway" },
      { town: "Mackay", km: "970 km", note: "Sugar coast hub, second overnight option" },
      { town: "Bowen / Airlie Beach", km: "1,100 km", note: "Whitsunday region service area" },
      { town: "Townsville", km: "1,350 km", note: "North QLD's largest city, regular stop" },
      { town: "Innisfail", km: "1,600 km", note: "Final approach to Far North Queensland" },
      { town: "Cairns", km: "1,700 km", note: "Delivery to your door in Cairns" },
    ],
  },
  {
    from: "Brisbane", to: "Sydney", slug: "brisbane-to-sydney", km: "920", days: "1–2", highway: "Pacific Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Gold Coast / Tweed Heads", km: "110 km", note: "QLD–NSW border crossing" },
      { town: "Ballina / Byron Bay", km: "200 km", note: "Northern Rivers region" },
      { town: "Coffs Harbour", km: "400 km", note: "Mid-North Coast service point" },
      { town: "Port Macquarie", km: "530 km", note: "Common overnight stop" },
      { town: "Newcastle", km: "770 km", note: "Hunter region, final approach" },
      { town: "Sydney", km: "920 km", note: "Delivery to your Sydney address" },
    ],
  },
  {
    from: "Brisbane", to: "Melbourne", slug: "brisbane-to-melbourne", km: "1,750", days: "2–3", highway: "Pacific Highway & Hume Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Gold Coast / Tweed Heads", km: "110 km", note: "QLD–NSW border crossing" },
      { town: "Coffs Harbour", km: "400 km", note: "Mid-North Coast rest stop" },
      { town: "Sydney", km: "920 km", note: "Overnight stop, Pacific Highway junction" },
      { town: "Canberra", km: "1,180 km", note: "National capital, Hume Highway" },
      { town: "Albury / Wodonga", km: "1,440 km", note: "NSW–VIC border crossing" },
      { town: "Melbourne", km: "1,750 km", note: "Delivery to your Melbourne address" },
    ],
  },
  {
    from: "Brisbane", to: "Rockhampton", slug: "brisbane-to-rockhampton", km: "640", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Gympie", km: "170 km", note: "Wide Bay service point" },
      { town: "Bundaberg", km: "360 km", note: "Bundaberg Region" },
      { town: "Gladstone", km: "530 km", note: "Port city, shared load stop" },
      { town: "Rockhampton", km: "640 km", note: "Delivery to your Rockhampton address" },
    ],
  },
  {
    from: "Brisbane", to: "Gold Coast", slug: "brisbane-to-gold-coast", km: "80", days: "1", highway: "M1 Pacific Motorway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Beenleigh / Logan", km: "35 km", note: "Southern Brisbane corridor" },
      { town: "Gold Coast", km: "80 km", note: "Delivery across the Gold Coast" },
    ],
  },
  {
    from: "Brisbane", to: "Toowoomba", slug: "brisbane-to-toowoomba", km: "130", days: "1", highway: "Warrego Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Ipswich", km: "40 km", note: "Western corridor hub" },
      { town: "Gatton / Lockyer Valley", km: "90 km", note: "Lockyer Valley service area" },
      { town: "Toowoomba", km: "130 km", note: "Delivery to your Toowoomba address" },
    ],
  },
  {
    from: "Brisbane", to: "Sunshine Coast", slug: "brisbane-to-sunshine-coast", km: "100", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Caboolture", km: "50 km", note: "Moreton Bay region" },
      { town: "Sunshine Coast", km: "100 km", note: "Delivery across the Sunshine Coast" },
    ],
  },
  {
    from: "Brisbane", to: "Moranbah", slug: "brisbane-to-moranbah", km: "1,050", days: "2", highway: "Bruce Highway & Peak Downs Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Bundaberg", km: "360 km", note: "Bruce Highway service point" },
      { town: "Rockhampton", km: "640 km", note: "Overnight stop" },
      { town: "Mackay", km: "970 km", note: "Peak Downs Highway junction" },
      { town: "Moranbah", km: "1,050 km", note: "Delivery to your Moranbah address" },
    ],
  },
  {
    from: "Brisbane", to: "Emerald", slug: "brisbane-to-emerald", km: "870", days: "1–2", highway: "Bruce Highway & Capricorn Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Bundaberg", km: "360 km", note: "Bruce Highway service point" },
      { town: "Gladstone", km: "530 km", note: "Port city service area" },
      { town: "Rockhampton", km: "640 km", note: "Capricorn Highway junction" },
      { town: "Blackwater", km: "800 km", note: "Mining town, final approach" },
      { town: "Emerald", km: "870 km", note: "Delivery to your Emerald address" },
    ],
  },
  {
    from: "Brisbane", to: "Charleville", slug: "brisbane-to-charleville", km: "750", days: "1", highway: "Warrego Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Toowoomba", km: "130 km", note: "Darling Downs gateway" },
      { town: "Dalby", km: "250 km", note: "Western Downs service point" },
      { town: "Roma", km: "480 km", note: "Maranoa region hub" },
      { town: "Charleville", km: "750 km", note: "Delivery to your Charleville address" },
    ],
  },
  {
    from: "Brisbane", to: "Adelaide", slug: "brisbane-to-adelaide", km: "2,050", days: "3", highway: "New England & Barrier Highway",
    stops: [
      { town: "Brisbane (Archerfield)", km: "0 km", note: "Departure from R2G Brisbane depot" },
      { town: "Toowoomba", km: "130 km", note: "Darling Downs gateway" },
      { town: "Moree", km: "500 km", note: "Northern NSW service point" },
      { town: "Dubbo", km: "850 km", note: "Central West NSW" },
      { town: "Broken Hill", km: "1,450 km", note: "NSW–SA border region" },
      { town: "Adelaide", km: "2,050 km", note: "Delivery to your Adelaide address" },
    ],
  },

  // ── CAIRNS DEPARTURES ──
  {
    from: "Cairns", to: "Brisbane", slug: "cairns-to-brisbane", km: "1,700", days: "2–3", highway: "Bruce Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Innisfail", km: "100 km", note: "Far North Queensland" },
      { town: "Townsville", km: "350 km", note: "North QLD's largest city" },
      { town: "Bowen / Airlie Beach", km: "600 km", note: "Whitsunday region" },
      { town: "Mackay", km: "730 km", note: "Sugar coast hub" },
      { town: "Rockhampton", km: "1,060 km", note: "Overnight stop, Central QLD" },
      { town: "Bundaberg", km: "1,340 km", note: "Bundaberg Region" },
      { town: "Brisbane (Archerfield)", km: "1,700 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Cairns", to: "Townsville", slug: "cairns-to-townsville", km: "350", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Innisfail", km: "100 km", note: "Cassowary Coast" },
      { town: "Ingham", km: "230 km", note: "Hinchinbrook region" },
      { town: "Townsville", km: "350 km", note: "Delivery to your Townsville address" },
    ],
  },
  {
    from: "Cairns", to: "Sydney", slug: "cairns-to-sydney", km: "2,600", days: "3–4", highway: "Bruce Highway & Pacific Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Townsville", km: "350 km", note: "North QLD service point" },
      { town: "Mackay", km: "730 km", note: "Overnight stop" },
      { town: "Rockhampton", km: "1,060 km", note: "Central QLD hub" },
      { town: "Brisbane", km: "1,700 km", note: "Overnight stop, highway junction" },
      { town: "Coffs Harbour", km: "2,100 km", note: "Mid-North Coast" },
      { town: "Sydney", km: "2,600 km", note: "Delivery to your Sydney address" },
    ],
  },
  {
    from: "Cairns", to: "Melbourne", slug: "cairns-to-melbourne", km: "3,100", days: "4–5", highway: "Bruce Highway, Pacific Highway & Hume Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Townsville", km: "350 km", note: "North QLD service point" },
      { town: "Rockhampton", km: "1,060 km", note: "Overnight stop" },
      { town: "Brisbane", km: "1,700 km", note: "R2G Brisbane depot, overnight" },
      { town: "Sydney", km: "2,600 km", note: "Overnight stop" },
      { town: "Canberra", km: "2,880 km", note: "National capital" },
      { town: "Melbourne", km: "3,100 km", note: "Delivery to your Melbourne address" },
    ],
  },
  {
    from: "Cairns", to: "Moranbah", slug: "cairns-to-moranbah", km: "1,000", days: "2", highway: "Bruce Highway & Peak Downs Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Townsville", km: "350 km", note: "North QLD hub" },
      { town: "Bowen", km: "600 km", note: "Whitsunday region" },
      { town: "Mackay", km: "730 km", note: "Peak Downs Highway junction" },
      { town: "Moranbah", km: "1,000 km", note: "Delivery to your Moranbah address" },
    ],
  },
  {
    from: "Cairns", to: "Emerald", slug: "cairns-to-emerald", km: "1,100", days: "2", highway: "Bruce Highway & Capricorn Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Townsville", km: "350 km", note: "North QLD hub" },
      { town: "Mackay", km: "730 km", note: "Overnight stop" },
      { town: "Rockhampton", km: "1,060 km", note: "Capricorn Highway junction" },
      { town: "Emerald", km: "1,100 km", note: "Delivery to your Emerald address" },
    ],
  },
  {
    from: "Cairns", to: "Airlie Beach", slug: "cairns-to-airlie-beach", km: "680", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Cairns", km: "0 km", note: "Pickup from your Cairns address" },
      { town: "Innisfail", km: "100 km", note: "Cassowary Coast" },
      { town: "Townsville", km: "350 km", note: "North QLD hub" },
      { town: "Bowen", km: "600 km", note: "Northern Whitsundays" },
      { town: "Airlie Beach", km: "680 km", note: "Delivery to your Airlie Beach address" },
    ],
  },

  // ── TOWNSVILLE DEPARTURES ──
  {
    from: "Townsville", to: "Brisbane", slug: "townsville-to-brisbane", km: "1,350", days: "2", highway: "Bruce Highway",
    stops: [
      { town: "Townsville", km: "0 km", note: "Pickup from your Townsville address" },
      { town: "Bowen", km: "190 km", note: "Whitsunday region" },
      { town: "Mackay", km: "385 km", note: "Sugar coast hub" },
      { town: "Rockhampton", km: "710 km", note: "Overnight stop, Central QLD" },
      { town: "Bundaberg", km: "1,000 km", note: "Bundaberg Region" },
      { town: "Brisbane (Archerfield)", km: "1,350 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Townsville", to: "Cairns", slug: "townsville-to-cairns", km: "350", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Townsville", km: "0 km", note: "Pickup from your Townsville address" },
      { town: "Ingham", km: "110 km", note: "Hinchinbrook region" },
      { town: "Innisfail", km: "240 km", note: "Cassowary Coast" },
      { town: "Cairns", km: "350 km", note: "Delivery to your Cairns address" },
    ],
  },
  {
    from: "Townsville", to: "Melbourne", slug: "townsville-to-melbourne", km: "2,500", days: "3–4", highway: "Bruce Highway, Pacific Highway & Hume Highway",
    stops: [
      { town: "Townsville", km: "0 km", note: "Pickup from your Townsville address" },
      { town: "Mackay", km: "385 km", note: "Overnight stop" },
      { town: "Rockhampton", km: "710 km", note: "Central QLD hub" },
      { town: "Brisbane", km: "1,350 km", note: "Overnight stop" },
      { town: "Sydney", km: "2,270 km", note: "Overnight stop" },
      { town: "Melbourne", km: "2,500 km", note: "Delivery to your Melbourne address" },
    ],
  },
  {
    from: "Townsville", to: "Moranbah", slug: "townsville-to-moranbah", km: "600", days: "1", highway: "Bruce Highway & Peak Downs Highway",
    stops: [
      { town: "Townsville", km: "0 km", note: "Pickup from your Townsville address" },
      { town: "Bowen", km: "190 km", note: "Whitsunday region" },
      { town: "Collinsville", km: "270 km", note: "Bowen Basin gateway" },
      { town: "Moranbah", km: "600 km", note: "Delivery to your Moranbah address" },
    ],
  },

  // ── MACKAY DEPARTURES ──
  {
    from: "Mackay", to: "Brisbane", slug: "mackay-to-brisbane", km: "970", days: "1–2", highway: "Bruce Highway",
    stops: [
      { town: "Mackay", km: "0 km", note: "Pickup from your Mackay address" },
      { town: "Rockhampton", km: "335 km", note: "Central QLD hub" },
      { town: "Gladstone", km: "440 km", note: "Port city service point" },
      { town: "Bundaberg", km: "610 km", note: "Bundaberg Region" },
      { town: "Brisbane (Archerfield)", km: "970 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Mackay", to: "Moranbah", slug: "mackay-to-moranbah", km: "190", days: "1", highway: "Peak Downs Highway",
    stops: [
      { town: "Mackay", km: "0 km", note: "Pickup from your Mackay address" },
      { town: "Walkerston / Eton", km: "30 km", note: "Western Mackay corridor" },
      { town: "Moranbah", km: "190 km", note: "Delivery to your Moranbah address" },
    ],
  },
  {
    from: "Mackay", to: "Rockhampton", slug: "mackay-to-rockhampton", km: "335", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Mackay", km: "0 km", note: "Pickup from your Mackay address" },
      { town: "Sarina", km: "35 km", note: "Southern Mackay region" },
      { town: "Marlborough", km: "200 km", note: "Bruce Highway service point" },
      { town: "Rockhampton", km: "335 km", note: "Delivery to your Rockhampton address" },
    ],
  },
  {
    from: "Mackay", to: "Emerald", slug: "mackay-to-emerald", km: "280", days: "1", highway: "Peak Downs Highway & Capricorn Highway",
    stops: [
      { town: "Mackay", km: "0 km", note: "Pickup from your Mackay address" },
      { town: "Moranbah", km: "190 km", note: "Bowen Basin mining town" },
      { town: "Emerald", km: "280 km", note: "Delivery to your Emerald address" },
    ],
  },

  // ── ROCKHAMPTON DEPARTURES ──
  {
    from: "Rockhampton", to: "Brisbane", slug: "rockhampton-to-brisbane", km: "640", days: "1", highway: "Bruce Highway",
    stops: [
      { town: "Rockhampton", km: "0 km", note: "Pickup from your Rockhampton address" },
      { town: "Gladstone", km: "110 km", note: "Port city service point" },
      { town: "Bundaberg", km: "280 km", note: "Bundaberg Region" },
      { town: "Gympie", km: "470 km", note: "Wide Bay region" },
      { town: "Brisbane (Archerfield)", km: "640 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Rockhampton", to: "Cairns", slug: "rockhampton-to-cairns", km: "1,150", days: "2", highway: "Bruce Highway",
    stops: [
      { town: "Rockhampton", km: "0 km", note: "Pickup from your Rockhampton address" },
      { town: "Mackay", km: "335 km", note: "Sugar coast hub" },
      { town: "Bowen", km: "460 km", note: "Whitsunday region" },
      { town: "Townsville", km: "710 km", note: "North QLD hub" },
      { town: "Innisfail", km: "960 km", note: "Far North Queensland" },
      { town: "Cairns", km: "1,150 km", note: "Delivery to your Cairns address" },
    ],
  },
  {
    from: "Rockhampton", to: "Emerald", slug: "rockhampton-to-emerald", km: "270", days: "1", highway: "Capricorn Highway",
    stops: [
      { town: "Rockhampton", km: "0 km", note: "Pickup from your Rockhampton address" },
      { town: "Gracemere", km: "10 km", note: "Western Rockhampton" },
      { town: "Blackwater", km: "190 km", note: "Mining town" },
      { town: "Emerald", km: "270 km", note: "Delivery to your Emerald address" },
    ],
  },
  {
    from: "Rockhampton", to: "Sydney", slug: "rockhampton-to-sydney", km: "1,350", days: "2", highway: "Bruce Highway & Pacific Highway",
    stops: [
      { town: "Rockhampton", km: "0 km", note: "Pickup from your Rockhampton address" },
      { town: "Bundaberg", km: "280 km", note: "Bundaberg Region" },
      { town: "Brisbane", km: "640 km", note: "Overnight stop" },
      { town: "Coffs Harbour", km: "1,040 km", note: "Mid-North Coast" },
      { town: "Sydney", km: "1,350 km", note: "Delivery to your Sydney address" },
    ],
  },

  // ── SYDNEY DEPARTURES ──
  {
    from: "Sydney", to: "Melbourne", slug: "sydney-to-melbourne", km: "870", days: "1–2", highway: "Hume Highway",
    stops: [
      { town: "Sydney", km: "0 km", note: "Pickup from your Sydney address" },
      { town: "Campbelltown", km: "55 km", note: "South-western Sydney" },
      { town: "Goulburn", km: "200 km", note: "Southern Tablelands" },
      { town: "Canberra", km: "290 km", note: "National capital" },
      { town: "Albury / Wodonga", km: "560 km", note: "NSW–VIC border crossing" },
      { town: "Melbourne", km: "870 km", note: "Delivery to your Melbourne address" },
    ],
  },
  {
    from: "Sydney", to: "Brisbane", slug: "sydney-to-brisbane", km: "920", days: "1–2", highway: "Pacific Highway",
    stops: [
      { town: "Sydney", km: "0 km", note: "Pickup from your Sydney address" },
      { town: "Newcastle", km: "160 km", note: "Hunter region" },
      { town: "Port Macquarie", km: "390 km", note: "Mid-North Coast" },
      { town: "Coffs Harbour", km: "530 km", note: "Overnight stop" },
      { town: "Ballina / Byron Bay", km: "720 km", note: "Northern Rivers" },
      { town: "Gold Coast", km: "810 km", note: "QLD border region" },
      { town: "Brisbane (Archerfield)", km: "920 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Sydney", to: "Cairns", slug: "sydney-to-cairns", km: "2,600", days: "3–4", highway: "Pacific Highway & Bruce Highway",
    stops: [
      { town: "Sydney", km: "0 km", note: "Pickup from your Sydney address" },
      { town: "Coffs Harbour", km: "530 km", note: "Overnight stop" },
      { town: "Brisbane", km: "920 km", note: "R2G Brisbane depot, overnight" },
      { town: "Rockhampton", km: "1,560 km", note: "Central QLD hub" },
      { town: "Townsville", km: "2,270 km", note: "North QLD" },
      { town: "Cairns", km: "2,600 km", note: "Delivery to your Cairns address" },
    ],
  },

  // ── MELBOURNE DEPARTURES ──
  {
    from: "Melbourne", to: "Brisbane", slug: "melbourne-to-brisbane", km: "1,750", days: "2–3", highway: "Hume Highway & Pacific Highway",
    stops: [
      { town: "Melbourne", km: "0 km", note: "Pickup from your Melbourne address" },
      { town: "Albury / Wodonga", km: "310 km", note: "VIC–NSW border crossing" },
      { town: "Canberra", km: "570 km", note: "National capital" },
      { town: "Sydney", km: "870 km", note: "Overnight stop" },
      { town: "Coffs Harbour", km: "1,350 km", note: "Mid-North Coast" },
      { town: "Brisbane (Archerfield)", km: "1,750 km", note: "Delivery to your Brisbane address" },
    ],
  },
  {
    from: "Melbourne", to: "Sydney", slug: "melbourne-to-sydney", km: "870", days: "1–2", highway: "Hume Highway",
    stops: [
      { town: "Melbourne", km: "0 km", note: "Pickup from your Melbourne address" },
      { town: "Seymour", km: "100 km", note: "Northern VIC" },
      { town: "Albury / Wodonga", km: "310 km", note: "VIC–NSW border crossing" },
      { town: "Canberra", km: "570 km", note: "National capital" },
      { town: "Goulburn", km: "670 km", note: "Southern Tablelands" },
      { town: "Sydney", km: "870 km", note: "Delivery to your Sydney address" },
    ],
  },
  {
    from: "Melbourne", to: "Cairns", slug: "melbourne-to-cairns", km: "3,200", days: "4–5", highway: "Hume Highway, Pacific Highway & Bruce Highway",
    stops: [
      { town: "Melbourne", km: "0 km", note: "Pickup from your Melbourne address" },
      { town: "Albury / Wodonga", km: "310 km", note: "VIC–NSW border" },
      { town: "Sydney", km: "870 km", note: "Overnight stop" },
      { town: "Brisbane", km: "1,750 km", note: "R2G Brisbane depot, overnight" },
      { town: "Rockhampton", km: "2,390 km", note: "Central QLD hub" },
      { town: "Townsville", km: "3,100 km", note: "North QLD" },
      { town: "Cairns", km: "3,200 km", note: "Delivery to your Cairns address" },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════

export function getRouteBySlug(slug: string): RouteData | undefined {
  return ROUTES.find((r) => r.slug === slug);
}

export function getAllRouteSlugs(): string[] {
  return ROUTES.map((r) => r.slug);
}

export function getRelatedRoutes(route: RouteData): RouteData[] {
  const reverse = ROUTES.find((r) => r.from === route.to && r.to === route.from);
  const sameOrigin = ROUTES.filter(
    (r) => r.from === route.from && r.slug !== route.slug && r.slug !== reverse?.slug,
  ).slice(0, 2);
  return [reverse, ...sameOrigin].filter(Boolean).slice(0, 3) as RouteData[];
}

export function getCityData(name: string): CityData | undefined {
  return CITIES[name];
}

export function getDaysLabel(days: string): string {
  return days.includes("–") || parseInt(days) > 1 ? `${days} Days Transit` : `${days} Day Transit`;
}

export function getDaysSuffix(days: string): string {
  return days === "1" ? "day" : "days";
}

const STATE_GEO: Record<string, { region: string; placename: string }> = {
  QLD: { region: "AU-QLD", placename: "Queensland, Australia" },
  NSW: { region: "AU-NSW", placename: "New South Wales, Australia" },
  VIC: { region: "AU-VIC", placename: "Victoria, Australia" },
  SA: { region: "AU-SA", placename: "South Australia, Australia" },
};

export function getGeoMeta(cityName: string): { region: string; placename: string } {
  const city = CITIES[cityName];
  return STATE_GEO[city?.state ?? "QLD"] ?? STATE_GEO.QLD;
}

export function routePassesThroughNorthQLD(route: RouteData): boolean {
  const northQldCities = ["Cairns", "Townsville", "Innisfail", "Ingham", "Bowen"];
  return route.stops.some((s) => northQldCities.some((c) => s.town.includes(c)));
}
