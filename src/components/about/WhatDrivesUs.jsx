"use client";
import { Eye, Rocket, Target } from "lucide-react";

const drives = [
  {
    icon: Target,
    title: "Mission",
    desc: "Provide high-quality, cost-effective ecological packaging solutions — complete, eco-friendly product-making systems for customers worldwide.",
    iconBg: "bg-linear-to-br from-[#071B34] to-[#0D5B63]",
    glow: "bg-[#0D5B63]/20",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be user-oriented in everything we do, sustainably creating value to achieve a better us and a better world.",
    iconBg: "bg-[#0D5B63]",
    glow: "bg-[#0D5B63]/15",
  },
  {
    icon: Rocket,
    title: "Promise",
    desc: "Engineered for 24-hour continuous heavy-duty operation, using world-class components to minimize unplanned downtime and maximize your ROI.",
    iconBg: "bg-secondary",
    glow: "bg-secondary/20",
  },
];

export default function WhatDrivesUs() {
  return (
    <section className="py-20 px-10 lg:px-24 bg-white text-center">
      <h2 className="text-5xl font-extrabold text-[#0f172a]">
        What{" "}
        <span className="bg-linear-to-r from-[#071B34] to-[#0D5B63] bg-clip-text text-transparent">
          Drives Us
        </span>
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        Three commitments that shape every decision we make.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-14">
        {drives.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden text-left rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${item.glow} blur-2xl`} />

              <div className={`relative w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="relative mt-6 text-2xl font-extrabold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="relative mt-3 text-slate-600 leading-7">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}