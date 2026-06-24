"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Boxes, CheckCircle, CheckCircle2, Cog, Earth, Factory, FileText, Globe, Globe2, Headphones, HeartHandshake, HelpCircle, Leaf, Loader, MapPin, Minus, Newspaper, Package, Phone, Plus, Printer, Recycle, Rocket, Shield, ShoppingBag, Sparkles, Star, TimerReset, Trees, TrendingUp, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import { useState } from "react";

const stats = [
  { number: 20, suffix: "+", label: "YEARS EXPERIENCE" },
  { number: 80, suffix: "+", label: "COUNTRIES SERVED" },
  { number: 5000, suffix: "+", label: "MACHINES DELIVERED" },
  { number: 300, suffix: "+", label: "EXPERT ENGINEERS" },
];

const items = [
  "NONWOVEN LINES",
  "CUTLERY TECH",
  "POUCH SOLUTIONS",
  "PRINTING PRESS",
  "WORLDWIDE EXPORT",
];

const choose = [
  {
    icons: Shield,
    title: "CE Certified Quality",
    description: "All machines meet international CE, ISO 9001 and SGS standards with rigorous testing."
  },
  {
    icons: Zap,
    title: "High-Speed Output",
    description: "Industry-leading production speeds with intelligent servo-driven precision controls."
  },
  {
    icons: Leaf,
    title: "Eco-Friendly Tech",
    description: "Engineered for biodegradable materials — paper, kraft, nonwoven & compostables."
  },
  {
    icons: Wrench,
    title: "Lifetime Support",
    description: "Free technical training, on-site installation and 24/7 global after-sales service."
  },
  {
    icons: Earth,
    title: "Worldwide Export",
    description: "Exporting to USA, Europe, Africa, Middle East, Southeast Asia and Latin America."
  },
  {
    icons: Rocket,
    title: "Custom Engineering",
    description: "Tailor-made machine configurations to fit your unique production requirements."
  },
]

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Share your goals — we recommend the ideal machine.",
  },
  {
    number: "02",
    title: "Custom Quote",
    description:
      "Detailed proposal with specs, pricing & timeline.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Production starts in our certified facility.",
  },
  {
    number: "04",
    title: "Testing & Shipping",
    description:
      "Quality tested, packed and shipped worldwide.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Free remote/on-site setup and operator training.",
  },
];

const testimonials = [
  {
    quote:
      "Their paper bag machine doubled our output. Best investment in 10 years.",
    name: "Carlos M.",
    company: "EcoPack, Mexico",
    initials: "C",
  },
  {
    quote:
      "Reliable, fast, and the after-sales team is genuinely helpful.",
    name: "Aisha K.",
    company: "GreenBag Industries, UAE",
    initials: "A",
  },
  {
    quote:
      "We've bought 6 machines from Ounuo. Quality is consistently world-class.",
    name: "James O.",
    company: "Pacific Print, Australia",
    initials: "J",
  },
];

const industries = [
  { icon: ShoppingBag, title: "Retail & Shopping" },
  { icon: Leaf, title: "Food & Beverage" },
  { icon: Package, title: "E-Commerce", active: true },
  { icon: Trees, title: "Eco Packaging" },
  { icon: HeartHandshake, title: "Pharmaceutical" },
  { icon: Sparkles, title: "Cosmetics" },

  { icon: Boxes, title: "Logistics" },
  { icon: Factory, title: "Industrial Goods" },
  { icon: Recycle, title: "Recycling" },
  { icon: Star, title: "Luxury & Gifting" },
  { icon: Printer, title: "Print & Media" },
  { icon: Globe, title: "Export Trading" },
];

const advantages = [
  {
    title: "30% Faster Output",
    desc: "Servo-driven precision delivers higher cycle speeds with less downtime.",
  },
  {
    title: "50% Lower Maintenance",
    desc: "Modular components and self-diagnostic systems cut service costs in half.",
  },
  {
    title: "100% Eco-Compatible",
    desc: "Engineered specifically for kraft, recycled and biodegradable materials.",
  },
];

const comparison = [
  ["Production Speed", "Up to 300/min", "120-180/min"],
  ["Servo Motor System", "✓ Standard", "Optional"],
  ["CE / ISO / SGS", "All Three", "Usually one"],
  ["Custom Engineering", "Free", "Paid"],
  ["Installation Support", "On-site Free", "Remote only"],
  ["Spare Parts Lead Time", "24 hours", "5-15 days"],
  ["Warranty", "12 months", "3-6 months"],
  ["Technical Support", "24/7", "Business hrs"],
];

