"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Package, Printer, Sparkles, Zap, ShoppingBag, Leaf } from "lucide-react";

const products = [
  {
    series: "01 · SERIES",
    title: "Paper Bag Making Machines",
    desc: "Fully automatic paper bag lines for shopping, food, takeaway and luxury retail bags. Servo-controlled precision with handle attachment options.",
    specs: ["Speed: 80-300 bags/min", "Width: 180-450 mm", "Material: Kraft / White Paper 60-150 gsm"],
    models: ["Square Bottom", "Sharp Bottom", "V-Bottom", "Twisted Handle", "Flat Handle"],
    image: "/images/hero.jpg",
    icon: ShoppingBag,
  },
  {
    series: "02 · SERIES",
    title: "Nonwoven Bag Machines",
    desc: "High-speed nonwoven shopping bag making machines including ultrasonic and stitched models for promotional and grocery bags.",
    specs: ["Speed: 60-120 bags/min", "Width: 200-600 mm", "Material: PP Nonwoven 30-100 gsm"],
    models: ["D-Cut", "W-Cut", "Box Bag", "T-Shirt Bag", "Loop Handle"],
    image: "/images/product2.jpg",
    icon: Package,
  },
  {
    series: "03 · SERIES",
    title: "Paper Cutlery Machines",
    desc: "Eco-friendly disposable tableware machines — from paper plates to cups, bowls and biodegradable straws.",
    specs: ["Output: 4,000-12,000 pcs/hr", "Diameter: 100-260 mm", "Material: Single/double-side PE coated paper"],
    models: ["Paper Plates", "Paper Cups", "Bowls", "Straw Lines", "Salad Boxes"],
    image: "/images/product3.jpg",
    icon: Leaf,
  },
  {
    series: "04 · SERIES",
    title: "Pouch Making Machines",
    desc: "Versatile pouch lines for food, cosmetics and pharmaceutical packaging with zipper, spout and stand-up options.",
    specs: ["Speed: 60-180 pouches/min", "Width: 80-320 mm", "Layers: PET/AL/PE laminates"],
    models: ["Stand-Up Pouch", "3-Side Seal", "Zipper Pouch", "Spout Pouch", "Center Seal"],
    image: "/images/product4.jpg",
    icon: Package,
  },
  {
    series: "05 · SERIES",
    title: "Printing Machines",
    desc: "High-resolution flexo, gravure and offset printing presses for paper, film and nonwoven substrates.",
    specs: ["Speed: up to 250 m/min", "Colors: 2-10 color stations", "Web: 600-1600 mm"],
    models: ["Flexo Printing", "Gravure Printing", "Offset", "Inline Slitting", "Lamination"],
    image: "/images/product5.jpg",
    icon: Printer,
  },
];

export default function ProductShowcase() {
  return (
    <section className="pb-10 px-10 lg:px-24 bg-white">
      <div className="space-y-24">
        {products.map((product, index) => {
          const Icon = product.icon;
          // index 0,2,4... => image LEFT, content RIGHT
          // index 1,3,5... => image RIGHT, content LEFT
          const reversed = index % 2 === 1;

          const imageBlock = (
            <motion.div
              key="image"
              initial={{ opacity: 0, x: reversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full md:w-1/2 md:flex-shrink-0 mt-20"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={900}
                height={620}
                className="rounded-3xl object-cover w-full h-[460px] shadow-xl"
              />
              <div className="absolute -bottom-6 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          );

          const contentBlock = (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: reversed ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
                <span className="inline-block rounded-full bg-slate-200 px-3 py-2 text-xs font-bold tracking-wide text-slate-700">
                  {product.series}
                </span>

                <h2 className="mt-4 text-4xl font-extrabold text-[#0f172a]">
                  {product.title}
                </h2>

                <p className="mt-4 text-slate-600 leading-7 max-w-lg">{product.desc}</p>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="flex items-center gap-2 font-bold text-[#0f172a]">
                      <Zap className="w-4 h-4 text-secondary shrink-0" />Key Specs
                    </p>
                    <ul className="mt-3 space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-bold text-[#0f172a]">
                      <Sparkles className="w-4 h-4 text-secondary shrink-0" />Available Models
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {product.models.map((model, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="mt-9 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-bold text-white text-sm transition-all duration-300 hover:scale-105">
                  Request Datasheet
                </button>
              </motion.div>
            );

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-14 items-center"
            >
              {reversed ? (
                <>
                  {contentBlock}
                  {imageBlock}
                </>
              ) : (
                <>
                  {imageBlock}
                  {contentBlock}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}