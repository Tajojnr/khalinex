// src/app/dashboard/page.tsx
"use client";

import Link from "next/link";
import { Package, FileText, CheckCircle2, Clock, Ship, Plane } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function DashboardOverview() {
  const { user } = useAuthStore();

  const stats = [
    { label: "Active Shipments", value: "2", icon: Package, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Pending Quotations", value: "1", icon: FileText, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Completed Orders", value: "14", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-dark-950 rounded-3xl p-8 relative overflow-hidden shadow-dark">
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500/20 blur-3xl rounded-full" />
        <div className="relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name?.split(" ")[0] || "Adebayo"}! 👋
          </h1>
          <p className="text-white/60 text-sm">
            Here is what's happening with your global trade operations today.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-dark-100 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[28px] font-display font-extrabold text-dark-950 leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-dark-400 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-dark-50 flex items-center justify-between">
            <h3 className="font-bold text-dark-950 text-sm flex items-center gap-2">
              <Ship className="w-4 h-4 text-brand-500" /> Active Shipments
            </h3>
            <Link href="/track" className="text-[10px] font-bold text-brand-600 hover:underline uppercase tracking-wider">
              Track ID
            </Link>
          </div>
          <div className="p-5 space-y-4">
            <div className="p-4 bg-surface-secondary rounded-xl border border-dark-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase tracking-wide">In Transit</span>
                  <p className="font-mono text-xs font-bold text-dark-950 mt-1">KLX-2025-8841</p>
                </div>
                <Plane className="w-4 h-4 text-dark-400" />
              </div>
              <p className="text-xs text-dark-500 mb-3">Guangzhou, China ➔ Lagos, Nigeria</p>
              <div className="w-full bg-dark-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-brand-500 h-full w-[60%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-dark-400 mt-2 text-right">Est. Delivery: May 12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-dark-50 flex items-center justify-between">
            <h3 className="font-bold text-dark-950 text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-500" /> Recent Quotations
            </h3>
            <Link href="/dashboard/quotations" className="text-[10px] font-bold text-brand-600 hover:underline uppercase tracking-wider">
              View All
            </Link>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-secondary text-dark-500 uppercase tracking-wider font-semibold border-b border-dark-50">
                <tr>
                  <th className="px-5 py-3">Quote ID</th>
                  <th className="px-5 py-3">Type</th>
                  <th className="px-5 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-50">
                <tr>
                  <td className="px-5 py-3.5 font-mono text-dark-950 font-bold">QT-SRC-992</td>
                  <td className="px-5 py-3.5 text-dark-600">Product Sourcing</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded border border-amber-200">
                      <Clock className="w-3 h-3" /> Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}