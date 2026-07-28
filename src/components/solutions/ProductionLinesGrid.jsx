import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Package, ShoppingBag, Sparkles, Utensils } from "lucide-react";

const lines = [
  {
    icon: ShoppingBag,
    color: "#135CA1",
    image: "/solutions/production-line/nonwoven-bag.jpg",
    title: "Nonwoven Bag Line",
    desc: "Designed for reusable shopping bags, takeaway box bags, T-shirt bags, D-cut bags, drawstring bags and nonwoven box bags. Suitable for supermarket, retail, food delivery and apparel packaging manufacturers.",
    chips: ["PP Spunbond Nonwoven", "Laminated Nonwoven", "RPET Fabric", "Optional Full Automation"],
    outputs: ["Insulated Box Bag", "Loop Handle Box Bag", "D-Cut Box Bag", "D-Cut Bag", "Drawstring Bag", "T-Shirt Bag", "Handle Bag", "Flip Handle Box Bag", "Side Gusset Bag"],
    cta: "Need a nonwoven bag line with automatic inspection, rejection, bundling or packing?",
  },
  {
    icon: Package,
    color: "#ff7a18",
    image: "/solutions/production-line/paper-bag.jpg",
    title: "Paper Bag Line",
    desc: "For roll-fed kraft paper bags, shopping bags, takeaway bags, SOS bags, flat handle bags and twisted handle paper bags. Suitable for food service, retail, supermarket and apparel packaging manufacturers.",
    chips: ["Kraft Paper Rolls", "Coated Paper Rolls", "Food · Shopping · Retail", "Handle / No Handle Options"],
    outputs: ["Twisted Handle Paper Bag", "Flat Handle Paper Bag", "SOS Square Bottom Paper Bag", "D-Cut Paper Bag", "V-Bottom Paper Bag"],
    cta: "Planning a roll-fed paper bag factory? Send your bag size, paper GSM and target output.",
  },
  {
    icon: Sparkles,
    color: "#BC0019",
    image: "/solutions/production-line/sheet-feed.png",
    title: "Sheet Feed Paper Bag Line",
    desc: "Designed for high-end paper bags used in gift, luxury retail, apparel, wine, cosmetics and premium brand packaging — focused on sheet-fed forming with a premium crease-free appearance.",
    chips: ["Sheet Fed Art Paper 180–300 GSM", "Non-Crease Bag Structure", "Auto Rope Threading"],
    outputs: ["Non-Crease Sheet Fed Paper Bag", "Twisted Handle Paper Bag"],
    cta: "Need to produce premium sheet-fed paper bags with stable crease-free appearance?",
  },
  {
    icon: Layers,
    color: "#9D5FC8",
    image: "/solutions/production-line/flexible-pouch.png",
    title: "Flexible Pouch Line",
    desc: "For laminated film pouches used in food, beverage, coffee, pet food, daily care, household and healthcare packaging. Machine selection depends on pouch structure and film material.",
    chips: ["BOPP · PET · CPP · PE", "Aluminum Foil Composite Film", "Food · Beverage · Pet Food", "Daily Care · Healthcare"],
    outputs: ["Quad Seal Pouch", "Flat Bottom Pouch", "Center Seal Gusset Pouch", "Center Seal Pouch", "Stand-Up Pouch", "3-Side Seal Pouch"],
    cta: "For flexible pouch projects, send pouch drawing, film structure and target output for machine matching.",
  },
  {
    icon: Utensils,
    color: "#809783",
    image: "/solutions/production-line/paper-forming.png",
    title: "Paper Forming Line",
    desc: "For eco-friendly paper formed products used in food service and takeaway packaging — paper cutlery (spoon, fork, knife), paper plates and other formed paper products replacing single-use plastic.",
    chips: ["Paper Rolls", "Paperboard", "Food Service · Takeaway"],
    outputs: ["Paper Cutlery", "Paper Plates", "Formed Paper Products"],
    cta: "For paper forming products, send your product sample, drawing and material specification for evaluation.",
  },
];

export default function ProductionLinesGrid() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20 border-y border-slate-200 py-6">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">130,000㎡</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">Manufacturing base</p>
          </div>
          <div className="text-center border-x border-slate-200">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">80+</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">Bilingual engineers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">280+</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">Patents</p>
          </div>
        </div>

        {/* Lines */}
        <div className="space-y-14 sm:space-y-20">
          {lines.map((line, index) => {
            const Icon = line.icon;
            const reversed = index % 2 === 1;
            const sectionId = line.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

            return (
              <div
                key={index}
                id={sectionId}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-24 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative rounded-[24px] overflow-hidden h-[240px] sm:h-[320px] lg:h-[380px] shadow-lg">
                  <Image
                    src={line.image}
                    alt={line.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${line.color}40, transparent 50%)` }}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: line.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                    {line.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                    {line.desc}
                  </p>

                  {/* Spec chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {line.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `${line.color}14`, color: line.color }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Bag types produced */}
                  <div className="mt-5">
                    <p className="text-xs font-bold tracking-wide uppercase text-slate-400 mb-2">
                      Produces
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {line.outputs.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: line.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 text-sm text-slate-500 italic">{line.cta}</p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold group/link"
                    style={{ color: line.color }}
                  >
                    Request Line Plan
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}