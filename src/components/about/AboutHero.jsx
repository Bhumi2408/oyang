"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Cog } from "lucide-react";

const statPills = ["20+ Years", "80+ Countries", "5,000+ Machines", "300+ Engineers"];

export default function AboutHero() {
  return (
    <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-linear-to-br from-[#0a0f14] via-[#12181f] to-[#1a0f0d]">
      {/* Left content panel */}
      <div className="flex flex-col justify-center px-10 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm text-white">About Ounuo Machinery</span>
          </div>

          <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white">
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

          <p className="mt-8 text-lg leading-8 text-white/70 max-w-lg">
            Since 2006, Zhejiang Ounuo Machinery has engineered the equipment
            behind the world's transition from plastic to paper.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            {statPills.map((stat, index) => (
              <span
                key={index}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right image panel */}
      <div className="relative h-[400px] lg:h-auto">
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
          className="absolute bottom-6 right-6 left-6 lg:left-auto max-w-[900px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-5 flex items-center gap-4"
        >
          <div className="w-14 h-14 shrink-0 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <Cog className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Precision Built
            </p>
            <p className="text-lg font-semibold text-slate-900 leading-snug">
              Every machine handcrafted, tested & certified
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}