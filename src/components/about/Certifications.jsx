"use client";
import Image from "next/image";

const certifications = [
  { name: "High-Tech Enterprise", image: "/images/certs/high-tech-enterprise.png" },
  { name: "IAF", image: "/images/certs/iaf.png" },
  { name: "CNAS", image: "/images/certs/cnas.png" },
  { name: "CE", image: "/images/certs/ce.png" },
];

export default function Certifications() {
  return (
    <section className="py-24 px-10 lg:px-24 bg-white text-center">
      <h2 className="text-5xl font-extrabold text-[#0f172a]">
        Certified. Trusted.{" "}
        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Proven.
        </span>
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        Independently verified to international quality and safety standards.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-linear-to-b from-slate-50 to-white p-10 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/30"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={cert.image}
                alt={`${cert.name} certification`}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-extrabold text-[#0f172a]">{cert.name}</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Certified
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}