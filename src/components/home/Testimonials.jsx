const testimonials = [
  {
    quote: "Our paper bag production line significantly increased our daily output — one of our best equipment investments.",
    label: "Paper Bag Manufacturer",
  },
  {
    quote: "Reliable machines and a responsive after-sales team that's always available when we need support.",
    label: "Nonwoven Bag Producer",
  },
  {
    quote: "We've expanded our production line with multiple machines over the years. Build quality has been consistently strong.",
    label: "Flexible Pouch Converter",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
            Loved By Manufacturers
          </h2>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-1 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
            Worldwide
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 mt-8 sm:mt-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 border border-[#f3d7ca] shadow-[0_10px_40px_rgba(198,39,44,0.08)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-2xl font-black text-secondary leading-none">"</div>

              <p className="text-[#1e293b] text-sm sm:text-base mt-3 leading-6 sm:leading-7">
                {item.quote}
              </p>

              <div className="h-px bg-slate-200 my-5"></div>

              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}