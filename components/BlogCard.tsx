import Link from "next/link";
import { BlogPost } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  "Peptides": "bg-[#7C3AED]/20 text-[#A78BFA]",
  "Anti-Aging": "bg-[#EA580C]/20 text-[#FB923C]",
  "Sports Nutrition": "bg-[#16A34A]/20 text-[#22C55E]",
  "Recovery": "bg-[#2563EB]/20 text-[#60A5FA]",
  "General Wellness": "bg-[#D97706]/20 text-[#FCD34D]",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const catColor = categoryColors[post.category] ?? "bg-[#27272A] text-[#A1A1AA]";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden card-hover flex flex-col hover:border-[#3F3F46] transition-colors"
    >
      {/* Header area */}
      <div className="h-36 bg-gradient-to-br from-[#27272A] to-[#18181B] flex items-center justify-center relative">
        <span className="text-6xl">{post.emoji}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Category + read time */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${catColor}`}>
            {post.category}
          </span>
          <span className="text-[10px] text-[#52525B]">{post.readTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#FAFAFA] leading-tight group-hover:text-[#FB923C] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Date */}
        <p className="text-xs text-[#52525B] mt-auto">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
