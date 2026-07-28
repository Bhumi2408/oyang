"use client";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

const statCards = [
  {
    value: "280+",
    color: "text-primary",
    desc: "Patents held, including 80+ invention patents, backed by continuous R&D",
  },
  {
    value: "$30M",
    color: "text-secondary",
    desc: "Invested in our high-precision digital machine spare-part manufacturing center",
  },
];

export default function OurStory() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-[#f2f5f866]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left - stacked images */}
        <div className="relative">
          <Image
            src="/images/oyangfactory.webp"
            alt="Ounuo factory building"
            width={700}
            height={420}
            className="rounded-2xl object-cover w-full h-[260px] sm:h-[350px] lg:h-[450px] shadow-lg"
          />
          <div className="relative -mt-10 sm:-mt-16 ml-0 lg:ml-10 mr-6 sm:mr-10">
            <Image
              src="/images/about/worker.jpg"
              alt="Ounuo engineering team"
              width={700}
              height={340}
              className="rounded-2xl object-cover w-full h-[230px] sm:h-[300px] lg:h-[400px] shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Right - content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
            <LayoutDashboard className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">The Ounuo Story</span>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0f172a]">
            From a Single Product to a{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Manufacturing Powerhouse
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            Since 2006, in Wenzhou, Zhejiang, Ounuo has focused on providing
            sustainable packaging solutions — growing into a full-chain
            manufacturer covering nonwoven bag, paper bag, flexible pouch,
            printing and post-press converting machinery for 80+ countries.
          </p>

          <blockquote className="mt-6 border-l-4 border-secondary pl-4 sm:pl-5 italic font-semibold text-sm sm:text-base text-slate-800">
            "Innovation is our driving force — the trust of customers all
            over the world inspires our thinking and technology innovation,
            pushing the packaging machinery industry continuously forward."
          </blockquote>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            Our product line grew to include the{" "}
            <strong className="text-slate-900">Paper Bag Making Machine</strong>,
            built on a team of{" "}
            <strong className="text-slate-900">
              200+ engineers averaging 30+ years of experience
            </strong>{" "}
            paired with our in-house R&D team's innovation. We invested{" "}
            <strong className="text-slate-900">$30 million USD</strong> in a
            high-precision digital manufacturing center equipped with Mazak,
            Okuma and Schaudt machinery, achieving complete independent
            production of our core components.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-3">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6"
              >
                <p className={`text-2xl sm:text-3xl font-extrabold ${card.color}`}>
                  {card.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-5 sm:leading-6">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            We are still driven by that founding belief: every eco-friendly
            machine we ship is a step toward reducing the world's reliance on
            single-use plastic — for a better us, and a better world.
          </p>
        </div>
      </div>
    </section>
  );
}