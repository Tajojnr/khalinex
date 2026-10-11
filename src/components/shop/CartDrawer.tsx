// src/components/shop/CartDrawer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Package,
  MessageCircle,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  // Prevent SSR Hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const subtotal = getTotalPrice() || 0;
  const formattedTotal = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello KhalineX! I want to place a wholesale order:\n\n` +
      items
        .map(
          (item, idx) =>
            `${idx + 1}. ${item.product.name} x${item.quantity} - ₦${(
              item.product.priceNaira * item.quantity
            ).toLocaleString()}`
        )
        .join("\n") +
      `\n\nTotal Due: ${formattedTotal}`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-dark-950/70 backdrop-blur-sm z-[99]"
          />

          {/* Right Slide-Over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-strong z-[100] flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-dark-100 flex items-center justify-between bg-dark-950 text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base text-white leading-tight">
                    Your Shopping Bag
                  </h2>
                  <p className="text-[10px] text-white/50">
                    {items.length} {items.length === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-[10px] font-bold text-white/40 hover:text-red-400 uppercase tracking-wider px-2 py-1 rounded hover:bg-white/5 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-20 px-4">
                  <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-dark-300">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-dark-950 text-base mb-1">
                    Your shopping bag is empty
                  </h3>
                  <p className="text-xs text-dark-400 mb-6 leading-relaxed max-w-xs mx-auto">
                    Browse our wholesale store to add smartphones, stationery, blankets, or solar equipment.
                  </p>
                  <button
                    onClick={closeCart}
                    className="btn-primary !py-3 !px-6 !text-xs font-bold"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                items.map(({ product, quantity }) => {
                  const hasErr = imageErrors[product.id];
                  const itemTotal = product.priceNaira * quantity;

                  return (
                    <div
                      key={product.id}
                      className="flex gap-3 p-3 rounded-2xl border border-dark-100 bg-surface-secondary/50 hover:bg-white transition-colors"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-16 h-16 rounded-xl bg-white border border-dark-100 overflow-hidden shrink-0 flex items-center justify-center">
                        {!hasErr ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(product.id)}
                          />
                        ) : (
                          <Package className="w-6 h-6 text-dark-300" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-xs text-dark-950 truncate">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-dark-300 hover:text-red-500 p-0.5 shrink-0 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[10px] text-dark-400 font-mono mt-0.5">
                            ₦{product.priceNaira.toLocaleString()} / unit
                          </p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-dark-50">
                          <div className="flex items-center border border-dark-200 rounded-lg bg-white overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(product.id, Math.max(1, quantity - 1))
                              }
                              className="p-1 px-2 text-dark-600 hover:bg-dark-50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold px-2.5 text-dark-950">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              className="p-1 px-2 text-dark-600 hover:bg-dark-50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <p className="font-mono font-extrabold text-xs text-dark-950">
                            ₦{itemTotal.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Sticky Summary Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-dark-100 bg-white space-y-4 shrink-0 shadow-lg">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-dark-500">
                    <span>Items Subtotal ({items.length})</span>
                    <span className="font-mono font-bold text-dark-950 text-base">
                      {formattedTotal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-dark-400">
                    <span>Customs Tariff &amp; Handling</span>
                    <span className="text-brand-600 font-semibold">Calculated at Checkout</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="btn-primary w-full !py-3.5 !text-xs !justify-center font-bold"
                  >
                    Checkout Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full !py-3.5 !text-xs !justify-center !border-brand-500 !text-brand-600 hover:!bg-brand-50 font-bold"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-500" />
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}