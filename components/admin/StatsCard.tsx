interface StatsCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  accent?: boolean;
}

export default function StatsCard({ label, value, subtitle, accent }: StatsCardProps) {
  return (
    <div className="zoey-card-strong p-5 hover:shadow-[0_2px_6px_rgba(0,0,0,0.04),0_12px_40px_rgba(217,70,239,0.08)] transition-all duration-300">
      <p className="text-fuchsia-400/70 text-xs font-semibold uppercase tracking-wider">{label}</p>
      <p className={`text-3xl font-bold mt-1.5 ${accent ? "zoey-gradient-text" : "text-gray-900"}`}>{value}</p>
      {subtitle && <p className="text-gray-400 text-xs mt-1.5">{subtitle}</p>}
    </div>
  );
}
