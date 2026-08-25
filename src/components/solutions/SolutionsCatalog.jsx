"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, Layers, Package, Search, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";

const categories = [
  { key: "all", label: "All Bag Types", icon: Sparkles },
  { key: "paper", label: "Paper Bag", icon: Package },
  { key: "nonwoven", label: "Nonwoven Bag", icon: ShoppingBag },
  { key: "pouch", label: "Flexible Pouch", icon: Layers },
];

const bagTypes = [
  // Paper Bag Types
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/Non-Crease-Sheet-Fed-Paper-Bag.png", title: "Non-Crease Sheet Fed Paper Bag", desc: "Premium sheet-fed paper bag for luxury retail, gift, wine, apparel and high-end brand packaging. No crease line, clean flat appearance.", tags: ["Luxury", "Gift", "Apparel", "Sheet Fed", "Non-Crease"] },
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/twisted-handle-paper-bag.png", title: "Twisted Handle Paper Bag", desc: "Common paper shopping bag for fashion, retail, bakery, coffee shops and takeaway packaging with twisted rope handle.", tags: ["Shopping", "Retail", "Bakery", "Twisted Handle"] },
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/flat-handle-paper-bag.png", title: "Flat Handle Paper Bag", desc: "Flat handle paper bag for supermarket, takeaway, retail and chain store packaging with inline fold-in flat rope handle.", tags: ["Supermarket", "Takeaway", "Flat Handle", "Inline Fold-In"] },
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/sos-square-bottom-paper-bag.png", title: "SOS Square Bottom Paper Bag", desc: "Square bottom paper bag for bakery, grocery, fast food, snack and general retail packaging. Optional patch, window or printing unit.", tags: ["Food", "Grocery", "SOS Bag", "Square Bottom", "Bakery"] },
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/d-cut-paper-bag.png", title: "D-Cut Paper Bag", desc: "D-cut paper bag for takeaway, retail and promotional packaging where a punched handle opening is required.", tags: ["D-Cut", "Takeaway", "Retail", "Patch Option"] },
  { category: "paper", label: "PAPER", color: "#ff7a18", image: "/solutions/bag-types/flat-bottom-paper-bag.png", title: "V-Bottom Paper Bag", desc: "V-bottom (sharp bottom) paper bag for bakery, snack, food takeaway and retail product packaging. Lightweight and cost-efficient.", tags: ["Bakery", "Snack", "Food Packaging", "V-Bottom"] },

  // Nonwoven Bag Types
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/insulated-box-bag.png", title: "Insulated Box Bag", desc: "Used for takeaway, pizza, cake, food delivery and thermal packaging applications.", tags: ["Takeaway", "Pizza", "Cake", "Insulated", "Food Delivery"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/loop-handle-box-bag.png", title: "Loop Handle Box Bag", desc: "Reusable nonwoven box bag with loop handle for supermarkets, retail chains and takeaway brands.", tags: ["Loop Handle", "Box Bag", "Retail", "Reusable"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/d-cut-box-bag.png", title: "D-Cut Box Bag", desc: "Box-bottom nonwoven bag with D-cut opening for takeaway, retail and promotional packaging.", tags: ["D-Cut", "Box Bottom", "Takeaway", "Retail"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/d-cut-bag.png", title: "D-Cut Bag", desc: "Standard nonwoven D-cut bag for retail, exhibition, promotion and shopping use.", tags: ["D-Cut", "Shopping", "Promotion", "Exhibition"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/drawstring-bag.png", title: "Drawstring Bag", desc: "Nonwoven drawstring bag for shoes, apparel, gift, storage and promotional packaging.", tags: ["Shoes", "Apparel", "Gift", "Storage"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/t-shirt-bag.png", title: "T-Shirt Bag", desc: "High-volume nonwoven T-shirt bag for supermarkets, grocery chains and retail packaging.", tags: ["Supermarket", "Grocery", "High Output", "W-Cut"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/handle-bag.png", title: "Handle Bag", desc: "Nonwoven handle bag for shopping, fashion retail, exhibitions and brand packaging with inline handle sealing.", tags: ["Handle", "Shopping", "Fashion", "Brand Bag"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/flip-handle-box-bag.png", title: "Flip Handle Box Bag", desc: "Nonwoven box bag with flip handle for retail shopping, takeaway and reusable packaging.", tags: ["Box Bag", "Flip Handle", "Reusable", "Retail"] },
  { category: "nonwoven", label: "NONWOVEN", color: "#135CA1", image: "/solutions/bag-types/side-gusset-bag.png", title: "Side Gusset Bag", desc: "Side gusset nonwoven bag for shopping, garment, retail and larger-volume packaging applications.", tags: ["Side Gusset", "Retail", "Garment", "Large Volume"] },

  // Flexible Pouch Types
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/quad-seal-pouch.png", title: "Quad Seal Pouch", desc: "Premium pouch structure for coffee, pet food, dry food and high shelf-display packaging. Four side seals provide excellent stability.", tags: ["Coffee", "Pet Food", "Dry Food", "Premium", "Shelf Display"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/flat-bottom-pouch.png", title: "Flat Bottom Pouch", desc: "Flat bottom pouch for coffee, tea, pet food, snacks and premium food packaging with excellent shelf display performance.", tags: ["Coffee", "Tea", "Pet Food", "Snack", "Shelf Display"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/center-seal-gusset-pouch.png", title: "Center Seal Gusset Pouch", desc: "Center seal gusset pouch for food, powder, snacks and daily product packaging with expandable side gusset structure.", tags: ["Food", "Powder", "Snack", "Gusset", "Daily Use"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/center-seal-pouch.png", title: "Center Seal Pouch", desc: "Center seal pouch for food, daily chemical, household and personal care packaging with laminated film structure.", tags: ["Food", "Daily Care", "Household", "Personal Care"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/stand-up-pouch.png", title: "Stand-Up Pouch", desc: "Stand-up pouch (Doypack) for beverage, food, pet snacks, personal care and household refill packs with stable self-standing structure.", tags: ["Beverage", "Food", "Pet Snack", "Refill Pack", "Doypack"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/3-side-seal-pouch.png", title: "3-Side Seal Pouch", desc: "3-side seal pouch for facial masks, healthcare sachets, food packs and small flexible packaging applications.", tags: ["Mask Pouch", "Healthcare", "Food Pack", "Sachet"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/stand-up-pouch.png", title: "Stand-Up Zipper Pouch", desc: "Resealable stand-up zipper pouch for pet food, snacks, coffee, personal care and household refill packaging.", tags: ["Zipper", "Resealable", "Pet Food", "Coffee"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/3-side-seal-pouch.png", title: "Zipper Pouch", desc: "Resealable zipper pouch for pharmaceutical, healthcare, food and household product packaging.", tags: ["Zipper", "Resealable", "Pharmaceutical", "Household"] },
  { category: "pouch", label: "POUCH", color: "#9D5FC8", image: "/solutions/bag-types/quad-seal-pouch.png", title: "Multi-Function Pouch", desc: "For factories requiring 3-side seal, stand-up and zipper pouches on one production platform to serve multiple customers.", tags: ["Multi-Function", "3-Side Seal", "Stand-Up", "Zipper"] },
];

export default function SolutionsCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return bagTypes.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">


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
              placeholder="Search by bag shape, tag, end-use..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 pr-5 py-3 sm:py-3.5 text-sm text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all duration-300"
              style={{ paddingLeft: "3.25rem" }}
            />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
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
                  className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold tracking-wide uppercase transition-all duration-300 border ${
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
        <div className="mt-8 sm:mt-10">
          <p className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--color-secondary)" }}>
            By Bag Shape & Structure
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]">
            {filtered.length} Bag Types Available
          </h2>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="mt-12 sm:mt-14 text-center text-slate-500">
            No bag types match your search — try a different keyword or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
            {filtered.map((item, index) => (
              <div
                key={index}
                id={item.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}
                className="group rounded-2xl border border-slate-200 overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl scroll-mt-24"
              >
                <div className="relative w-full h-[230px] sm:h-[260px] overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-all duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${item.color}40, transparent 55%)` }}
                  />
                  <span
                    className="absolute top-4 left-4 z-10 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-wider text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.label}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${item.color}14`, color: item.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact"
                    type="button"
                    className="group/btn mt-4 flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: item.color }}
                  >
                    Get Solution
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}