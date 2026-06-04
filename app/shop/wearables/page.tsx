import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wearable Health Devices",
  description: "CGM starter kits, HRV tracking rings, and metabolic bio-sensing patches for self-quantification.",
};

export default function WearablesPage() {
  const products = getProductsByCategory("wearables");

  return (
    <div>
      <div className="relative bg-gradient-to-br from-[#020D15] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0891B2]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">⌚</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#22D3EE] mb-2">Category</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">Wearable Devices</h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            Continuous glucose monitors, HRV rings, and bio-sensing patches — the hardware layer of
            precision health. Measure what actually matters.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What to measure guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: "📈",
              title: "Glucose (CGM)",
              description: "See real-time glycemic response to foods, exercise, and sleep. Identify hidden metabolic dysfunction.",
            },
            {
              icon: "❤️",
              title: "HRV & Recovery",
              description: "Heart Rate Variability is the best daily proxy for nervous system recovery and readiness to train.",
            },
            {
              icon: "🩺",
              title: "Lactate & Sweat",
              description: "Emerging sweat-based biomarkers provide non-invasive metabolic monitoring during exercise.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#18181B] border border-[#0891B2]/30 rounded-xl p-5">
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-bold text-[#FAFAFA] mb-1">{item.title}</h3>
              <p className="text-sm text-[#A1A1AA]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{products.length} Devices</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black mb-2">New Devices Drop Monthly</h3>
          <p className="text-[#A1A1AA] mb-6">Be first to know when new quantification tools are available.</p>
          <NewsletterForm compact />
        </div>
      </div>
    </div>
  );
}
