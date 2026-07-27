"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Headphones, Leaf, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/images/bg1.webp"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-bl from-primary/70 via-primary/30 to-white/30 " />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between gap-10 h-full text-white px-24 py-16">
        <div className="w-[50%] flex flex-col items-start">
          <h3 className="bg-white/10 flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full border border-white text-white">
            <Sparkles className="w-4 h-4" /> Trusted Since 2006 · Made in China
          </h3>
          <h1 className="mt-4 text-white/90 text-7xl font-extrabold">
            Engineering The Future of{" "}
            <span className="bg-linear-to-br from-primary to-[#c23f0b] bg-clip-text text-transparent">
              Eco Packaging
            </span>
          </h1>
          <p className="mt-7 text-lg max-w-xl">
            Zhejiang Ounuo Machinery Co., Ltd. designs and manufactures machines
            for paper bags, nonwoven bags, paper cutlery, pouches and printing
            — from a 130,000 m² facility in Wenzhou, China.
          </p>
          <button className="mt-5 bg-linear-to-br from-primary to-secondary font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Link href="/products" className="flex gap-2 items-center">
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
          </button>
          <div className="flex gap-5 mt-5">
            <p className="flex gap-1 items-center text-sm font-medium">
              <Shield className="w-4 h-4" />CE Certified
            </p>
            <p className="flex gap-1 items-center text-sm font-medium">
              <Award className="w-4 h-4" />High-Tech Enterprise
            </p>
            <p className="flex gap-1 items-center text-sm font-medium">
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
          className="relative"
        >
          <div className="absolute -top-2 -right-2">
            <Leaf className="w-12 h-12 bg-secondary rounded-lg p-3" />
          </div>
          <Image
            src="/images/hero.jpg"
            alt="hero image"
            width={650}
            height={600}
            className="rounded-3xl border-4 border-primary/30"
          />
          <div className="absolute -bottom-5 -left-5 bg-white p-6 rounded-lg border-gray-300 border-2">
            <p className="bg-linear-to-br from-primary to-secondary text-transparent bg-clip-text font-extrabold text-2xl">
              20+ Yrs
            </p>
            <p className="text-gray-600 uppercase text-xs font-medium">of innovation</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}