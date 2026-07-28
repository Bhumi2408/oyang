"use client";
import {
  Coffee,
  Gift,
  Heart,
  Home,
  Pill,
  PawPrint,
  Shirt,
  ShoppingCart,
  Truck,
  Utensils,
} from "lucide-react";

const industries = [
  { name: "Food & Takeaway", icon: Utensils },
  { name: "Fashion & Apparel", icon: Shirt },
  { name: "Beverages", icon: Coffee },
  { name: "Retail & Supermarket", icon: ShoppingCart },
  { name: "Gift & Luxury", icon: Gift },
  { name: "E-commerce & Logistics", icon: Truck },
  { name: "Personal Care & Household", icon: Home },
  { name: "Pharmaceutical & Healthcare", icon: Pill },
  { name: "Pet Food & Supplies", icon: PawPrint },
];

export default function IndustriesSection() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-bold tracking-wide text-secondary">
            INDUSTRIES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
            Search By Application
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            We power production lines across nine core application categories worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <button
                key={index}
                type="button"
                className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white px-4 sm:px-6 py-8 sm:py-10 text-center transition-all duration-300 hover:border-transparent hover:from-primary/80 hover:to-secondary/80 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-secondary transition-colors duration-300 group-hover:text-white" />
                <span className="font-bold text-sm sm:text-base text-[#0f172a] transition-colors duration-300 group-hover:text-white">
                  {industry.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}