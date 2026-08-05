"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ faq, color }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-bold text-[#0f172a]">{faq.q}</span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{ color, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="px-6 pb-5 text-slate-600 leading-7">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs, color }) {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} color={color} />
      ))}
    </div>
  );
}