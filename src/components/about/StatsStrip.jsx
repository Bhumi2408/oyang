"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 20, prefix: "", suffix: "+", label: "YEARS SINCE 2006" },
  { number: 30, prefix: "$", suffix: "M", label: "INVESTED IN CNC MANUFACTURING" },
  { number: 19, prefix: "", suffix: "", label: "GENERATIONS OF INNOVATION" },
  { number: 95, prefix: "", suffix: "%", label: "GLOBAL MARKET SHARE (NONWOVEN)" },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#0a0f14] via-primary to-secondary/80 py-14 px-10 lg:px-24">
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`text-center py-6 lg:py-0 ${
              index !== 0 ? "lg:border-l border-white/20" : ""
            }`}
          >
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#FFA733]">
              {stat.prefix}
              <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </h3>

            <p className="mt-2 text-sm font-bold tracking-[0.1em] text-white">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}