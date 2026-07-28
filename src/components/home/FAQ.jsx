"use client";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are you a manufacturer or a trading company?",
    answer:
      "We have been a professional machinery manufacturer in the packaging and printing industry for over 20 years, operating from a facility spanning 130,000 m² with more than 700 employees.",
  },
  {
    question: "Where is your factory located? May I visit?",
    answer:
      "You're very welcome! Our factory is located in Wenzhou City, Zhejiang Province, China.",
  },
  {
    question: "What information do I need to provide to get a quote?",
    answer:
      "First, the type of paper you want to use; second, the size of the paper bag; third, the paper thickness. Once we have this basic information, we'll recommend the right machine model for you.",
  },
  {
    question: "What is the warranty period on your machines?",
    answer:
      "All our machines come with a one-year warranty, starting from the date installation is completed.",
  },
  {
    question: "What happens after the one-year warranty period ends?",
    answer:
      "We continue to provide paid technical service and support after the warranty period ends — our team will share the exact service terms when you place your order.",
  },
  {
    question: "What are your advantages compared to other suppliers?",
    answer:
      "280+ patents (including 80+ invention patents), $30M invested in Japanese Mazak & Okuma precision CNC equipment, complete in-house component production, custom design capability, and responsive after-sales support across 8 global regions.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-linear-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-14">
        {/* Left */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#eef6f7] px-4 py-2">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">FAQs</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Got{" "}
            <span className="bg-linear-to-r from-primary via-secondary/80 to-secondary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Quick answers to the most common questions buyers ask before placing an order.
          </p>

          <button className="group mt-7 flex items-center gap-3 font-bold text-secondary">
            Ask our team
            <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Right */}
        <div className="space-y-4 min-w-0">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 sm:px-8 py-4 sm:py-5 text-left"
              >
                <span className="text-base sm:text-lg font-bold text-[#0f172a]">
                  {faq.question}
                </span>

                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary/80 text-white shrink-0">
                  {active === index ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ${
                  active === index ? "max-h-48 pb-6 sm:pb-7 px-5 sm:px-8" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}