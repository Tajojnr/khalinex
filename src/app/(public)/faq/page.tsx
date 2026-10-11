// src/app/(public)/faq/page.tsx
"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How does KhalineX calculate air and sea shipping rates?",
    a: "Air freight rates are calculated per Gross Weight (KG) or Volumetric Weight (whichever is higher). Sea freight is calculated per Cubic Meter (CBM). Our quoted rates include customs clearance tariffs in Nigeria.",
  },
  {
    q: "Can KhalineX pay my supplier in RMB (Chinese Yuan)?",
    a: "Yes! We offer RMB supplier payment services. You pay in Naira to our corporate bank account in Nigeria, and our Guangzhou office pays your factory directly via Alipay or WeChat Pay within 1 hour.",
  },
  {
    q: "How do I track my cargo shipment?",
    a: "Every shipment receives a unique tracking ID (e.g., KLX-2025-8841). Enter this ID on our Track page or in your Customer Dashboard to view live location updates from China warehouse intake to local delivery.",
  },
  {
    q: "What products are prohibited from shipping?",
    a: "Prohibited items include weapons, highly flammable chemicals, counterfeit currencies, and illegal drugs. Electronics with built-in lithium batteries require special hazardous cargo handling.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            Knowledge Base
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-dark-950 mt-4 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-dark-500 text-sm">
            Everything you need to know about shipping, procurement, and payments with KhalineX.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-dark-950 text-sm sm:text-base flex justify-between items-center gap-4 hover:bg-surface-secondary transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-dark-500 border-t border-dark-50 leading-relaxed bg-surface-secondary/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}