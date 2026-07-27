import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getAllPosts } from "@/app/lib/blog-data";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3); // newest 3, pulled live from blog-data.js

  return (
    <section className="pt-20 pb-10 px-24 bg-linear-to-b from-[#f8fafc] to-white">
      {/* Header */}
      <div className="flex justify-between items-end mb-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff1e8] px-4 py-2">
            <Newspaper className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm text-secondary">News & Insights</span>
          </div>

          <h2 className="mt-4 text-5xl font-extrabold text-[#0f172a]">
            From The{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Factory Floor
            </span>
          </h2>
        </div>

        <Link
          href="/blog"
          className="group hidden md:flex items-center gap-3 text-primary font-bold text-lg"
        >
          View All
          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute top-5 left-5 rounded-full bg-linear-to-r from-primary to-secondary px-5 py-2 text-xs font-bold text-white">
                {post.category}
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-extrabold leading-tight text-[#0f172a] group-hover:text-primary transition-all duration-300">
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
    </section>
  );
}