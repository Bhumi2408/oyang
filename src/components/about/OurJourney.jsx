"use client";
import { motion } from "framer-motion";

const journey = [
  { number: "01", year: "2006", title: "Ounuo Founded", desc: "Established in Wenzhou with our first project: the Non Woven Bag Making Machine." },
  { number: "02", year: "Gen 2", title: "Paper Bag Machine Launched", desc: "Our second product line, built on 35 years of combined senior engineering experience." },
  { number: "03", year: "—", title: "CE, IAF & CNAS Certified", desc: "Achieved Chinese National High-Tech Enterprise status plus CE, IAF and CNAS certifications." },
  { number: "04", year: "$30M", title: "Precision Manufacturing Center", desc: "Invested in a high-precision CNC facility with Mazak, Okuma and Schaudt equipment for full in-house component production." },
  { number: "05", year: "19th Gen", title: "Non Woven Machine Evolution", desc: "Our non woven bag making machine has evolved through 19 generations, reaching ~95% global market share in its category." },
  { number: "06", year: "2025-26", title: "Global Brand Expansion", desc: "Unified OUNUO, OYANG and ALLWELL under one brand promise, exhibiting at ProPak Asia and EXPOPRINT Latin America." },
];

export default function OurJourney() {
  return (
    <section className="py-24 px-10 lg:px-24 bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] text-center">
      <h2 className="text-5xl font-extrabold text-white">
        Our <span className="text-secondary">Journey</span>
      </h2>
      <p className="mt-4 text-lg text-slate-300">Two decades of engineering the future of packaging.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="relative text-left rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10"
          >
            <div className="absolute -top-5 -right-5 w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-sm font-extrabold text-[#0f172a] shadow-lg">
              {item.number}
            </div>

            <h3 className="text-3xl font-extrabold text-secondary">{item.year}</h3>
            <h4 className="mt-2 text-lg font-bold text-white">{item.title}</h4>
            <p className="mt-3 text-sm text-slate-300 leading-6">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}