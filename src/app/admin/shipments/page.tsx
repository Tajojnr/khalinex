// src/app/admin/shipments/page.tsx
"use client";

import { useState } from "react";
import { Package, MapPin, CheckCircle2, ArrowRight, Filter } from "lucide-react";

export default function AdminShipmentsPage() {
  const [shipments, setShipments] = useState([
    {
      id: "KLX-2025-8841",
      customer: "Adebayo Electronics Ltd",
      route: "Guangzhou ➔ Lagos",
      type: "Air Freight",
      weight: "48.5 kg",
      stage: "In Flight / Departure",
    },
    {
      id: "KLX-2025-1092",
      customer: "Fatima Textiles Enterprise",
      route: "Yiwu ➔ Kano Hub",
      type: "Sea Freight",
      weight: "420 CBM",
      stage: "Port Arrival & Discharge",
    },
  ]);

  const stagesList = [
    "Warehouse Intake & Inspection",
    "Customs Export Clearance",
    "In Flight / Departure",
    "Nigeria Customs Arrival",
    "Local Distribution & Delivery",
  ];

  const handleStageChange = (id: string, newStage: string) => {
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, stage: newStage } : s))
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold text-white mb-1">
          Cargo &amp; Waybill Control
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Update real-time logistics tracking stages for active customer shipments.
        </p>
      </div>

      <div className="bg-dark-900 rounded-2xl border border-white/10 overflow-hidden shadow-dark">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <Package className="w-4 h-4 text-brand-400" /> Active Master Manifest
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 text-white/50 uppercase tracking-wider font-semibold border-b border-white/10">
              <tr>
                <th className="px-6 py-3.5">Waybill ID</th>
                <th className="px-6 py-3.5">Consignee</th>
                <th className="px-6 py-3.5">Route &amp; Mode</th>
                <th className="px-6 py-3.5">Current Tracking Stage</th>
                <th className="px-6 py-3.5 text-right">Update Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {shipments.map((s) => (
                <tr key={s.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-brand-400">
                    {s.id}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    {s.customer}
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    <p className="font-medium text-white">{s.route}</p>
                    <p className="text-[10px] text-white/40">{s.type} • {s.weight}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5" />
                      {s.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <select
                      value={s.stage}
                      onChange={(e) => handleStageChange(s.id, e.target.value)}
                      className="bg-dark-950 border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg outline-none focus:border-brand-500 cursor-pointer"
                    >
                      {stagesList.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
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