const impactStats = [
  {
    icon: Recycle,
    value: "12B+",
    label: "Paper Bags Produced Yearly",
  },
  {
    icon: Trees,
    value: "850k",
    label: "Tons of CO₂ Saved",
  },
  {
    icon: Leaf,
    value: "5,000+",
    label: "Eco Production Lines Live",
  },
  {
    icon: Globe,
    value: "80+",
    label: "Countries Going Green",
  },
];

const faqs = [
  {
    question: "What is the typical lead time for a new machine?",
    answer:
      "Lead times typically range from 30–90 days depending on machine configuration and customization requirements.",
  },
  {
    question: "Do you provide installation in our country?",
    answer:
      "Yes. Our engineers provide both remote and on-site installation support worldwide.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "We generally accept T/T, L/C and other mutually agreed international payment methods.",
  },
  {
    question: "What raw materials are compatible?",
    answer:
      "Our machines support paper, kraft paper, nonwoven fabric, biodegradable films and other eco-friendly materials.",
  },
  {
    question: "Do you offer warranty and spare parts?",
    answer:
      "Yes. We provide warranty coverage, fast spare parts delivery and long-term technical support.",
  },
  {
    question: "Can you customize a machine to my specs?",
    answer:
      "Absolutely. We offer custom engineering solutions based on production capacity, material type and market requirements.",
  },
];

const countries = [
  "United States",
  "Germany",
  "United Kingdom",
  "UAE",
  "India",
  "Brazil",
  "Mexico",
  "South Africa",
  "Nigeria",
  "Australia",
  "Japan",
  "Saudi Arabia",
];

