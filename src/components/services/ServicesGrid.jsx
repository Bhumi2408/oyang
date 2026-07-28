"use client";
import {
  Cog,
  GraduationCap,
  Headphones,
  Plane,
  Puzzle,
  Wrench,
  Boxes,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Puzzle,
    title: "Custom Engineering",
    desc: "Tell us your paper type, bag size and thickness — we recommend and configure the right machine model.",
  },
  {
    number: "02",
    icon: Cog,
    title: "Installation & Commissioning",
    desc: "Our engineers support setup, calibration and trial runs to get your line running.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Operator Training",
    desc: "Hands-on training sessions for your team on operation and routine maintenance.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "1-Year Warranty",
    desc: "Every machine is covered for one year from the date installation sign-off is completed.",
  },
  {
    number: "05",
    icon: Boxes,
    title: "Spare Parts Supply",
    desc: "An intelligent 3D warehouse and free spare parts list keep your production line running.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "One-to-One After-Sales Support",
    desc: "80+ bilingual after-sales engineers, with overseas offices in India and Russia, provide dedicated attention to every issue.",
  },
  {
    number: "07",
    icon: Plane,
    title: "Worldwide Shipping",
    desc: "Export logistics serving customers across North America, Latin America, Europe, Middle East, Africa, South Asia, Southeast Asia and Russia & CIS.",
  },
  {
    number: "08",
    icon: Wrench,
    title: "Post-Warranty Service",
    desc: "Continued technical support available after warranty, with a technician dispatched as needed.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 transition-all duration-300 hover:border-primary hover:shadow-[0px_0px_25px] hover:shadow-primary/20 hover:bg-white hover:-translate-y-1"
            >
              <p className="text-sm font-bold text-slate-400">{service.number}</p>

              <div className="mt-4 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <h3 className="mt-4 text-base sm:text-lg font-extrabold text-[#0f172a]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-6">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}