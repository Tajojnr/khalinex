// src/app/(public)/services/shipping/page.tsx
"use client";

import { useState } from "react";
import {
  Ship,
  Plane,
  Calculator,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Clock,
  CheckCircle2,
  Upload,
} from "lucide-react";

export default function ShippingServicePage() {
  const [freightType, setType] = useState<"air" | "sea">("air");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            China • Turkey • Dubai ➔ Africa
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            Air &amp; Sea Cargo Shipping
          </h1>
          <p className="text-dark-500 text-base md:text-lg">
            Fast, secure freight forwarding with hassle-free customs clearance and
            doorstep delivery across Nigeria.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-lg mb-2">Express Air Freight</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              5 to 7 days transit time. Perfect for high-value electronics, emergency stock, and lightweight goods.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-lg mb-2">Economic Sea Freight</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              30 to 45 days transit time. Best for bulk machinery, heavy raw materials, and large CBM shipments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-100 shadow-soft">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-dark-950 text-lg mb-2">Customs &amp; Duty Included</h3>
            <p className="text-xs text-dark-400 leading-relaxed">
              No surprise fees at the port. We handle import tariffs, documentation, and local courier delivery.
            </p>
          </div>
        </div>

        {/* Quotation Request Form */}
        <div className="bg-white rounded-3xl shadow-strong border border-dark-100 p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-dark-100">
            <Calculator className="w-6 h-6 text-brand-500" />
            <div>
              <h2 className="font-display font-bold text-xl text-dark-950">
                Request an Instant Shipping Quote
              </h2>
              <p className="text-xs text-dark-400">
                Fill in your cargo details and our Guangzhou team will email your quote within 2 hours.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-brand-50 rounded-2xl p-6">
              <CheckCircle2 className="w-16 h-16 text-brand-600 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-dark-950 mb-2">
                Quotation Request Submitted!
              </h3>
              <p className="text-sm text-dark-600 max-w-md mx-auto mb-6">
                Your request ID is <span className="font-mono font-bold text-brand-600">KLX-REQ-9421</span>. Our freight desk in Guangzhou is calculating your rates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary !py-3"
              >
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
              {/* Freight Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-dark-950 uppercase tracking-wider mb-2">
                  Select Transportation Mode
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setType("air")}
                    className={`p-4 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                      freightType === "air"
                        ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
                        : "border-dark-200 hover:bg-surface-secondary text-dark-600"
                    }`}
                  >
                    <Plane className="w-5 h-5 text-brand-500" /> Air Freight (Express)
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("sea")}
                    className={`p-4 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                      freightType === "sea"
                        ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
                        : "border-dark-200 hover:bg-surface-secondary text-dark-600"
                    }`}
                  >
                    <Ship className="w-5 h-5 text-brand-500" /> Sea Freight (CBM Container)
                  </button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Origin Country / Warehouse
                  </label>
                  <select className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none">
                    <option>Guangzhou Warehouse, China</option>
                    <option>Yiwu Warehouse, China</option>
                    <option>Istanbul, Turkey</option>
                    <option>Dubai, UAE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Destination City in Nigeria
                  </label>
                  <select className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none">
                    <option>Lagos (Ikeja Hub)</option>
                    <option>Kano (Distribution Hub)</option>
                    <option>Abuja (Central Terminal)</option>
                    <option>Port Harcourt</option>
                    <option>Onitsha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Cargo Description / Item Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smartphones, Shoes, Solar Inverters"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Estimated Weight or Volume ({freightType === "air" ? "KG" : "CBM"})
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={freightType === "air" ? "e.g. 25 kg" : "e.g. 1.5 CBM"}
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              {/* Document Upload Simulation */}
              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Upload Invoice / Product Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-dark-200 rounded-xl p-6 text-center hover:bg-surface-secondary cursor-pointer transition-colors">
                  <Upload className="w-8 h-8 text-dark-400 mx-auto mb-2" />
                  <p className="text-xs text-dark-500 font-medium">
                    Click to upload packing list, invoice, or supplier pictures
                  </p>
                  <p className="text-[10px] text-dark-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-dark-100">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adebayo Musa"
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
                Calculate &amp; Submit Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}