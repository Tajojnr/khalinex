// src/app/(public)/order-success/page.tsx
import Link from "next/link";
import { CheckCircle2, Package, ArrowRight, Printer, Share2 } from "lucide-react";

export default function OrderSuccessPage() {
  const mockOrderId = "KLX-2025-9921";

  return (
    <div className="bg-surface-secondary min-h-screen py-16 md:py-24">
      <div className="container-main max-w-2xl text-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-dark-100 shadow-strong">
          <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Order Confirmed
          </span>

          <h1 className="font-display text-3xl font-extrabold text-dark-950 mt-4 mb-2">
            Thank You for Your Order!
          </h1>
          <p className="text-dark-500 text-sm max-w-md mx-auto mb-8">
            Your payment has been verified. We have dispatched your procurement request to our Guangzhou hub.
          </p>

          {/* Tracking Box */}
          <div className="bg-dark-950 text-white p-6 rounded-2xl mb-8 text-left relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                Your Assigned Tracking Number
              </span>
              <span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Active
              </span>
            </div>
            <p className="font-mono text-2xl font-extrabold text-brand-400">
              {mockOrderId}
            </p>
            <p className="text-xs text-white/60 mt-2">
              Use this tracking ID anytime on our tracking portal to view cargo progress.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/track" className="btn-primary flex-1 !py-3.5 !text-xs">
              <Package className="w-4 h-4" /> Track This Shipment
            </Link>
            <Link
              href="/shop"
              className="btn-secondary flex-1 !py-3.5 !text-xs"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}