import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { categories, getCategory } from "@/app/lib/products-data";
import FaqAccordion from "@/components/product/FaqAccordion";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} | Ounuo Machinery`,
    description: category.shortDesc,
    alternates: {
      canonical: `https://ounuo-machinery.com/products/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Ounuo Machinery`,
      description: category.shortDesc,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-32 pb-16 px-6 lg:px-24">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[150px]"
          style={{ background: `${category.color}30` }}
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/60 font-medium mb-6">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/products"
              className="hover:text-white transition-colors duration-300"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{category.name}</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
            {category.name}
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-8 max-w-2xl">
            {category.longDesc}
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl">
          {category.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm py-5 px-3 text-center"
            >
              <p
                className="text-2xl lg:text-3xl font-extrabold"
                style={{ color: category.color }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold tracking-wide text-white/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lines grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] mb-8">
          {category.lines.length} Product{" "}
          {category.lines.length === 1 ? "Line" : "Lines"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.lines.map((line) => (
            <Link
              key={line.slug}
              href={`/products/${category.slug}/${line.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={line.image}
                  alt={line.name}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold text-white"
                  style={{ background: category.color }}
                >
                  {line.shortDesc}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-[#0f172a] group-hover:text-primary transition-colors duration-300">
                  {line.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  {line.longDesc}
                </p>

                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: category.color }}
                >
                  {(() => {
                    const modelCount = line.models?.length || 0;
                    const seriesModelCount =
                      line.series?.reduce(
                        (sum, s) => sum + (s.models?.length || 0),
                        0,
                      ) || 0;
                    const total = modelCount + seriesModelCount;
                    return total > 0
                      ? `View ${total} model${total > 1 ? "s" : ""}`
                      : "View Details";
                  })()}
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose / features */}
      <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] mb-10 text-center">
          Why Choose OYANG {category.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {category.features.map((feat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 p-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${category.color}15` }}
              >
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: category.color }}
                />
              </div>
              <h3 className="font-bold text-[#0f172a] leading-snug">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] mb-10 text-center">
          {category.name} — FAQ
        </h2>

        <FaqAccordion faqs={category.faqs} color={category.color} />
      </section>

      {/* CTA */}
      <section className="pb-16 lg:pb-24 px-6 lg:px-24">
        <div
          className="max-w-6xl mx-auto rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
          style={{
            background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)`,
          }}
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
              Need Help Choosing a {category.name} Machine?
            </h3>
            <p className="mt-3 text-white/85 max-w-xl">
              Share your product type, material, size range and target output —
              our engineers will recommend the right configuration within 24
              hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ color: category.color }}
          >
            Get a Free Recommendation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
