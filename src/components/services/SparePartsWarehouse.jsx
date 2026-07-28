import { CheckCircle2, PackageCheck, Video, Warehouse } from "lucide-react";

const processSteps = [
  {
    icon: PackageCheck,
    title: "Free Spare Parts List",
    desc: "Every machine ships with a free spare parts list, so you know exactly what to keep on hand.",
  },
  {
    icon: Video,
    title: "Send Video or Photo",
    desc: "When a part needs replacing, send us a video or photo for quick confirmation.",
  },
  {
    icon: CheckCircle2,
    title: "Fast Replacement",
    desc: "Confirmed parts are shipped out as soon as possible to minimize your downtime.",
  },
];

export default function SparePartsWarehouse() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left - stat highlight */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 sm:px-5 py-2">
            <Warehouse className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary text-sm">Spare Parts & Warehouse</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a]">
            An Intelligent{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              3D Warehouse
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
            We invested <strong className="text-black">$1.5 million USD</strong> to build an
            intelligent 3D warehouse for spare parts storage — tripling storage density
            compared to traditional warehouses, with high-precision, high-speed
            storing and retrieval.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
            During the 1-year warranty period, damaged machine parts are replaced
            free of charge (excluding man-made damage), so your production line
            stays up and running.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">$1.5M</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-5 sm:leading-6">
                Invested in intelligent 3D warehouse infrastructure
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-2xl sm:text-3xl font-extrabold text-secondary">3x</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-5 sm:leading-6">
                Storage density vs. traditional warehouses
              </p>
            </div>
          </div>
        </div>

        {/* Right - process steps */}
        <div className="min-w-0 space-y-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex gap-4 sm:gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-[#0f172a]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-6">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}