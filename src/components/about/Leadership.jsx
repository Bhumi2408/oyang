"use client";
import Image from "next/image";

const leaders = [
  { name: "Mr. Chen Wei", role: "Founder & CEO", image: "/images/team/chen-wei.jpg" },
  { name: "Ms. Liu Yang", role: "Chief Engineer", image: "/images/team/liu-yang.jpg" },
  { name: "Mr. Zhang Hao", role: "Head of Exports", image: "/images/team/zhang-hao.jpg" },
  { name: "Ms. Wang Mei", role: "Customer Success", image: "/images/team/wang-mei.jpg" },
];

export default function Leadership() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-[#f8fafc] text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
        Meet The{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Leadership
        </span>
      </h2>
      <p className="mt-4 text-base sm:text-lg text-slate-600">
        The people steering Ounuo's mission worldwide.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mt-10 sm:mt-14">
        {leaders.map((person, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[340px] bg-gradient-to-br from-primary to-secondary">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="font-extrabold text-[#0f172a] text-sm sm:text-base">
                {person.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}