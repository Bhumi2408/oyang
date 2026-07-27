"use client";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";

export default function ProductsHero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br flex flex-col items-center justify-center from-[#071B34] via-[#0B2033] to-[#0D5B63] py-32 px-10 text-center h-[400px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5">
          <Cog className="w-4 h-4 text-secondary animate-rotation" />
          <span className="font-semibold text-sm text-white">Complete Machinery Catalog</span>
        </div>

        <h1 className="mt-6 text-6xl lg:text-7xl font-extrabold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Machines
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-8">
          Five powerful product families. One mission: equip the world with
          sustainable packaging production.
        </p>
      </motion.div>
    </div>
  );
}