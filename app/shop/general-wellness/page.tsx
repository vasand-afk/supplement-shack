import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Wellness Supplements",
  description: "Foundation supplements for immune health, sleep quality, and everyday vitality. Third-party tested.",
};

export default function GeneralWellnessPage() {
  const products = getProductsByCategory("general-wellness");

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#0A1F12] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">💊</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-2">Category</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">General Wellness</h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            The essentials your body needs daily. Omega-3s, vitamin D, magnesium, probiotics — the evidence-backed
            foundation of a wellness protocol.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Newsletter */}
        <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black mb-2">Get 10% Off Wellness Essentials</h3>
          <p className="text-[#A1A1AA] mb-6">Subscribe for deals, restocks, and research updates.</p>
          <NewsletterForm compact />
        </div>
      </div>
    </div>
  );
}
