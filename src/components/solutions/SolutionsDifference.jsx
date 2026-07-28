"use client";
import { CheckCircle2, TrendingUp } from "lucide-react";

const advantages = [
  {
    title: "200+ Engineers, 30+ Years Avg. Experience",
    desc: "A $100M+ R&D program backed by an in-house engineering team continuously developing energy-efficient, high-precision machinery.",
  },
  {
    title: "280+ Patents Granted",
    desc: "Including 80+ invention patents — built on nearly two decades of engineering innovation.",
  },
  {
    title: "Complete In-House Manufacturing",
    desc: "Core components independently produced using Mazak, Okuma and Schaudt precision equipment.",
  },
];

const comparison = [
  ["Patents Granted", "280+ (incl. 80+ invention)", "Usually few or none"],
  ["R&D Investment", "$100M+, 200+ engineers", "Often outsourced"],
  ["Core Component Production", "Complete in-house (CNC)", "Typically outsourced"],
  ["Certifications", "ISO9001, CE, IAF, CNAS, High-Tech Enterprise", "Usually one or two"],
  ["Regional Support Offices", "8 dedicated regions worldwide", "Limited network"],
  ["Warranty", "1 year from installation sign-off", "Varies"],
];

export default function SolutionsDifference() {
  return (
    <section className="py-10 sm:py-16 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 sm:px-5 py-2">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">The Ounuo Difference</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Why Manufacturers
            <br />
            Switch to{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ounuo
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
            We don't just sell machines — we deliver a complete production
            advantage, backed by nearly two decades of in-house engineering.
            See how Ounuo compares to typical industry alternatives.
          </p>

          <div className="space-y-4 mt-6 sm:mt-7">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Table */}
        <div className="rounded-[24px] sm:rounded-[36px] overflow-hidden bg-linear-to-br from-[#041b33] via-[#07253f] to-[#0b3f46] p-5 sm:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] min-w-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[480px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-white text-sm">Feature</th>
                  <th className="pb-4 text-secondary text-sm">Ounuo</th>
                  <th className="pb-4 text-slate-400 text-sm">Others</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0">
                    <td className="py-4 text-sm text-white font-semibold pr-3">{row[0]}</td>
                    <td className="py-4 text-sm text-[#ffb84d] font-bold pr-3">{row[1]}</td>
                    <td className="py-4 text-sm text-slate-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}