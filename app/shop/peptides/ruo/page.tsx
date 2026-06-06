import ProductCard from "@/components/ProductCard";
import RuoDisclaimer from "@/components/RuoDisclaimer";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Use Only (RUO) Peptides",
  description: "RUO peptides for qualified laboratory researchers. BPC-157, TB-500, Epithalon, Selank, CJC-1295, Ipamorelin. HPLC verified.",
};

export default function RuoPeptidesPage() {
  const products = getProductsByCategory("peptides-ruo");

  return (
    <div>
      {/* Disclaimer gate — rendered client-side, blocks until acknowledged */}
      <RuoDisclaimer />

      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#110820] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">⚗️</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-2">Research Use Only</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">
            RUO Peptides
          </h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            Lyophilized research-grade peptides for qualified laboratory researchers.
            HPLC &amp; MS purity verified. Certificate of Analysis included with every order.
          </p>

          {/* RUO warning badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-red-950/40 border border-red-800/50 rounded-xl px-4 py-2">
            <span className="text-red-400 text-sm font-bold">⚠️ NOT FOR HUMAN CONSUMPTION</span>
            <span className="text-red-500/60 text-xs">· For in vitro research only</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Legal disclaimer panel */}
        <div className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded-2xl p-6 mb-12">
          <h3 className="text-sm font-bold text-[#A78BFA] uppercase tracking-widest mb-3">
            Research Use Only — Important Information
          </h3>
          <div className="space-y-2 text-sm text-[#A1A1AA] leading-relaxed">
            <p>
              All products in this section are <strong className="text-white">Research Use Only (RUO)</strong> chemicals.
              They are sold exclusively for <strong className="text-white">in vitro laboratory research</strong> purposes.
            </p>
            <p>
              These products are <strong className="text-red-400">NOT</strong> dietary supplements,
              drugs, or approved by the FDA or any regulatory body for human use.
              They are <strong className="text-red-400">NOT intended for human or animal consumption</strong>.
            </p>
            <p>
              By purchasing, you confirm you are a qualified researcher purchasing for legitimate
              laboratory research purposes, and that you accept full legal responsibility for appropriate use.
            </p>
          </div>
        </div>

        {/* Purity standards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: "🔬", label: "HPLC Verified", sub: "≥98% purity minimum" },
            { icon: "⚖️", label: "MS Identity", sub: "Molecular weight confirmed" },
            { icon: "📄", label: "COA Included", sub: "With every order" },
            { icon: "🧊", label: "Lyophilized", sub: "Argon-sealed vials" },
          ].map((item) => (
            <div key={item.label} className="bg-[#18181B] border border-[#27272A] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p className="text-sm font-bold text-[#FAFAFA]">{item.label}</p>
              <p className="text-xs text-[#A1A1AA]">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{products.length} Research Compounds</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            <span className="text-sm text-[#A1A1AA]">RUO · Research Grade</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Tirzepatide informational card */}
        <div className="mt-10 bg-[#18181B] border border-yellow-800/40 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💉</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base font-bold text-white">Tirzepatide</h3>
                <span className="text-[10px] font-bold bg-yellow-900/40 border border-yellow-700/40 text-yellow-400 px-2 py-0.5 rounded-full uppercase tracking-wide">Rx Only — Not Available</span>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-3">
                Tirzepatide (Mounjaro®, Zepbound®) is a dual GIP/GLP-1 receptor agonist approved by the FDA for type 2 diabetes and weight management. Because it is an <strong className="text-white">FDA-approved prescription drug</strong>, it cannot be sold as a research chemical or supplement — it is only legally dispensed by a licensed compounding pharmacy with a valid prescription from a licensed physician.
              </p>
              <p className="text-xs text-[#71717A]">
                Looking for a GLP-1/GIP class research compound? See <strong className="text-[#A78BFA]">Retatrutide (RUO)</strong> above — a triple agonist (GLP-1 + GIP + glucagon) currently in Phase 3 trials and available for in vitro research.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-12 p-6 bg-[#0D0D0F] border border-[#27272A] rounded-2xl text-xs text-[#52525B] leading-relaxed">
          <strong className="text-[#A1A1AA]">Legal Disclaimer:</strong> Products listed as Research Use Only are chemical
          reagents intended solely for qualified scientific researchers performing legitimate laboratory research. They are
          not drugs, dietary supplements, or approved for any human or veterinary therapeutic use. Supplement Shack makes
          no representations regarding safety or efficacy for human use. All sales are final and subject to verification of
          research credentials upon request. By completing a purchase you confirm you are of legal age, are a qualified
          researcher, and will use the products exclusively for in vitro or ex vivo research purposes in compliance with
          all applicable federal, state, and local laws.
        </div>
      </div>
    </div>
  );
}
