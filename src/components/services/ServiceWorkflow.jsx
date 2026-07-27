"use client";
import { FileSearch, Package, PencilRuler, Puzzle, Truck, Wrench } from "lucide-react";

const workflow = [
  { step: "STEP 1", icon: FileSearch, title: "Consult" },
  { step: "STEP 2", icon: PencilRuler, title: "Design" },
  { step: "STEP 3", icon: Package, title: "Build & Test" },
  { step: "STEP 4", icon: Truck, title: "Deliver" },
  { step: "STEP 5", icon: Wrench, title: "Support" },
];

export default function ServiceWorkflow() {
  return (
    <section className="py-24 px-10 lg:px-24 bg-slate-50 text-center">
      <h2 className="text-5xl font-extrabold text-[#0f172a]">
        Our Service{" "}
        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Workflow
        </span>
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        A proven 5-step process that ensures success from day one.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-14">
        {workflow.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative rounded-2xl bg-white shadow-sm p-6 pt-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-extrabold tracking-wide text-white whitespace-nowrap">
                {item.step}
              </span>

              <Icon className="w-10 h-10 mx-auto text-primary" strokeWidth={1.75} />

              <h3 className="mt-4 font-extrabold text-[#0f172a]">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}