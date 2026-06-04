import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  // Convert basic markdown to HTML-ish JSX sections
  const sections = post.content
    .trim()
    .split("\n\n")
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#52525B] mb-8">
        <Link href="/blog" className="hover:text-[#A1A1AA] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#A1A1AA]">{post.category}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{post.emoji}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-[#EA580C]/10 border border-[#EA580C]/20 px-2 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-[#52525B]">{post.readTime} min read</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[#FAFAFA] leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-[#A1A1AA] leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-[#52525B] border-t border-[#27272A] pt-6">
          <span>
            Published{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#3F3F46]" />
          <span>Supplement Shack Research Team</span>
        </div>
      </header>

      {/* Article content */}
      <article className="prose prose-invert max-w-none mb-16">
        <div className="space-y-5 text-[#A1A1AA] leading-relaxed">
          {sections.map((section, i) => {
            if (section.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-black text-[#FAFAFA] mt-10 mb-4">
                  {section.replace("## ", "")}
                </h2>
              );
            }
            if (section.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold text-[#FAFAFA] mt-8 mb-3">
                  {section.replace("### ", "")}
                </h3>
              );
            }
            if (section.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-[#EA580C] pl-4 py-1 text-[#A1A1AA] italic"
                >
                  {section.replace("> ", "")}
                </blockquote>
              );
            }
            if (section.startsWith("- ")) {
              const items = section.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-none space-y-2 ml-0">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#EA580C] mt-1">→</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.includes("|")) {
              const lines = section.trim().split("\n");
              const headers = lines[0].split("|").filter(Boolean).map((h) => h.trim());
              const rows = lines.slice(2).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
              return (
                <div key={i} className="overflow-x-auto rounded-xl border border-[#27272A]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#18181B]">
                        {headers.map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-bold text-[#FAFAFA] border-b border-[#27272A]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-[#09090B]" : "bg-[#0D0D0F]"}>
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-3 text-[#A1A1AA]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: section
                    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                }}
              />
            );
          })}
        </div>
      </article>

      {/* Disclaimer */}
      <div className="bg-[#0D0D0F] border border-[#27272A] rounded-2xl p-6 mb-16 text-xs text-[#52525B] leading-relaxed">
        <strong className="text-[#A1A1AA]">Disclaimer:</strong> This article is for educational and informational
        purposes only and is not intended as medical advice. These statements have not been evaluated by the FDA.
        Products are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified
        healthcare provider before starting any supplement protocol.
      </div>

      {/* Related posts */}
      <section>
        <h3 className="text-2xl font-black mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="bg-[#18181B] border border-[#27272A] rounded-xl p-4 hover:border-[#3F3F46] transition-colors"
            >
              <span className="text-2xl block mb-2">{p.emoji}</span>
              <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wide mb-1">{p.category}</p>
              <h4 className="font-bold text-[#FAFAFA] text-sm leading-tight line-clamp-2">{p.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
