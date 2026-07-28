"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Lightbulb, Shield, TrendingUp, Users } from "lucide-react";

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    desc: "280+ patents and $100M+ total R&D investment — trust from customers worldwide inspires our engineering team to keep pushing the packaging machinery industry forward.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Environmental Protection",
    desc: "Intelligent equipment, more eco-friendly materials, and more efficient processes — including ink and solvent recovery systems — reduce environmental impact at every stage.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Extreme Reliability",
    desc: "Engineered for 24-hour continuous heavy-duty operation using key components machined in-house on our $30M Mazak & Okuma CNC precision center to minimize unplanned downtime.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Enhanced ROI Focus",
    desc: "Optimized transmission systems and energy-efficient designs — such as intelligent ESO heating that saves 50-70% energy — shorten your payback period versus conventional models.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary text-sm">Our Core Values</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a]">
            The Principles That{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Guide Us
            </span>
          </h2>

          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 sm:gap-5">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-300 w-7 sm:w-8 shrink-0">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-slate-600 leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="/images/about/worker.jpg"
            alt="Ounuo engineers and staff"
            width={900}
            height={620}
            className="rounded-3xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] shadow-xl"
          />

          <div className="absolute -bottom-5 sm:-bottom-6 right-5 sm:right-8 bg-linear-to-br from-primary to-secondary rounded-2xl p-4 sm:p-5 shadow-xl text-white">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="mt-2 text-xl sm:text-2xl font-extrabold">80+</p>
            <p className="text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              Bilingual Engineers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}