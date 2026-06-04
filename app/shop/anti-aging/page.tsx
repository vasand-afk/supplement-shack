import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Aging & Longevity Supplements",
  description: "NMN, resveratrol, CoQ10, astaxanthin — science-backed longevity supplements. COA verified.",
};

export default function AntiAgingPage() {
  const products = getProductsByCategory("anti-aging");

  return (
    <div>
      <div className="relative bg-gradient-to-br from-[#1F1003] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">🔋</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FCD34D] mb-2">Category</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">Anti-Aging & Longevity</h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            NAD+ restoration, sirtuin activation, mitochondrial support. These are the compounds the
            longevity research community is most actively studying.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NAD+ protocol note */}
        <div className="bg-[#18181B] border border-[#D97706]/30 rounded-2xl p-6 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FCD34D] mb-2">🔬 The NAD+ Protocol</p>
          <p className="text-[#A1A1AA] text-sm">
            Many longevity researchers combine <strong className="text-white">NMN 500mg + Trans-Resveratrol 500mg</strong> taken
            together in the morning (resveratrol activates SIRT1, which NMN fuels via NAD+). Add CoQ10 for
            mitochondrial support. Always consult your physician.
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{products.length} Products</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-sm text-[#A1A1AA]">All COA verified</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black mb-2">Longevity Research, Direct to Your Inbox</h3>
          <p className="text-[#A1A1AA] mb-6">New product launches, research summaries, and subscriber discounts.</p>
          <NewsletterForm compact />
        </div>
      </div>
    </div>
  );
}
