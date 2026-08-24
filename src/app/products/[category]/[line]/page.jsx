import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { categories, getLine } from "@/app/lib/products-data";
import FaqAccordion from "@/components/product/FaqAccordion";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.lines.map((l) => ({ category: c.slug, line: l.slug })),
  );
}

export async function generateMetadata({ params }) {
  const { category: categorySlug, line: lineSlug } = await params;
  const { category, line } = getLine(categorySlug, lineSlug);
  if (!category || !line) return {};

  return {
    title: `${line.name} | ${category.name} | Ounuo Machinery`,
    description: line.longDesc,
    alternates: {
      canonical: `https://ounuo-machinery.com/products/${category.slug}/${line.slug}`,
    },
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

  const hasSeries = Array.isArray(line.series) && line.series.length > 0;
  const hasModels =
    !hasSeries && Array.isArray(line.models) && line.models.length > 0;

  // Build a comparison table from flat models' `specs` if every model has specs
  const comparisonRows = hasModels
    ? (() => {
        const allSpecKeys = [
          ...new Set(line.models.flatMap((m) => Object.keys(m.specs || {}))),
        ];
        if (allSpecKeys.length === 0) return null;
        return { keys: allSpecKeys, models: line.models };
      })()
    : null;

  return (
    <>
      {/* Header */}
      <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-32 pb-16 px-6 lg:px-24">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[150px]"
          style={{ background: `${category.color}30` }}
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/60 font-medium mb-6 flex-wrap">
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
            <Link
              href={`/products/${category.slug}`}
              className="hover:text-white transition-colors duration-300"
            >
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

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
            {line.name}
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-8 max-w-2xl">
            {line.longDesc}
          </p>

          {/* Bag style tags */}
          {line.bagStyleTags && (
            <div className="flex flex-wrap gap-2 mt-6">
              {line.bagStyleTags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        {line.stats && (
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl">
            {line.stats.map((stat, i) => (
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
        )}
      </div>

      {/* Bag types produced */}
      {line.bagTypesProduced && (
        <section className="py-14 px-6 lg:px-24 bg-white border-b border-slate-100">
          <h2 className="text-xl font-extrabold text-[#0f172a] mb-6">
            What Can This Machine Produce?
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {line.bagTypesProduced.map((bag, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {bag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Highlight stats (nonwoven-style) */}
      {line.highlightStats && (
        <section
          className="py-14 px-6 lg:px-24"
          style={{ background: `${category.color}08` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            {line.highlightStats.map((s, i) => (
              <div key={i}>
                <p
                  className="text-3xl lg:text-4xl font-extrabold"
                  style={{ color: category.color }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Series (nonwoven-style: own models + process per series) */}
      {hasSeries &&
        line.series.map((series, si) => (
          <section
            key={si}
            className={`py-16 lg:py-20 px-6 lg:px-24 ${si % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
          >
            <div className="max-w-8xl mx-auto">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white mb-4"
                style={{ background: category.color }}
              >
                {series.tagline}
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">
                {series.name}
              </h2>
              <p className="mt-3 text-slate-600 leading-7 max-w-3xl">
                {series.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {series.models.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/products/${category.slug}/${line.slug}/${model.slug}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="relative h-[180px] overflow-hidden bg-slate-100">
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-white">
                        {model.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-primary transition-colors duration-300">
                        {model.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-6">
                        {model.shortDesc}
                      </p>
                      {Object.keys(model.specs || {}).length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {Object.entries(model.specs)
                            .slice(0, 2)
                            .map(([k, v]) => (
                              <span
                                key={k}
                                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                              >
                                {k}: {v}
                              </span>
                            ))}
                        </div>
                      )}
                      <span
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                        style={{ color: category.color }}
                      >
                        View Machine{" "}
                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {series.process && (
                <div className="mt-14">
                  <h3 className="text-xl font-extrabold text-[#0f172a] mb-6">
                    Production Process
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {series.process.map((step) => (
                      <div
                        key={step.step}
                        className="rounded-xl border border-slate-200 bg-white p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                            style={{ background: category.color }}
                          >
                            {step.step}
                          </span>
                          <h4 className="font-bold text-sm text-[#0f172a]">
                            {step.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-xs text-slate-600 leading-5">
                          {step.desc}
                        </p>
                        {!step.allModels && (
                          <span
                            className="mt-2 inline-block text-[10px] font-bold"
                            style={{ color: category.color }}
                          >
                            ★ {step.availableFrom}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {series.comparisonNote && (
                <p className="mt-8 text-sm text-slate-600 leading-7 bg-white border border-slate-200 rounded-xl p-5">
                  💡 {series.comparisonNote}
                </p>
              )}
            </div>
          </section>
        ))}

      {/* Flat models grid (roll-fed-style) */}
      {hasModels && (
        <section className="py-12 lg:py-16 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8">
            {line.models.length} Model{line.models.length > 1 ? "s" : ""}{" "}
            Available
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {line.models.map((model) => (
              <Link
                key={model.slug}
                href={`/products/${category.slug}/${line.slug}/${model.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-[230px] overflow-hidden bg-slate-100">
                  <Image
                    src={model.image || line.image}
                    alt={model.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {model.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-white">
                      {model.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-primary transition-colors duration-300 leading-snug">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">
                    {model.shortDesc}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: category.color }}
                  >
                    View Machine{" "}
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {!hasSeries && !hasModels && (
        <section className="py-16 text-center px-6">
          <p className="text-lg text-slate-500">
            Detailed model listings for this line are coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-full px-7 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)`,
            }}
          >
            Request Machine Details <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      )}

      {/* Comparison table (flat-models lines only) */}
      {comparisonRows && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8 text-center">
            Model Selection Guide
          </h2>
          <div className="max-w-8xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-3.5 text-sm font-bold text-[#0f172a] border-b border-slate-200">
                    Machine
                  </th>
                  {comparisonRows.keys.map((key) => (
                    <th
                      key={key}
                      className="px-5 py-3.5 text-sm font-bold text-[#0f172a] border-b border-slate-200"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.models.map((model, ri) => (
                  <tr
                    key={model.slug}
                    className={ri % 2 === 1 ? "bg-slate-50/60" : ""}
                  >
                    <td className="px-5 py-3.5 text-sm font-bold text-[#0f172a] border-b border-slate-100 last:border-0">
                      {model.name.split(" ").slice(0, 2).join(" ")}
                    </td>
                    {comparisonRows.keys.map((key) => (
                      <td
                        key={key}
                        className="px-5 py-3.5 text-sm text-slate-600 border-b border-slate-100 last:border-0"
                      >
                        {model.specs?.[key] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Compatible Materials */}
      {line.compatibleMaterials && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            What Materials Can Be Processed?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {line.compatibleMaterials.map((mat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden"
              >
                <div className="relative h-[250px] bg-slate-100">
                  <Image
                    src={mat.image}
                    alt={mat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0f172a]">{mat.title}</h3>
                  <p
                    className="mt-1 text-xs font-semibold"
                    style={{ color: category.color }}
                  >
                    {mat.range}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {mat.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="text-xs text-slate-600 leading-5 flex gap-1.5"
                      >
                        <span className="shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {mat.series && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {mat.series.map((s, si) => (
                        <span
                          key={si}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Production process (flat-models lines) */}
      {line.process && !hasSeries && (
        <section className="py-12 lg:py-16 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3 text-center">
            Production Process
          </h2>
          {line.processNote && (
            <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-10">
              {line.processNote}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {line.process.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                    style={{ background: category.color }}
                  >
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-[#0f172a]">
                    {step.title}
                  </h4>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Automation options */}
      {line.automationOptions && (
        <section className="py-16 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-xl font-extrabold text-[#0f172a] mb-8 text-center">
            Automatic Packing & Palletizing Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {line.automationOptions.map((opt, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-5 text-center"
              >
                <h4 className="font-bold text-sm text-[#0f172a]">
                  {opt.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-5">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Applications gallery */}
      {line.applications && (
        <section className="py-12 lg:py-16 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            Real Applications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-8xl mx-auto items-stretch">
            {line.applications.map((app, i) => (
              <div
                key={i}
                className="flex flex-col h-full rounded-xl overflow-hidden border border-slate-200"
              >
                <div className="relative h-[180px] shrink-0">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col grow">
                  <p className="text-xs font-bold text-[#0f172a] leading-tight">
                    {app.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why OYANG */}
      {line.whyOyang && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            Why OYANG {line.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {line.whyOyang.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6"
              >
                <h3 className="font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Machine Structure (unit-by-unit breakdown) */}
      {line.machineStructure && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            Machine Structure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {line.machineStructure.map((unit, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-extrabold text-[#0f172a] mb-3">
                  {unit.unit}
                </h3>
                <ul className="space-y-2">
                  {unit.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="text-sm text-slate-600 leading-6 flex gap-2"
                    >
                      <span
                        className="shrink-0"
                        style={{ color: category.color }}
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Component brands */}
          {line.componentBrands && (
            <div className="max-w-3xl mx-auto mt-10">
              <h3 className="font-bold text-[#0f172a] mb-4 text-center">
                World-Class Component Brands
              </h3>
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                {line.componentBrands.map((c, i) => (
                  <div
                    key={i}
                    className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
                  >
                    <span className="text-slate-500 font-medium">
                      {c.component}
                    </span>
                    <span className="font-bold text-[#0f172a]">{c.brand}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Competitive Advantage (OYANG vs Standard) */}
      {line.competitiveAdvantage && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3 text-center">
            {line.competitiveAdvantage.title}
          </h2>
          <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-10">
            {line.competitiveAdvantage.intro}
          </p>

          {/* Comparison table */}
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 bg-white mb-10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-3.5 text-sm font-bold text-[#0f172a] border-b border-slate-200">
                    Comparison
                  </th>
                  <th
                    className="px-5 py-3.5 text-sm font-bold border-b border-slate-200"
                    style={{ color: category.color }}
                  >
                    OYANG
                  </th>
                  <th className="px-5 py-3.5 text-sm font-bold text-slate-500 border-b border-slate-200">
                    Standard Competitors
                  </th>
                </tr>
              </thead>
              <tbody>
                {line.competitiveAdvantage.comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50/60" : ""}>
                    <td className="px-5 py-3.5 text-sm font-semibold text-[#0f172a] border-b border-slate-100 last:border-0">
                      {row.label}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-700 border-b border-slate-100 last:border-0">
                      {row.oyang}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-500 border-b border-slate-100 last:border-0">
                      {row.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Advantages list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
            {line.competitiveAdvantage.advantages.map((adv, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-slate-200 p-5"
              >
                <h4 className="font-bold text-sm text-[#0f172a]">
                  {adv.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-5">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Cost savings strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {line.competitiveAdvantage.costSavings.map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center"
                style={{ background: `${category.color}10` }}
              >
                <p
                  className="text-xl font-extrabold"
                  style={{ color: category.color }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Videos grid (real, individual links) */}
      {line.videos && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-slate-50">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            Watch These Machines in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
            {line.videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${category.color}15` }}
                >
                  <PlayCircle
                    className="w-5 h-5"
                    style={{ color: category.color }}
                  />
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {video.title}
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Video channel fallback link */}
      {line.videoChannel && (
        <section className="py-8 px-6 lg:px-24 bg-white text-center">
          <a
            href={line.videoChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold"
            style={{ color: category.color }}
          >
            <PlayCircle className="w-5 h-5" /> Watch more on our YouTube channel
          </a>
        </section>
      )}

      {/* FAQ */}
      {line.faqs && (
        <section className="py-16 lg:py-20 px-6 lg:px-24 bg-white">
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-10 text-center">
            {line.name} — FAQ
          </h2>
          <FaqAccordion faqs={line.faqs} color={category.color} />
        </section>
      )}

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
              Need Help Choosing a {line.name}?
            </h3>
            <p className="mt-3 text-white/85 max-w-xl">
              Share your bag type, material, target output and automation level
              — our engineers will recommend the right model within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ color: category.color }}
          >
            Get a Free Recommendation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
