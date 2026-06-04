import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Nutrition Supplements",
  description: "Clinically dosed performance supplements. Whey isolate, creatine, pre-workout, and more.",
};

export default function SportsNutritionPage() {
  const products = getProductsByCategory("sports-nutrition");

  return (
    <div>
      <div className="relative bg-gradient-to-br from-[#1F0D03] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">⚡</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FB923C] mb-2">Category</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">Sports Nutrition</h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            No prop blends. No pixie-dusting. Every performance ingredient at the clinical dose shown to
            actually work — then third-party verified.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Performance stack suggestion */}
        <div className="bg-[#18181B] border border-[#EA580C]/30 rounded-2xl p-6 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FB923C] mb-2">💡 The Foundation Stack</p>
          <p className="text-[#A1A1AA] text-sm">
            Most evidence-based starting point: <strong className="text-white">Creatine 5g/day + Whey Protein 25–40g/day</strong>.
            These two alone outperform 90% of more exotic protocols. Build from there.
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{products.length} Products</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-sm text-[#A1A1AA]">All third-party tested</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black mb-2">Get 10% Off Performance Supplements</h3>
          <p className="text-[#A1A1AA] mb-6">Stack discounts and restock alerts in your inbox.</p>
          <NewsletterForm compact />
        </div>
      </div>
    </div>
  );
}