const blogs = [
  {
    category: "Innovation",
    image: "/images/hero.jpg",
    title: "Next-Gen Servo Paper Bag Lines Hit 320 BPM",
    description:
      "Our R&D team's latest breakthrough sets a new industry benchmark for output speed.",
  },
  {
    category: "Sustainability",
    image: "/images/product3.jpg",
    title: "How Paper Cutlery Is Replacing Plastic in Asia",
    description:
      "A look at how customers are leading the shift to compostable tableware.",
  },
  {
    category: "Case Study",
    image: "/images/product5.jpg",
    title: "10x ROI: A Customer's Success Story",
    description:
      "Inside the journey of a packaging firm that scaled from 1 to 10 production lines.",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <>
      {/* hero section */}
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
            <h3 className="bg-white/10 flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full border border-white text-white"><Sparkles className="w-4 h-4" /> Trusted Since 2003 · Made in China</h3>
            <h1 className="mt-4 text-white/90 text-7xl font-extrabold">Engineering The Future of <span className="bg-linear-to-br from-primary to-[#c23f0b] bg-clip-text text-transparent">
              Eco Packaging
            </span></h1>
            <p className="mt-7 text-lg max-w-xl">Zhejiang Ounuo Machinery Co., Ltd. designs and manufactures world-class machines for paper bags, nonwoven bags, paper cutlery, pouches and printing — exported to 80+ countries.</p>
            <button className="mt-5 bg-linear-to-br from-primary to-secondary font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Link href="/products" className="flex gap-2 items-center">Explore Products <ArrowRight className="w-5 h-5" /></Link>
            </button>
            <div className="flex gap-5 mt-5">
              <p className="flex gap-1 items-center text-sm font-medium"><Shield className="w-4 h-4" />CE Certified</p>
              <p className="flex gap-1 items-center text-sm font-medium"><Award className="w-4 h-4" />ISO 9001</p>
              <p className="flex gap-1 items-center text-sm font-medium"><Headphones className="w-4 h-4" />24/7 support </p>
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
            <div className="absolute -top-2 -right-2"><Leaf className="w-12 h-12 bg-secondary rounded-lg p-3" /></div>
            <Image src="/images/hero.jpg" alt="hero image" width={650} height={600} className="rounded-3xl border-4 border-primary/30" />
            <div className="absolute -bottom-5 -left-5 bg-white p-6 rounded-lg border-gray-300 border-2">
              <p className="bg-linear-to-br from-primary to-secondary text-transparent bg-clip-text font-extrabold text-2xl">20+ Yrs</p>
              <p className="text-gray-600 uppercase text-xs font-medium">
                of innovation
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* marquee section */}
      <section className="bg-gradient-to-r from-primary via-secondary/60 to-secondary py-4 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-16 px-8 text-white font-bold tracking-wider text-xl"
            >
              <span>{item}</span>
              <span className="text-white text-2xl"><Loader /></span>
            </div>
          ))}
        </div>
      </section>

      {/* stats section */}
      <section className="py-20 px-24">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-[0px_15px_40px] shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-5xl font-bold bg-linear-to-br from-primary via-secondary to-secondary bg-clip-text text-transparent">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                <p className="mt-1 text-sm font-semibold tracking-[0.15em] text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about us section */}
      <section className="flex items-center justify-between text-left px-24 pt-10 gap-10 pb-20">
        <div>
          <Image src="/images/oyangfactory.webp" alt="oyang factory" width={650} height={400} className="rounded-3xl shadow-[0px_0px_60px] shadow-primary/40" />
        </div>
        <div className="flex flex-col items-start w-[50%]">
          <p className="text-secondary font-semibold flex gap-1 items-center bg-secondary/20 px-3 py-2 text-sm rounded-full"><Factory />Who We Are</p>
          <h3 className="mt-4 text-5xl font-extrabold">
            Two Decades of <span className="bg-linear-to-br from-primary via-secondary to-secondary bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h3>
          <p className="text-[#52637a] mt-5 leading-7">Founded in 2003 in Wenzhou — the manufacturing heartland of China — <strong className="text-black">Zhejiang Ounuo Machinery Co., Ltd.</strong> has grown into one of Asia's most trusted producers of packaging and printing machinery. We specialize in eco-friendly equipment that helps the world replace plastic with sustainable alternatives.</p>
          <p className="text-[#52637a] mt-5 leading-7">Our 35,000 m² facility houses cutting-edge CNC machining centers, a dedicated R&D wing, and three full assembly lines. Every machine is hand-tested by our 300+ engineers before being shipped to customers across 80+ countries — from small workshops to multinational packaging giants.</p>
          <ul className="mt-5">
            <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-secondary" />End-to-end manufacturing under one roof</li>
            <li className="flex gap-3 items-center mt-2"><CheckCircle className="w-5 h-5 text-secondary" />In-house R&D with 40+ patents granted</li>
            <li className="flex gap-3 items-center mt-2"><CheckCircle className="w-5 h-5 text-secondary" />Complete spare parts ecosystem</li>
            <li className="flex gap-3 items-center mt-2"><CheckCircle className="w-5 h-5 text-secondary" />Multilingual installation & training team</li>
          </ul>
          <button className=" group mt-7 text-primary font-bold"><Link href="/about" className="flex gap-2 items-center">Learn Full Story <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
        </div>
      </section>

      {/* product section */}
      <section className="bg-[#f2f5f866] py-24 px-24 flex flex-col items-center text-center">
        <p className="px-3 py-2 rounded-full bg-secondary/20 text-sm font-semibold flex gap-1 items-center"><Cog className="w-5 h-5 animate-rotation" />Our Products</p>
        <h4 className="text-5xl font-extrabold mt-5 max-w-3xl">Machines For Every <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
          Packaging Need
        </span></h4>
        <p className="text-char mt-5 leading-7 text-lg">From paper bags to flexible pouches and full-color printing — discover our complete <br /> portfolio of industrial machinery.</p>

        <div className="grid grid-cols-3 gap-7 items-center items-stretch justify-center mt-10">
          <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#ff7a18]/20">
            <div className="h-[250px] w-full overflow-hidden relative group">
              <Image
                src="/images/hero.jpg"
                alt="product"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute z-10 top-5 left-5"><ShoppingBag className="text-primary w-12 h-12 bg-white p-3 rounded-xl" /></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#ff7a18]/20 to-[#ff7a18]/40 group-hover:bg-linear-to-t group-hover:from-[#ff7a18]/40 group-hover:to-[#ff7a18]/60"></div>
            </div>
            <div className="bg-white p-7 text-left">
              <p className="text-lg font-extrabold">Paper Bag Machines</p>
              <p className="mt-3 text-char text-sm">Square bottom, sharp bottom, V-bottom & handle paper bag lines.</p>
              <button className=" group mt-5 text-[#ff7a18] font-bold text-sm"><Link href="/products" className="flex gap-2 items-center">View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#135CA1]/20">
            <div className="h-[250px] w-full overflow-hidden relative group">
              <Image
                src="/images/product2.jpg"
                alt="product"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute z-10 top-5 left-5"><Package className="text-[#135CA1] w-12 h-12 bg-white p-3 rounded-xl" /></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#135CA1]/20 to-[#135CA1]/40 group-hover:bg-linear-to-t group-hover:from-[#135CA1]/40 group-hover:to-[#135CA1]/60"></div>
            </div>
            <div className="bg-white p-7 text-left">
              <p className="text-lg font-extrabold">Nonwoven Bag Machines</p>
              <p className="mt-3 text-char text-sm">D-cut, W-cut, box bag and ultrasonic nonwoven bag machines.</p>
              <button className=" group mt-5 text-[#135CA1] font-bold text-sm"><Link href="/products" className="flex gap-2 items-center">View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#809783]/20">
            <div className="h-[250px] w-full overflow-hidden relative group">
              <Image
                src="/images/product3.jpg"
                alt="product"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute z-10 top-5 left-5"><Leaf className="text-[#809783] w-12 h-12 bg-white p-3 rounded-xl" /></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#809783]/20 to-[#809783]/40 group-hover:bg-linear-to-t group-hover:from-[#809783]/40 group-hover:to-[#809783]/60"></div>
            </div>
            <div className="bg-white p-7 text-left">
              <p className="text-lg font-extrabold">Paper Cutlery Machines</p>
              <p className="mt-3 text-char text-sm">Eco paper plates, cups, bowls and straw making lines.</p>
              <button className=" group mt-5 text-[#809783] font-bold text-sm"><Link href="/products" className="flex gap-2 items-center">View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#9D5FC8]/20">
            <div className="h-[250px] w-full overflow-hidden relative group">
              <Image
                src="/images/product4.jpg"
                alt="product"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute z-10 top-5 left-5"><Package className="text-[#9D5FC8] w-12 h-12 bg-white p-3 rounded-xl" /></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#9D5FC8]/20 to-[#9D5FC8]/40 group-hover:bg-linear-to-t group-hover:from-[#9D5FC8]/40 group-hover:to-[#9D5FC8]/60"></div>
            </div>
            <div className="bg-white p-7 text-left">
              <p className="text-lg font-extrabold">Pouch Making Machines</p>
              <p className="mt-3 text-char text-sm">Stand-up, 3-side seal, zipper and spout pouch machines.</p>
              <button className=" group mt-5 text-[#9D5FC8] font-bold text-sm"><Link href="/products" className="flex gap-2 items-center">View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#BC0019]/20">
            <div className="h-[250px] w-full overflow-hidden relative group">
              <Image
                src="/images/product5.jpg"
                alt="product"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute z-10 top-5 left-5"><Printer className="text-[#BC0019] w-12 h-12 bg-white p-3 rounded-xl" /></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#BC0019]/20 to-[#BC0019]/40 group-hover:bg-linear-to-t group-hover:from-[#BC0019]/40 group-hover:to-[#BC0019]/60"></div>
            </div>
            <div className="bg-white p-7 text-left">
              <p className="text-lg font-extrabold">Printing Machines</p>
              <p className="mt-3 text-char text-sm">Flexo, gravure & offset printing solutions for packaging.</p>
              <button className=" group mt-5 text-[#BC0019] font-bold text-sm"><Link href="/products" className="flex gap-2 items-center">View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-primary via-secondary/70 to-secondary p-8 flex flex-col justify-between items-start text-left">
            <div>
              <Sparkles className="w-10 h-10 text-white" />
              <h4 className="text-white font-extrabold mt-4 text-2xl">Need a Custom Machine?</h4>
              <p className="text-sm text-white mt-3">Tell us your production goals — we'll engineer the perfect solution.</p>
            </div>
            <div>
              <button className=" group mt-5 text-white font-bold"><Link href="/products" className="flex gap-2 items-center">Talk to an Engineer <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" /></Link></button>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="py-20 px-24 flex flex-col items-center text-center">
        <h4 className="text-5xl font-extrabold">Why The World Chooses <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
          Ounuo
        </span></h4>
        <p className="text-char mt-5 leading-7 text-lg">Six pillars that define every machine we build.</p>
        <div className="mt-10 grid grid-cols-3 gap-5">
          {choose.map((chooses, index) => {
            const Icon = chooses.icons;
            return (
              <div key={index} className="p-7 border border-gray-300 rounded-xl text-left transition-all duration-300 group hover:border-primary hover:shadow-[0px_0px_20px] shadow-primary/50 hover:bg-white">
                <Icon className="p-3 rounded-xl w-12 h-12 text-white bg-linear-to-br from-primary via-secondary/60 to-secondary" />
                <p className="text-xl font-extrabold mt-3">{chooses.title}</p>
                <p className="text-char mt-3">{chooses.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* process section */}
      <section className="relative overflow-hidden py-20 px-24 bg-gradient-to-br from-[#071B34] via-[#0B2D4A] to-[#0D5B63]">

        <div className="relative z-10 mx-auto">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-white">
              From Inquiry to{" "}
              <span className="bg-gradient-to-r from-[#ff9a1f] to-[#ff5e14] bg-clip-text text-transparent">
                Installation
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              A seamless 5-step journey designed for global buyers.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/20 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff7a18]/40 hover:bg-white/10"
              >
                <div className="text-5xl font-black leading-none text-[#ff9a1f]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="py-24 px-24">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#0f172a]">
            Loved By Manufacturers
          </h2>

          <h3 className="text-5xl font-extrabold mt-1 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
            Worldwide
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-10 border border-[#f3d7ca] shadow-[0_10px_40px_rgba(198,39,44,0.08)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-2xl font-black text-secondary leading-none">
                "
              </div>

              <p className="text-[#1e293b] mt-3">
                {item.quote}
              </p>

              <div className="h-px bg-slate-200 my-5"></div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {item.initials}
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-char text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* industries */}
      <section className="py-24 px-24 bg-[#f8fafc]">
        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2">
            <Boxes className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">
              Industries We Power
            </span>
          </div>

          <h2 className="mt-5 text-5xl font-extrabold text-[#0f172a]">
            From Local Workshops to Global
            <br />
            Brands
          </h2>

          <p className="mt-3 text-lg text-char">
            Our machines run inside production lines across 12+ industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 mt-10">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[24px] bg-white border border-gray-300 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0px_5px_20px] shadow-primary/30 group"
              >
                <Icon
                  className="w-8 h-8 mx-auto mb-2 text-primary transition-all duration-300 group-hover:scale-110" />

                <h3 className="font-medium text-sm">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* ouono difference */}
      <section className="py-24 px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fef2e8] px-5 py-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="font-semibold text-primary text-sm">
                The Ounuo Difference
              </span>
            </div>

            <h2 className="mt-5 text-5xl font-extrabold">
              Why Manufacturers
              <br />
              Switch to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ounuo
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              We don't just sell machines — we deliver a complete
              production advantage. See how Ounuo machinery compares
              to typical industry alternatives.
            </p>

            <div className="space-y-4 mt-7">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-char text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Table */}
          <div className="rounded-[36px] overflow-hidden bg-gradient-to-br from-[#041b33] via-[#07253f] to-[#0b3f46] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-white text-sm">Feature</th>
                  <th className="pb-4 text-secondary text-sm">Ounuo</th>
                  <th className="pb-4 text-slate-400 text-sm">Others</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="py-4 text-sm text-white font-semibold">
                      {row[0]}
                    </td>

                    <td className="py-4 text-sm text-[#ffb84d] font-bold">
                      {row[1]}
                    </td>

                    <td className="py-4 text-sm text-slate-400">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* sustainable */}
      <section className="relative overflow-hidden py-20 px-24 bg-gradient-to-br from-[#0A4E54] via-[#0F6D73] to-[#16888E]">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#BFF4D3]/10 rounded-full blur-[140px]" />

        <div className="relative z-10">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2">
              <Leaf className="w-4 h-4 text-[#D7FFF0]" />
              <span className="font-semibold text-sm text-white">
                Our Sustainability Impact
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center mt-5">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
              Building a Plastic-Free Future,
              <br />
              <span className="bg-gradient-to-r from-[#E6FFF2] to-[#BFF4D3] bg-clip-text text-transparent">
                One Machine at a Time
              </span>
            </h2>

            <p className="mt-4 text-lg leading-9 text-white/80">
              Together with our customers, Ounuo machinery has helped replace billions of single-use plastic items.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {impactStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-md p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#D7FFF0]" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-white/85">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="py-24 px-24 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef6f7] px-4 py-2">
              <HelpCircle className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-secondary text-sm">
                FAQs
              </span>
            </div>

            <h2 className="mt-5 text-5xl font-extrabold">
              Got{" "}
              <span className="bg-gradient-to-r from-primary via-secondary/80 to-secondary bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Quick answers to the most common questions buyers ask before placing an order.
            </p>

            <button className="group mt-7 flex items-center gap-3 font-bold text-secondary">
              Ask our team
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-5 text-left"
                >
                  <span className="text-lg font-bold text-[#0f172a]">
                    {faq.question}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary/80 text-white shrink-0">
                    {active === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${active === index
                    ? "max-h-36 pb-7 px-8"
                    : "max-h-0 overflow-hidden"
                    }`}
                >
                  <p className="text-sm text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* worldwide presence */}
      <section className="relative overflow-hidden py-20 px-24 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#374151]">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6366F1]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A855F7]/20 rounded-full blur-[140px]" />

        <div className="relative z-10">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2">
              <Globe2 className="w-4 h-4 text-[#C4B5FD]" />
              <span className="font-semibold text-white text-sm">
                Global Footprint
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center mt-5">
            <h2 className="text-5xl font-extrabold text-white">
              Trusted Across{" "}
              <span className="bg-gradient-to-r from-[#C4B5FD] to-[#E9D5FF] bg-clip-text text-transparent">
                6 Continents
              </span>
            </h2>

            <p className="mt-4 text-lg text-white/75">
              Our machines power production lines across major manufacturing hubs worldwide.
            </p>
          </div>

          {/* Countries */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <h3 className="font-semibold text-white">
                  {country}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mt-10 text-center font-medium text-white/60">
            + 68 more countries worldwide
          </p>

        </div>
      </section>

      {/* blog section */}
      <section className="pt-20 pb-10 px-24 bg-gradient-to-b from-[#f8fafc] to-white">

        {/* Header */}
        <div className="flex justify-between items-end mb-14">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff1e8] px-4 py-2">
              <Newspaper className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-sm text-secondary">
                News & Insights
              </span>
            </div>

            <h2 className="mt-4 text-5xl font-extrabold text-[#0f172a]">
              From The{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Factory Floor
              </span>
            </h2>
          </div>

          <button className="group hidden md:flex items-center gap-3 text-primary font-bold text-lg">
            View All
            <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute top-5 left-5 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-xs font-bold text-white">
                  {blog.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-extrabold leading-tight text-[#0f172a] group-hover:text-primary transition-all duration-300">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  {blog.description}
                </p>

                <button className="group/btn mt-4 text-sm text-primary font-bold">
                  <Link href="/blog" className="flex items-center gap-2">Read Article
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-1.5" /></Link>
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* CTA section */}
      <section className="pt-10 pb-20 px-24">

        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Call Sales
              </p>

              <p className="text-lg font-extrabold text-slate-900">
                +86 188 0000 0000
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
              <TimerReset className="w-8 h-8 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Response Time
              </p>

              <p className="text-lg font-extrabold text-slate-900">
                Within 24 Hours
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Visit Factory
              </p>

              <p className="text-lg font-extrabold text-slate-900">
                Wenzhou, Zhejiang, China
              </p>
            </div>
          </div>

        </div>

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F4C5C]">

          {/* Glow */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#0F6F88]/20 blur-[150px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-20 py-20">

            {/* Left */}
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
                Ready to Power Your
                <br />
                Production Line?
              </h2>

              <p className="mt-5 text-lg leading-9 text-slate-300">
                Get a personalized quote and free consultation
                from our engineering team within 24 hours.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-5">

              <button className="group px-7 py-5 rounded-full bg-gradient-to-r from-[#ED5114] to-[#ff7a18] text-white font-bold text-sm shadow-[0_15px_40px_rgba(237,81,20,0.35)] hover:scale-105 transition-all duration-300">
               <Link href="/contact">
                <span className="flex items-center gap-3 ">
                  <FileText className="w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                </span>
                </Link>
              </button>

              <button className="px-7 py-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-sm hover:bg-white/15 transition-all duration-300">
                Browse Catalog
              </button>

            </div>

          </div>
        </div>

      </section>
    </>
  );
}
