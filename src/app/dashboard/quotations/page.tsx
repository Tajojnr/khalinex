// src/app/(customer)/dashboard/quotations/page.tsx
"use client";

import { FileText, Download, CheckCircle2, XCircle, Clock } from "lucide-react";

export default function QuotationsPage() {
  const quotes = [
    {
      id: "QT-SRC-992",
      date: "May 02, 2025",
      type: "Product Sourcing (Electronics)",
      amount: "Pending Calc.",
      status: "pending",
    },
    {
      id: "QT-SHP-810",
      date: "April 28, 2025",
      type: "Sea Freight (Guangzhou to Lagos)",
      amount: "₦ 450,000",
      status: "approved",
    },
    {
      id: "QT-SRC-704",
      date: "April 15, 2025",
      type: "Sourcing (Textiles)",
      amount: "₦ 1,200,000",
      status: "rejected",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-dark-950 mb-2">My Quotations</h1>
        <p className="text-sm text-dark-500">Review, approve, or download invoices for your sourcing and shipping requests.</p>
      </div>

      <div className="bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-secondary text-dark-500 uppercase tracking-wider font-semibold border-b border-dark-100">
              <tr>
                <th className="px-6 py-4">Quote ID / Date</th>
                <th className="px-6 py-4">Request Type</th>
                <th className="px-6 py-4">Total Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-50">
              {quotes.map((q) => (
                <tr key={q.id} className="hover:bg-surface-secondary transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-mono font-bold text-dark-950">{q.id}</p>
                    <p className="text-dark-400 mt-0.5">{q.date}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-dark-700">{q.type}</td>
                  <td className="px-6 py-4 font-mono font-bold text-dark-950">{q.amount}</td>
                  <td className="px-6 py-4">
                    {q.status === "pending" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wide">
                        <Clock className="w-3 h-3" /> Under Review
                      </span>
                    )}
                    {q.status === "approved" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wide">
                        <CheckCircle2 className="w-3 h-3" /> Approved
                      </span>
                    )}
                    {q.status === "rejected" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-200 uppercase tracking-wide">
                        <XCircle className="w-3 h-3" /> Rejected
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {q.status === "approved" && (
                      <button className="btn-primary !px-3 !py-1.5 !text-[10px]">
                        Pay Now
                      </button>
                    )}
                    <button className="btn-secondary !px-2 !py-1.5" title="Download PDF Invoice">
                      <Download className="w-3.5 h-3.5 text-dark-500" />
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