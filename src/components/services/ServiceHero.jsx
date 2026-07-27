"use client";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function ServiceHero() {
  return (
    <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] py-24 px-10 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5">
          <Wrench className="w-4 h-4 text-secondary" />
          <span className="font-semibold text-sm text-white">Beyond the Machine</span>
        </div>

        <h1 className="mt-6 text-6xl lg:text-7xl font-extrabold text-white">
          Our{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-8">
          From design to installation to after-sales support — dedicated
          service and spare-parts teams stand beside our customers at every step.
        </p>
      </motion.div>
    </div>
  );
}