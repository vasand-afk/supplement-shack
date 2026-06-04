import Link from "next/link";

type CategoryCardProps = {
  icon: string;
  name: string;
  description: string;
  href: string;
  productCount: number;
  accentColor?: string;
  badge?: string;
};

export default function CategoryCard({
  icon,
  name,
  description,
  href,
  productCount,
  accentColor = "#EA580C",
  badge,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-[#18181B] border border-[#27272A] rounded-2xl p-6 card-hover overflow-hidden flex flex-col gap-4 hover:border-[#3F3F46] transition-colors"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"
        style={{ backgroundColor: accentColor }}
      />

      <div className="flex items-start justify-between">
        <span className="text-4xl">{icon}</span>
        {badge && (
          <span className="text-[10px] font-bold bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
            {badge}
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3
          className="text-lg font-bold mb-1 group-hover:transition-colors"
          style={{ color: "#FAFAFA" }}
        >
          {name}
        </h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#52525B]">{productCount} products</span>
        <span
          className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: accentColor }}
        >
          Shop now →
        </span>
      </div>
    </Link>
  );
}
