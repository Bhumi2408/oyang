import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/app/lib/blog-data";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogGrid() {
  const posts = getAllPosts(); // already sorted newest first

  return (
    <section className="py-20 px-10 lg:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 rounded-full bg-linear-to-r from-primary to-secondary px-5 py-2 text-xs font-bold text-white">
                  {post.category}
                </div>
              </div>
            </Link>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-[#0f172a] group-hover:text-primary transition-all duration-300">
                  {post.title}
                </h2>
              </Link>

              <p className="mt-3 text-sm text-slate-600 leading-6">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="group/btn mt-4 inline-flex items-center gap-2 text-sm text-primary font-bold"
              >
                Read Article
                <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}