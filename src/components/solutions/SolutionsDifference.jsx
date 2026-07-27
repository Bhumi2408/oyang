"use client";
import { CheckCircle2, TrendingUp } from "lucide-react";

const advantages = [
  {
    title: "70+ R&D Technicians",
    desc: "A dedicated in-house R&D team continuously develops energy-efficient, high-precision machinery.",
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
  ["R&D Technicians", "70+ dedicated staff", "Often outsourced"],
  ["Core Component Production", "Complete in-house (CNC)", "Typically outsourced"],
  ["Certifications", "High-Tech Enterprise, CE, IAF, CNAS", "Usually one or two"],
  ["Global Partner Companies", "4,500+", "Limited network"],
  ["Warranty", "1 year from installation", "Varies"],
];

export default function SolutionsDifference() {
  return (
    <section className="py-10 px-10 lg:px-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-5 py-2">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">The Ounuo Difference</span>
          </div>

          <h2 className="mt-5 text-5xl font-extrabold">
            Why Manufacturers
            <br />
            Switch to{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ounuo
            </span>
          </h2>

          <p className="mt-5 text-slate-600">
            We don't just sell machines — we deliver a complete production
            advantage, backed by nearly two decades of in-house engineering.
            See how Ounuo compares to typical industry alternatives.
          </p>

          <div className="space-y-4 mt-7">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Table */}
        <div className="rounded-[36px] overflow-hidden bg-linear-to-br from-[#041b33] via-[#07253f] to-[#0b3f46] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
          <table className="w-full text-left">
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
                  <td className="py-4 text-sm text-white font-semibold">{row[0]}</td>
                  <td className="py-4 text-sm text-[#ffb84d] font-bold">{row[1]}</td>
                  <td className="py-4 text-sm text-slate-400">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}