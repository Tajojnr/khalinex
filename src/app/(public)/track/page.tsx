// src/app/(public)/track/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Package,
  Plane,
  Ship,
  CheckCircle2,
  Clock,
  MapPin,
  FileText,
  AlertCircle,
  Building2,
  Calendar,
  Weight,
  Box,
  Truck,
  ArrowRight,
} from "lucide-react";

// Mock database of tracking numbers for the demo
const MOCK_SHIPMENTS: Record<string, any> = {
  "KLX-2025-8841": {
    trackingNo: "KLX-2025-8841",
    type: "Air Freight",
    origin: "Guangzhou Warehouse, China",
    destination: "Lagos Hub, Nigeria",
    customer: "Adebayo Electronics Ltd",
    estimatedDelivery: "May 12, 2025",
    weight: "48.5 kg",
    packages: "3 Cartons",
    status: "In Transit",
    currentStage: 3,
    timeline: [
      {
        title: "Warehouse Intake & Inspection",
        location: "Guangzhou Hub, China",
        date: "May 02, 2025 • 10:30 AM",
        completed: true,
        description: "Package received, weighed, and verified at China warehouse.",
      },
      {
        title: "Customs Export Clearance",
        location: "Baiyun Airport, Guangzhou",
        date: "May 04, 2025 • 04:15 PM",
        completed: true,
        description: "Passed China export inspection and customs documentation.",
      },
      {
        title: "In Flight / Departure",
        location: "Air Transit (Flight ET-801)",
        date: "May 06, 2025 • 01:00 AM",
        completed: true,
        description: "Cargo departed Guangzhou hub en route to Lagos, Nigeria.",
      },
      {
        title: "Nigeria Customs Arrival",
        location: "MMIA Airport, Lagos",
        date: "May 08, 2025 • Expected",
        completed: false,
        current: true,
        description: "Pending import assessment and clearance at Lagos airport.",
      },
      {
        title: "Local Distribution & Delivery",
        location: "Ikeja Terminal / Doorstep",
        date: "May 10, 2025 • Expected",
        completed: false,
        description: "Dispatched to local courier for final customer handover.",
      },
    ],
  },
  "KLX-2025-1092": {
    trackingNo: "KLX-2025-1092",
    type: "Sea Freight",
    origin: "Yiwu Warehouse, China",
    destination: "Kano Distribution Center",
    customer: "Fatima Textiles Enterprise",
    estimatedDelivery: "June 05, 2025",
    weight: "420 CBM / 2 Containers",
    packages: "140 Bales",
    status: "At Sea",
    currentStage: 2,
    timeline: [
      {
        title: "Container Loading & Sealing",
        location: "Ningbo Port, China",
        date: "April 20, 2025",
        completed: true,
        description: "Cargo loaded and sealed in 40ft High Cube container.",
      },
      {
        title: "Vessel Departure",
        location: "South China Sea",
        date: "April 25, 2025",
        completed: true,
        description: "Vessel MSC LORETTO departed for Tin Can Island Port, Lagos.",
      },
      {
        title: "Port Arrival & Discharge",
        location: "Tin Can Port, Lagos",
        date: "May 28, 2025 • Expected",
        completed: false,
        current: true,
        description: "Scheduled for port discharge and bonded terminal transfer.",
      },
      {
        title: "Final Delivery to Kano",
        location: "Kano Warehouse",
        date: "June 05, 2025 • Expected",
        completed: false,
        description: "Interstate haulage to northern distribution warehouse.",
      },
    ],
  },
};

