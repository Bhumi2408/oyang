import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Send } from "lucide-react";
import { categories, getModel } from "@/app/lib/products-data";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.lines.flatMap((l) => l.models.map((m) => ({ category: c.slug, line: l.slug, model: m.slug })))
  );
}

export async function generateMetadata({ params }) {
  const { category: categorySlug, line: lineSlug, model: modelSlug } = await params;
  const { category, line, model } = getModel(categorySlug, lineSlug, modelSlug);
  if (!category || !line || !model) return {};

  return {
    title: `${model.name} | Ounuo Machinery`,
    description: model.shortDesc,
    alternates: {
      canonical: `https://ounuo-machinery.com/products/${category.slug}/${line.slug}/${model.slug}`,
    },
    openGraph: {
      title: model.name,
      description: model.shortDesc,
      images: [{ url: line.image }],
    },
  };
}

export default async function ModelPage({ params }) {
  const { category: categorySlug, line: lineSlug, model: modelSlug } = await params;
  const { category, line, model } = getModel(categorySlug, lineSlug, modelSlug);
  if (!category || !line || !model) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: model.shortDesc,
    image: line.image,
    brand: { "@type": "Brand", name: "Ounuo Machinery" },
    category: `${category.name} / ${line.name}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Header */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-32 pb-16 px-6 lg:px-24">
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
            <Link href={`/products/${category.slug}/${line.slug}`} className="hover:text-white transition-colors duration-300">
              {line.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{model.name}</span>
          </div>

          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white"
            style={{ background: category.color }}
          >
            {line.name}
          </span>

          <h1 className="mt-5 text-3xl lg:text-5xl font-extrabold text-white leading-tight">{model.name}</h1>
          <p className="mt-5 text-lg text-white/70 leading-8 max-w-2xl">{model.shortDesc}</p>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-6 lg:px-0 -mt-10 relative z-10">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-xl" style={{ height: "420px" }}>
          <Image src={line.image} alt={model.name} fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-0 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">Overview</h2>
            <p className="text-slate-600 leading-8">{line.longDesc}</p>

            <h2 className="text-2xl font-extrabold text-[#0f172a] mt-10 mb-4">Category</h2>
            <p className="text-slate-600 leading-7">
              Part of our{" "}
              <Link href={`/products/${category.slug}`} className="text-primary font-semibold hover:underline">
                {category.name}
              </Link>{" "}
              range, within the{" "}
              <Link href={`/products/${category.slug}/${line.slug}`} className="text-primary font-semibold hover:underline">
                {line.name}
              </Link>{" "}
              line.
            </p>
          </div>

          {/* Specs sidebar */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-extrabold text-[#0f172a] mb-4">Key Specifications</h3>
              {Object.keys(model.specs || {}).length > 0 ? (
                <ul className="space-y-3">
                  {Object.entries(model.specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between gap-4 text-sm border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-500 font-medium">{key}</span>
                      <span className="text-[#0f172a] font-bold text-right">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500">
                  Detailed specs available on request — contact our engineering team.
                </p>
              )}

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)` }}
              >
                Request Full Datasheet
                <Send className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-0 pb-20">
        <div
          className="rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)` }}
        >
          <div>
            <h3 className="text-2xl font-extrabold text-white">Interested in the {model.name}?</h3>
            <p className="mt-2 text-white/85">Our engineers will recommend the right configuration for your factory within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ color: category.color }}
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}