"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SolutionsHero() {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] overflow-hidden">
      <Image
        src="/images/bg1.webp"
        alt="Industrial facility"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/40 to-primary/50" />

      <div className="relative z-10 flex flex-col justify-center min-h-[500px] sm:min-h-[600px] px-6 sm:px-10 lg:px-24 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-secondary/50 bg-secondary/10 px-4 sm:px-5 py-2 text-xs font-bold tracking-wider text-secondary">
            INDUSTRIAL SOLUTIONS
          </span>

          <h1 className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Intelligent Solutions for
            <br />
            <span className="text-secondary">Packaging & Printing</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 text-white/85 max-w-xl">
            From a single bag shape to a full turnkey factory — explore
            ready-to-deploy production solutions tailored to your raw
            material, throughput and end-product.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="group rounded-full bg-linear-to-r from-secondary to-primary px-6 sm:px-7 py-3 sm:py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Request Custom Solution
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/30 bg-black/30 backdrop-blur-md px-6 sm:px-7 py-3 sm:py-3.5 font-bold text-white text-sm transition-all duration-300 hover:bg-white/20"
            >
              Browse Machines
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}