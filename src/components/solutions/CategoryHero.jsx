"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CategoryHero({ badge, title, highlight, description, breadcrumb }) {
  return (
    <div className="relative w-full overflow-hidden bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63] pt-20 pb-10 sm:py-20 px-6 sm:px-10 lg:px-24 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[280px] sm:h-[400px] bg-secondary/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-5">
          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/90">{breadcrumb}</span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 sm:px-5 py-2 sm:py-2.5">
          <span className="font-semibold text-sm text-white">{badge}</span>
        </div>

        <h1 className="mt-5 sm:mt-6 text-3xl lg:text-5xl font-extrabold text-white leading-tight">
          {title}{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/70 leading-7 sm:leading-8">
          {description}
        </p>
      </motion.div>
    </div>
  );
}