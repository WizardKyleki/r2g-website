import type { Suburb } from "./suburbs";
import { townsvilleNorthSuburbs } from "./townsville-suburbs-north";
import { townsvilleSouthSuburbs } from "./townsville-suburbs-south";
import { townsvilleOuterSuburbs } from "./townsville-suburbs-outer";

export interface TownsvilleSuburb extends Suburb {
  reviews: { text: string; name: string; location: string; date: string }[];
  tips: { heading: string; text: string }[];
  uniquePara3: string;
}

const coreSuburbs: TownsvilleSuburb[] = [
  {
    slug: "townsville-city",
    name: "Townsville City",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "0km — Townsville CBD",
    postcode: "4810",
    latitude: -19.2577,
    longitude: 146.8082,
    uniquePara1:
      "Townsville City is the commercial and administrative hub of North Queensland, with a growing residential population drawn by waterfront living along the Breakwater and the revamped CBD precinct. Defence families posted to Lavarack Barracks often land their first rental in the city centre before figuring out the lay of the land. JCU students grab units on Stanley and Sturt Streets for the walk to campus, and young professionals love being close to the restaurants and bars along Flinders Street East. The city has changed a lot over the past decade — old commercial buildings converted into apartments, new mixed-use developments along the waterfront, and a solid community feel that surprises most newcomers expecting just a big country town.",
    uniquePara2:
      "Housing in the CBD is mostly apartments and refurbished units — everything from small one-bed studios above shops on Flinders Street to modern two and three-bedroom apartments in the waterfront complexes near the Strand end. There are still a handful of older timber cottages on the backstreets around Denham and Walker Streets, but they are getting rarer. Moves here tend to be smaller — one or two-bedroom loads — but the challenge is always access. Lifts, narrow corridors, basement car parks. We bring tall trolleys and lift protection on every CBD job because most buildings require it. The occasional large house move from one of the remaining cottages keeps things interesting.",
    uniquePara3:
      "Traffic through the city is manageable most of the year, but Flinders Street and Stanley Street get clogged during morning and afternoon peaks. Our drivers avoid the Flinders Street East bottleneck near the Brewery by using Sturt Street or looping through Palmer Street to approach from the south side. Loading zones on Flinders Street are time-limited and competitive, so for apartment moves we coordinate with building managers for basement or rear access wherever possible. The one-way system around the mall precinct catches out-of-towners off guard, but our blokes know every back lane and service entrance in the CBD.",
    nearbySubs: ["South Townsville", "North Ward", "Railway Estate"],
    priceFrom: "$179/hr",
    serviceArea: "Townsville City & CBD",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Townsville City | R2G Townsville",
    metaDescription:
      "Trusted removalists in Townsville City. Fully insured, no hidden fees. We handle CBD apartment moves, lift bookings & tight access. Free quote today.",
    moveDay:
      "A CBD move in Townsville usually starts early — we aim for a 6:30am arrival before the heat kicks in and before traffic builds up on Flinders Street. Last week we did a two-bedroom apartment on the fifth floor of one of the waterfront complexes near the Breakwater Marina. Our driver rang the building manager at 6am to confirm the service lift was keyed on and the loading dock roller door was up.\n\nTwo blokes headed upstairs with the tall trolley, furniture blankets and a stack of mattress bags while the third stayed at the truck organising the loading order. The corridor from the lift to the unit was narrow — barely wide enough for a fridge on a trolley — so we laid runners along the full length and worked one item at a time through the tight section. Beds came apart first, mattresses into bags, then we stacked the bedroom boxes onto the trolley. The kitchen was mostly packed already, which saved us a solid half hour.\n\nBy 8:30am the apartment was cleared and the truck was loaded. We drove across to a townhouse in Aitkenvale — about fifteen minutes on the Stuart Drive bypass. Unloading is always quicker when there are no lifts involved. The new place had a double garage, so we backed the truck right up to the front and had everything inside by 11am. Total job time was about four and a half hours for a two-bedroom move — right in line with what we quoted.",
    localFaqs: [
      {
        question: "How do you handle apartment moves in the Townsville CBD?",
        answer:
          "We coordinate directly with building managers for lift bookings and loading dock access. Most CBD apartment buildings require 48 hours notice for removalist access. We bring floor runners, lift padding and tall trolleys on every apartment job. Our crew works in a fast rotation between the unit and the truck to stay within lift time windows.",
      },
      {
        question: "What time should I schedule a move in Townsville City?",
        answer:
          "Early morning is best — 6:30am starts let us load before the heat gets brutal and before Flinders Street traffic builds up. During summer months, an early start means the heavy lifting is done before it hits 35 degrees. We factor in water breaks and shade rest for our crew on hot days.",
      },
      {
        question: "Do you move defence families in and out of Townsville?",
        answer:
          "All the time. We work with plenty of ADF families posted to Lavarack Barracks and RAAF Base Townsville. We understand the tight timelines that come with defence postings and can work around march-in and march-out inspection schedules. We also offer short-term storage if your new quarter is not ready yet.",
      },
    ],
    serviceSummary:
      "Townsville City moves are all about managing access — lift bookings, loading docks, narrow corridors and time-limited loading zones. We bring apartment-specific gear on every CBD job: tall trolleys, lift floor protection, mattress covers and furniture runners. Our crew knows the one-way streets, the service entrances and which buildings need 48-hour notice. For defence families arriving on posting, we offer flexible scheduling around march-in dates and short-term storage when you need a buffer.",
    reviews: [
      {
        text: "Moved from a 4th-floor apartment on Stanley Street to a house in Kirwan. The R2G lads had the lift booked and the loading dock sorted before I even got there on the morning. Everything was wrapped properly and nothing got damaged. Top job.",
        name: "Matt K.",
        location: "Townsville City",
        date: "January 2025",
      },
      {
        text: "We relocated from interstate into a CBD apartment near the Breakwater. R2G coordinated the unload with our building manager and had everything carried up and placed exactly where we wanted it. Made a stressful interstate move feel easy.",
        name: "Sarah T.",
        location: "Townsville City",
        date: "November 2024",
      },
      {
        text: "Quick and professional. Moved our one-bedroom unit on Flinders Street East to a bigger place in Aitkenvale. Two blokes had it done in under three hours. The quote was spot-on and they were genuinely friendly. Would use again.",
        name: "Josh R.",
        location: "Townsville City → Aitkenvale",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Book your building's service lift early.",
        text: "Most CBD apartment buildings only allow removalist access during specific hours and require a lift booking. Confirm your building's requirements as soon as you set a moving date — popular time slots fill up fast, especially at the end of the month.",
      },
      {
        heading: "Start before the heat.",
        text: "Townsville summers regularly hit 35 degrees by mid-morning. A 6:30am start means the heaviest lifting is done before the worst of the heat. Our crew takes mandatory water breaks on hot days, so an early start keeps the job on schedule.",
      },
      {
        heading: "Watch for CBD loading zone restrictions.",
        text: "Flinders Street and Stanley Street loading zones are time-limited and patrolled. If your building doesn't have a loading dock, let us know the street address when booking so we can plan the best truck position and avoid parking fines.",
      },
      {
        heading: "Pack essentials in a separate bag for moving day.",
        text: "CBD apartment moves in the heat can leave you exhausted. Pack a bag with water, snacks, phone chargers, a change of clothes and your first-night essentials so you are not rummaging through boxes at 9pm looking for your toothbrush.",
      },
    ],
  },
  {
    slug: "south-townsville",
    name: "South Townsville",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "1km south of Townsville CBD",
    postcode: "4810",
    latitude: -19.265,
    longitude: 146.795,
    uniquePara1:
      "South Townsville has gone from a quiet industrial pocket to one of the trendiest spots in town. Palmer Street is the main draw — packed with restaurants, cafes and bars that pull crowds from across the city every weekend. Young professionals and couples snap up the renovated cottages and modern townhouses that line the streets between Palmer and the Ross Creek waterfront. It still has a bit of grit to it, which locals reckon is part of the charm. The old workers cottages on places like Hubert Street and Hugh Street have been done up beautifully, and the newer townhouse developments fill in fast. Flooding from Ross Creek is the elephant in the room — the 2019 event is still fresh in peoples minds, and it affects insurance and property values on the lower-lying blocks.",
    uniquePara2:
      "The housing mix is compact cottages, renovated Queenslanders and modern townhouses — almost no high-rise here, which keeps the village feel intact. Most homes are single or two-storey, with narrow frontages typical of old workers housing subdivisions. Moves tend to be small to medium — two or three bedrooms with courtyard furniture and maybe a bar fridge for the back deck. The renovated cottages look great but the internal doorways are often original width, which means king-size bed frames and large sofas need careful angling or partial disassembly. Our crew carries a toolkit on every job for exactly this reason.",
    uniquePara3:
      "Street parking in South Townsville is reasonable on weekdays but gets chaotic on Friday and Saturday nights when the Palmer Street crowd arrives. For residential moves, weekday mornings are the clear winner. The streets are narrow — most were laid out a century ago for horse and cart — so we run a medium truck rather than a big rig for most South Townsville jobs. Access from the Stuart Drive side via Hubert Street works well and avoids the Palmer Street congestion entirely. The low-lying sections near Ross Creek can pool water after heavy rain, so during the wet season we keep an eye on the weather and reschedule rather than risk getting bogged.",
    nearbySubs: ["Townsville City", "Railway Estate", "West End"],
    priceFrom: "$179/hr",
    serviceArea: "South Townsville & CBD Fringe",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Reliable Removalists South Townsville | R2G Townsville",
    metaDescription:
      "Local removalists in South Townsville. We know the narrow streets and cottage layouts. Fully insured, honest pricing. Get your free quote now.",
    moveDay:
      "South Townsville jobs are some of our favourites — short distances, interesting old houses and usually a decent coffee from Palmer Street to kick off the morning. We had a job last month moving a couple from a renovated cottage on Hugh Street to a newer townhouse in Annandale. Got there at 7am and parked the medium truck on the street right out front — no dramas with access, which is not always the case down here.\n\nThe cottage was a classic two-bedroom Queenslander renovation — polished timber floors, original doorways that were about 50mm narrower than modern standard. The king bed frame had to come apart to get through the bedroom door, and we removed the legs from their leather couch to clear the front hallway. All up the load was not huge but it was fiddly — lots of framed artwork, a vintage bar cart, wine collection in timber crates, that kind of thing. We wrapped everything individually.\n\nDrove out via Hubert Street to avoid Palmer Street, hit Stuart Drive and were at the Annandale townhouse in ten minutes. The new place had a double garage and wide internal doors, so unloading was quick. Beds reassembled, couch legs back on, artwork leaned against the walls where they wanted to hang them later. Done by 11:30am. The bloke reckoned it was the least stressful move he had ever done, which is exactly what we aim for.",
    localFaqs: [
      {
        question: "Are the narrow streets in South Townsville a problem for trucks?",
        answer:
          "Not if you use the right size truck. We typically run a medium rigid for South Townsville moves rather than a large truck. The streets between Palmer Street and Ross Creek are tight, and parked cars on both sides can reduce clearance. Our drivers do a pre-move check of your street to plan the best approach and parking spot.",
      },
      {
        question: "What about flooding risk when moving near Ross Creek?",
        answer:
          "We monitor weather closely during the wet season and will reschedule if heavy rain is forecast for the low-lying areas near Ross Creek. If you are moving into South Townsville, we recommend keeping valuable items off the floor at your new place until you are confident about drainage on your block.",
      },
      {
        question: "Can you move on weekends in South Townsville?",
        answer:
          "We can, but weekday mornings are much smoother. Palmer Street draws big crowds on Friday and Saturday nights, and the parked cars spill into the residential streets. A Saturday morning start can work if we get there before 8am, but a midweek move gives us the best access and the least hassle with parking.",
      },
    ],
    serviceSummary:
      "South Townsville moves are all about working with the character of these old streets — narrow frontages, original-width doorways and compact courtyard yards. We run medium trucks that fit the tight streets, carry toolkits for furniture disassembly through narrow hallways, and use protective runners on the polished timber floors that most renovated cottages have. During the wet season we keep a close eye on Ross Creek levels and reschedule when needed rather than risk your belongings.",
    reviews: [
      {
        text: "R2G moved us from a cottage on Hubert Street to Kirwan. They knew exactly how to handle the narrow hallways and old doorways — took the bed apart, wrapped our artwork individually and were done before lunch. Legends.",
        name: "Chris M.",
        location: "South Townsville",
        date: "March 2025",
      },
      {
        text: "Moved into a townhouse near Palmer Street from Aitkenvale. The guys arrived early, parked on the street with no issues and had everything unloaded and placed perfectly. Really happy with the service and the price.",
        name: "Emma J.",
        location: "South Townsville",
        date: "October 2024",
      },
      {
        text: "We downsized from a 3-bed in Mundingburra to a 2-bed cottage in South Townsville. R2G helped us figure out what would fit and took the extra items to storage. Professional, friendly and no hidden charges.",
        name: "Peter H.",
        location: "Mundingburra → South Townsville",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Book a weekday morning for the easiest access.",
        text: "Palmer Street nightlife means residential streets fill up with parked cars on Friday and Saturday evenings. A Tuesday or Wednesday morning move gives our truck the best street access and avoids the weekend chaos.",
      },
      {
        heading: "Measure your doorways before moving large furniture in.",
        text: "The original workers cottages in South Townsville have doorways as narrow as 720mm — tighter than modern standard. Measure your bedroom doors and hallways so we can plan disassembly for king beds, large sofas or wide dressers before moving day.",
      },
      {
        heading: "Protect polished timber floors.",
        text: "Most renovated South Townsville cottages have beautiful polished timber floors. We lay protective runners on every job, but let us know about any freshly polished or particularly delicate surfaces so we can take extra precautions.",
      },
      {
        heading: "Check your flood insurance before moving in.",
        text: "Parts of South Townsville near Ross Creek are flood-mapped. If you are moving into the area, sort your insurance out before settlement and keep valuable items elevated off the floor during wet season — just in case.",
      },
    ],
  },
  {
    slug: "north-ward",
    name: "North Ward",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "2km north of Townsville CBD",
    postcode: "4810",
    latitude: -19.245,
    longitude: 146.79,
    uniquePara1:
      "North Ward is premium Townsville real estate — tree-lined streets, beautiful old Queenslanders and direct access to The Strand foreshore. Families, retirees and professionals compete for homes here, and the turnover is steady because everyone wants a piece of it. Gregory Street is the main spine, with cafes and shops that give the suburb a village atmosphere. The mix of long-term residents and newcomers keeps the community lively. Walk to The Strand for a morning swim at the rock pool, grab breakfast at one of the Gregory Street cafes, and you start to understand why people pay the premium. Defence officers on posting to Lavarack often rent in North Ward for the lifestyle, and JCU academics settle here for the character homes and proximity to campus.",
    uniquePara2:
      "Housing runs the full spectrum — grand old Queenslanders on The Strand and Howitt Street with sweeping verandahs and high ceilings, solid post-war brick homes on the mid-streets, and modern apartments scattered through the mix. The Queenslanders are the signature, though — raised on stumps, timber floors, wide hallways and those classic deep verandahs. Moves here often involve large, heavy furniture in two-storey timber homes with steep external staircases. We bring stair equipment and extra blankets on every North Ward job because the Queenslanders demand it. The occasional apartment move in the newer blocks along The Strand is a nice change of pace.",
    uniquePara3:
      "The Strand gets packed on weekends and public holidays, so Saturday moves in the beachfront streets need an early start. Street parking is usually fine on the residential streets off Gregory, but The Strand-facing properties can be tricky — especially during Townsville events like the Supercars. Our trucks approach via Eyre Street or Paxton Street to avoid The Strand congestion. The Gregory Street strip itself has timed parking that is not ideal for a truck sitting there all morning, so we position on side streets. Road surfaces are good, most driveways are solid, and the suburb is flat to gently sloping — no major gradient challenges like Castle Hill next door.",
    nearbySubs: ["Castle Hill", "Belgian Gardens", "Townsville City"],
    priceFrom: "$179/hr",
    serviceArea: "North Ward & The Strand",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Trusted Local Movers North Ward | R2G Townsville",
    metaDescription:
      "Expert removalists in North Ward, Townsville. Queenslander specialists — stairs, timber floors, heavy furniture. Fully insured. Free quote today.",
    moveDay:
      "North Ward is one of those suburbs where every move has a bit of character to it. We did a job last Tuesday on Howitt Street — a big four-bedroom Queenslander raised about two metres off the ground with an external timber staircase that had a tight 90-degree turn at the landing. The owners were a defence family heading to Brisbane after three years in Townsville.\n\nWe rolled up at 6:30am with three blokes and a large truck. First thing was assessing the staircase — we decided the fridge and the large buffet would need to come down via the rear stairs which had a straighter run. Everything else could handle the front. We laid runners on the timber floors upstairs and down the staircase treads, then started loading from the back bedrooms forward.\n\nThe Queenslander hallway was actually wider than most — original 1920s proportions — so the king bed base made it through without disassembly. The heavy jarrah dining table needed four hands and a furniture dolly down the front steps. By 9am we had the upstairs cleared and were working through the undercroft storage. Bikes, camping gear, the usual Townsville collection of outdoor stuff.\n\nLoaded and strapped by 10:30am. These blokes were heading to our Brisbane depot for delivery, so we sealed the truck with tamper tags and documented the load list. The family headed to the airport that afternoon, and their gear arrived in Brisbane two days later. Clean, straightforward, no damage.",
    localFaqs: [
      {
        question: "Do you have experience with Queenslander homes in North Ward?",
        answer:
          "Absolutely — North Ward Queenslanders are some of our most common jobs. We bring stair equipment, furniture dollies, extra blankets and floor runners on every Queenslander move. Our crew knows how to navigate steep external staircases, narrow landings and the high-ceiling rooms that make these homes beautiful but challenging to move.",
      },
      {
        question: "Is parking a problem on The Strand for moves?",
        answer:
          "It can be on weekends and during events. For Strand-facing properties, we arrive early and position the truck before the crowds build up. On weekdays, parking is generally fine. We approach via Eyre Street or Paxton Street to avoid the main Strand traffic and use side streets for truck positioning when the beachfront is busy.",
      },
      {
        question: "How long does a typical North Ward house move take?",
        answer:
          "A three-bedroom Queenslander with standard furniture usually takes four to five hours with a three-person crew. The staircases add time compared to a ground-level house. Four-bedroom homes with large or heavy furniture can push to six hours. We give you an accurate estimate during the quoting process based on your specific property.",
      },
    ],
    serviceSummary:
      "North Ward is Queenslander territory, and our crew comes equipped for it — stair trolleys, furniture dollies, floor runners for polished timber, and extra padding for the heavy antique pieces these homes often contain. We protect verandahs, staircase rails and timber floors as standard. For The Strand apartments, we bring lift protection and coordinate with building managers. Defence families heading interstate get sealed truck loads with documented inventories for a smooth long-distance transfer.",
    reviews: [
      {
        text: "Moved our family from a Queenslander on Howitt Street to Brisbane. The R2G crew handled the steep front staircase brilliantly — heavy furniture down those stairs without a mark on the walls or the timber treads. Really professional outfit.",
        name: "Andrew P.",
        location: "North Ward",
        date: "February 2025",
      },
      {
        text: "We moved from an apartment on The Strand to a house in Annandale. R2G arrived at 6:30am, had the lift sorted with the building manager and were done loading before the beach crowds turned up. Smooth operation.",
        name: "Lisa G.",
        location: "North Ward → Annandale",
        date: "December 2024",
      },
      {
        text: "R2G relocated us into a beautiful old Queenslander on Paxton Street. They laid floor runners throughout, used furniture blankets on everything and took genuine care with our piano going up the front stairs. Cannot fault them.",
        name: "David & Karen W.",
        location: "North Ward",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Assess your staircase before moving day.",
        text: "Most North Ward Queenslanders have external timber staircases with one or two landings. Measure the width and note any tight turns — if your fridge or sofa will not clear the front stairs, we can often use the rear stairs or rig items over the verandah railing with proper equipment.",
      },
      {
        heading: "Schedule around Strand events.",
        text: "The Strand hosts several major events each year including the Townsville Supercars and various markets. Traffic and parking near the foreshore becomes impossible on event weekends. Check the Townsville events calendar before locking in your moving date.",
      },
      {
        heading: "Protect those timber floors.",
        text: "North Ward Queenslanders often have original or restored hardwood floors that scratch easily. We lay heavy-duty runners as standard, but if you have recently polished or refinished floors, let us know so we can bring extra protection and use felt pads on all furniture legs.",
      },
      {
        heading: "Start early to beat the heat.",
        text: "North Ward is exposed to full sun with limited shade on most streets. In summer months we recommend a 6:30am start to get the truck loaded before it hits 35 degrees. Our crew carries plenty of water but the early start makes a massive difference to energy levels and speed.",
      },
    ],
  },
  {
    slug: "castle-hill",
    name: "Castle Hill",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "2km west of Townsville CBD",
    postcode: "4810",
    latitude: -19.252,
    longitude: 146.773,
    uniquePara1:
      "Castle Hill is Townsville's iconic landmark and one of its most sought-after residential addresses. Living on the hill means panoramic views across the city, the coastline and out to Magnetic Island — but it also means steep access, winding roads and properties built into the slope. Residents are a mix of established Townsville families who have held their blocks for decades and newcomers willing to pay for the views. The walk and drive to the summit is a Townsville institution — locals pound the hill track at dawn and dusk, and the lookout at the top is where everyone takes visitors. Below the summit, the residential streets like Stanley Street, Gregory Street (the upper end) and Stagpole Street wind through lush tropical gardens with houses perched on steep blocks that test every builder and every removalist.",
    uniquePara2:
      "Homes on Castle Hill are mostly solid brick or rendered block construction from the 1960s through to the 1990s, built to handle cyclones and the steep terrain. Many are split-level designs that follow the contour of the hill, with garages or storage at the lower level and living areas above. Internal staircases are standard, and some properties have 30 or 40 steps from the street to the front door. The higher up the hill, the more dramatic the build — some homes are accessed via a winding private driveway that doubles back on itself. Furniture is hard to get in and even harder to get out. Our crew treats every Castle Hill move as a stair job and plans accordingly.",
    uniquePara3:
      "Access is the defining challenge for Castle Hill moves. The main route up is via Stanley Street, which is steep, winding and has limited passing room in sections. Large trucks cannot safely navigate the upper streets, so we use medium rigid trucks and sometimes run shuttle loads for the highest properties. Street parking is scarce on the narrower sections — there are spots where the truck blocks the entire road, so we work quickly and position a spotter. Turning circles at the top are tight, and some dead-end streets require reversing a significant distance. Our drivers do a pre-move site visit for any Castle Hill property above the mid-level to plan the vehicle approach and assess whether we need additional crew for the stair carry.",
    nearbySubs: ["North Ward", "Belgian Gardens", "West End"],
    priceFrom: "$179/hr",
    serviceArea: "Castle Hill & Townsville Central",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Removalists Castle Hill Townsville | R2G Townsville",
    metaDescription:
      "Castle Hill removalists who know the steep access and winding roads. Fully insured, stair-equipped crews. Get a free moving quote from R2G today.",
    moveDay:
      "Castle Hill jobs earn their money. We had one last month on Stagpole Street — a split-level brick home about two thirds of the way up the hill with 28 steps from the driveway to the front door and another internal staircase between the living level and the bedrooms. Three-bedroom place with a full garage underneath packed with camping gear and tools.\n\nWe brought four blokes and the medium truck. The driver assessed the street before reversing up to the driveway — tight, but doable. We set up a relay system: two blokes at the top wrapping and carrying items to the landing, two at the bottom receiving and loading the truck. The fridge was the monster — a 680-litre side-by-side that took all four of us on a stair trolley down those 28 steps. We strap it to the trolley, one bloke on each side guiding, one at the bottom braking, one at the top feeding it down. Slow and controlled.\n\nThe views from the lounge room were unreal — you could see all the way to Magnetic Island. But we were not there for the views. By mid-morning the house was cleared and we drove back down Stanley Street to the new place in Aitkenvale. Flat block, double garage, wide doors — unloaded in half the time it took to load. Total job was about six hours, which is right for a Castle Hill three-bedder with a full garage. The owners knew it would be a stair job and had budgeted for the extra crew member, which made the whole thing smoother.",
    localFaqs: [
      {
        question: "Can large trucks access Castle Hill properties?",
        answer:
          "Most of the upper streets cannot accommodate a large rigid truck safely. We use medium trucks for Castle Hill and sometimes run shuttle loads for the highest properties. Our driver does a pre-move site visit for any address above the mid-level to confirm the vehicle approach, turning space and parking position.",
      },
      {
        question: "Do Castle Hill moves cost more because of the stairs?",
        answer:
          "Castle Hill moves generally take longer due to stair carries and the relay system we use to move items safely up or down steep terrain. We quote based on the specific property — number of stairs, driveway gradient and access conditions all factor in. We are upfront about this during the quoting process.",
      },
      {
        question: "What if it rains on moving day on Castle Hill?",
        answer:
          "Wet conditions on Castle Hill's steep driveways and steps create a genuine safety risk. If heavy rain is forecast, we will discuss rescheduling with you. Light showers we can work through with non-slip mats and extra caution, but we will not risk our crew or your belongings on slippery concrete steps in a downpour.",
      },
    ],
    serviceSummary:
      "Castle Hill moves demand specialist planning — stair trolleys, relay crew systems, medium trucks that handle the winding streets, and pre-move site visits for upper-level properties. Our team knows which streets a truck can safely navigate, where to turn around, and how to get a 200-kilo fridge down 30 steps without damaging it or the staircase. We factor in the extra time and crew requirements when quoting so there are no surprises on the day.",
    reviews: [
      {
        text: "Moved from a split-level on Stagpole Street — 30-something steps to the front door. R2G brought four blokes, had a stair trolley and a relay system running like clockwork. The fridge coming down those steps was impressive. No damage to anything.",
        name: "Tony B.",
        location: "Castle Hill",
        date: "January 2025",
      },
      {
        text: "We bought a home near the top of Castle Hill and R2G moved us in from Annandale. They did a site visit beforehand and came on the day with exactly the right truck and enough crew. Genuine professionals who know this hill.",
        name: "Michelle R.",
        location: "Castle Hill",
        date: "November 2024",
      },
      {
        text: "The R2G team moved us out of Castle Hill before cyclone season. They navigated the steep driveway and narrow street perfectly with the medium truck. Four hours for a two-bedroom — fair price given the stair work involved.",
        name: "Greg D.",
        location: "Castle Hill → Kirwan",
        date: "September 2024",
      },
    ],
    tips: [
      {
        heading: "Request a pre-move site visit.",
        text: "Castle Hill properties vary enormously in access difficulty. Ask us for a drive-by assessment before moving day so we can confirm the right truck size, crew numbers and stair equipment. This avoids surprises and lets us give you an accurate quote.",
      },
      {
        heading: "Clear the staircase path completely.",
        text: "If your property has external steps, remove pot plants, doormats and anything else from the staircase and landing before the crew arrives. A clear path is faster and safer when we are carrying heavy items on a stair trolley.",
      },
      {
        heading: "Avoid moving in wet weather.",
        text: "Steep concrete steps and driveways on Castle Hill become dangerous when wet. If heavy rain is forecast, talk to us about rescheduling. A dry day means a faster, safer move for everyone.",
      },
      {
        heading: "Budget for the extra crew member.",
        text: "Most Castle Hill moves need an additional crew member for stair carries — especially if your property has 20-plus steps. This adds to the hourly rate but significantly speeds up the job and reduces the risk of damage to your belongings and the property.",
      },
    ],
  },
  {
    slug: "belgian-gardens",
    name: "Belgian Gardens",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "3km north-west of Townsville CBD",
    postcode: "4810",
    latitude: -19.24,
    longitude: 146.77,
    uniquePara1:
      "Belgian Gardens sits between the base of Castle Hill and the northern end of The Strand, giving residents the best of both worlds — hillside tranquillity and beach access within walking distance. It is a quietly desirable suburb that does not get the same attention as North Ward but offers similar character homes at slightly less eye-watering prices. The streets are leafy and established, with a strong community of long-term residents alongside younger families moving in as older owners downsize. The Strand bike path runs right past the eastern edge, the Tobruk Memorial Baths are just down the road, and Castle Hill walking tracks start at the end of several streets. It is the kind of suburb where neighbours actually know each other and kids ride bikes to school.",
    uniquePara2:
      "The housing stock is a genuine mix — 1950s fibro cottages alongside beautifully restored Queenslanders, solid 1970s brick homes and the occasional modern build squeezed onto a subdivided block. The streets closest to Castle Hill tend to slope, and some properties on the western side sit on elevated blocks with retaining walls and steps. Moves here range from straightforward ground-level cottage relocations to more complex jobs involving raised Queenslanders with steep access. The suburb is compact enough that most homes are on standard residential blocks, but the variety in house styles means no two moves are the same.",
    uniquePara3:
      "Access in Belgian Gardens is generally good — streets are wide enough for a large truck on most routes, and the flat eastern side near The Strand is straightforward. The western streets climbing toward Castle Hill get tighter and steeper, and some dead-end cul-de-sacs require careful reversing. We approach from The Strand end via the Esplanade for the flatter properties and from Gregory Street for the hillside ones. Street parking is rarely an issue outside of Strand event days. The main watch-out is the overhanging mango and poinciana trees that line several streets — low branches can catch the top of a truck if the driver is not paying attention, and our blokes know which streets to approach with care.",
    nearbySubs: ["North Ward", "Castle Hill", "Rowes Bay"],
    priceFrom: "$179/hr",
    serviceArea: "Belgian Gardens & The Strand Precinct",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Belgian Gardens | R2G Townsville",
    metaDescription:
      "Belgian Gardens removalists with local knowledge. Queenslander experts, fully insured, no hidden fees. Book your free moving quote with R2G today.",
    moveDay:
      "Belgian Gardens jobs often start with a quick drive past The Strand on the way in — not a bad office view. Last fortnight we moved a retired couple from a raised Queenslander on Bundock Street to a ground-level unit in Pimlico. They had been in the house for 22 years and accumulated accordingly.\n\nWe arrived at 6:30am with three blokes and a large truck — the street was wide and flat on the Strand side, so parking was no issue. The Queenslander was raised about 1.5 metres with a solid timber staircase and a wide front verandah. Inside, the hallway was generous — original proportions — so the big furniture moved through without disassembly. The main challenge was the sheer volume: four bedrooms fully furnished, a study full of books, a workshop under the house packed with tools, and a garden shed that could have stocked a hardware store.\n\nWe loaded room by room, heaviest items first — the workshop tools and book boxes went in at the back of the truck, then bedroom furniture, then living areas. The crew worked in pairs, one wrapping and one carrying, with the third bloke organising the truck. By 11am the house was empty and we drove across to Pimlico. The unit was much smaller, so about half the load went to our storage facility. We unloaded the essentials into the unit, labelled the storage items clearly, and had everything sorted by 2pm. Seven hours including the storage run — a solid day's work for a house that size.",
    localFaqs: [
      {
        question: "Is Belgian Gardens good access for removal trucks?",
        answer:
          "The flatter eastern streets near The Strand are excellent for truck access — wide, well-maintained and easy to park. The western streets climbing toward Castle Hill are steeper and narrower, and some cul-de-sacs require careful reversing. We assess your specific street during the quoting process.",
      },
      {
        question: "Do you handle downsizing moves in Belgian Gardens?",
        answer:
          "Regularly. Long-term Belgian Gardens residents often downsize to smaller homes or units in Pimlico, Aitkenvale or North Ward. We help sort what goes to the new place and what goes to storage, load accordingly, and deliver to both destinations on the same day.",
      },
      {
        question: "What about the mango trees and low branches?",
        answer:
          "Several streets in Belgian Gardens have mature mango and poinciana trees with branches that hang over the road. Our drivers know which streets have clearance issues and adjust the truck route accordingly. If a branch is blocking your driveway, trimming it before moving day helps us get the truck closer to your front door.",
      },
    ],
    serviceSummary:
      "Belgian Gardens moves blend the character of Queenslander relocations with the convenience of wide, accessible streets — at least on the Strand side. For the hillside properties closer to Castle Hill, we bring stair gear and extra crew. Downsizing moves are a regular part of our Belgian Gardens work, and we coordinate same-day delivery to your new home and our storage facility so everything is handled in one trip. Our drivers know the tree canopy clearances and the best approach routes for every section of the suburb.",
    reviews: [
      {
        text: "R2G moved us from a big Queenslander in Belgian Gardens to a smaller place in Pimlico. They handled 22 years worth of stuff, split the load between the new unit and storage, and had it all done in a single day. Brilliant service.",
        name: "Margaret & Ron S.",
        location: "Belgian Gardens",
        date: "February 2025",
      },
      {
        text: "Moved into Belgian Gardens from Kirwan — the R2G crew knew exactly where to park on our street and had the truck positioned before we finished our morning coffee. Quick, careful and good value. Happy to recommend.",
        name: "Ben C.",
        location: "Belgian Gardens",
        date: "October 2024",
      },
      {
        text: "We had a tight move from a raised house on the Castle Hill side of Belgian Gardens. Steep driveway and external stairs. R2G brought a stair trolley and extra crew without being asked — they clearly knew the area. No damage, no stress.",
        name: "Priya N.",
        location: "Belgian Gardens",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Trim overhanging branches before moving day.",
        text: "Belgian Gardens is known for its mature mango and poinciana trees. If low branches hang over your driveway or street frontage, trimming them before the move lets our truck park closer and saves carry time — which saves you money.",
      },
      {
        heading: "Specify which side of Belgian Gardens you are on.",
        text: "Access on the flat Strand side is very different from the steep Castle Hill side. When booking, give us your exact street address so we can plan the right truck size and crew numbers for your specific property.",
      },
      {
        heading: "Consider a same-day storage split for downsizing.",
        text: "If you are moving from a large Belgian Gardens home to a smaller place, we can load everything onto the truck and deliver essentials to your new home first, then run the overflow to our storage facility on the same trip. One move, one truck, no double-handling.",
      },
      {
        heading: "Watch for The Strand events affecting access.",
        text: "Events on The Strand can affect traffic and parking on the eastern Belgian Gardens streets. Check the local events calendar before locking in your date — a Strand event weekend can add 30 minutes of access hassle that a midweek move avoids entirely.",
      },
    ],
  },
  {
    slug: "railway-estate",
    name: "Railway Estate",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "1km south of Townsville CBD",
    postcode: "4810",
    latitude: -19.27,
    longitude: 146.795,
    uniquePara1:
      "Railway Estate is old Townsville — a working-class suburb with roots going back to the rail yards that gave it its name. These days it is gentrifying slowly, with young buyers picking up the original timber cottages and doing them up while long-term residents hold onto their family homes. The streets are laid out on a tight grid with small blocks and narrow frontages, which gives the suburb a dense, neighbourly feel. It sits between Ross Creek and the rail corridor, just a short walk south of the CBD. The pubs and shops on Ingham Road anchor the community, and the proximity to South Townsville and the city means residents are never far from anything. Flooding is a real concern here — Railway Estate copped it during the 2019 monsoon event, and that history shapes the suburb to this day.",
    uniquePara2:
      "Almost every home in Railway Estate is a small timber cottage — weatherboard or fibro, raised on low stumps, with tin roofs and small front verandahs. They are charming but compact. Two or three bedrooms is the standard, and internal spaces are tight. Hallways are narrow, doorways are original width, and rooms are modest in size. Renovated cottages open up the living areas but rarely change the access points, so getting furniture in and out requires the same careful manoeuvring regardless of how modern the kitchen looks. Storage sheds out the back are common, and most yards have a Hills Hoist and not much else. Moves are typically small — one to two truckloads — but the tight spaces mean they take longer than you would expect for the volume.",
    uniquePara3:
      "The grid layout of Railway Estate means straight streets with good truck access — no winding cul-de-sacs or steep hills. The challenge is width. Street parking on both sides can reduce the available road to a single lane, and some of the older streets do not have kerbing. We run medium trucks as standard for Railway Estate and park on the same side as the property to minimise carry distance. The railway corridor along the western edge generates occasional noise but does not affect access. During heavy rain, the low-lying sections near Ross Creek can flood rapidly — we monitor forecasts closely during the wet season and reschedule when creek levels are rising.",
    nearbySubs: ["South Townsville", "Townsville City", "West End"],
    priceFrom: "$179/hr",
    serviceArea: "Railway Estate & Inner Townsville",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Reliable & Affordable Removalists Railway Estate | R2G Townsville",
    metaDescription:
      "Railway Estate removalists who know the tight cottages and narrow streets. Fully insured, upfront pricing. Get your free moving quote from R2G.",
    moveDay:
      "Railway Estate moves are bread and butter for us — small houses, tight spaces, and a crew that knows how to work efficiently in compact cottages. We did a job on Perkins Street recently, moving a young couple from a renovated two-bedroom cottage to a house in Cranbrook. Classic Railway Estate property — fibro on stumps, narrow front steps, small rooms off a skinny hallway.\n\nGot there at 7am, parked the medium truck right out front on the street. No issues with access — the grid streets are straight and the neighbours were not out yet. Started with the bedroom at the back and worked forward. The queen bed frame had to come apart to clear the hallway — we knew it would from experience. The couch went out sideways through the front door with about 20mm clearance on each side. Everything else was standard — boxes, a small dining table, the usual kitchen stuff.\n\nThe washing machine was under the house in the laundry — low clearance, had to duck-walk it out on a trolley. The yard shed had a few tools, a pushbike and some camping gear. All up it was a light load by weight but slow going because of the tight access.\n\nWe drove out to Cranbrook via Ingham Road — about 15 minutes. The new house was a modern three-bedroom with wide hallways and a double garage. Night and day compared to the cottage. Unloaded in less than an hour. Total time was three and a half hours. The couple said it was the smoothest move they had been through, and they had moved three times in five years.",
    localFaqs: [
      {
        question: "Are Railway Estate cottages difficult to move from?",
        answer:
          "They are compact rather than difficult. The narrow hallways and original-width doorways mean larger items need disassembly or careful angling. Our crew moves people out of these cottages regularly and carries toolkits for furniture disassembly. We allow extra time for the tight spaces when quoting Railway Estate jobs.",
      },
      {
        question: "What about flooding risk in Railway Estate?",
        answer:
          "Parts of Railway Estate near Ross Creek are flood-prone, particularly during major rain events. We monitor weather forecasts during the wet season and will discuss rescheduling if significant rain is predicted. For moves into Railway Estate, we recommend keeping valuables off the floor and checking your flood insurance before settlement.",
      },
      {
        question: "Can a large truck fit down Railway Estate streets?",
        answer:
          "The streets are straight and grid-pattern, which is good, but parked cars can narrow the available road. We typically use a medium rigid truck for Railway Estate to ensure easy positioning and avoid blocking the street for extended periods.",
      },
    ],
    serviceSummary:
      "Railway Estate moves are about precision in tight spaces — our crew comes with toolkits for furniture disassembly, narrow-clearance trolleys for under-house laundries, and medium trucks that fit the compact streets without blocking neighbours. We allow realistic timeframes for cottage moves because the tight access adds time that a standard quote would miss. During wet season, we monitor Ross Creek levels and communicate early if rescheduling looks necessary.",
    reviews: [
      {
        text: "Moved from a tiny cottage on Perkins Street to Cranbrook. The R2G blokes got our queen bed through a hallway I thought was impossible. They took it apart, carried it through and reassembled it at the new place. Good as gold.",
        name: "Jake L.",
        location: "Railway Estate",
        date: "March 2025",
      },
      {
        text: "R2G helped us move into a renovated cottage in Railway Estate from Aitkenvale. They were honest about the tight access from the start and quoted accordingly. No surprises on the day, everything done in four hours. Fair dinkum good service.",
        name: "Sam & Ash W.",
        location: "Railway Estate",
        date: "November 2024",
      },
      {
        text: "We had to get out of Railway Estate quickly after a flood scare. R2G came the next morning and had our two-bedroom cottage packed and loaded in under three hours. Professional, calm and exactly what we needed in a stressful situation.",
        name: "Nicole F.",
        location: "Railway Estate → Mundingburra",
        date: "February 2024",
      },
    ],
    tips: [
      {
        heading: "Let us know about narrow hallways when booking.",
        text: "Railway Estate cottages have some of the narrowest hallways in Townsville. If your doorways are under 750mm wide, flag it when you book so we can bring disassembly tools and plan the furniture extraction route before we arrive.",
      },
      {
        heading: "Check under-house access for laundry items.",
        text: "Many cottages have laundries and storage areas under the house with low clearance. Let us know if your washing machine or dryer is in a low-ceiling space so we bring the right trolley and allow extra time for extraction.",
      },
      {
        heading: "Keep an eye on wet-season forecasts.",
        text: "Railway Estate's proximity to Ross Creek means it can flood during major rain events. If you are planning a wet-season move (November to April), be flexible with your date in case we need to reschedule around dangerous weather.",
      },
      {
        heading: "Park your car away from the house on moving day.",
        text: "The narrow streets and small frontages mean our truck needs to park as close to your front door as possible. Move your car to a neighbouring street on the morning of the move to give us the best loading position.",
      },
    ],
  },
  {
    slug: "west-end",
    name: "West End",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "2km south-west of Townsville CBD",
    postcode: "4810",
    latitude: -19.265,
    longitude: 146.782,
    uniquePara1:
      "West End is one of those suburbs that sits quietly beside its flashier neighbours and just gets on with it. Tucked between Railway Estate and the base of Castle Hill, it is a small residential pocket with a mix of older homes and a slow trickle of renovations bringing new life to the streets. Long-term residents know everyone on their block, and the community has a genuine small-town feel despite being minutes from the CBD. It is popular with first-home buyers who cannot quite stretch to North Ward or Belgian Gardens but want the inner-city lifestyle. The proximity to Townsville Hospital also makes it a convenient spot for medical professionals on shift rotations. It is not glamorous, but it is honest, affordable and well-located.",
    uniquePara2:
      "Housing in West End is predominantly older timber cottages and fibro homes — similar stock to Railway Estate but with slightly larger blocks on some streets. You will find a few modern infill builds where old homes have been knocked down, but the character of the suburb is firmly in the pre-1980 era. Most homes are two to three bedrooms with small yards and carports rather than garages. The cottages on the higher ground closer to Castle Hill tend to be raised on taller stumps with under-house storage, while the flatter sections have low-set homes. Moves are typically modest in size — a standard two or three-bedroom household without the oversized furniture you see in newer suburbs.",
    uniquePara3:
      "West End streets are quiet and access is generally straightforward for a medium truck. The suburb is small enough that there are only a handful of main routes in and out — most moves use Ingham Road or come through from Railway Estate via the cross streets. The western edge near Castle Hill rises gently, but nothing like the steep grades on the hill itself. Street parking is rarely an issue given the low traffic volumes. The main access consideration is the under-house areas on raised cottages — low-clearance stumps mean we sometimes need to get creative extracting washing machines and stored items from tight spaces. During the wet season, the lower sections can hold water after heavy rain, but West End fares better than Railway Estate for drainage overall.",
    nearbySubs: ["Railway Estate", "South Townsville", "Castle Hill"],
    priceFrom: "$179/hr",
    serviceArea: "West End & Inner Townsville",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists West End Townsville | R2G Townsville",
    metaDescription:
      "West End Townsville removalists. Local knowledge, honest pricing, fully insured. Cottages, Queenslanders and units — we handle them all. Free quote.",
    moveDay:
      "West End is a quiet suburb to work in, which makes for efficient moves. We had a job recently on a back street near the Castle Hill end — a young nurse moving from a two-bedroom timber cottage to a unit closer to the hospital in Douglas. She had been renting the place for two years and had a sensible amount of stuff — nothing oversized.\n\nWe arrived at 7am with two blokes and the small truck. The cottage was raised on low stumps with a narrow front staircase — five steps, nothing dramatic. The rooms were compact but the hallway had been opened up in a previous renovation, so the couch and bed base came out without disassembly. The bedroom at the back had a built-in wardrobe, so it was mostly boxes and a bedside table. Kitchen took about 20 minutes to wrap and box the fragile items she had not packed yet.\n\nUnder the house was the usual — a washing machine wedged into a low-clearance laundry space, a couple of bikes, and some storage tubs. We duck-walked the washer out on a trolley and loaded the rest by hand. The whole house was on the truck by 9am.\n\nDouglas was about a ten-minute drive. The new unit was ground floor with a carport right next to the front door — easiest unload we had done all week. Washing machine in, beds set up, boxes stacked in the right rooms. Done by 10:30am. She texted later saying she was already unpacked and on the couch by lunchtime. That is what a clean, well-organised move looks like.",
    localFaqs: [
      {
        question: "Is West End easy to move from compared to other inner suburbs?",
        answer:
          "West End is one of the more straightforward inner suburbs for access. Streets are quiet, blocks are a reasonable size, and most homes are low-set or modestly raised. The main considerations are the older cottage doorway widths and under-house laundry spaces with low clearance.",
      },
      {
        question: "Do you move people from West End to the hospital precinct?",
        answer:
          "All the time. West End to Douglas or the Townsville Hospital area is one of our most common short-distance routes. Medical professionals on rotating shifts appreciate the quick, efficient service — we can have a one or two-bedroom move done in a morning.",
      },
      {
        question: "How does West End compare for flooding risk?",
        answer:
          "West End sits slightly higher than Railway Estate and South Townsville, so it fares better during heavy rain. The lower sections can hold surface water after a downpour, but it drains faster than the creek-adjacent suburbs. We still monitor weather during the wet season and communicate early if conditions look risky.",
      },
    ],
    serviceSummary:
      "West End moves are typically clean and efficient — modest-sized homes on quiet streets with reasonable truck access. Our crew handles the older cottage quirks — narrow doorways, low-clearance under-house laundries, compact rooms — as part of the daily routine. For the raised homes near the Castle Hill end, we bring stair trolleys and extra padding. Short-distance moves to Douglas, Pimlico and the hospital precinct are a speciality, and we can usually have a two-bedroom West End home loaded, delivered and unpacked in a single morning.",
    reviews: [
      {
        text: "R2G moved me from a cottage in West End to a unit in Douglas. Two blokes, small truck, done by mid-morning. Exactly what I needed — no fuss, no damage, fair price. Will definitely use them again when I move next year.",
        name: "Hannah L.",
        location: "West End",
        date: "January 2025",
      },
      {
        text: "We moved from West End to Kirwan with R2G. The old cottage was tricky with narrow doors but the guys handled it without a scratch on anything. They even helped get the washer out from under the house where I could barely fit. Top blokes.",
        name: "Darren T.",
        location: "West End → Kirwan",
        date: "September 2024",
      },
      {
        text: "Hired R2G for a quick move within West End — just two streets over. They still came with full gear, wrapped everything properly and treated it like any other job. No shortcuts. Impressed with the professionalism.",
        name: "Leah M.",
        location: "West End",
        date: "June 2024",
      },
    ],
    tips: [
      {
        heading: "Mention under-house laundry access when booking.",
        text: "Many West End cottages have the washing machine in a low-clearance space under the house. Give us a heads-up so we bring the right trolley and factor in the extra time to extract heavy appliances from tight spots.",
      },
      {
        heading: "A small truck often does the job.",
        text: "West End homes are modest in size, and a two-bedroom cottage usually fits in a single small or medium truck load. This keeps costs down and makes street access easier on the narrower sections.",
      },
      {
        heading: "Clear the front path and steps the night before.",
        text: "Remove pot plants, welcome mats and anything else from the front stairs and path before our crew arrives. A clear path from the front door to the truck makes loading faster and safer.",
      },
      {
        heading: "Pack fragile kitchen items yourself if you can.",
        text: "West End cottage kitchens are compact but people accumulate a lot of glassware and crockery. Packing your own kitchen items the night before saves time on moving day — we provide packing materials if you need them, just ask when you book.",
      },
    ],
  },
  {
    slug: "rowes-bay",
    name: "Rowes Bay",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "3km north of Townsville CBD",
    postcode: "4810",
    latitude: -19.235,
    longitude: 146.775,
    uniquePara1:
      "Rowes Bay is a small, quiet pocket at the northern tip of The Strand, where the foreshore curves around toward Pallarenda and the mangroves of the bay. It is tucked away enough that most Townsville locals drive through without realising it is there. The residential streets are shaded by mature trees, the blocks are generous, and the pace of life is noticeably slower than neighbouring North Ward. Families and retirees make up most of the population — people who chose Rowes Bay specifically because it is not busy. The Rowes Bay Sustainability Centre is a local landmark, and the walking path along the bay is popular with morning walkers and cyclists. Military families stationed at Lavarack sometimes land here for the quiet lifestyle and easy access to the barracks via Stuart Drive.",
    uniquePara2:
      "Housing in Rowes Bay is mostly established family homes — a blend of 1960s and 70s brick-and-tile, some raised timber homes, and a handful of larger modern builds on the waterfront side. There is very little medium or high-density development, which keeps the suburban character intact. Blocks are larger than the inner suburbs, and most homes have garages or at least covered carports. Moves here tend to be full family households — three to four bedrooms with outdoor furniture, garden equipment, bikes and the accumulated belongings that come with settled suburban living. The occasional waterfront property move involves higher-value items and requires extra care.",
    uniquePara3:
      "Rowes Bay has excellent truck access. The streets are wide and well-maintained with good turning circles at the end of cul-de-sacs. There is no through traffic to speak of — the suburb dead-ends at the bay, so our truck is usually the only large vehicle on the street. The approach from The Strand via the roundabout at the northern end is straightforward, and there is an alternative access from Pallarenda Road. Driveways are typically wide enough to back the truck right up to the garage, which speeds up loading significantly. The only seasonal consideration is stinger season — the foreshore paths and bay beach attract box jellyfish from November to May, which does not affect the move directly but is worth knowing if you are bringing kids along on moving day.",
    nearbySubs: ["Belgian Gardens", "North Ward", "Pallarenda"],
    priceFrom: "$179/hr",
    serviceArea: "Rowes Bay & Northern Foreshore",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Professional Removalists Rowes Bay | R2G Townsville",
    metaDescription:
      "Rowes Bay removalists with local expertise. Wide streets, easy access, careful handling. Fully insured, honest quotes. Book your free quote with R2G.",
    moveDay:
      "Rowes Bay is one of the easier suburbs to work in — wide streets, big driveways and no traffic to deal with. We moved a family of four from a large four-bedroom brick home near the waterfront to a new build in the northern beaches. The house had a double garage packed with gear, a garden shed, a trampoline in the backyard and enough furniture to fill every room.\n\nWe arrived at 7am with three blokes and a large truck. Backed straight into the driveway — plenty of room to position the tailgate right at the garage door. Started loading the garage first while the family finished their last-minute packing inside. The garage alone took an hour — tools, bikes, camping gear, fishing rods, storage tubs stacked to the ceiling.\n\nInside the house was well organised. The family had packed their own boxes and labelled everything by room, which made our job significantly easier. We wrapped the furniture — leather couch, dining table, beds — and loaded room by room from the back of the house forward. The kitchen crockery and glassware went into dish packs with butchers paper between each piece.\n\nThe trampoline was the fun bit — dismantled it in the backyard, carried the frame and mat out through the side gate, and slotted the pieces along the inside wall of the truck. By 11am the house was empty and cleaned out. We drove up to the new place — about 25 minutes on the highway — and unloaded into a house with even wider doors and a three-car garage. Everything placed, beds assembled, trampoline back together in the new yard. Done by 2:30pm. A big move but a clean run with no hiccups.",
    localFaqs: [
      {
        question: "Is Rowes Bay easy for removal truck access?",
        answer:
          "Very easy. Wide streets, generous driveways, no through traffic, and cul-de-sacs with proper turning circles. Most Rowes Bay homes let us back the truck right up to the garage or front door, which speeds up loading and unloading significantly compared to tighter inner suburbs.",
      },
      {
        question: "Do you handle waterfront property moves in Rowes Bay?",
        answer:
          "Yes. Waterfront homes often have higher-value furniture, artwork and delicate items. We bring extra padding, furniture blankets and specialised wrapping for these jobs. Our crew treats every item with care, but we are especially attentive on premium property moves.",
      },
      {
        question: "How long does a typical family home move take in Rowes Bay?",
        answer:
          "A three-bedroom family home with standard furniture and a garage usually takes four to five hours with a three-person crew. Four-bedroom homes with fully packed garages and sheds can push to six or seven hours. The easy truck access in Rowes Bay keeps things efficient compared to hillside or apartment moves.",
      },
    ],
    serviceSummary:
      "Rowes Bay moves benefit from the suburb's wide streets and generous driveways — our trucks can back right up to your door, which keeps loading times down and reduces the risk of damage during long carries. For full family home relocations, we bring a large truck and a three-person crew as standard. Waterfront properties get extra padding and careful handling for premium furnishings. We also dismantle and reassemble outdoor items like trampolines and swing sets as part of the service.",
    reviews: [
      {
        text: "R2G moved our family of four from Rowes Bay to the northern beaches. Big house, full garage, trampoline and all. They had everything loaded by lunchtime and set up at the new place by mid-afternoon. Could not ask for better.",
        name: "Craig & Jenny A.",
        location: "Rowes Bay",
        date: "March 2025",
      },
      {
        text: "We downsized from a large home in Rowes Bay to a unit in North Ward. R2G took the essentials to the new place and the rest to storage — all in one trip. The crew were efficient and friendly. Great experience.",
        name: "Barbara P.",
        location: "Rowes Bay → North Ward",
        date: "December 2024",
      },
      {
        text: "Moved from Aitkenvale into a waterfront place in Rowes Bay. The R2G blokes took extra care with our furniture on the timber floors and wrapped the artwork individually. Noticed the attention to detail straight away.",
        name: "Simon H.",
        location: "Rowes Bay",
        date: "August 2024",
      },
    ],
    tips: [
      {
        heading: "Take advantage of the driveway access.",
        text: "Most Rowes Bay homes have wide driveways that fit a removal truck easily. Clear your garage and driveway the night before so we can back the truck right up to the house — this saves time on every trip between the truck and your front door.",
      },
      {
        heading: "Dismantle outdoor items before moving day if you can.",
        text: "Trampolines, swing sets and large outdoor furniture take time to disassemble. If you can break them down before we arrive, it saves an hour or more. If not, no dramas — our crew carries the tools and knows how to dismantle common brands.",
      },
      {
        heading: "Label boxes by room for the new place.",
        text: "Rowes Bay moves often involve large, well-established households. Labelling every box with the destination room name means our crew can place them exactly where you want them at the new house — no double-handling, no confusion.",
      },
      {
        heading: "Book a morning move to beat the heat.",
        text: "Rowes Bay is exposed to full tropical sun with limited shade on most streets. A 7am start lets us get the heavy loading done in the cooler hours. On hot days, our crew takes water breaks every 30 minutes — starting early keeps the total job time down.",
      },
    ],
  },
  {
    slug: "pallarenda",
    name: "Pallarenda",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "7km north of Townsville CBD",
    postcode: "4810",
    latitude: -19.21,
    longitude: 146.76,
    uniquePara1:
      "Pallarenda is the end of the road — literally. The suburb sits at the tip of the peninsula north of Rowes Bay, with views across Cleveland Bay to Magnetic Island and nothing but mangroves and foreshore beyond the last house. It is a small, tight-knit community that feels a world away from the rest of Townsville despite being only seven kilometres from the CBD. The houses are mostly older, many built by families who bought cheap blocks decades ago when no one else wanted to live this far out. These days Pallarenda attracts a mix of retirees, nature lovers and families who want beachfront living without the price tag of North Ward. The Pallarenda Environmental Park is a local treasure, and the boat ramp at the end of the road is the launching point for fishing trips and Magnetic Island day trips.",
    uniquePara2:
      "The housing stock is eclectic — everything from basic fibro beach shacks to renovated family homes and the occasional architecturally designed build taking advantage of the water views. Most homes are single storey, some raised on stumps to catch the breeze and reduce flood risk. Blocks vary in size, with the older properties on generous parcels and newer subdivisions more compact. Moves in Pallarenda tend to be relaxed affairs — smaller households, manageable volumes, and owners who are not in a rush because nobody moves to the end of the road unless they are settling in for the long haul. The salty air does a number on outdoor furniture and metal items, so we wrap and protect coastal gear with extra care.",
    uniquePara3:
      "There is one road in and one road out — Pallarenda Road. This means no alternative route if there is a tree down or road work, so we check conditions before heading out on moving day. The road is well-maintained and handles a large truck without issues. Within the suburb, streets are quiet with very little traffic. Most driveways are wide enough for truck access, and turning space is adequate at the road ends. The distance from the CBD adds about 15 minutes to the drive compared to a North Ward or Belgian Gardens move, which we factor into the quote. During cyclone season, Pallarenda is exposed and can cop storm surge — residents need to plan for early evacuation, and we recommend having an emergency plan for your belongings if you live on the low-lying foreshore blocks.",
    nearbySubs: ["Rowes Bay", "Belgian Gardens", "North Ward"],
    priceFrom: "$179/hr",
    serviceArea: "Pallarenda & Northern Peninsula",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Trusted Local Movers Pallarenda | R2G Townsville",
    metaDescription:
      "Pallarenda removalists who know the peninsula. Coastal property specialists, fully insured, no hidden fees. Get your free quote from R2G today.",
    moveDay:
      "Pallarenda jobs are a nice change of pace from the hectic inner-city moves. We did one recently — a retired couple moving from a raised timber home on one of the foreshore streets to a low-set brick place in Mundingburra. They had lived in Pallarenda for 15 years and the house reflected it — every room full, a workshop under the house, and enough fishing gear in the carport to stock a tackle shop.\n\nWe drove out along Pallarenda Road at 6:45am — clear run, no traffic. The house was raised about a metre on concrete stumps with a solid timber staircase and a wide front deck. Good access, no issues parking the large truck in the driveway. The views across to Magnetic Island from the front deck were something else.\n\nStarted loading the workshop and carport first — toolboxes, a workbench, fishing rods in protective tubes, tackle boxes, camping gear. Under-house stuff filled a good section of the truck. Upstairs, the furniture was solid timber — heavy but well-made. The dining table needed six hands to get down the front stairs safely. Beds, wardrobes, a piano that had been in the family for decades — every item wrapped in blankets and strapped properly.\n\nThe salt air had done a number on the outdoor setting — corroded legs, chalky surfaces. We wrapped each piece individually and loaded them against the truck wall with extra padding. Loaded and rolling by 11am. The drive to Mundingburra took about 20 minutes. New house was ground-level with a double garage — unloaded and placed by 2pm. The piano went into the lounge room first, then everything else arranged around it. The bloke said it was the first time in 15 years they had not been able to hear the waves. Bittersweet, but they were happy with the move.",
    localFaqs: [
      {
        question: "Does the single road access to Pallarenda affect moving logistics?",
        answer:
          "There is only one road in and out — Pallarenda Road. We check for any roadworks or closures before heading out on the day. In practice, the road is well-maintained and handles our trucks without issues. The extra distance from the CBD adds about 15 minutes each way, which we factor into the quote.",
      },
      {
        question: "How do you protect items from salt air damage during the move?",
        answer:
          "Coastal properties like those in Pallarenda often have outdoor furniture and metal items affected by salt corrosion. We wrap these items individually with extra padding and blankets to prevent further damage during transit. If items are particularly fragile from corrosion, we will flag that with you before loading.",
      },
      {
        question: "What about cyclone preparation for Pallarenda residents?",
        answer:
          "Pallarenda is exposed to storm surge during cyclones. If you are moving into the area, we recommend having a plan for your most valuable items during cyclone season (November to April). We offer short-term storage at our facility that can act as a safe backup for irreplaceable belongings during severe weather events.",
      },
    ],
    serviceSummary:
      "Pallarenda moves combine the relaxed pace of a peninsula suburb with the practical challenges of coastal properties — salt-affected outdoor items, under-house workshops, and the single-road access. We factor in the extra drive time to the quote and bring the appropriate wrapping for coastal furniture. For long-term residents downsizing, we handle the full load including workshop contents, fishing gear and outdoor items that need extra protection. Storage is available for overflow items if you are moving to a smaller place.",
    reviews: [
      {
        text: "R2G moved us from our Pallarenda home of 15 years to Mundingburra. They handled the piano, the workshop full of tools and all the outdoor furniture with real care. The salt air had wrecked our outdoor setting but they wrapped every piece like it was brand new.",
        name: "John & Denise K.",
        location: "Pallarenda",
        date: "February 2025",
      },
      {
        text: "Moved into a raised house in Pallarenda from Kirwan. The R2G crew handled the front stairs and the heavy furniture brilliantly. They even helped me figure out where the couch would fit through the door. Relaxed, professional and on time.",
        name: "Steve O.",
        location: "Pallarenda",
        date: "October 2024",
      },
      {
        text: "We needed a quick move from Pallarenda before cyclone season started. R2G came out on short notice, loaded the house in a morning and put half into storage. No stress, no hassle. Exactly what we needed.",
        name: "Tina R.",
        location: "Pallarenda → Storage",
        date: "November 2024",
      },
    ],
    tips: [
      {
        heading: "Check Pallarenda Road conditions before your move.",
        text: "There is one road in and one road out. If roadworks or a tree is blocking Pallarenda Road, it affects our access. Check council notices in the week before your move and let us know if anything is scheduled — we can adjust timing if needed.",
      },
      {
        heading: "Wrap and protect salt-corroded outdoor items.",
        text: "Living on the coast means your outdoor furniture and metal items have copped years of salt spray. Point out any corroded or fragile pieces to our crew so we can wrap them with extra padding — handling corroded metal without protection can cause further damage or injury.",
      },
      {
        heading: "Consider storm-season timing for your move.",
        text: "Pallarenda is exposed to storm surge and strong winds during cyclone season (November to April). If you are flexible with dates, moving outside the storm season reduces the risk of weather delays and gives you time to settle in before the wet arrives.",
      },
      {
        heading: "Factor in the extra drive time when booking.",
        text: "Pallarenda is further from the rest of Townsville than most inner suburbs. The 15-minute drive each way adds to the total job time compared to a move within the CBD. We factor this into the quote, but it is worth knowing when comparing costs.",
      },
    ],
  },
  {
    slug: "garbutt",
    name: "Garbutt",
    region: "Townsville Central",
    state: "QLD",
    distanceFromCBD: "5km south-west of Townsville CBD",
    postcode: "4814",
    latitude: -19.27,
    longitude: 146.77,
    uniquePara1:
      "Garbutt is a working suburb that sits alongside the Townsville Airport and the industrial areas off Ingham Road. It has never been fancy and it does not pretend to be — the appeal is affordable housing close to the city and solid transport links. The streets are a mix of original post-war cottages, ex-defence housing and newer low-cost builds. The airport is right next door, which means flight noise is a constant companion, but locals adjust quickly and the trade-off is some of the cheapest real estate within the Townsville inner ring. RAAF Base Townsville borders the suburb, and military families make up a significant chunk of the rental market. First-home buyers and investors account for most of the property turnover, and the frequent moves of defence personnel keep us busy year-round.",
    uniquePara2:
      "Housing in Garbutt is unpretentious — small to medium brick and fibro homes, mostly three bedrooms, on flat blocks with basic yards. Many of the older homes are ex-government or ex-defence stock that has been sold off over the years. They are solidly built but nothing fancy — standard doorways, low ceilings, and functional layouts. The newer builds are compact townhouses aimed at first-home buyers and the rental market. Moves are generally quick and straightforward — ground-level access, standard-sized furniture, and volumes that fit a single truck. There are no multi-storey challenges or narrow heritage doorways to deal with. The occasional larger home on the streets closer to Ingham Road adds variety, but Garbutt moves are as close to cookie-cutter as removals get.",
    uniquePara3:
      "Garbutt is flat, the streets are wide, and there is plenty of room for truck access and parking. Ingham Road is the main corridor — it connects Garbutt to the CBD in one direction and to Aitkenvale and the Stuart Drive bypass in the other. Traffic on Ingham Road builds during peaks but is manageable. The cross streets within the suburb are quiet and residential with no access challenges. Airport traffic from the adjacent terminal creates occasional congestion on the approach roads, but the residential streets are well clear of that. The RAAF base side of Garbutt has some restricted access areas, but the residential sections are fully open. Overall, Garbutt is one of the easiest suburbs in Townsville for a removal truck — flat ground, wide roads, simple driveways.",
    nearbySubs: ["West End", "Railway Estate", "Hermit Park"],
    priceFrom: "$179/hr",
    serviceArea: "Garbutt & Airport Precinct",
    address: "36 Abbott St, Cairns City QLD 4870",
    phone: "1300 959 498",
    metaTitle: "Reliable & Affordable Removalists Garbutt | R2G Townsville",
    metaDescription:
      "Garbutt removalists — fast, affordable, fully insured. Flat access, defence family specialists, no hidden fees. Get your free quote from R2G now.",
    moveDay:
      "Garbutt jobs are efficient by nature — flat blocks, ground-level access and straightforward homes. We did a job last week for an RAAF family being posted from Townsville to Amberley in Queensland. Three-bedroom brick home on a quiet street backing onto the airport perimeter fence. Standard defence housing layout — you could walk through it with your eyes closed if you have moved enough military families.\n\nTwo blokes and a medium truck, 7am start. The family had done their fair share of moves and were well prepared — everything boxed, labelled and stacked in the garage. The house was clean and simple: three bedrooms of standard furniture, a small dining table, a lounge suite, and the usual kitchen and laundry items. No stairs, no tight hallways, no heritage doorways to wrestle with.\n\nWe loaded the garage contents first — moving boxes stacked six high on the truck, then the outdoor items and kids bikes. Inside the house, beds came apart quickly, mattresses into bags, wardrobe contents into portable wardrobes. The entire house was on the truck by 9:30am. Two and a half hours for a three-bedroom — that is what happens when the access is good and the clients are organised.\n\nThis load was heading to our depot for an interstate transfer to Brisbane, so we sealed the truck, documented the inventory and gave the family their paperwork. They flew out that afternoon. Their belongings arrived at the Amberley end four days later. Defence postings are a big part of our Garbutt work and we have the process dialled in.",
    localFaqs: [
      {
        question: "Do you do a lot of defence family moves in Garbutt?",
        answer:
          "Garbutt and the surrounding suburbs are home to many ADF families posted to RAAF Base Townsville and Lavarack Barracks. We handle defence relocations regularly — both local moves within Townsville and interstate postings. We understand the timelines, march-out requirements and the need for documented inventories on long-distance transfers.",
      },
      {
        question: "Is the airport noise a problem during moves?",
        answer:
          "The airport is adjacent to Garbutt, so there is periodic flight noise. It does not affect the move itself — our crew is used to it. If you are moving into Garbutt and are noise-sensitive, visit the property at different times of day before committing to get a feel for the flight path activity.",
      },
      {
        question: "How quick is a typical Garbutt move?",
        answer:
          "Garbutt homes are ground-level with good access, which makes them fast to load and unload. A standard three-bedroom home with an organised pack usually takes two and a half to three and a half hours with a two-person crew. Well-packed homes with garage contents pre-stacked can be even quicker.",
      },
    ],
    serviceSummary:
      "Garbutt moves are quick and efficient thanks to the flat terrain, wide streets and ground-level homes. We handle a high volume of defence family relocations in this area — both local moves and interstate postings — and have the process refined to minimise downtime between the march-out and the flight. For interstate transfers, we provide sealed truck loads with documented inventories. Standard Garbutt moves typically need a two-person crew and a medium truck, keeping costs down for budget-conscious movers.",
    reviews: [
      {
        text: "R2G moved our family from Garbutt to Brisbane as part of a defence posting. They had the house loaded in under three hours, documented everything for the interstate transfer and delivered on time at the other end. Exactly what you need during a stressful posting.",
        name: "Bec & Dan M.",
        location: "Garbutt → Brisbane",
        date: "January 2025",
      },
      {
        text: "Quick and cheap — moved from a unit in Garbutt to a house in Aitkenvale. Two blokes had it done in two hours flat. No damage, no drama. Best value removalists I have used in Townsville.",
        name: "Ryan S.",
        location: "Garbutt → Aitkenvale",
        date: "October 2024",
      },
      {
        text: "We bought our first home in Garbutt and R2G moved us from a rental in Hermit Park. The crew were friendly, fast and treated our stuff with care. Really happy with the service — highly recommend for anyone on a budget.",
        name: "Amy & Tom C.",
        location: "Garbutt",
        date: "July 2024",
      },
    ],
    tips: [
      {
        heading: "Pre-stack boxes in the garage for fastest loading.",
        text: "Garbutt homes have great garage and carport access. If you stack your packed boxes in the garage the night before, our crew can start loading immediately from the truck tailgate without entering the house first — it shaves 30 minutes off the job easily.",
      },
      {
        heading: "Confirm your march-out date before booking.",
        text: "Defence families should lock in the march-out inspection date with DHA before booking the removalists. We can schedule the move for the morning of the march-out or the day before, depending on your handover timeline.",
      },
      {
        heading: "Keep an inventory list for interstate moves.",
        text: "If your move is interstate — common for defence postings — prepare an inventory list of all items and their condition before we arrive. We document everything on our end too, but having your own record gives you peace of mind and simplifies any insurance claims.",
      },
      {
        heading: "Take advantage of the flat, easy access.",
        text: "Garbutt's ground-level homes with wide driveways mean two-person crews can handle most moves efficiently. This keeps the hourly cost lower than suburbs requiring stair crews or specialist equipment. Ask us about the two-person rate when you get your quote.",
      },
    ],
  },
];

export const townsvilleSuburbs: TownsvilleSuburb[] = [
  ...coreSuburbs,
  ...townsvilleNorthSuburbs,
  ...townsvilleSouthSuburbs,
  ...townsvilleOuterSuburbs,
];

export function getTownsvilleSuburb(slug: string): TownsvilleSuburb | undefined {
  return townsvilleSuburbs.find((s) => s.slug === slug);
}

/** Map of suburb display name → route path for suburbs that have a built page. */
const suburbRouteMap: Record<string, string> = {
  "Townsville": "/removalists-townsville",
  ...Object.fromEntries(townsvilleSuburbs.map((s) => [s.name, `/removalists-townsville/${s.slug}`])),
};

/** Returns the route path for a suburb if a page exists, otherwise undefined. */
export function getTownsvilleSuburbHref(name: string): string | undefined {
  return suburbRouteMap[name];
}
