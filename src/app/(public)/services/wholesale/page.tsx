"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ShoppingBag,
  FileSpreadsheet,
} from "lucide-react";

export default function WholesaleServicePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        {/* Title & Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            B2B &amp; Commercial Bulk Procurement
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            Wholesale Trade &amp; Bulk Purchasing
          </h1>
          <p className="text-dark-500 text-base md:text-lg">
            Direct factory prices for phone dealers, textile merchants, school suppliers, and solar installers. We handle container consolidation, OEM custom branding, and door-to-door delivery.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-base mb-2">Direct Factory Pricing</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              No middleman markups. We source straight from verified manufacturing plants in Guangzhou, Yiwu, and Shenzhen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-base mb-2">OEM &amp; Custom Branding</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              Print your company logo, custom packaging, and private label branding on bulk electronics, stationery, and apparel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-base mb-2">Container Consolidation</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              Combine multiple product types from different Chinese factories into a single 20ft or 40ft High Cube container shipment.
            </p>
          </div>
        </div>

        {/* Quick CTA to Shop */}
        <div className="bg-dark-950 text-white rounded-3xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-dark">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Looking for In-Stock Wholesale Items?
            </h3>
            <p className="text-xs text-white/60">
              Explore our 100-item online catalog with ready-to-ship phones, stationery, blankets, and solar inverters.
            </p>
          </div>
          <Link href="/shop" className="btn-primary shrink-0 !py-3 !px-6 !text-xs">
            <ShoppingBag className="w-4 h-4" /> Browse Catalog
          </Link>
        </div>

        {/* Bulk Inquiry Form */}
        <div className="bg-white rounded-3xl shadow-strong border border-dark-100 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-dark-100">
            <FileSpreadsheet className="w-6 h-6 text-brand-500" />
            <div>
              <h2 className="font-display font-bold text-xl text-dark-950">
                Submit a Custom Bulk Wholesale Inquiry
              </h2>
              <p className="text-xs text-dark-400">
                Need full container loads or custom manufacturing? Tell us your specifications.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-brand-50 rounded-2xl p-6">
              <CheckCircle2 className="w-16 h-16 text-brand-600 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-dark-950 mb-2">
                Wholesale Inquiry Received!
              </h3>
              <p className="text-sm text-dark-600 max-w-md mx-auto mb-6">
                Inquiry ID: <span className="font-mono font-bold text-brand-600">KLX-B2B-4091</span>. A corporate trade manager will call you within 2 hours.
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adebayo Electronics Ltd"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Product Category
                  </label>
                  <select className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none">
                    <option>Smartphones &amp; Mobile Accessories</option>
                    <option>Blankets, Laces &amp; Textiles</option>
                    <option>School &amp; Office Stationery</option>
                    <option>Solar Inverters &amp; Lithium Batteries</option>
                    <option>Kitchen &amp; Household Appliances</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Estimated Order Volume / Container Size
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 Units / 20ft Container"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Detailed Specifications &amp; Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe target unit pricing, required delivery date, custom logo printing, or packaging needs..."
                  className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-dark-100">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="adebayo@company.com"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
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
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full !py-4 text-xs font-bold">
                Submit Wholesale Inquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
