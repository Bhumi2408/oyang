import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2, PlayCircle, Mail, Layers } from "lucide-react";
import { categories, getModel, getAllModelsForLine } from "@/app/lib/products-data";
import FaqAccordion from "@/components/product/FaqAccordion";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.lines.flatMap((l) =>
      getAllModelsForLine(l).map((m) => ({
        category: c.slug,
        line: l.slug,
        model: m.slug,
      }))
    )
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
      images: [{ url: model.image || line.image }],
    },
  };
}

// Extracts a YouTube video ID from youtu.be or youtube.com URLs
function getYoutubeId(url) {
  if (!url) return null;
  const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (short) return short[1];
  const long = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (long) return long[1];
  return null;
}

export default async function ModelPage({ params }) {
  const { category: categorySlug, line: lineSlug, model: modelSlug } = await params;
  const { category, line, model } = getModel(categorySlug, lineSlug, modelSlug);
  if (!category || !line || !model) notFound();

  const allModels = getAllModelsForLine(line);
  const otherModels = allModels.filter((m) => m.slug !== model.slug).slice(0, 3);
  const specEntries = Object.entries(model.specs || {});

  // Find the video that matches this model, fallback to first line video
  const modelKeyword = model.name.split(" ")[0]?.toLowerCase() || "";
  const matchedVideo =
    (line.videos || []).find((v) => v.title.toLowerCase().includes(modelKeyword)) ||
    (line.videos || [])[0] ||
    null;
  const youtubeId = matchedVideo ? getYoutubeId(matchedVideo.url) : null;

  // What this machine can produce — bag types relevant to this model/line
  const producesList = line.bagTypesProduced || [];

  const hasComparison = allModels.length > 1 && allModels.every((m) => Object.keys(m.specs || {}).length > 0);
  const comparisonKeys = hasComparison
    ? [...new Set(allModels.flatMap((m) => Object.keys(m.specs || {})))]
    : [];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: model.shortDesc,
    image: model.image || line.image,
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
            <Link href={`/products/${category.slug}`} className="hover:text-white transition-colors duration-300">{category.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/${category.slug}/${line.slug}`} className="hover:text-white transition-colors duration-300">{line.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{model.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{ background: category.color }}>
              {line.name}
            </span>
            {model.tag && (
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold bg-white/10 text-white border border-white/20">
                {model.tag}
              </span>
            )}
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">{model.name}</h1>
          <p className="mt-5 text-lg text-white/70 leading-8 max-w-2xl">{model.shortDesc}</p>
        </div>
      </div>

      {/* ═══ SECTION 1 (mandatory): Overview / Specs Card ═══ */}
      <section className="px-6 lg:px-24 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 relative bg-slate-50 min-h-[280px] lg:min-h-full">
              <Image src={model.image || line.image} alt={model.name} fill className="object-cover" priority />
            </div>

            <div className="lg:col-span-3 p-6 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: category.color }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: category.color }}>
                  Quick Overview
                </span>
              </div>

              {specEntries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                  {specEntries.slice(0, 6).map(([key, value]) => (
                    <div key={key} className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{key}</p>
                      <p className="mt-1 text-sm font-extrabold text-[#0f172a]">{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-500">
                  Detailed specs available on request — our engineers will share the full datasheet.
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                <span>✅ CE & ISO9001 Certified</span>
                <span>🛡️ 1-Year Warranty</span>
                <span>🚀 Fast Delivery</span>
                <span>🛠️ 24h After-Sales</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:opacity-90"
                  style={{ background: category.color }}
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=8615058933503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 px-6 py-3.5 font-bold text-emerald-600 text-sm transition-all duration-300 hover:bg-emerald-50"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 (mandatory): Video ═══ */}
      {matchedVideo && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: `${category.color}15`, color: category.color }}>
              <PlayCircle className="w-3.5 h-3.5" /> Machine In Action
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">See the {model.name} Running</h2>
            <p className="mt-2 text-slate-600">{matchedVideo.title}</p>

            <div className="mt-6 rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
              {youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={matchedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a
                  href={matchedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full text-white gap-2 font-bold"
                >
                  <PlayCircle className="w-8 h-8" /> Watch on YouTube
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SECTION 3 (mandatory): Technical Specifications ═══ */}
      <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: `${category.color}15`, color: category.color }}>
            Technical Data
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">Technical Specifications</h2>
          <p className="mt-2 text-slate-600">All parameters from the official {model.name} datasheet. Custom configurations available on request.</p>

          {specEntries.length > 0 ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide border-b border-slate-200 w-1/2">Parameter</th>
                    <th className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide border-b border-slate-200">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specEntries.map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 1 ? "bg-slate-50/60" : ""}>
                      <td className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide border-b border-slate-100 last:border-0">{key}</td>
                      <td className="px-5 py-3.5 text-sm font-semibold text-[#0f172a] border-b border-slate-100 last:border-0">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-6 text-sm text-slate-500">Full technical datasheet available on request — contact our team below.</p>
          )}
        </div>
      </section>

      {/* ═══ SECTION 4 (mandatory): What This Machine Can Produce ═══ */}
      {producesList.length > 0 && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: `${category.color}15`, color: category.color }}>
              <Layers className="w-3.5 h-3.5" /> Output Range
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">What This Machine Can Produce</h2>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {producesList.map((bag, i) => (
                <span key={i} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  {bag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ OPTIONAL: Model Comparison (only if line has multiple models with specs) ═══ */}
      {hasComparison && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: `${category.color}15`, color: category.color }}>
              Model Selection Guide
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">Full Range Comparison</h2>
            <p className="mt-2 text-slate-600">See how the {model.name} compares to other models in {line.name}.</p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">Parameter</th>
                    {allModels.map((m) => (
                      <th
                        key={m.slug}
                        className="px-5 py-3.5 text-xs font-bold uppercase border-b border-slate-200"
                        style={m.slug === model.slug ? { color: category.color, background: `${category.color}0D` } : { color: "#64748b" }}
                      >
                        {m.name.split(" ").slice(0, 2).join(" ")}
                        {m.slug === model.slug && <span className="block text-[9px] font-bold mt-0.5">★ You Are Here</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonKeys.map((key, ri) => (
                    <tr key={key} className={ri % 2 === 1 ? "bg-slate-50/60" : ""}>
                      <td className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase border-b border-slate-100 last:border-0">{key}</td>
                      {allModels.map((m) => (
                        <td
                          key={m.slug}
                          className="px-5 py-3.5 text-sm text-slate-700 border-b border-slate-100 last:border-0"
                          style={m.slug === model.slug ? { background: `${category.color}0D`, fontWeight: 700 } : {}}
                        >
                          {m.specs?.[key] || "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ═══ OPTIONAL: Why OYANG (only if line has this data) ═══ */}
      {line.whyOyang && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">Why OYANG {line.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {line.whyOyang.map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${category.color}15` }}>
                  <CheckCircle2 className="w-4.5 h-4.5" style={{ color: category.color }} />
                </div>
                <h3 className="font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ OPTIONAL: Other models in this line ═══ */}
      {otherModels.length > 0 && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8">More Models in {line.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherModels.map((m) => (
              <Link
                key={m.slug}
                href={`/products/${category.slug}/${line.slug}/${m.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-[180px] overflow-hidden bg-slate-100">
                  <Image src={m.image || line.image} alt={m.name} fill className="object-cover transition-all duration-500 group-hover:scale-105" />
                  {m.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-white">{m.tag}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-primary transition-colors duration-300 leading-snug">{m.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6 line-clamp-2">{m.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: category.color }}>
                    View Machine <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ═══ OPTIONAL: FAQ ═══ */}
      {line.faqs && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <FaqAccordion faqs={line.faqs} color={category.color} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-0 py-16">
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