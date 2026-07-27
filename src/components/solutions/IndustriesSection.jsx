"use client";
import { Gift, Package, ShoppingBag, Truck } from "lucide-react";

const industries = [
  { name: "Shopping Bag", icon: ShoppingBag },
  { name: "Transport Bag", icon: Truck },
  { name: "Food Bag", icon: Package },
  { name: "Gift Wrapping Bag", icon: Gift },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 px-10 lg:px-24 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-bold tracking-wide text-secondary">
          INDUSTRIES
        </span>
        <h2 className="mt-3 text-5xl font-extrabold text-[#0f172a]">
          Search By Application
        </h2>
        <p className="mt-4 text-slate-500 text-lg">
          We power production lines across four core application categories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <button
              key={index}
              type="button"
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white px-6 py-10 text-center transition-all duration-300 hover:border-transparent hover:from-primary/80 hover:to-secondary/80 hover:shadow-xl hover:-translate-y-1"
            >
              <Icon className="w-9 h-9 text-secondary transition-colors duration-300 group-hover:text-white" />
              <span className="font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-white">
                {industry.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}