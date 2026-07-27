import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";
import { getAllPosts, getPostBySlug } from "@/app/lib/blog-data";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Pre-render every blog post at build time
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Per-post SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Ounuo Machinery Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const faqBlock = post.content.find((b) => b.type === "faq");

  // Structured data for SEO rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Zhejiang Ounuo Machinery Co., Ltd." },
  };

  const faqSchema = faqBlock
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlock.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-32 pb-16 px-6 lg:px-24">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/60 font-medium mb-6">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-[200px]">{post.title}</span>
          </div>

          <span className="inline-block rounded-full bg-linear-to-r from-primary to-secondary px-4 py-1.5 text-xs font-bold text-white">
            {post.category}
          </span>

          <h1 className="mt-5 text-3xl lg:text-5xl font-extrabold leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 mt-5 text-sm text-white/60">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-4xl mx-auto px-6 lg:px-0 mt-10 relative z-10">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-xl" style={{ height: "420px" }}>
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-0 py-14">
        <BlogContentRenderer content={post.content} />
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 lg:px-0 pb-20 border-t border-slate-200 pt-14">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">More Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                  <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] group-hover:text-primary transition-all duration-300 leading-snug">
                    {p.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}