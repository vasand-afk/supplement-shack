import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peptide Supplements & Topical Complexes",
  description: "Professional-grade peptide complexes including BPC-157 topical, GHK-Cu serum, and TB-500 preparations.",
};

export default function PeptidesPage() {
  const products = getProductsByCategory("peptides");

  return (
    <div>
      <div className="relative bg-gradient-to-br from-[#060B1F] via-[#09090B] to-[#09090B] border-b border-[#27272A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="text-5xl mb-4 block">🧬</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-2">Category</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">Peptides</h1>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            Professional-grade peptide preparations formulated for topical and external use.
            HPLC-verified purity. Full COA with every batch.
          </p>
          <div className="mt-6">
            <Link
              href="/shop/peptides/ruo"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-xl text-sm font-bold text-[#A78BFA] hover:bg-[#7C3AED]/30 transition-colors"
            >
              ⚗️ Looking for Research Use Only (RUO) Peptides? Click here →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#18181B] border border-[#2563EB]/30 rounded-2xl p-6 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-2">ℹ️ About Our Peptide Products</p>
          <p className="text-[#A1A1AA] text-sm leading-relaxed">
            The peptide preparations on this page are formulated as topical complexes and serums for external
            application. They differ from our{" "}
            <Link href="/shop/peptides/ruo" className="text-[#A78BFA] underline">
              RUO (Research Use Only) category
            </Link>
            , which contains lyophilized research chemicals for qualified laboratory researchers only.
            All products include Certificate of Analysis from independent third-party labs.
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{products.length} Products</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-sm text-[#A1A1AA]">HPLC purity verified</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
