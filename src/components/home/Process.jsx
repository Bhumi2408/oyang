const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your goals — we recommend the ideal machine.",
  },
  {
    number: "02",
    title: "Custom Quote",
    description: "Detailed proposal with specs, pricing & timeline.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description: "Production starts in our certified facility.",
  },
  {
    number: "04",
    title: "Testing & Shipping",
    description: "Quality tested, packed and shipped worldwide.",
  },
  {
    number: "05",
    title: "Installation",
    description: "Remote or on-site setup and operator training.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-linear-to-br from-[#071B34] via-[#0B2D4A] to-[#0D5B63]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            From Inquiry to{" "}
            <span className="bg-linear-to-r from-[#ff9a1f] to-[#ff5e14] bg-clip-text text-transparent">
              Installation
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A seamless 5-step journey designed for global buyers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-5">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/20 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff7a18]/40 hover:bg-white/10"
            >
              <div className="text-4xl sm:text-5xl font-black leading-none text-[#ff9a1f]">
                {step.number}
              </div>

              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}