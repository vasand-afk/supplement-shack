import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getFeaturedProducts } from "@/lib/products";
import { posts } from "@/lib/posts";

const categories = [
  {
    icon: "💊",
    name: "General Wellness",
    description: "Foundation supplements for immune health, sleep, and everyday vitality.",
    href: "/shop/general-wellness",
    productCount: 5,
    accentColor: "#16A34A",
  },
  {
    icon: "⚡",
    name: "Sports Nutrition",
    description: "Clinically dosed performance supplements for strength, endurance, and recovery.",
    href: "/shop/sports-nutrition",
    productCount: 5,
    accentColor: "#EA580C",
  },
  {
    icon: "🔋",
    name: "Anti-Aging",
    description: "NMN, resveratrol, CoQ10, and more — targeting the biology of longevity.",
    href: "/shop/anti-aging",
    productCount: 5,
    accentColor: "#D97706",
  },
  {
    icon: "🧬",
    name: "Peptides",
    description: "Professional-grade peptide complexes for topical and external research applications.",
    href: "/shop/peptides",
    productCount: 3,
    accentColor: "#2563EB",
  },
  {
    icon: "⚗️",
    name: "RUO Peptides",
    description: "Research Use Only — lyophilized peptides for qualified laboratory researchers.",
    href: "/shop/peptides/ruo",
    productCount: 6,
    accentColor: "#7C3AED",
    badge: "Research Only",
  },
  {
    icon: "⌚",
    name: "Wearable Devices",
    description: "CGM kits, HRV rings, and bio-sensing patches for metabolic self-quantification.",
    href: "/shop/wearables",
    productCount: 3,
    accentColor: "#0891B2",
  },
];

const trustStats = [
  { value: "500+", label: "Products Tested" },
  { value: "99.9%", label: "Purity Standard" },
  { value: "50K+", label: "Happy Customers" },
  { value: "100%", label: "COA Transparency" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2D] via-[#09090B] to-[#09090B]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EA580C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#16A34A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-full px-4 py-1.5 text-xs font-bold text-[#A1A1AA] uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              3rd Party Tested · COA Available · GMP Certified
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Science-Backed
              <br />
              <span className="gradient-text">Supplements.</span>
              <br />
              Zero Compromises.
            </h1>

            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10 max-w-xl">
              From foundational wellness to advanced research peptides — every product
              independently tested, every COA published.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-lg rounded-xl transition-colors glow-orange"
              >
                Shop All Products →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#18181B] hover:bg-[#27272A] border border-[#3F3F46] text-[#FAFAFA] font-bold text-lg rounded-xl transition-colors"
              >
                Read the Science
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-[#27272A] bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</p>
                <p className="text-sm text-[#A1A1AA] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Browse by Category</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#FAFAFA]">Find What You Need</h2>
          </div>
          <Link href="/shop" className="hidden md:block text-sm font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.href} {...cat} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#0D0D0F] border-y border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Top Rated</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#FAFAFA]">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-sm font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Why Supplement Shack</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#FAFAFA]">The Transparent Standard</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔬",
              title: "Third-Party Tested",
              description: "Every product is independently tested by accredited labs. We publish the Certificate of Analysis so you can verify exactly what you're getting.",
            },
            {
              icon: "🏭",
              title: "GMP-Certified Facility",
              description: "Manufactured in an FDA-registered, cGMP-compliant facility. No shortcuts on process, no compromises on quality.",
            },
            {
              icon: "📋",
              title: "Full Label Transparency",
              description: "No proprietary blends. Every ingredient, every dose, listed clearly. If it's in the product, it's on the label — and proven to be there.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#18181B] border border-[#27272A] rounded-2xl p-8 flex flex-col gap-4">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE & SAVE BANNER */}
      <section className="relative overflow-hidden bg-[#0D0D0F] border-y border-[#27272A]">
        <div className="absolute inset-0 gradient-orange-green opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-2">Subscribe &amp; Save</p>
            <h2 className="text-3xl font-black text-[#FAFAFA] mb-2">Save 15% on Every Order</h2>
            <p className="text-[#A1A1AA] max-w-md">Subscribe to any product and save 15% automatically. Pause, skip, or cancel anytime.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/shop" className="px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white font-black rounded-xl transition-colors text-center">
              Start a Subscription
            </Link>
            <Link href="/shop" className="px-8 py-4 bg-[#18181B] border border-[#3F3F46] hover:bg-[#27272A] text-white font-bold rounded-xl transition-colors text-center">
              Shop One-Time
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT BLOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Latest Research</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#FAFAFA]">From the Blog</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-sm font-bold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
            All articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-[#0D0D0F] border-t border-[#27272A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="text-4xl mb-6 block">📬</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#FAFAFA] mb-4">Get 10% Off Your First Order</h2>
          <p className="text-[#A1A1AA] mb-8">
            Subscribe for exclusive deals, new product alerts, and research summaries delivered weekly.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
