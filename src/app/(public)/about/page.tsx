// src/app/(public)/about/page.tsx
import Link from "next/link";
import { ShieldCheck, Globe, Building2, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            More Than Just Trading... We Deliver Trust
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            About KhalineX Store Limited
          </h1>
          <p className="text-dark-500 text-sm sm:text-base leading-relaxed">
            Founded with a mission to bridge the trust and logistics gap between international factory hubs and African business owners.
          </p>
        </div>

        {/* Credentials Banner */}
        <div className="bg-dark-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-dark relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-brand-400 font-bold text-xs uppercase tracking-wider">
                CAC Verified Enterprise
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                Connecting African Commerce to World Manufacturers
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                KhalineX Store Limited operates direct logistics, warehousing, and procurement operations with verified ground staff in Guangzhou (China) and Lagos (Nigeria).
              </p>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  <span>Licensed Import-Export Enterprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  <span>Transparent Air &amp; Sea Freight Tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-mono text-3xl font-extrabold text-brand-400">5,000+</p>
                <p className="text-[11px] text-white/50 uppercase mt-1">Cargo Deliveries</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-mono text-3xl font-extrabold text-brand-400">12</p>
                <p className="text-[11px] text-white/50 uppercase mt-1">Global Routes</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-mono text-3xl font-extrabold text-brand-400">2,500+</p>
                <p className="text-[11px] text-white/50 uppercase mt-1">Active Merchants</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-mono text-3xl font-extrabold text-brand-400">98%</p>
                <p className="text-[11px] text-white/50 uppercase mt-1">On-Time Clearance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}