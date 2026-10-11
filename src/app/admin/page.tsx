// src/app/admin/page.tsx
"use client";

import {
  DollarSign,
  Package,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Plane,
  Ship,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function AdminOverviewPage() {
  const metrics = [
    {
      title: "Total Revenue (MTD)",
      value: "₦ 48,250,000",
      change: "+18.4%",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      title: "Active Cargo Shipments",
      value: "38 Packages",
      change: "12 Air / 26 Sea",
      icon: Package,
      color: "text-brand-400",
    },
    {
      title: "Pending Quotations",
      value: "7 Requests",
      change: "Requires Rate Calc.",
      icon: FileText,
      color: "text-amber-400",
    },
  ];

  const recentSourcing = [
    {
      id: "KLX-SRC-8819",
      customer: "Adebayo Johnson",
      product: "Bluetooth Earbuds i12 (500 Pcs)",
      source: "1688.com Supplier",
      status: "Pending RMB Quote",
    },
    {
      id: "KLX-SRC-8818",
      customer: "Fatima Ibrahim",
      product: "Swiss Voile Lace Bales (10 Bales)",
      source: "Guangzhou Textile Market",
      status: "Quoted (¥ 14,200)",
    },
    {
      id: "KLX-SRC-8817",
      customer: "Chukwuemeka Obi",
      product: "5.5KW Solar Inverters (20 Units)",
      source: "Shenzhen Factory",
      status: "Paid & Dispatched",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-extrabold text-white mb-1">
          Operations Command Center
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Real-time trade flow monitoring across Guangzhou and Nigeria warehouses.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-dark-900 p-6 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-white/50">{m.title}</span>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <p className="font-mono text-2xl font-extrabold text-white mb-1">
              {m.value}
            </p>
            <p className="text-xs text-brand-400 font-semibold">{m.change}</p>
          </div>
        ))}
      </div>

      {/* Revenue Performance Chart Bar Visualizer */}
      <div className="bg-dark-900 p-6 rounded-2xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-white text-sm">Monthly Trade Volume (Naira)</h3>
            <p className="text-xs text-white/40">Air Freight vs Sea Freight Breakdown</p>
          </div>
          <span className="text-xs text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full font-mono border border-brand-500/20">
            Q2 2025 Performance
          </span>
        </div>

        {/* Visual Bar Graph */}
        <div className="space-y-4 pt-2">
          {[
            { month: "Jan", air: 70, sea: 40 },
            { month: "Feb", air: 85, sea: 55 },
            { month: "Mar", air: 60, sea: 80 },
            { month: "Apr", air: 95, sea: 90 },
          ].map((bar) => (
            <div key={bar.month} className="space-y-1.5">
              <div className="flex justify-between text-xs text-white/60">
                <span className="font-bold">{bar.month} 2025</span>
                <span className="font-mono">Air: {bar.air}% | Sea: {bar.sea}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex gap-1">
                <div
                  className="bg-brand-500 h-full rounded-full transition-all"
                  style={{ width: `${bar.air}%` }}
                />
                <div
                  className="bg-blue-500 h-full rounded-full transition-all"
                  style={{ width: `${bar.sea}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incoming Sourcing Requests Table */}
      <div className="bg-dark-900 rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-400" /> Pending China Sourcing Queue
          </h3>
          <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded font-bold">
            Needs Action
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 text-white/50 uppercase tracking-wider font-semibold border-b border-white/10">
              <tr>
                <th className="px-6 py-3.5">Request ID</th>
                <th className="px-6 py-3.5">Customer</th>
                <th className="px-6 py-3.5">Product Details</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentSourcing.map((s) => (
                <tr key={s.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-brand-400">
                    {s.id}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    {s.customer}
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    <p className="font-medium text-white">{s.product}</p>
                    <p className="text-[10px] text-white/40">{s.source}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" /> {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="btn-primary !py-1.5 !px-3 !text-[10px]">
                      Issue RMB Quote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}