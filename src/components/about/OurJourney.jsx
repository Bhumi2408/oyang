"use client";
import { motion } from "framer-motion";

const journey = [
  { number: "01", year: "2006", title: "Ounuo Founded", desc: "Established in Wenzhou, Zhejiang — starting OYANG Group's 20-year journey in eco-friendly packaging machinery." },
  { number: "02", year: "Full-Chain", title: "Product Line Expansion", desc: "Grew from a single machine into a full-chain manufacturer — nonwoven bag, paper bag, flexible pouch, printing and post-press converting machines." },
  { number: "03", year: "Certified", title: "ISO9001, CE, IAF & CNAS Certified", desc: "Achieved Chinese National High-Tech Enterprise status plus ISO9001, CE, IAF and CNAS certifications." },
  { number: "04", year: "$30M", title: "Precision Manufacturing Center", desc: "Invested $30M in a high-precision CNC facility with Mazak, Okuma and Schaudt equipment for full in-house component production." },
  { number: "05", year: "280+", title: "Patents & Continuous R&D", desc: "Built a $100M+ R&D program with 200+ engineers, resulting in 280+ patents and at least one new machine design launched every year." },
  { number: "06", year: "2025-26", title: "Global Brand Expansion", desc: "Unified OUNUO, OYANG and ALLWELL under one brand promise, exhibiting at CHINAPLAS 2025 and serving 8 regions worldwide." },
];

export default function OurJourney() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
        Our <span className="text-secondary">Journey</span>
      </h2>
      <p className="mt-4 text-base sm:text-lg text-slate-300">
        Two decades of engineering the future of packaging.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="relative text-left rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10"
          >
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-secondary flex items-center justify-center text-xs sm:text-sm font-extrabold text-[#0f172a] shadow-lg">
              {item.number}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary">
              {item.year}
            </h3>
            <h4 className="mt-2 text-base sm:text-lg font-bold text-white">
              {item.title}
            </h4>
            <p className="mt-3 text-sm text-slate-300 leading-6">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}