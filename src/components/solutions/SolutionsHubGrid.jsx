import Link from "next/link";
import { ArrowRight, Boxes, Layers, Package, ShoppingBag, Workflow } from "lucide-react";

const ways = [
  {
    href: "/solutions/applications",
    icon: ShoppingBag,
    title: "By Application",
    desc: "9 industries — Food & Takeaway, Fashion, Beverages, Retail, Gift & Luxury, E-commerce, Personal Care, Pharma, Pet Food.",
  },
  {
    href: "/solutions/production-lines",
    icon: Workflow,
    title: "By Production Line",
    desc: "5 complete lines — Nonwoven, Paper Bag, Sheet Fed, Flexible Pouch and Paper Forming.",
  },
  {
    href: "/solutions/bag-types",
    icon: Package,
    title: "By Bag Type",
    desc: "21 bag structures across Paper Bag, Nonwoven Bag and Flexible Pouch categories.",
  },
  {
    href: "/solutions/machine-functions",
    icon: Boxes,
    title: "By Machine Function",
    desc: "8 core functions — Slitting, Lamination, Printing, Die Cutting, Embossing, Hot Stamping, Packing, Palletizing.",
  },
  {
    href: "/solutions/materials",
    icon: Layers,
    title: "By Material",
    desc: "5 raw materials — Paper Rolls, Non-woven Fabric, Flexible Film, Paperboard, Corrugated Board.",
  },
];

export default function SolutionsHubGrid() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-wide text-secondary uppercase">Solutions Hub</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
            5 Ways to Find Your Right Machine
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Browse by application, production line, bag type, machine function or raw material —
            each path leads to the right OYANG machine configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {ways.map((w, index) => {
            const Icon = w.icon;
            return (
              <Link
                key={index}
                href={w.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 font-extrabold text-[#0f172a] text-lg">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">{w.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Explore
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}