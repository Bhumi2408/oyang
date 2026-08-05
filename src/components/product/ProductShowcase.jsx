"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { categories } from "@/app/lib/products-data";

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="space-y-16 lg:space-y-28">
        {categories.map((category, index) => {
          const reversed = index % 2 === 1;
          const lineCount = category.lines.length;

          const imageBlock = (
            <motion.div
              key="image"
              initial={{ opacity: 0, x: reversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-1/2 lg:shrink-0"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-xl h-[280px] sm:h-[360px] lg:h-[440px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                {/* Bottom gradient for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${category.color}CC 0%, ${category.color}00 55%)`,
                  }}
                />

                {/* Number badge, top-left */}
                <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <span className="font-extrabold text-sm" style={{ color: category.color }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Line count pill, bottom-left over gradient */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2">
                  <Layers className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    {lineCount} Product {lineCount === 1 ? "Line" : "Lines"}
                  </span>
                </div>
              </div>
            </motion.div>
          );

          const contentBlock = (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: reversed ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <span
                className="inline-block h-1 w-12 rounded-full mb-5"
                style={{ background: category.color }}
              />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                {category.name}
              </h2>

              <p className="mt-4 text-slate-600 leading-7 max-w-lg">{category.longDesc}</p>

              {/* Line tags — single flowing row, cleaner than a 2-column split */}
              <div className="flex flex-wrap gap-2 mt-6">
                {category.lines.map((line) => (
                  <Link
                    key={line.slug}
                    href={`/products/${category.slug}/${line.slug}`}
                    className="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300"
                    style={{
                      borderColor: `${category.color}40`,
                      color: category.color,
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = category.color;
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = category.color;
                    }}
                  >
                    {line.name}
                  </Link>
                ))}
              </div>

              <Link
                href={`/products/${category.slug}`}
                className="inline-flex items-center gap-2 mt-8 rounded-full px-7 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)` }}
              >
                Explore {category.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );

          return (
            <div
              key={category.slug}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              {reversed ? (
                <>
                  {contentBlock}
                  {imageBlock}
                </>
              ) : (
                <>
                  {imageBlock}
                  {contentBlock}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}