"use client";

import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  RotateCcw,
  Truck,
  Scale,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<
    "terms" | "privacy" | "refund" | "shipping"
  >("terms");

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            Legal &amp; Operational Governance
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            Terms, Policies &amp; Agreements
          </h1>
          <p className="text-dark-500 text-sm sm:text-base">
            Please review our operating agreements governing international freight forwarding, factory product sourcing, RMB exchange rates, and customer data privacy.
          </p>
        </div>

        {/* Policy Tab Bar */}
        <div className="bg-white p-2 rounded-2xl shadow-soft border border-dark-100 mb-8 flex items-center justify-between gap-2 overflow-x-auto">
          {[
            { id: "terms", label: "Terms of Service", icon: Scale },
            { id: "privacy", label: "Privacy Policy", icon: Lock },
            { id: "refund", label: "Refund Policy", icon: RotateCcw },
            { id: "shipping", label: "Shipping & Customs Policy", icon: Truck },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold whitespace-nowrap flex-1 justify-center transition-all ${
                  active
                    ? "bg-dark-950 text-white shadow-sm font-bold"
                    : "text-dark-600 hover:bg-surface-secondary hover:text-dark-950"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-brand-400" : "text-dark-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl border border-dark-100 p-6 sm:p-12 shadow-soft space-y-8 text-xs sm:text-sm text-dark-600 leading-relaxed">
          
          {/* =========================================================
              1. TERMS OF SERVICE
              ========================================================= */}
          {activeTab === "terms" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-dark-100">
                <Scale className="w-6 h-6 text-brand-500 shrink-0" />
                <div>
                  <h2 className="font-display font-bold text-xl text-dark-950">
                    Terms of Service &amp; Trading Agreement
                  </h2>
                  <p className="text-xs text-dark-400">
                    Last Updated: May 2025 • Governing Entity: KhalineX Store Limited (RC: 0000000)
                  </p>
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">1. Acceptance of Terms</h3>
                <p>
                  By utilizing the services of KhalineX Store Limited ("KhalineX", "we", "us", or "our") — including our shipping calculator, product sourcing forms, wholesale catalog, and KhalineX Academy — you agree to be bound by these Terms of Service.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">2. Quotations &amp; Exchange Rate Locks</h3>
                <p>
                  Quotations issued for international shipping or China product sourcing are calculated in Chinese Yuan (RMB) or US Dollars (USD) and converted to Nigerian Naira (NGN). Due to foreign exchange market volatility:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-dark-600">
                  <li>Quotations remain valid for <strong>24 hours</strong> from the time of issue.</li>
                  <li>Exchange rates are locked strictly at the moment full payment is confirmed in our corporate accounts.</li>
                  <li>In the event of a significant currency devaluation prior to payment, KhalineX reserves the right to issue a revised quotation.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">3. Product Sourcing &amp; Inspection Disclaimer</h3>
                <p>
                  For product sourcing requests, KhalineX acts as an intermediary procurement agent between the customer and third-party Chinese manufacturers (e.g. suppliers on 1688, Taobao, or Alibaba).
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-amber-800 text-xs">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Inspection Limits:</strong> Standard warehouse intake includes visual inspection (verifying package quantity, color, and gross weight). Deep technical testing of specialized electronics or internal machinery requires a separate written request prior to factory payment.
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* =========================================================
              2. PRIVACY POLICY
              ========================================================= */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-dark-100">
                <Lock className="w-6 h-6 text-brand-500 shrink-0" />
                <div>
                  <h2 className="font-display font-bold text-xl text-dark-950">
                    Privacy &amp; Data Protection Policy
                  </h2>
                  <p className="text-xs text-dark-400">
                    NDPR &amp; Global Data Protection Compliant
                  </p>
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">1. Information We Collect</h3>
                <p>
                  To process international waybills, customs clearances, and procurement orders, we collect personal and business information including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-dark-600">
                  <li>Contact identification: Full name, business name, physical delivery address, email, and WhatsApp phone number.</li>
                  <li>Logistics data: Package descriptions, commercial invoices, supplier links, and waybill tracking history.</li>
                  <li>Payment records: Bank transaction reference numbers and payment confirmation receipts. (We do NOT store credit card PINs or full card numbers).</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">2. How We Use Your Data</h3>
                <p>
                  Your information is strictly utilized to execute requested trade services: dispatching cargo, issuing customs declarations, providing WhatsApp tracking alerts, and sending invoices. We never sell or lease customer directories to third-party advertisers.
                </p>
              </section>
            </div>
          )}

          {/* =========================================================
              3. REFUND POLICY
              ========================================================= */}
          {activeTab === "refund" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-dark-100">
                <RotateCcw className="w-6 h-6 text-brand-500 shrink-0" />
                <div>
                  <h2 className="font-display font-bold text-xl text-dark-950">
                    Refund &amp; Order Cancellation Policy
                  </h2>
                  <p className="text-xs text-dark-400">
                    Sourcing, Wholesale &amp; Freight Forwarding Rules
                  </p>
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">1. Product Sourcing Orders</h3>
                <p>
                  Sourcing requests can be canceled with a <strong>100% full refund</strong> provided the payment has NOT yet been disbursed to the supplier in China. Once funds have been transferred to a factory or goods have been dispatched from the supplier, cancellations are subject to the individual Chinese factory's return policy.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">2. Air &amp; Sea Freight Fees</h3>
                <p>
                  Freight charges are fully refundable prior to package departure from our Guangzhou or Yiwu warehouses. Once cargo has been loaded onto an aircraft or vessel, freight charges are non-refundable.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">3. KhalineX Store Catalog Purchases</h3>
                <p>
                  If an item received from our wholesale shop is verified to be defective or damaged upon delivery, you must report it within <strong>48 hours</strong> of delivery with unboxing video proof to receive an instant replacement or store credit.
                </p>
              </section>
            </div>
          )}

          {/* =========================================================
              4. SHIPPING & CUSTOMS POLICY
              ========================================================= */}
          {activeTab === "shipping" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-dark-100">
                <Truck className="w-6 h-6 text-brand-500 shrink-0" />
                <div>
                  <h2 className="font-display font-bold text-xl text-dark-950">
                    Shipping, Cargo Insurance &amp; Customs Policy
                  </h2>
                  <p className="text-xs text-dark-400">
                    Air / Sea Transit Schedules &amp; Import Clearance Rules
                  </p>
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">1. Estimated Transit Timelines</h3>
                <ul className="list-disc pl-5 space-y-1 text-dark-600">
                  <li><strong>Express Air Freight:</strong> 5 to 7 business days from warehouse departure.</li>
                  <li><strong>Sea Freight:</strong> 30 to 45 business days from vessel departure.</li>
                </ul>
                <p className="text-xs text-dark-400 italic">
                  *Transit times begin once cargo departs the origin hub, excluding airline delays, weather disruptions, or port congestion.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">2. Prohibited &amp; Restricted Items</h3>
                <p>
                  KhalineX strictly complies with international aviation and maritime safety laws. The following items will NOT be accepted at our warehouses:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" /> Firearms, Ammunition &amp; Explosives
                  </div>
                  <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" /> Counterfeit Currency &amp; Illicit Narcotics
                  </div>
                  <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" /> Uncertified Corrosive Chemicals
                  </div>
                  <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" /> Flammable Pressurized Liquids / Gases
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="font-bold text-dark-950 text-base">3. Cargo Insurance &amp; Claims</h3>
                <p>
                  All shipments are covered by basic carrier liability. For high-value electronics or delicate machinery, optional goods-in-transit insurance (2% of declared invoice value) is highly recommended at the time of quotation approval to cover total loss or sea vessel damage.
                </p>
              </section>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
