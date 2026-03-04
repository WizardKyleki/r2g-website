import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1A1A1A] to-[#252525]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5C400]/8 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #F5C400 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#F5C400] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-1 bg-[#F5C400]" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
