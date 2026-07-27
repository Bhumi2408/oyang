const testimonials = [
  {
    quote: "Their paper bag machine doubled our output. Best investment in 10 years.",
    name: "Carlos M.",
    company: "EcoPack, Mexico",
    initials: "C",
  },
  {
    quote: "Reliable, fast, and the after-sales team is genuinely helpful.",
    name: "Aisha K.",
    company: "GreenBag Industries, UAE",
    initials: "A",
  },
  {
    quote: "We've bought 6 machines from Ounuo. Quality is consistently world-class.",
    name: "James O.",
    company: "Pacific Print, Australia",
    initials: "J",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-24">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-[#0f172a]">Loved By Manufacturers</h2>

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
            <div className="text-2xl font-black text-secondary leading-none">"</div>

            <p className="text-[#1e293b] mt-3">{item.quote}</p>

            <div className="h-px bg-slate-200 my-5"></div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                {item.initials}
              </div>

              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{item.name}</h4>

                <p className="text-char text-sm">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}