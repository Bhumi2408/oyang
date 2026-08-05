import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { categories, getLine } from "@/app/lib/products-data";

export function generateStaticParams() {
  return categories.flatMap((c) => c.lines.map((l) => ({ category: c.slug, line: l.slug })));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug, line: lineSlug } = await params;
  const { category, line } = getLine(categorySlug, lineSlug);
  if (!category || !line) return {};

  return {
    title: `${line.name} | ${category.name} | Ounuo Machinery`,
    description: line.longDesc,
    alternates: { canonical: `https://ounuo-machinery.com/products/${category.slug}/${line.slug}` },
    openGraph: {
      title: `${line.name} | Ounuo Machinery`,
      description: line.longDesc,
      images: [{ url: line.image }],
    },
  };
}

export default async function LinePage({ params }) {
  const { category: categorySlug, line: lineSlug } = await params;
  const { category, line } = getLine(categorySlug, lineSlug);
  if (!category || !line) notFound();

  return (
    <>
      {/* Header */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-32 pb-20 px-6 lg:px-24">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[150px]"
          style={{ background: `${category.color}30` }}
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/60 font-medium mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-white transition-colors duration-300">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/${category.slug}`} className="hover:text-white transition-colors duration-300">
              {category.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{line.name}</span>
          </div>

          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white mb-5"
            style={{ background: category.color }}
          >
            {line.shortDesc}
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">{line.name}</h1>
          <p className="mt-5 text-lg text-white/70 leading-8 max-w-2xl">{line.longDesc}</p>
        </div>
      </div>

      {/* Models grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
        {line.models.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-slate-500">
              Detailed model listings for this line are coming soon.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 rounded-full px-7 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)` }}
            >
              Request Machine Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8">
              {line.models.length} Model{line.models.length > 1 ? "s" : ""} Available
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {line.models.map((model) => (
                <Link
                  key={model.slug}
                  href={`/products/${category.slug}/${line.slug}/${model.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative h-[180px] overflow-hidden bg-slate-100">
                    <Image
                      src={line.image}
                      alt={model.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-primary transition-colors duration-300 leading-snug">
                      {model.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-6">{model.shortDesc}</p>

                    {Object.keys(model.specs || {}).length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Object.entries(model.specs).slice(0, 2).map(([key, value]) => (
                          <span
                            key={key}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: category.color }}>
                      View Machine
                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}