import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Supplement Science & Research",
  description: "Evidence-based articles on peptides, longevity supplements, sports nutrition, and metabolic health.",
};

const allCategories = Array.from(new Set(posts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-2">Research Blog</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#FAFAFA] mb-4">
          The Science Behind the Stack
        </h1>
        <p className="text-[#A1A1AA] max-w-xl text-lg">
          No bro-science. No influencer takes. Just peer-reviewed research, plainly explained.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="px-4 py-1.5 bg-[#EA580C] text-white rounded-full text-xs font-bold uppercase tracking-wide">
          All
        </span>
        {allCategories.map((cat) => (
          <span
            key={cat}
            className="px-4 py-1.5 bg-[#18181B] border border-[#27272A] text-[#A1A1AA] rounded-full text-xs font-bold uppercase tracking-wide cursor-pointer hover:border-[#3F3F46] hover:text-[#FAFAFA] transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <span className="text-3xl block mb-4">📬</span>
        <h3 className="text-2xl font-black mb-2">New Articles, Every Week</h3>
        <p className="text-[#A1A1AA] mb-6">
          Research summaries and new article alerts straight to your inbox. Plus 10% off your first order.
        </p>
        <NewsletterForm compact />
      </div>
    </div>
  );
}
