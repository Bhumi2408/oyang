"use client";
import { Headphones, MapPin, Users, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Headphones,
    title: "Remote Support",
    desc: "Fast online troubleshooting, video diagnosis and operation guidance — reducing waiting time for any issue.",
  },
  {
    icon: Wrench,
    title: "On-Site Engineers",
    desc: "Overseas engineers provide installation, commissioning, maintenance and operator training at your factory.",
  },
  {
    icon: Users,
    title: "Spare Parts",
    desc: "Intelligent 3D warehouse and free spare parts list shipped with every machine for fast self-service maintenance.",
  },
  {
    icon: MapPin,
    title: "Local Response",
    desc: "Overseas offices in India & Russia. Local partners provide local language support and faster response.",
  },
];

export default function SupportPillars() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-linear-to-br from-[#071B34] via-[#0B2033] to-[#0D5B63]">
      {/* Background glow, consistent with ServiceHero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[280px] sm:h-[400px] bg-secondary/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 sm:px-5 py-2 sm:py-2.5">
            <Headphones className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm text-white">Reliable Support Throughout the Lifecycle</span>
          </div>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            80+ Bilingual Engineers,{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
            Remote and on-site support, backed by overseas offices in India and Russia,
            with a 1-year warranty from installation sign-off on every machine.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>

                <p className="mt-3 text-sm text-slate-300 leading-6">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}