"use client";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 text-center bg-white">
      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mx-auto" strokeWidth={2.5} />

      <p className="mt-5 sm:mt-6 max-w-4xl mx-auto text-lg sm:text-2xl lg:text-3xl font-extrabold leading-snug text-[#0f172a]">
        "Innovation is our driving force — the trust of customers all over the
        world has always inspired our{" "}
        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          thinking and technology innovation,
        </span>{" "}
        pushing the industry continuously forward."
      </p>

      <p className="mt-5 sm:mt-6 text-xs sm:text-sm font-semibold text-slate-500">
        — OYANG / Ounuo Machinery, Global Team
      </p>
    </section>
  );
}