export default function TrackPage() {
  const [inputQuery, setInputQuery] = useState("KLX-2025-8841");
  const [activeShipment, setActiveShipment] = useState<any>(
    MOCK_SHIPMENTS["KLX-2025-8841"]
  );
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputQuery.trim().toUpperCase();
    if (MOCK_SHIPMENTS[query]) {
      setActiveShipment(MOCK_SHIPMENTS[query]);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-brand-600 font-semibold text-xs tracking-widest uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full">
            <Package className="w-3.5 h-3.5" />
            Cargo Logistics Tracking
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-dark-950 mb-4">
            Track Your Shipment
          </h1>
          <p className="text-dark-500 text-sm md:text-base">
            Enter your KhalineX Tracking ID (e.g.{" "}
            <span className="font-mono text-brand-600 font-bold">KLX-2025-8841</span>)
            to view real-time cargo movement.
          </p>
        </div>

        {/* Tracking Input Card */}
        <div className="bg-white rounded-2xl shadow-strong p-4 sm:p-6 mb-10 border border-dark-100">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter Tracking Number (e.g. KLX-2025-8841)"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-dark-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm font-mono text-dark-950 outline-none transition-all uppercase"
              />
            </div>
            <button type="submit" className="btn-primary shrink-0 !py-3.5">
              Track Cargo
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 mt-4 text-xs text-dark-400">
            <span>Try sample tracking IDs:</span>
            {Object.keys(MOCK_SHIPMENTS).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setInputQuery(id);
                  setActiveShipment(MOCK_SHIPMENTS[id]);
                  setError(false);
                }}
                className="font-mono text-brand-600 underline hover:text-brand-800"
              >
                {id}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Tracking ID not found. Please check your waybill receipt or try{" "}
              <span className="font-mono font-bold">KLX-2025-8841</span>.
            </div>
          )}
        </div>

        {/* Tracking Results Card */}
        {activeShipment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Overview Banner */}
            <div className="bg-dark-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-dark">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-brand-400 font-bold text-lg">
                      {activeShipment.trackingNo}
                    </span>
                    <span className="bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                      {activeShipment.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    {activeShipment.type === "Air Freight" ? (
                      <Plane className="w-5 h-5 text-brand-400" />
                    ) : (
                      <Ship className="w-5 h-5 text-brand-400" />
                    )}
                    {activeShipment.origin} ➔ {activeShipment.destination}
                  </h2>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <Clock className="w-8 h-8 text-brand-400 shrink-0" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">
                      Estimated Delivery
                    </p>
                    <p className="text-sm font-bold text-white">
                      {activeShipment.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cargo Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-white/40 mb-1 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-brand-400" /> Consignee
                  </p>
                  <p className="font-semibold text-white truncate">
                    {activeShipment.customer}
                  </p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-white/40 mb-1 flex items-center gap-1">
                    <Weight className="w-3.5 h-3.5 text-brand-400" /> Gross Weight
                  </p>
                  <p className="font-semibold text-white">{activeShipment.weight}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-white/40 mb-1 flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-brand-400" /> Quantity
                  </p>
                  <p className="font-semibold text-white">{activeShipment.packages}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-white/40 mb-1 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-brand-400" /> Shipping Mode
                  </p>
                  <p className="font-semibold text-white">{activeShipment.type}</p>
                </div>
              </div>
            </div>

            {/* Timeline Progress */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dark-100 shadow-soft">
              <h3 className="font-display font-bold text-lg text-dark-950 mb-8 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" /> Shipment Progress Timeline
              </h3>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-dark-100">
                {activeShipment.timeline.map((stage: any, index: number) => (
                  <div key={index} className="relative flex items-start gap-4 group">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                        stage.completed
                          ? "bg-brand-500 text-white ring-4 ring-brand-100"
                          : stage.current
                          ? "bg-dark-950 text-brand-400 ring-4 ring-brand-100 animate-pulse"
                          : "bg-dark-100 text-dark-400"
                      }`}
                    >
                      {stage.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <span className="text-[10px] font-bold">{index + 1}</span>
                      )}
                    </div>

                    {/* Stage Content */}
                    <div className="flex-1 bg-surface-secondary p-4 rounded-2xl border border-dark-50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4
                          className={`font-semibold text-sm ${
                            stage.completed || stage.current
                              ? "text-dark-950"
                              : "text-dark-400"
                          }`}
                        >
                          {stage.title}
                        </h4>
                        <span className="text-xs text-dark-400 font-mono">
                          {stage.date}
                        </span>
                      </div>
                      <p className="text-xs text-dark-500 mb-2">
                        {stage.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-dark-400 bg-white px-2.5 py-1 rounded-md border border-dark-100">
                        <MapPin className="w-3 h-3 text-brand-500" />
                        {stage.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}