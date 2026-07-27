"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Box,
  Briefcase,
  Coffee,
  Cookie,
  Gift,
  Layers,
  Package,
  Printer,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  Utensils,
} from "lucide-react";

const categories = [
  { key: "all", label: "All Solutions", icon: Sparkles },
  { key: "nonwoven", label: "Nonwoven Bag", icon: ShoppingBag },
  { key: "paper", label: "Paper Bag", icon: Package },
  { key: "pouch", label: "Pouch", icon: Layers },
  { key: "cutlery", label: "Cutlery", icon: Utensils },
  { key: "printing", label: "Printing", icon: Printer },
];

const solutions = [
  { category: "nonwoven", label: "NONWOVEN", icon: Shirt, title: "T-Shirt Bag", desc: "Vest-style nonwoven shopper for retail & supermarket.", image: "/images/product2.jpg" },
  { category: "nonwoven", label: "NONWOVEN", icon: Gift, title: "Box Bag w/ Handle", desc: "Premium gift & shopping box bag with stitched handle.", image: "/images/product3.jpg" },
  { category: "nonwoven", label: "NONWOVEN", icon: ShoppingBag, title: "D-Cut Bag", desc: "Lightweight die-cut shopper for promotions.", image: "/images/product4.jpg" },
  { category: "nonwoven", label: "NONWOVEN", icon: Briefcase, title: "Drawstring Bag", desc: "Multi-purpose pouch for sports, gifts & storage.", image: "/images/hero.jpg" },
  { category: "nonwoven", label: "NONWOVEN", icon: Coffee, title: "Insulated Food Bag", desc: "Aluminum-lined nonwoven for hot/cold delivery.", image: "/images/product5.jpg" },
  { category: "nonwoven", label: "NONWOVEN", icon: Box, title: "Box Bag (D-Cut)", desc: "Square bottom carrier with reinforced handle.", image: "/images/product2.jpg" },
  { category: "paper", label: "PAPER", icon: Package, title: "Twisted Handle Paper Bag", desc: "Luxury retail bag with twisted paper rope handle.", image: "/images/hero.jpg" },
  { category: "paper", label: "PAPER", icon: ShoppingBag, title: "Flat Handle Paper Bag", desc: "Eco shopper with flat paper handle, foldable.", image: "/images/product3.jpg" },
  { category: "paper", label: "PAPER", icon: Cookie, title: "Square Bottom Bag", desc: "SOS food & grocery bag, no handle.", image: "/images/product4.jpg" },
  { category: "paper", label: "PAPER", icon: Briefcase, title: "Paper Bag w/ D-Cut", desc: "Die-cut handle premium paper carrier.", image: "/images/product5.jpg" },
  { category: "paper", label: "PAPER", icon: Coffee, title: "Flat Bottom Bag", desc: "Coffee, snack & takeaway flat-base paper bag.", image: "/images/hero.jpg" },
  { category: "pouch", label: "POUCH", icon: Layers, title: "Stand-Up Pouch", desc: "Resealable doypack for snacks, coffee, pet food.", image: "/images/product4.jpg" },
];

export default function SolutionsCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return solutions.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="py-16 px-10 lg:px-24 bg-white">
      {/* Search + Filters bar */}
      <div className="flex flex-col gap-4 pb-6 border-b border-slate-200">
        <div className="relative w-full">
          <Search
            className="absolute w-5 h-5 text-slate-400 pointer-events-none"
            style={{ left: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by bag shape, end-product..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 pr-5 py-3.5 text-sm text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all duration-300"
            style={{ paddingLeft: "3.25rem" }}
          />
        </div>

        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                style={
                  isActive
                    ? { background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))" }
                    : { background: "#f1f5f9" }
                }
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide uppercase transition-all duration-300 border ${
                  isActive
                    ? "text-white border-transparent shadow-md"
                    : "text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Heading */}
      <div className="mt-10">
        <p className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--color-secondary)" }}>
          By Bag Shape & Product
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-[#0f172a]">
          {filtered.length} Solutions Available
        </h2>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="mt-14 text-center text-slate-500">
          No solutions match your search — try a different keyword or category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filtered.map((item, index) => {
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className="relative w-full overflow-hidden bg-slate-200"
                  style={{ height: "220px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  <span
                    className="absolute top-4 left-4 z-10 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-wider text-white"
                    style={{ background: "var(--color-secondary)" }}
                  >
                    {item.label}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-extrabold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">{item.desc}</p>

                  <button
                    type="button"
                    className="group/btn mt-4 flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Get Solution
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}