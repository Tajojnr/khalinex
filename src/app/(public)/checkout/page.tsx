// src/app/(public)/checkout/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { ShieldCheck, CreditCard, Building2, Wallet, Lock, ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  const formattedSubtotal = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(getTotalPrice());

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    clearCart();
    router.push("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="bg-surface-secondary min-h-screen py-20 text-center container-main">
        <h2 className="text-2xl font-bold text-dark-950 mb-4">Your cart is empty</h2>
        <a href="/shop" className="btn-primary">
          Return to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-5xl">
        <h1 className="font-display text-3xl font-extrabold text-dark-950 mb-8">
          Order Checkout
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-8">
          {/* Shipping & Delivery Form */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-dark-100 shadow-soft">
              <h2 className="font-bold text-lg text-dark-950 mb-4">1. Delivery Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adebayo"
                    className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Johnson"
                    className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="12 Commercial Avenue, Ikeja"
                    className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    State
                  </label>
                  <select className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none">
                    <option>Lagos State</option>
                    <option>Kano State</option>
                    <option>FCT Abuja</option>
                    <option>Rivers State</option>
                    <option>Anambra State</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-6 rounded-3xl border border-dark-100 shadow-soft">
              <h2 className="font-bold text-lg text-dark-950 mb-4">2. Select Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: "paystack", name: "Paystack (Debit Card, Transfer, USSD)", icon: CreditCard },
                  { id: "flutterwave", name: "Flutterwave (Pan-African Gateway)", icon: Wallet },
                  { id: "bank", name: "Direct Bank Transfer (KhalineX Corporate Account)", icon: Building2 },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === method.id
                        ? "border-brand-500 bg-brand-50 text-dark-950 font-bold"
                        : "border-dark-100 hover:bg-surface-secondary text-dark-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="accent-brand-500"
                    />
                    <method.icon className="w-4 h-4 text-brand-600 shrink-0" />
                    <span className="text-xs">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div>
            <div className="bg-dark-950 text-white p-6 rounded-3xl shadow-dark space-y-6 sticky top-24">
              <h3 className="font-bold text-lg text-white border-b border-white/10 pb-4">
                Order Summary
              </h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-xs">
                    <span className="text-white/70 line-clamp-1 flex-1">
                      {quantity}x {product.name}
                    </span>
                    <span className="font-mono text-white font-bold ml-2">
                      ₦{(product.priceNaira * quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span className="font-mono">{formattedSubtotal}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Handling &amp; Packaging</span>
                  <span className="text-brand-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-white text-base font-bold pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="font-mono text-brand-400">{formattedSubtotal}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full !py-4 text-sm font-bold">
                <Lock className="w-4 h-4" /> Pay &amp; Complete Order
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" /> 256-Bit SSL Encrypted
                Transaction
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}