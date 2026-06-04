import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Supplements",
  description: "Browse all third-party tested supplements — wellness, sports nutrition, anti-aging, peptides, and wearables.",
};

const categoryMeta = [
  { slug: "general-wellness", label: "General Wellness", icon: "💊", color: "#16A34A" },
  { slug: "sports-nutrition", label: "Sports Nutrition", icon: "⚡", color: "#EA580C" },
  { slug: "anti-aging", label: "Anti-Aging", icon: "🔋", color: "#D97706" },
  { slug: "peptides", label: "Peptides", icon: "🧬", color: "#2563EB" },
  { slug: "peptides-ruo", label: "RUO Peptides", icon: "⚗️", color: "#7C3AED" },
  { slug: "wearables", label: "Wearable Devices", icon: "⌚", color: "#0891B2" },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">All Products</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">The Full Shack</h1>
        <p className="text-[#A1A1AA] max-w-xl">
          Every product third-party tested and COA-published. Filter by category below.
        </p>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categoryMeta.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug === "peptides-ruo" ? "/shop/peptides/ruo" : `/shop/${cat.slug}`}
            className="flex items-center gap-2 px-4 py-2 bg-[#18181B] border border-[#27272A] rounded-full text-sm font-semibold text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-colors"
          >
            <span>{cat.icon}</span>
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Products by category */}
      {categoryMeta.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.slug);
        if (catProducts.length === 0) return null;
        return (
          <section key={cat.slug} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </h2>
              <Link
                href={cat.slug === "peptides-ruo" ? "/shop/peptides/ruo" : `/shop/${cat.slug}`}
                className="text-sm font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
