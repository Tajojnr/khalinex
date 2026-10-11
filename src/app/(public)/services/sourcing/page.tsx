// src/app/(public)/services/sourcing/page.tsx
"use client";

import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Globe,
  Building,
  ShieldAlert,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";

export default function SourcingServicePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            Guangzhou Sourcing Hub
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            Product Sourcing from China
          </h1>
          <p className="text-dark-500 text-base md:text-lg">
            Paste a 1688, Taobao, or Alibaba link — or describe what you want to buy. Our ground team in China verifies factory authenticity and negotiates best rates.
          </p>
        </div>

        {/* Sourcing Process Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 text-center">
          {[
            { step: "1", title: "Submit Link / Picture", desc: "Paste supplier link or product description" },
            { step: "2", title: "Factory Audit", desc: "We contact supplier & inspect production quality" },
            { step: "3", title: "Receive RMB / Naira Quote", desc: "Includes procurement cost + shipping fees" },
            { step: "4", title: "Pay & Dispatch", desc: "We purchase goods and ship directly to Nigeria" },
          ].map((item) => (
            <div key={item.step} className="bg-white p-5 rounded-2xl border border-dark-100 shadow-soft">
              <div className="w-8 h-8 rounded-full bg-dark-950 text-brand-500 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-dark-950 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-dark-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-3xl shadow-strong border border-dark-100 p-6 md:p-10">
          <h2 className="font-display font-bold text-xl text-dark-950 mb-2">
            Submit a Procurement Request
          </h2>
          <p className="text-xs text-dark-400 mb-6 pb-6 border-b border-dark-100">
            Our Guangzhou agents will source from verified suppliers and email a detailed invoice within 24 hours.
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-brand-50 rounded-2xl p-6">
              <CheckCircle2 className="w-16 h-16 text-brand-600 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-dark-950 mb-2">
                Sourcing Request Received!
              </h3>
              <p className="text-sm text-dark-600 max-w-md mx-auto mb-6">
                Request ID: <span className="font-mono font-bold text-brand-600">KLX-SRC-8819</span>. An agent in China is reviewing your specifications.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-primary !py-3">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Product Link (1688, Taobao, Alibaba, Made-in-China)
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                  <input
                    type="url"
                    placeholder="https://detail.1688.com/offer/..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Product Name / Description
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wireless Bluetooth Earbuds i12"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Target Quantity (Minimum Order Quantity)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 Pieces"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Detailed Specifications (Colors, Sizes, Custom Branding)
                </label>
                <textarea
                  rows={4}
                  placeholder="Include details like custom logo requirements, packaging, color ratios, or target unit price in USD/RMB."
                  className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-dark-100">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full !py-4 text-base">
                Submit Sourcing Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}