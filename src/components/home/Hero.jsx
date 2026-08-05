"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Headphones, Leaf, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/bg1.webp"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-bl from-primary/70 via-primary/30 to-white/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 min-h-screen text-white px-6 sm:px-10 lg:px-24 py-20 lg:py-16">
        <div className="w-full lg:w-[50%] flex flex-col items-start min-w-0">
          <h3 className="bg-white/10 flex items-center gap-1 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full border border-white text-white">
            <Sparkles className="w-4 h-4" /> Trusted Since 2006 · Made in China
          </h3>
          <h1 className="mt-4 text-white/90 text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Engineering The Future of{" "}
            <span className="bg-linear-to-br from-primary to-[#c23f0b] bg-clip-text text-transparent">
              Eco Packaging
            </span>
          </h1>
          <p className="mt-5 sm:mt-7 text-sm sm:text-base lg:text-lg max-w-xl">
            Zhejiang Ounuo Machinery Co., Ltd. designs and manufactures machines
            for paper bags, nonwoven bags, paper cutlery, pouches and printing
            — from a 130,000 m² facility in Wenzhou, China.
          </p>
          <Link
            href="/products"
            className="mt-5 bg-linear-to-br from-primary to-secondary font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 flex gap-2 items-center text-sm sm:text-base"
          >
            Explore Products <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex flex-wrap gap-4 sm:gap-5 mt-5">
            <p className="flex gap-1 items-center text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4" />CE Certified
            </p>
            <p className="flex gap-1 items-center text-xs sm:text-sm font-medium">
              <Award className="w-4 h-4" />High-Tech Enterprise
            </p>
            <p className="flex gap-1 items-center text-xs sm:text-sm font-medium">
              <Headphones className="w-4 h-4" />24/7 support
            </p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 1],
          }}
          className="relative w-full max-w-[400px] sm:max-w-[500px] lg:w-[45%] lg:max-w-[550px] mt-6 lg:mt-0 shrink-0"
        >
          <div className="absolute -top-2 -right-2 z-10">
            <Leaf className="w-9 h-9 sm:w-12 sm:h-12 bg-secondary rounded-lg p-2.5 sm:p-3" />
          </div>
          <video
            src="/oyang-video.mp4"
            poster="/oyang-company.jpg"
            width={850}
            height={600}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl border-4 border-primary/30 w-full h-auto object-cover"
            style={{ aspectRatio: "850 / 600" }}
          />
          <div className="absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 bg-white p-4 sm:p-6 rounded-lg border-gray-300 border-2 z-10">
            <p className="bg-linear-to-br from-primary to-secondary text-transparent bg-clip-text font-extrabold text-lg sm:text-2xl">
              20+ Yrs
            </p>
            <p className="text-gray-600 uppercase text-[10px] sm:text-xs font-medium">
              of innovation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}