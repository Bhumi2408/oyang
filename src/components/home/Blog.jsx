import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getAllPosts } from "@/app/lib/blog-data";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3); // newest 3, pulled live from blog-data.js

  return (
    <section className="pt-14 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-24 bg-linear-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff1e8] px-4 py-2">
              <Newspaper className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-sm text-secondary">News & Insights</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight">
              From The{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Factory Floor
              </span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-3 text-primary font-bold text-base sm:text-lg shrink-0"
          >
            View All
            <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 rounded-full bg-linear-to-r from-primary to-secondary px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-bold text-white">
                  {post.category}
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-extrabold leading-tight text-[#0f172a] group-hover:text-primary transition-all duration-300">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="group/btn mt-4 inline-flex items-center gap-2 text-sm text-primary font-bold"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}