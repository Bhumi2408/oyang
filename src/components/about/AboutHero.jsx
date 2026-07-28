"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Cog } from "lucide-react";

const statPills = ["20+ Years", "130,000㎡ Factory", "280+ Patents", "700+ Employees"];

export default function AboutHero() {
  return (
    <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-linear-to-br from-[#0a0f14] via-[#12181f] to-[#1a0f0d]">
      {/* Left content panel */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 sm:px-5 py-2 sm:py-2.5">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm text-white">About Ounuo Machinery</span>
          </div>

          <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] lg:leading-[1.05] text-white">
            Crafting
            <br />
            Machines.
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crafting a
              <br />
              Greener World.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-lg">
            Since 2006, OYANG / Ounuo Machinery has engineered the equipment
            behind the world's transition to eco-friendly packaging —
            from paper bags to nonwoven bags, flexible pouches and
            rotogravure printing.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-7 sm:mt-9">
            {statPills.map((stat, index) => (
              <span
                key={index}
                className="rounded-full border border-white/15 bg-white/5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right image panel */}
      <div className="relative h-[320px] sm:h-[400px] lg:h-auto">
        <Image
          src="/images/about/hero.jpg"
          alt="Precision machining"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        {/* Floating precision card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-6 lg:left-auto lg:max-w-[420px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
        >
          <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
              Precision Built
            </p>
            <p className="text-sm sm:text-lg font-semibold text-slate-900 leading-snug">
              $30M CNC-machined, ISO9001 & CE certified
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}