"use client";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

const statCards = [
  {
    value: "19 Gen",
    color: "text-primary",
    desc: "Our Non Woven Bag Making Machine has evolved from Generation 1 to Generation 19",
  },
  {
    value: "$30M",
    color: "text-secondary",
    desc: "Invested in our high-precision digital machine spare-part manufacturing center",
  },
];

export default function OurStory() {
  return (
    <section className="py-24 px-10 lg:px-24 bg-[#f2f5f866]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - stacked images */}
        <div className="relative">
          <Image
            src="/images/oyangfactory.webp"
            alt="Ounuo factory building"
            width={700}
            height={420}
            className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
          />
          <div className="relative -mt-16 ml-0 lg:ml-10 mr-10">
            <Image
              src="/images/about/worker.jpg"
              alt="Ounuo engineering team"
              width={700}
              height={340}
              className="rounded-2xl object-cover w-full h-[400px] shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Right - content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
            <LayoutDashboard className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">The Ounuo Story</span>
          </div>

          <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold leading-tight text-[#0f172a]">
            From a Single Product to a{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Manufacturing Powerhouse
            </span>
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Since 2006, in Wenzhou, Zhejiang, Ounuo has focused on providing
            sustainable packaging solutions. Our first project — the Non
            Woven Bag Making Machine — began the company's journey and has
            since grown to hold an estimated 95% share of its global market
            segment.
          </p>

          <blockquote className="mt-6 border-l-4 border-secondary pl-5 italic font-semibold text-slate-800">
            "Innovation is our driving force — the trust of customers all
            over the world inspires our thinking and technology innovation,
            pushing the non-woven bag industry continuously forward."
          </blockquote>

          <p className="mt-6 text-slate-600 leading-8">
            Our second project, the{" "}
            <strong className="text-slate-900">Paper Bag Making Machine</strong>,
            was built on{" "}
            <strong className="text-slate-900">35 years of combined senior engineering experience</strong>{" "}
            paired with our in-house R&D team's innovation. We invested{" "}
            <strong className="text-slate-900">$30 million USD</strong> in a
            high-precision digital manufacturing center equipped with Mazak,
            Okuma and Schaudt machinery, achieving complete independent
            production of our core components.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-3">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className={`text-3xl font-extrabold ${card.color}`}>{card.value}</p>
                <p className="mt-2 text-sm text-slate-600 leading-6">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-slate-600 leading-8">
            We are still driven by that founding belief: every eco-friendly
            machine we ship is a step toward reducing the world's reliance on
            single-use plastic — for a better us, and a better world.
          </p>
        </div>
      </div>
    </section>
  );
}