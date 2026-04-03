import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, SITE_NAME, DOMAIN } from "@/lib/constants";
import {
  AnimatedBarChart,
  DonutChart,
  TimelineChart,
  ComparisonCards,
  MigrationHeatMap,
  InteractiveStatCounter,
  AffordabilityGauge,
  InfrastructurePipeline,
  ExodusChart,
  AnimatedStatCards,
} from "./Charts";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "R2G Moving Index 2026: 21,595 People Moved to QLD — Where Are They Going?",
  description:
    "Queensland gained 21,595 interstate migrants while NSW lost 24,328. Brisbane vacancy hits 0.8%, rents reach $727/wk. See the data, charts, and what it means for your next move.",
  keywords: [
    "moving index 2026",
    "queensland migration trends",
    "brisbane housing market 2026",
    "interstate migration australia",
    "moving costs brisbane",
    "removalists brisbane cost",
    "queensland population growth",
    "brisbane rental vacancy rate",
    "brisbane 2032 olympics",
    "cost of moving 2026",
  ],
  alternates: { canonical: `${DOMAIN}/moving-index-2026` },
  openGraph: {
    title: "R2G Moving Index 2026: 21,595 People Moved to QLD — Where Are They Going?",
    description:
      "Queensland gained 21,595 interstate migrants while NSW lost 24,328. Brisbane vacancy hits 0.8%, rents reach $727/wk. See the data, charts, and what it means for your next move.",
    url: `${DOMAIN}/moving-index-2026`,
    siteName: SITE_NAME,
    type: "article",
    locale: "en_AU",
    publishedTime: "2026-03-23T00:00:00+10:00",
    authors: ["R2G Transport & Storage Research Team"],
    images: [
      {
        url: `${DOMAIN}/moving-index-2026/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "R2G Moving Index 2026 — Migration scorecard and housing data for Queensland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R2G Moving Index 2026: 21,595 People Moved to QLD",
    description:
      "Queensland gained 21,595 interstate migrants while NSW lost 24,328. Brisbane vacancy hits 0.8%, rents reach $727/wk. See the data and charts.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "R2G Moving Index 2026: 21,595 People Moved to QLD — Where Are They Going?",
  description:
    "Queensland gained 21,595 interstate migrants while NSW lost 24,328. Brisbane vacancy hits 0.8%, rents reach $727/wk. Data-driven migration and housing analysis.",
  author: {
    "@type": "Organization",
    name: "R2G Transport & Storage",
    url: "https://www.r2g.com.au",
  },
  publisher: {
    "@type": "Organization",
    name: "R2G Transport & Storage",
    url: "https://www.r2g.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://www.r2g.com.au/images/r2g-logo.png",
    },
  },
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.r2g.com.au/moving-index-2026",
  },
  image: "https://www.r2g.com.au/og-image.jpg",
  articleSection: "Research",
  keywords:
    "queensland migration, brisbane housing, moving costs, interstate migration, rental vacancy, 2032 olympics",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.r2g.com.au",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Moving Cost Index 2026",
      item: "https://www.r2g.com.au/moving-index-2026",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA FOR CHARTS
// ─────────────────────────────────────────────────────────────────────────────
const movingReasons = [
  { label: "Upgrading to a better home", value: 35, color: "#F5C400" },
  { label: "Reducing cost of living", value: 32, color: "#d4a900" },
  { label: "Lifestyle change", value: 18, color: "#b08e00" },
  { label: "Work / career", value: 10, color: "#8c7100" },
  { label: "Other reasons", value: 5, color: "#6b5600" },
];

const trendingDestinations = [
  { rank: 1, name: "Port Macquarie West, NSW", reason: "Coastal lifestyle & affordability" },
  { rank: 2, name: "Hobart, TAS", reason: "Capital city affordability" },
  { rank: 3, name: "Bendigo, VIC", reason: "Regional growth hub" },
  { rank: 4, name: "Mickleham-Yuroke, VIC", reason: "Melbourne growth corridor" },
];

const seqGrowth = [
  { area: "Gold Coast", growth: "+68,000", period: "2019\u20132024" },
  { area: "Logan", growth: "+61,000", period: "2019\u20132024" },
  { area: "Ipswich", growth: "+51,600", period: "2019\u20132024" },
  { area: "Sunshine Coast", growth: "+47,500", period: "2019\u20132024" },
  { area: "Moreton Bay", growth: "+39,800", period: "2019\u20132024" },
];

const tocSections = [
  { id: "executive-summary", num: "01", title: "Executive Summary" },
  { id: "australian-migration", num: "02", title: "The State of Australian Migration in 2026" },
  { id: "state-scorecard", num: "03", title: "State-by-State Migration Scorecard" },
  { id: "queensland-magnet", num: "04", title: "Queensland: The Migration Magnet" },
  { id: "brisbane-housing", num: "05", title: "Brisbane\u2019s Housing Pressure Cooker" },
  { id: "capitals-comparison", num: "06", title: "Brisbane vs Other Capitals" },
  { id: "economic-headwinds", num: "07", title: "Economic Headwinds: War, Inflation & Interest Rates" },
  { id: "why-moving", num: "08", title: "Why Australians Are Moving in 2026" },
  { id: "where-moving", num: "09", title: "Where People Are Moving To" },
  { id: "olympic-effect", num: "10", title: "The Brisbane 2032 Olympic Effect" },
  { id: "outlook", num: "11", title: "Looking Ahead: 2026\u20132032 Outlook" },
  { id: "methodology", num: "12", title: "About This Report" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function MovingIndex2026() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2a2200] to-[#1A1A1A] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F5C400 1px, transparent 1px), linear-gradient(to bottom, #F5C400 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Research Report
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-[var(--font-montserrat)]">
            The R2G Moving Index{" "}
            <span className="text-[#F5C400]">2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Queensland&rsquo;s Definitive Report on Migration, Housing &amp; Moving Trends
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span>By R2G Transport &amp; Storage Research Team</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span>Published March 2026</span>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
            Contents
          </h2>
          <nav className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {tocSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-[#1A1A1A] transition-colors group"
              >
                <span className="text-[#F5C400] font-mono text-xs font-bold w-6 text-right">
                  {s.num}
                </span>
                <span className="group-hover:underline">{s.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── REPORT BODY ── */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          {/* ══════════════════════════════════════════════════════════════════
              01 — EXECUTIVE SUMMARY
          ══════════════════════════════════════════════════════════════════ */}
          <section id="executive-summary" className="scroll-mt-24 mb-20">
            <SectionHeading num="01" title="Executive Summary" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Australia&rsquo;s migration landscape is being reshaped by an extraordinary collision
              of forces: persistent inflation, a housing supply crisis, global conflict driving
              energy costs, and the long tail of pandemic-era lifestyle shifts. Within this
              environment, Queensland continues to stand apart as the nation&rsquo;s
              premier destination for interstate movers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <InteractiveStatCounter
                target={21595}
                prefix="~"
                label="Net interstate migrants to QLD"
                source="ABS"
              />
              <InteractiveStatCounter
                target={14.5}
                suffix="%"
                label="Brisbane dwelling price growth (YoY)"
                source="Cotality"
                decimals={1}
              />
              <InteractiveStatCounter
                target={0.8}
                suffix="%"
                label="Brisbane rental vacancy rate"
                source="Domain"
                decimals={1}
              />
              <InteractiveStatCounter
                target={726.75}
                prefix="$"
                label="Brisbane median weekly rent"
                source="Domain"
                decimals={2}
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              This report brings together the latest data from the Australian Bureau of
              Statistics (ABS), Reserve Bank of Australia (RBA), Queensland Government
              Statistician&rsquo;s Office (QGSO), and leading property research firms to deliver
              a clear picture of who is moving, where they are going, and what it costs in 2026.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              02 — STATE OF AUSTRALIAN MIGRATION
          ══════════════════════════════════════════════════════════════════ */}
          <section id="australian-migration" className="scroll-mt-24 mb-20">
            <SectionHeading num="02" title="The State of Australian Migration in 2026" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Internal migration across Australia has slowed to a nine-year low. Rising
              living costs, limited housing availability, and broader economic uncertainty are
              making Australians more cautious about uprooting their lives. Approximately
              180,000 to 200,000 Australians change states each year, but the net flows
              between states tell a more revealing story.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Only two states recorded positive net interstate migration in the most recent
              data period: Queensland and Western Australia. Every other state and territory
              — including New South Wales, Victoria, and South Australia — experienced net
              losses. New South Wales has now recorded 14 consecutive quarters of negative
              net interstate migration, losing residents primarily to Queensland and WA.
            </p>
            <Callout>
              Queensland and Western Australia are the only states in Australia recording
              positive net interstate migration — every other jurisdiction is losing people
              to these two growth economies.
            </Callout>
            <p className="text-gray-700 leading-relaxed">
              The slowdown in total migration volumes does not diminish the significance of
              the directional trends. The people who <em>are</em> moving are making deliberate
              choices — and overwhelmingly, they are choosing Queensland.
            </p>
            <SourceNote>
              Australian Bureau of Statistics,{" "}
              <a
                href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                National, State and Territory Population
              </a>
              , September 2025.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              03 — STATE-BY-STATE MIGRATION SCORECARD (NEW)
          ══════════════════════════════════════════════════════════════════ */}
          <section id="state-scorecard" className="scroll-mt-24 mb-20">
            <SectionHeading num="03" title="State-by-State Migration Scorecard" />
            <p className="text-gray-700 leading-relaxed mb-8">
              The net interstate migration figures paint a stark picture of where Australians
              are heading — and where they are leaving. Queensland leads all states with a net
              gain of 21,595 interstate migrants, while New South Wales continues
              its exodus with a net outflow of over 24,000 residents.
            </p>

            <MigrationHeatMap
              title="Net Interstate Migration by State — 2024/25"
              states={[
                { state: "QLD", label: "Queensland", value: "+21,595", numericValue: 21595, positive: true },
                { state: "WA", label: "Western Australia", value: "+10,288", numericValue: 10288, positive: true },
                { state: "SA", label: "South Australia", value: "+1,200", numericValue: 1200, positive: true },
                { state: "NSW", label: "New South Wales", value: "-24,328", numericValue: 24328, positive: false },
                { state: "VIC", label: "Victoria", value: "-12,400", numericValue: 12400, positive: false },
                { state: "TAS", label: "Tasmania", value: "-1,100", numericValue: 1100, positive: false },
              ]}
              source="ABS, National, State and Territory Population, September 2025"
            />

            <p className="text-gray-700 leading-relaxed mt-6">
              The data reveals a clear east-coast realignment: residents are moving north from
              NSW and Victoria into Queensland, while Western Australia attracts migrants from
              across the country on the back of its resources-driven economy. South Australia
              shows a marginal positive, driven primarily by international migration rather
              than interstate flows.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              04 — QUEENSLAND: THE MIGRATION MAGNET
          ══════════════════════════════════════════════════════════════════ */}
          <section id="queensland-magnet" className="scroll-mt-24 mb-20">
            <SectionHeading num="04" title="Queensland: The Migration Magnet" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Queensland recorded a total population increase of approximately 98,000 people
              in the 2024–25 financial year — a growth rate of 1.8% that outpaces the national
              average. Of this growth, migration accounts for roughly 79% of the total, with
              natural increase making up the remainder.
            </p>

            {/* Population Growth Source Donut */}
            <div className="mb-8">
              <DonutChart
                title="Queensland Population Growth Sources — 2024/25"
                segments={[
                  { label: "Migration (interstate + international)", value: 79, color: "#F5C400" },
                  { label: "Natural increase (births minus deaths)", value: 21, color: "#1A1A1A" },
                ]}
                centerValue="98K"
                centerLabel="total growth"
                source="QGSO, Population statistics; ABS Regional Population Growth"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The state has maintained positive net interstate migration every year since the
              early 1980s, a streak unmatched by any other Australian state. International
              migration is also surging: net migration from New Zealand alone increased 80%
              in recent years, reaching approximately 14,200 per year — with a large share
              settling in South-East Queensland.
            </p>

            {/* Migration History Timeline */}
            <div className="mb-8">
              <TimelineChart
                title="Queensland&rsquo;s Migration History — Key Milestones"
                events={[
                  {
                    year: "Early 1980s",
                    title: "Positive migration streak begins",
                    description:
                      "Queensland begins its unbroken run of positive net interstate migration, driven by the resources boom and lifestyle appeal.",
                  },
                  {
                    year: "2001\u20132011",
                    title: "Peak migration decade",
                    description:
                      "The state absorbs record interstate arrivals, averaging over 30,000 net gains per year during the mining and property booms.",
                  },
                  {
                    year: "2020\u20132021",
                    title: "COVID-era migration surge",
                    description:
                      "Remote work and pandemic lifestyle changes trigger a new wave of interstate arrivals, particularly from Sydney and Melbourne.",
                    highlight: true,
                  },
                  {
                    year: "2024\u20132025",
                    title: "98,000 population gain",
                    description:
                      "Queensland records approximately 98,000 additional residents in a single financial year — 79% from migration.",
                    highlight: true,
                  },
                  {
                    year: "2032",
                    title: "Brisbane Olympics",
                    description:
                      "The state\u2019s population is projected to reach 6 million, with 530,000 additional residents in Greater Brisbane by Games time.",
                    highlight: true,
                  },
                ]}
              />
            </div>

            <h3 className="text-lg font-bold text-[#1A1A1A] mt-8 mb-4">
              South-East Queensland Population Growth (5-Year Change)
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white text-left">
                    <th className="px-4 py-3 font-semibold">Area</th>
                    <th className="px-4 py-3 font-semibold">Population Growth</th>
                    <th className="px-4 py-3 font-semibold">Period</th>
                  </tr>
                </thead>
                <tbody>
                  {seqGrowth.map((row, i) => (
                    <tr
                      key={row.area}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{row.area}</td>
                      <td className="px-4 py-3 text-[#b08e00] font-semibold">{row.growth}</td>
                      <td className="px-4 py-3 text-gray-500">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/removalists-gold-coast" className="text-[#F5C400] hover:underline font-medium">
                Gold Coast
              </Link>{" "}
              leads all SEQ corridors with an astonishing 68,000 additional residents in five
              years, followed by Logan and Ipswich. The{" "}
              <Link href="/removalists-sunshine-coast" className="text-[#F5C400] hover:underline font-medium">
                Sunshine Coast
              </Link>{" "}
              continues its trajectory as one of Australia&rsquo;s fastest-growing regional
              areas, adding 47,500 residents during the same period.
            </p>
            <SourceNote>
              Queensland Government Statistician&rsquo;s Office (QGSO),{" "}
              <a
                href="https://www.qgso.qld.gov.au/statistics/theme/population"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                Population statistics
              </a>
              ; ABS Regional Population Growth;{" "}
              <a href="https://adepteconomics.com.au/population-powerhouse-why-queensland-never-fails-to-attract-interstate-migrantsand-kiwis/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Adept Economics</a>, SEQ Growth Analysis 2024.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              05 — BRISBANE'S HOUSING PRESSURE COOKER
          ══════════════════════════════════════════════════════════════════ */}
          <section id="brisbane-housing" className="scroll-mt-24 mb-20">
            <SectionHeading num="05" title="Brisbane&rsquo;s Housing Pressure Cooker" />
            <p className="text-gray-700 leading-relaxed mb-6">
              The consequence of sustained migration into South-East Queensland is a housing
              market under severe strain. Brisbane dwelling prices have risen 14.5%
              year-on-year, driven by demand that far outstrips the rate of new supply entering
              the market.
            </p>

            <AnimatedStatCards>
              <InteractiveStatCounter
                target={14.5}
                suffix="%"
                label="Dwelling price growth (YoY)"
                source="Cotality"
                decimals={1}
              />
              <InteractiveStatCounter
                target={0.8}
                suffix="%"
                label="Vacancy rate (lowest in AU)"
                source="Domain"
                decimals={1}
              />
              <InteractiveStatCounter
                target={8.5}
                suffix="%"
                label="Median rent increase (YoY)"
                source="Domain"
                decimals={1}
              />
              <InteractiveStatCounter
                target={726.75}
                prefix="$"
                label="Brisbane median weekly rent"
                source="Domain"
                decimals={2}
              />
            </AnimatedStatCards>

            <p className="text-gray-700 leading-relaxed mb-6 mt-8">
              Brisbane&rsquo;s rental vacancy rate sits at just 0.8% — the lowest of any
              Australian capital city and well below the 3% threshold generally considered a
              balanced market. The national vacancy rate stands at 1.1% as of February 2026,
              underscoring that this is a nationwide challenge, but Brisbane is the most acute
              pressure point.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The median weekly rent in Brisbane has reached $726.75, up 8.5% year-on-year.
              Nationally, Australians are now spending 33.4% of their pre-tax income on rent —
              a record high that exceeds the widely accepted 30% threshold for rental stress.
              To rent without experiencing financial strain, a household now requires an annual
              income of at least $112,667.
            </p>

            {/* Rental Affordability Gauge */}
            <div className="mb-8">
              <AffordabilityGauge
                incomeNeeded={112667}
                averageIncome={97000}
                gap={15667}
                rentPercent={33.4}
                source="Domain Rental Report Q4 2025; SBS News Housing Affordability Report 2026"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              For{" "}
              <Link href="/removalists-brisbane" className="text-[#F5C400] hover:underline font-medium">
                Brisbane removalists
              </Link>
              {" "}and moving companies, these conditions create intense seasonal demand spikes
              — particularly at the start of each quarter when leases turn over. Early booking
              is essential for anyone planning a move in the Brisbane market. Many movers are
              also turning to{" "}
              <Link href="/storage-brisbane" className="text-[#F5C400] hover:underline font-medium">
                Brisbane storage solutions
              </Link>{" "}
              as a buffer while they search for permanent accommodation in this ultra-tight
              rental market.
            </p>
            <SourceNote>
              Domain,{" "}
              <a
                href="https://www.domain.com.au/research/rental-report/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                Rental Report Q4 2025
              </a>
              ; Cotality (CoreLogic),{" "}
              <a
                href="https://www.cotality.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                Home Value Index
              </a>
              ; SBS News, Housing Affordability Report 2026.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              06 — BRISBANE VS OTHER CAPITALS (NEW)
          ══════════════════════════════════════════════════════════════════ */}
          <section id="capitals-comparison" className="scroll-mt-24 mb-20">
            <SectionHeading num="06" title="Brisbane vs Other Capitals" />
            <p className="text-gray-700 leading-relaxed mb-8">
              How does Brisbane stack up against Australia&rsquo;s other major capital cities?
              The comparison reveals why Brisbane remains such a powerful migration magnet
              despite its own affordability challenges. While Sydney commands the highest rents,
              Brisbane&rsquo;s combination of the lowest vacancy rate and strongest price growth
              makes it the most pressured market in the country for both renters and buyers.
            </p>

            <ComparisonCards
              title="Capital City Housing Market Comparison — Early 2026"
              cities={[
                {
                  city: "Brisbane",
                  vacancy: "0.8%",
                  vacancyNum: 0.8,
                  medianRent: "$727/wk",
                  medianRentNum: 727,
                  priceGrowth: "14.5%",
                  priceGrowthNum: 14.5,
                  highlight: true,
                },
                {
                  city: "Sydney",
                  vacancy: "1.3%",
                  vacancyNum: 1.3,
                  medianRent: "$760/wk",
                  medianRentNum: 760,
                  priceGrowth: "4.2%",
                  priceGrowthNum: 4.2,
                },
                {
                  city: "Melbourne",
                  vacancy: "1.7%",
                  vacancyNum: 1.7,
                  medianRent: "$575/wk",
                  medianRentNum: 575,
                  priceGrowth: "1.1%",
                  priceGrowthNum: 1.1,
                },
                {
                  city: "Perth",
                  vacancy: "0.9%",
                  vacancyNum: 0.9,
                  medianRent: "$700/wk",
                  medianRentNum: 700,
                  priceGrowth: "12.3%",
                  priceGrowthNum: 12.3,
                },
              ]}
              source="Domain Rental Report Q4 2025; Cotality Home Value Index, February 2026"
            />

            <Callout>
              Brisbane has the lowest vacancy rate of any Australian capital at just 0.8%,
              yet its median rent remains 4% below Sydney. This gap is driving sustained
              migration from NSW — people get more for less while moving to a growth economy.
            </Callout>

            <p className="text-gray-700 leading-relaxed">
              Perth mirrors many of Brisbane&rsquo;s dynamics — low vacancy, strong price
              growth driven by resource-sector demand — but lacks the lifestyle and climate
              appeal that draws families and remote workers to Queensland. Melbourne, in
              contrast, offers the highest vacancy rate (1.7%) and weakest price growth (1.1%),
              explaining its ongoing population losses to both Queensland and WA.
            </p>
            <SourceNote>
              Domain, Rental Report Q4 2025; Cotality (CoreLogic), Home Value Index,
              February 2026; SQM Research, Residential Vacancy Rates.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              07 — ECONOMIC HEADWINDS
          ══════════════════════════════════════════════════════════════════ */}
          <section id="economic-headwinds" className="scroll-mt-24 mb-20">
            <SectionHeading num="07" title="Economic Headwinds: War, Inflation &amp; Interest Rates" />
            <p className="text-gray-700 leading-relaxed mb-6">
              The macroeconomic backdrop adds further complexity to the migration picture.
              The Reserve Bank of Australia has flagged persistent inflation as a key concern,
              with underlying inflation running at 3.7% and headline CPI at 4.2% — both above
              the RBA&rsquo;s target band of 2–3%.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Geopolitical instability, particularly ongoing conflict in the Middle East, is
              disrupting global energy supply routes and driving oil prices higher. These
              energy cost pressures flow through to transportation, logistics, and ultimately
              household budgets — including the cost of moving services.
            </p>

            <AnimatedStatCards>
              <InteractiveStatCounter
                target={3.7}
                suffix="%"
                label="Underlying inflation rate"
                source="RBA"
                decimals={1}
              />
              <InteractiveStatCounter
                target={4.2}
                suffix="%"
                label="Headline CPI"
                source="ABS"
                decimals={1}
              />
              <InteractiveStatCounter
                target={0.8}
                suffix="%"
                label="GDP growth (Dec quarter)"
                source="ABS"
                decimals={1}
              />
              <InteractiveStatCounter
                target={33.4}
                suffix="%"
                label="Income spent on rent (record)"
                source="Domain"
                decimals={1}
              />
            </AnimatedStatCards>

            <p className="text-gray-700 leading-relaxed mb-6 mt-8">
              GDP grew 0.8% in the December quarter — an economy running hotter than ideal
              in the context of inflation-fighting efforts. Interest rate rises remain on the
              table for 2026, and housing costs continue to be a major driver of the CPI basket.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Paradoxically, these economic pressures are <em>accelerating</em> certain types
              of moves. Australians facing rental stress in expensive markets like Sydney are
              increasingly making strategic relocations to more affordable regions. The cost
              of <em>not</em> moving — in the form of excessive rent — is outweighing the
              one-off cost of hiring{" "}
              <Link href="/interstate-removalists" className="text-[#F5C400] hover:underline font-medium">
                interstate removalists
              </Link>
              .
            </p>
            <SourceNote>
              Reserve Bank of Australia,{" "}
              <a
                href="https://www.rba.gov.au/publications/smp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                Statement on Monetary Policy
              </a>
              , February 2026; ABS, Consumer Price Index, December 2025; CBA Economics.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              08 — WHY AUSTRALIANS ARE MOVING
          ══════════════════════════════════════════════════════════════════ */}
          <section id="why-moving" className="scroll-mt-24 mb-20">
            <SectionHeading num="08" title="Why Australians Are Moving in 2026" />
            <p className="text-gray-700 leading-relaxed mb-8">
              Survey data from PropertyBuyer and Home in Place reveals that Australians are
              moving for a blend of aspirational and necessity-driven reasons. The desire to
              upgrade remains the top motivator, but cost-of-living pressures are a close second
              — reflecting the economic conditions outlined above.
            </p>

            {/* Animated Bar chart */}
            <div className="mb-8">
              <AnimatedBarChart
                title="Top Reasons for Moving — 2026 Survey Data"
                items={movingReasons}
                source="PropertyBuyer Annual Housing Survey 2025; Home in Place Housing Trends Report"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              A striking finding from the data: 53% of Australians aged 18 to 35 report they
              would consider moving overseas entirely if housing remained unaffordable. While
              actual emigration at that scale is unlikely, the sentiment underscores just how
              acute affordability pressures have become for younger Australians.
            </p>

            {/* Young Australian Exodus Chart */}
            <div className="mb-8">
              <ExodusChart source="PropertyBuyer Annual Housing Survey 2025; Home in Place Housing Trends Report 2026" />
            </div>

            <p className="text-gray-700 leading-relaxed">
              Remote and hybrid work arrangements continue to enable moves that would have
              been impractical five years ago. Workers are relocating from high-cost capitals
              to regional centres where they can maintain their salaries while dramatically
              reducing their housing costs — a trend that shows no sign of reversing.
            </p>
            <SourceNote>
              <a href="https://www.propertybuyer.com.au/blog/why-do-people-move-may-2025" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">PropertyBuyer</a>, Annual Housing Survey 2025;{" "}
              <a href="https://homeinplace.org/the-exit-generation/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Home in Place</a>, Housing Trends Report 2026.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              09 — WHERE PEOPLE ARE MOVING TO
          ══════════════════════════════════════════════════════════════════ */}
          <section id="where-moving" className="scroll-mt-24 mb-20">
            <SectionHeading num="09" title="Where People Are Moving To" />
            <p className="text-gray-700 leading-relaxed mb-8">
              National data reveals a consistent pattern: Australians are gravitating toward
              coastal lifestyle destinations, affordable regional hubs, and growth corridors
              on the fringes of major cities.
            </p>

            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">
              Top Trending Destinations Nationally
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white text-left">
                    <th className="px-4 py-3 font-semibold w-12">Rank</th>
                    <th className="px-4 py-3 font-semibold">Destination</th>
                    <th className="px-4 py-3 font-semibold">Key Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {trendingDestinations.map((d, i) => (
                    <tr
                      key={d.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-[#F5C400] font-bold">#{d.rank}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{d.name}</td>
                      <td className="px-4 py-3 text-gray-600">{d.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">
              In Queensland
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Within Queensland, the strongest growth continues in the established SEQ
              corridors: the Gold Coast, Sunshine Coast, Ipswich, and Logan. These areas
              combine relative affordability (compared to Brisbane&rsquo;s inner suburbs) with
              strong transport links and established amenities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the{" "}
              <Link href="/removalists-brisbane" className="text-[#F5C400] hover:underline font-medium">
                Brisbane
              </Link>{" "}
              metro area specifically, suburbs seeing increased demand include Archerfield,
              Springfield, and North Lakes — areas that combine development momentum with
              comparatively affordable entry points.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Further north, the{" "}
              <Link href="/removalists-cairns" className="text-[#F5C400] hover:underline font-medium">
                Cairns
              </Link>{" "}
              region continues to attract lifestyle migrants and remote workers drawn by
              tropical living and significantly lower property prices compared to South-East
              Queensland. Regional centres like{" "}
              <Link href="/removalists-townsville" className="text-[#F5C400] hover:underline font-medium">
                Townsville
              </Link>{" "}
              are also emerging as affordable alternatives for families seeking a slower pace
              of life without sacrificing access to services.
            </p>
            <SourceNote>
              <a href="https://www.timeout.com/australia/news/revealed-the-10-most-popular-suburbs-australians-are-moving-to-in-2026-030426" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Timeout Australia</a>, Best Places to Live 2025;{" "}
              <a href="https://kpmg.com/au/en/media/media-releases/2025/12/south-east-queensland-population-soars.html" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">KPMG</a>, SEQ Population Report 2025.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              10 — BRISBANE 2032 OLYMPIC EFFECT
          ══════════════════════════════════════════════════════════════════ */}
          <section id="olympic-effect" className="scroll-mt-24 mb-20">
            <SectionHeading num="10" title="The Brisbane 2032 Olympic Effect" />
            <p className="text-gray-700 leading-relaxed mb-6">
              The 2032 Brisbane Olympic and Paralympic Games remain a generational catalyst
              for the region. Queensland&rsquo;s population is projected to reach 6 million
              by the time the Games commence, with an additional 530,000 people expected in
              the Greater Brisbane area by that date.
            </p>

            <AnimatedStatCards>
              <InteractiveStatCounter
                target={7.1}
                prefix="$"
                suffix="B"
                label="Infrastructure investment"
                source="Brisbane 2032"
                decimals={1}
              />
              <InteractiveStatCounter
                target={10.2}
                suffix="km"
                label="Cross River Rail (5.9km tunnel)"
                source="QLD Gov"
                decimals={1}
              />
              <InteractiveStatCounter
                target={53}
                prefix="$"
                suffix="B"
                label="Construction pipeline (current)"
                source="Urban Developer"
              />
              <InteractiveStatCounter
                target={77}
                prefix="$"
                suffix="B"
                label="Projected pipeline by 2027"
                source="Urban Developer"
              />
            </AnimatedStatCards>

            <p className="text-gray-700 leading-relaxed mb-6 mt-8">
              The infrastructure investment is staggering: $7.1 billion in direct
              Games-related spending, the 10.2-kilometre Cross River Rail project (including
              a 5.9km underground tunnel connecting key inner-city stations), and a total
              construction pipeline that is expected to grow from $53 billion to $77 billion
              by 2027.
            </p>

            {/* Olympic Infrastructure Pipeline */}
            <div className="mb-8">
              <InfrastructurePipeline
                title="Queensland&rsquo;s Olympic Infrastructure Pipeline"
                projects={[
                  { name: "Cross River Rail", value: "$7.0B", numericValue: 7.0 },
                  { name: "Queens Wharf", value: "$3.0B", numericValue: 3.0 },
                  { name: "Gabba Redevelopment", value: "$2.7B", numericValue: 2.7 },
                  { name: "Brisbane Metro", value: "$1.55B", numericValue: 1.55 },
                ]}
                totalLabel="Total Games-Related Investment"
                totalValue="$7.1B+"
                source="Brisbane 2032; The Urban Developer, QLD Infrastructure Pipeline Report 2025"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Suburbs located near Olympic venues and major transport upgrades are already
              seeing increased buyer and renter interest. The construction boom is also
              generating employment growth, which in turn attracts more migration — creating
              a self-reinforcing cycle of demand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the moving industry, the Olympic effect is translating into sustained
              high demand. Workers relocating for construction roles, families moving to be
              near improved infrastructure, and investors positioning ahead of the Games are
              all contributing to elevated booking volumes. Those planning a move to or within
              Brisbane should{" "}
              <Link href="/quote" className="text-[#F5C400] hover:underline font-medium">
                request a quote early
              </Link>{" "}
              to secure preferred dates.
            </p>
            <SourceNote>
              Brisbane 2032 Olympic and Paralympic Games,{" "}
              <a
                href="https://www.brisbane2032.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C400] hover:underline"
              >
                brisbane2032.com
              </a>
              ; The Urban Developer, Queensland Infrastructure Pipeline Report 2025.
            </SourceNote>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              11 — OUTLOOK
          ══════════════════════════════════════════════════════════════════ */}
          <section id="outlook" className="scroll-mt-24 mb-20">
            <SectionHeading num="11" title="Looking Ahead: 2026&ndash;2032 Outlook" />
            <p className="text-gray-700 leading-relaxed mb-6">
              The structural drivers behind Queensland&rsquo;s migration dominance are
              deeply entrenched and unlikely to reverse before the 2032 Olympics. Based on
              the data analysed in this report, we project the following trends for the
              coming years:
            </p>

            <div className="space-y-4 mb-8">
              <OutlookItem
                title="Migration leadership"
                text="Queensland will continue leading interstate migration, absorbing 20,000 to 30,000 net interstate migrants annually. WA will remain the only other state in positive territory."
              />
              <OutlookItem
                title="Housing supply constraints"
                text="New dwelling completions will remain below population-driven demand until at least 2029, when major Olympic infrastructure projects begin freeing up construction capacity for residential builds."
              />
              <OutlookItem
                title="Rental market pressure"
                text={`Brisbane\u2019s vacancy rate is unlikely to exceed 1.5% before 2028. Rents will continue rising, though the pace may moderate from the 8\u201310% annual increases seen in 2024\u20132025.`}
              />
              <OutlookItem
                title="Economic uncertainty and strategic moves"
                text="Inflation and interest rate pressures may slow discretionary moves (upgrades, lifestyle), but will increase necessity-driven relocations as households seek affordability."
              />
              <OutlookItem
                title="Regional Queensland emergence"
                text="Cairns, Townsville, and Mackay will increasingly attract migrants priced out of SEQ. These centres offer significantly lower housing costs while maintaining adequate infrastructure and employment opportunities."
              />
            </div>

            <div className="bg-[#1A1A1A] text-white rounded-xl p-6 sm:p-8">
              <h3 className="text-[#F5C400] font-bold text-lg mb-4">
                Key Advice for Movers in 2026
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#F5C400] font-bold mt-0.5">1.</span>
                  <span>
                    <strong className="text-white">Plan early.</strong> High demand in SEQ
                    means removalist availability is tight, especially on weekends and
                    around lease turnover dates (end of month, end of quarter).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F5C400] font-bold mt-0.5">2.</span>
                  <span>
                    <strong className="text-white">Book removalists in advance.</strong> A
                    minimum of 2–4 weeks lead time is recommended. For interstate moves,
                    4–6 weeks is advisable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F5C400] font-bold mt-0.5">3.</span>
                  <span>
                    <strong className="text-white">Consider mid-week moves.</strong> Tuesday
                    to Thursday moves are typically 20–30% cheaper and offer greater
                    flexibility for scheduling.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F5C400] font-bold mt-0.5">4.</span>
                  <span>
                    <strong className="text-white">Bundle services.</strong> Combining
                    moving,{" "}
                    <Link href="/packing-services-brisbane" className="text-[#F5C400] hover:underline">packing</Link>
                    , and storage with a single provider often reduces total
                    costs versus engaging separate companies.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F5C400] font-bold mt-0.5">5.</span>
                  <span>
                    <strong className="text-white">Explore regional options.</strong> If
                    SEQ prices are prohibitive, Cairns and Townsville offer strong
                    lifestyle benefits at a fraction of the cost.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              12 — METHODOLOGY
          ══════════════════════════════════════════════════════════════════ */}
          <section id="methodology" className="scroll-mt-24 mb-20">
            <SectionHeading num="12" title="About This Report" />
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="font-bold text-[#1A1A1A] mb-3">Methodology</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The R2G Moving Index 2026 is compiled from publicly available government
                and industry data sources. It is intended as a general overview of migration,
                housing, and moving cost trends relevant to Queensland and the broader
                Australian market. It does not constitute financial, investment, or property
                advice.
              </p>
              <h3 className="font-bold text-[#1A1A1A] mb-3">Data Sources</h3>
              <ul className="text-gray-600 text-sm space-y-1.5 mb-4">
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Australian Bureau of Statistics (ABS)</a> — population, migration, CPI data
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.rba.gov.au/publications/smp/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Reserve Bank of Australia (RBA)</a> — monetary policy, inflation commentary
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.qgso.qld.gov.au/statistics/theme/population" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Queensland Government Statistician&rsquo;s Office (QGSO)</a> — state population data
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.domain.com.au/research/rental-report/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Domain</a> — rental vacancy rates, median rents, rental reports
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.cotality.com/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Cotality (formerly CoreLogic)</a> — dwelling price indices
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.propertybuyer.com.au/blog/why-do-people-move-may-2025" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">PropertyBuyer</a> — annual housing survey data on moving motivations
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://homeinplace.org/the-exit-generation/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Home in Place</a> — housing trends and affordability reporting
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.brisbane2032.com/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Brisbane 2032</a> — Olympic infrastructure and population projections
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.theurbandeveloper.com/articles/brisbane-olympics-2032-development-infrastructure-projects" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">The Urban Developer</a> — construction pipeline data
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://www.canstar.com.au/home-loans/removalist-cost/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Canstar</a>, <a href="https://www.airtasker.com/au/costs/removals/removalists-cost/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Airtasker</a> — moving cost benchmarks
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://adepteconomics.com.au/population-powerhouse-why-queensland-never-fails-to-attract-interstate-migrantsand-kiwis/" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">Adept Economics</a> — SEQ growth corridor analysis
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F5C400]">&bull;</span>
                  <a href="https://sqmresearch.com.au/graph_vacancy.php" target="_blank" rel="noopener noreferrer" className="text-[#F5C400] hover:underline">SQM Research</a> — residential vacancy rate data
                </li>
              </ul>
              <h3 className="font-bold text-[#1A1A1A] mb-3">Compiled By</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                R2G Transport &amp; Storage Research Team — based in Cairns and Brisbane,
                Queensland. R2G has been helping Australians move since 2014, with offices
                in Cairns CBD and Archerfield, Brisbane. For more moving tips and insights,
                visit our{" "}
                <Link href="/blog" className="text-[#F5C400] hover:underline">blog</Link>.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* ── CTA SECTION ── */}
      <section className="bg-gradient-to-br from-[#1A1A1A] via-[#2a2200] to-[#1A1A1A] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-[var(--font-montserrat)]">
            Planning Your Move?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Whether you&rsquo;re relocating within Brisbane, moving interstate, or heading
            north to Cairns — R2G Transport &amp; Storage makes it simple. Get your free,
            no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-[#F5C400] text-[#1A1A1A] font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-colors hover:bg-[#d4a900] w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border-2 border-white/20 text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-colors hover:border-[#F5C400] hover:text-[#F5C400] w-full sm:w-auto"
            >
              Call {PHONE}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <Link
              href="/removalists-brisbane"
              className="hover:text-[#F5C400] transition-colors"
            >
              Brisbane Removalists
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/removalists-cairns"
              className="hover:text-[#F5C400] transition-colors"
            >
              Cairns Removalists
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/removalists-gold-coast"
              className="hover:text-[#F5C400] transition-colors"
            >
              Gold Coast Removalists
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/removalists-sunshine-coast"
              className="hover:text-[#F5C400] transition-colors"
            >
              Sunshine Coast Removalists
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/interstate-removalists"
              className="hover:text-[#F5C400] transition-colors"
            >
              Interstate Removals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
      <span className="text-[#F5C400] font-mono text-2xl font-bold leading-none">
        {num}
      </span>
      <h2
        className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] leading-tight font-[var(--font-montserrat)]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#F5C400] bg-[#F5C400]/5 px-6 py-5 my-6 rounded-r-lg">
      <p className="text-gray-800 text-sm leading-relaxed font-medium">{children}</p>
    </div>
  );
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
      Sources: {children}
    </p>
  );
}

function OutlookItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-4 bg-gray-50 rounded-lg p-4">
      <div className="mt-1 w-2 h-2 rounded-full bg-[#F5C400] shrink-0" />
      <div>
        <p className="text-sm font-bold text-[#1A1A1A] mb-1">{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
