"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. ANIMATED BAR CHART
// ─────────────────────────────────────────────────────────────────────────────
interface BarItem {
  label: string;
  value: number;
  color: string;
  suffix?: string;
}

export function AnimatedBarChart({
  title,
  items,
  source,
  maxValue,
}: {
  title: string;
  items: BarItem[];
  source?: string;
  maxValue?: number;
}) {
  const { ref, inView } = useInView(0.15);
  const max = maxValue ?? Math.max(...items.map((i) => i.value));

  return (
    <div ref={ref} className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((item, idx) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-gray-700 font-medium">{item.label}</span>
              <span className="text-gray-900 font-bold">
                {item.value}
                {item.suffix ?? "%"}
              </span>
            </div>
            <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: inView ? `${(item.value / max) * 100}%` : "0%",
                  backgroundColor: item.color,
                  transitionDelay: `${idx * 120}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {source && (
        <p className="text-xs text-gray-400 mt-5">Source: {source}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. DONUT CHART
// ─────────────────────────────────────────────────────────────────────────────
interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export function DonutChart({
  title,
  segments,
  centerLabel,
  centerValue,
  source,
}: {
  title: string;
  segments: DonutSegment[];
  centerLabel?: string;
  centerValue?: string;
  source?: string;
}) {
  const { ref, inView } = useInView(0.2);
  const total = segments.reduce((sum, s) => sum + s.value, 0);

  // Build conic gradient stops
  let cumulative = 0;
  const stops = segments.flatMap((seg) => {
    const start = cumulative;
    cumulative += (seg.value / total) * 360;
    return [`${seg.color} ${start}deg ${cumulative}deg`];
  });

  return (
    <div ref={ref} className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6 text-center">
        {title}
      </h3>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Donut ring */}
        <div className="relative w-48 h-48 shrink-0 mx-auto sm:mx-0">
          <div
            className="w-full h-full rounded-full transition-opacity duration-700"
            style={{
              background: inView
                ? `conic-gradient(${stops.join(", ")})`
                : "#e5e7eb",
              opacity: inView ? 1 : 0.3,
            }}
          />
          {/* Inner white circle */}
          <div className="absolute inset-6 bg-gray-50 rounded-full flex flex-col items-center justify-center">
            {centerValue && (
              <span className="text-xl font-extrabold text-[#1A1A1A]">
                {centerValue}
              </span>
            )}
            {centerLabel && (
              <span className="text-xs text-gray-500 text-center leading-tight mt-1">
                {centerLabel}
              </span>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-sm shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              <div>
                <span className="text-sm font-bold text-gray-800">
                  {seg.value}%
                </span>
                <span className="text-sm text-gray-600 ml-2">{seg.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {source && (
        <p className="text-xs text-gray-400 mt-5 text-center">
          Source: {source}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. TIMELINE CHART
// ─────────────────────────────────────────────────────────────────────────────
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export function TimelineChart({
  title,
  events,
}: {
  title: string;
  events: TimelineEvent[];
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-8 text-center">
        {title}
      </h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {events.map((evt, idx) => (
            <div
              key={evt.year}
              className="relative flex gap-4 sm:gap-6 transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateX(0)"
                  : "translateX(-20px)",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Dot */}
              <div
                className={`relative z-10 mt-1 w-3 h-3 rounded-full shrink-0 ring-4 ${
                  evt.highlight
                    ? "bg-[#F5C400] ring-[#F5C400]/20"
                    : "bg-gray-400 ring-gray-200"
                }`}
                style={{ marginLeft: "11px" }}
              />

              <div className="flex-1 min-w-0">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    evt.highlight ? "text-[#F5C400]" : "text-gray-400"
                  }`}
                >
                  {evt.year}
                </span>
                <p className="text-sm font-bold text-[#1A1A1A] mt-0.5">
                  {evt.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. COMPARISON CARDS
// ─────────────────────────────────────────────────────────────────────────────
interface ComparisonCity {
  city: string;
  vacancy: string;
  vacancyNum: number;
  medianRent: string;
  medianRentNum: number;
  priceGrowth: string;
  priceGrowthNum: number;
  highlight?: boolean;
}

export function ComparisonCards({
  title,
  cities,
  source,
}: {
  title: string;
  cities: ComparisonCity[];
  source?: string;
}) {
  const { ref, inView } = useInView(0.15);
  const maxRent = Math.max(...cities.map((c) => c.medianRentNum));
  const maxGrowth = Math.max(...cities.map((c) => c.priceGrowthNum));
  const maxVacancy = Math.max(...cities.map((c) => c.vacancyNum));

  return (
    <div ref={ref}>
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6">
        {title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cities.map((c, idx) => (
          <div
            key={c.city}
            className={`rounded-xl p-5 border-2 transition-all duration-700 ease-out ${
              c.highlight
                ? "border-[#F5C400] bg-[#F5C400]/5"
                : "border-gray-100 bg-gray-50"
            }`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${idx * 120}ms`,
            }}
          >
            <h4
              className={`text-lg font-bold mb-4 ${
                c.highlight ? "text-[#F5C400]" : "text-[#1A1A1A]"
              }`}
            >
              {c.city}
            </h4>

            {/* Vacancy Rate */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Vacancy Rate</span>
                <span className="font-bold text-gray-800">{c.vacancy}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView
                      ? `${(c.vacancyNum / maxVacancy) * 100}%`
                      : "0%",
                    backgroundColor: c.highlight ? "#F5C400" : "#9ca3af",
                    transitionDelay: `${idx * 120 + 200}ms`,
                  }}
                />
              </div>
            </div>

            {/* Median Rent */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Median Rent/wk</span>
                <span className="font-bold text-gray-800">{c.medianRent}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView
                      ? `${(c.medianRentNum / maxRent) * 100}%`
                      : "0%",
                    backgroundColor: c.highlight ? "#d4a900" : "#6b7280",
                    transitionDelay: `${idx * 120 + 350}ms`,
                  }}
                />
              </div>
            </div>

            {/* Price Growth */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Price Growth YoY</span>
                <span className="font-bold text-gray-800">
                  {c.priceGrowth}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView
                      ? `${(c.priceGrowthNum / maxGrowth) * 100}%`
                      : "0%",
                    backgroundColor: c.highlight ? "#b08e00" : "#4b5563",
                    transitionDelay: `${idx * 120 + 500}ms`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {source && (
        <p className="text-xs text-gray-400 mt-4">Source: {source}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. HEAT MAP (State Migration Scorecard)
// ─────────────────────────────────────────────────────────────────────────────
interface HeatMapState {
  state: string;
  label: string;
  value: string;
  numericValue: number;
  positive: boolean;
}

export function MigrationHeatMap({
  title,
  states,
  source,
}: {
  title: string;
  states: HeatMapState[];
  source?: string;
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <div ref={ref}>
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {states.map((s, idx) => (
          <div
            key={s.state}
            className={`rounded-xl p-4 sm:p-5 text-center transition-all duration-700 ease-out border-2 ${
              s.positive
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.9)",
              transitionDelay: `${idx * 80}ms`,
            }}
          >
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              {s.state}
            </p>
            <p className="text-lg font-medium text-gray-600 mb-2">{s.label}</p>
            <div className="flex items-center justify-center gap-1.5">
              {/* Arrow */}
              <svg
                className={`w-5 h-5 transition-transform duration-500 ${
                  s.positive ? "text-green-600" : "text-red-600 rotate-180"
                }`}
                style={{
                  transitionDelay: `${idx * 80 + 400}ms`,
                  opacity: inView ? 1 : 0,
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span
                className={`text-xl sm:text-2xl font-extrabold ${
                  s.positive ? "text-green-700" : "text-red-700"
                }`}
              >
                {s.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      {source && (
        <p className="text-xs text-gray-400 mt-4">Source: {source}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. INTERACTIVE STAT COUNTER
// ─────────────────────────────────────────────────────────────────────────────
export function InteractiveStatCounter({
  target,
  prefix,
  suffix,
  label,
  source,
  duration = 2000,
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source?: string;
  duration?: number;
  decimals?: number;
}) {
  const { ref, inView } = useInView(0.3);
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const displayValue =
    (prefix ?? "") +
    count.toLocaleString("en-AU", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    (suffix ?? "");

  return (
    <div ref={ref} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
      <p className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-1 font-[var(--font-montserrat)]">
        {displayValue}
      </p>
      <p className="text-sm text-gray-600 leading-snug">{label}</p>
      {source && <p className="text-xs text-gray-400 mt-2">Source: {source}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. RENTAL AFFORDABILITY GAUGE
// ─────────────────────────────────────────────────────────────────────────────
export function AffordabilityGauge({
  incomeNeeded,
  averageIncome,
  gap,
  rentPercent,
  source,
}: {
  incomeNeeded: number;
  averageIncome: number;
  gap: number;
  rentPercent: number;
  source?: string;
}) {
  const { ref, inView } = useInView(0.2);
  // angle: 0deg = left, 180deg = right. Stress threshold at 30% = 100deg
  const needleAngle = inView ? Math.min((rentPercent / 50) * 180, 180) : 0;
  const stressThreshold = (30 / 50) * 180; // 30% mapped to 180 degrees

  return (
    <div ref={ref} className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6 text-center">
        The Rental Affordability Gap
      </h3>

      {/* Gauge */}
      <div className="relative w-56 h-28 mx-auto mb-8">
        {/* Semi-circle background */}
        <div
          className="absolute inset-0 rounded-t-full overflow-hidden"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 100%, #22c55e 0deg, #eab308 108deg, #ef4444 180deg, transparent 180deg)",
          }}
        />
        {/* Inner white */}
        <div
          className="absolute rounded-t-full bg-gray-50"
          style={{
            left: "16%",
            right: "16%",
            top: "16%",
            bottom: 0,
          }}
        />
        {/* Stress threshold line */}
        <div
          className="absolute bottom-0 left-1/2 w-0.5 h-[84%] bg-gray-400 origin-bottom"
          style={{
            transform: `rotate(${stressThreshold - 90}deg)`,
          }}
        />
        {/* Needle */}
        <div
          className="absolute bottom-0 left-1/2 w-1 h-[80%] bg-[#1A1A1A] rounded-t-full origin-bottom transition-transform duration-1500 ease-out"
          style={{
            transform: `rotate(${needleAngle - 90}deg)`,
            transitionDuration: "1.5s",
          }}
        />
        {/* Center dot */}
        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#1A1A1A] rounded-full -translate-x-1/2 translate-y-1/2" />
        {/* Labels */}
        <span className="absolute -bottom-1 left-0 text-[10px] text-gray-400">
          0%
        </span>
        <span className="absolute -bottom-1 right-0 text-[10px] text-gray-400">
          50%
        </span>
      </div>

      <p className="text-center text-2xl font-extrabold text-red-600 mb-1">
        {rentPercent}%
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">
        of income spent on rent (record high)
      </p>

      {/* Stats below */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Income Needed</p>
          <p className="text-sm font-bold text-red-600">
            ${incomeNeeded.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Avg Income</p>
          <p className="text-sm font-bold text-[#1A1A1A]">
            ${averageIncome.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Gap</p>
          <p className="text-sm font-bold text-red-600">
            ${gap.toLocaleString()}
          </p>
        </div>
      </div>

      {source && (
        <p className="text-xs text-gray-400 mt-5 text-center">
          Source: {source}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. INFRASTRUCTURE PIPELINE (Progress Bars)
// ─────────────────────────────────────────────────────────────────────────────
interface PipelineProject {
  name: string;
  value: string;
  numericValue: number;
}

export function InfrastructurePipeline({
  title,
  projects,
  totalLabel,
  totalValue,
  source,
}: {
  title: string;
  projects: PipelineProject[];
  totalLabel: string;
  totalValue: string;
  source?: string;
}) {
  const { ref, inView } = useInView(0.15);
  const maxVal = Math.max(...projects.map((p) => p.numericValue));

  // Gold gradient shades
  const shades = ["#F5C400", "#d4a900", "#b08e00", "#8c7100", "#6b5600"];

  return (
    <div ref={ref} className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">
        {title}
      </h3>
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <div key={project.name}>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-300 font-medium">{project.name}</span>
              <span className="text-[#F5C400] font-bold">{project.value}</span>
            </div>
            <div className="h-6 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{
                  width: inView
                    ? `${(project.numericValue / maxVal) * 100}%`
                    : "0%",
                  backgroundColor: shades[idx % shades.length],
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <span className="text-[10px] font-bold text-[#1A1A1A] whitespace-nowrap">
                  {inView ? project.value : ""}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total bar */}
      <div className="mt-6 pt-5 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-lg">{totalLabel}</span>
          <span className="text-[#F5C400] font-extrabold text-2xl">
            {totalValue}
          </span>
        </div>
      </div>

      {source && (
        <p className="text-xs text-gray-500 mt-5">Source: {source}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. YOUNG AUSTRALIAN EXODUS DONUT
// ─────────────────────────────────────────────────────────────────────────────
export function ExodusChart({
  source,
}: {
  source?: string;
}) {
  const { ref, inView } = useInView(0.2);

  const segments = [
    { label: "Would consider moving overseas", pct: 37, color: "#F5C400" },
    { label: "Would definitely move overseas", pct: 16, color: "#ef4444" },
    { label: "Would stay in Australia", pct: 47, color: "#22c55e" },
  ];

  let cumulative = 0;
  const stops = segments.flatMap((seg) => {
    const start = (cumulative / 100) * 360;
    cumulative += seg.pct;
    const end = (cumulative / 100) * 360;
    return [`${seg.color} ${start}deg ${end}deg`];
  });

  return (
    <div ref={ref} className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-6 text-center">
        Young Australian Exodus (18&ndash;35 Year Olds)
      </h3>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Donut */}
        <div className="relative w-44 h-44 shrink-0 mx-auto sm:mx-0">
          <div
            className="w-full h-full rounded-full transition-opacity duration-700"
            style={{
              background: inView
                ? `conic-gradient(${stops.join(", ")})`
                : "#e5e7eb",
              opacity: inView ? 1 : 0.3,
            }}
          />
          <div className="absolute inset-6 bg-gray-50 rounded-full flex flex-col items-center justify-center">
            <span className="text-2xl font-extrabold text-red-600">53%</span>
            <span className="text-[10px] text-gray-500 text-center leading-tight mt-0.5">
              would consider
              <br />
              leaving
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-start gap-3">
              <span
                className="w-4 h-4 rounded-sm shrink-0 mt-0.5"
                style={{ backgroundColor: seg.color }}
              />
              <div>
                <span className="text-sm font-bold text-gray-800">
                  {seg.pct}%
                </span>
                <span className="text-sm text-gray-600 ml-2">{seg.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {source && (
        <p className="text-xs text-gray-400 mt-5 text-center">
          Source: {source}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. ANIMATED STAT CARDS (with counting animation)
// ─────────────────────────────────────────────────────────────────────────────
export function AnimatedStatCards({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className="grid sm:grid-cols-2 gap-4 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}
