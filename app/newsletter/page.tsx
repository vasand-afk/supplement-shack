import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe for exclusive deals, research summaries, new product alerts, and your 10% discount code.",
};

const perks = [
  {
    icon: "💰",
    title: "10% Off Instantly",
    description: "Your discount code arrives in the welcome email — use it on your first order.",
  },
  {
    icon: "🔬",
    title: "Weekly Research Digest",
    description: "We read the papers so you don't have to. Key findings, plain language, every Tuesday.",
  },
  {
    icon: "📦",
    title: "Restock Alerts",
    description: "First to know when sold-out products come back. Subscribers get 24-hour early access.",
  },
  {
    icon: "🎯",
    title: "Subscriber-Only Deals",
    description: "Flash sales, bundle discounts, and launch pricing exclusive to the list.",
  },
  {
    icon: "⚗️",
    title: "RUO Research Updates",
    description: "Curated summaries of peptide research from peer-reviewed journals.",
  },
  {
    icon: "🚚",
    title: "Free Shipping Codes",
    description: "Periodic free shipping promotions sent only to subscribers.",
  },
];

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A00] via-[#09090B] to-[#09090B]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EA580C]/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="text-5xl block mb-6">📬</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-4">Join the List</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#FAFAFA] mb-6 leading-tight">
            Science Delivered.
            <br />
            <span className="gradient-text">Savings Included.</span>
          </h1>
          <p className="text-lg text-[#A1A1AA] mb-10 max-w-xl mx-auto">
            Subscribe to the Supplement Shack newsletter. Get your 10% welcome discount,
            weekly research digests, and exclusive subscriber-only deals.
          </p>

          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>

          <p className="text-xs text-[#52525B] mt-6">
            Currently 12,400+ researchers, athletes, and longevity enthusiasts subscribed.
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#FAFAFA]">What You Get</h2>
          <p className="text-[#A1A1AA] mt-2">Six reasons to subscribe today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 flex flex-col gap-3"
            >
              <span className="text-4xl">{perk.icon}</span>
              <h3 className="text-lg font-bold text-[#FAFAFA]">{perk.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample newsletter preview */}
      <section className="bg-[#0D0D0F] border-y border-[#27272A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Preview</p>
            <h2 className="text-3xl font-black text-[#FAFAFA]">What a Typical Issue Looks Like</h2>
          </div>

          {/* Faux newsletter */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden">
            <div className="gradient-orange-green p-1" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-[#27272A] pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">Supplement Shack</p>
                  <p className="text-lg font-black text-[#FAFAFA]">Weekly Research Digest — Issue #47</p>
                  <p className="text-xs text-[#52525B]">Tuesday, June 2, 2026</p>
                </div>
              </div>
              <div className="space-y-6 text-sm text-[#A1A1AA] leading-relaxed">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-2">🔬 This Week in Research</p>
                  <p>A new RCT in the Journal of the International Society of Sports Nutrition confirms that 5g/day creatine monohydrate over 12 weeks increased bench press 1RM by 14.2% vs 9.8% placebo — consistent with meta-analytic estimates...</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FB923C] mb-2">⚡ Subscriber Deal</p>
                  <p>This week only: <strong className="text-white">25% off Creatine Monohydrate and Pre-Workout Elite</strong> when bundled. Code STACK25 at checkout — expires Sunday...</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-2">🧬 Peptide Corner</p>
                  <p>New in vitro study shows BPC-157 upregulates VEGF expression by 3.2x in fibroblast cultures at 10nM concentration. Full summary with methodology critique available for subscribers...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-black text-[#FAFAFA] mb-4">Ready to Join?</h2>
        <p className="text-[#A1A1AA] mb-8">Your 10% discount code is one click away.</p>
        <NewsletterForm />
      </section>
    </div>
  );
}
