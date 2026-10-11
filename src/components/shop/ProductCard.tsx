// src/components/shop/ProductCard.tsx
"use client";

import { useState } from "react";
import { ShoppingBag, Package } from "lucide-react";
import { useCartStore, type Product } from "@/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-hover flex flex-col justify-between p-4 group h-full">
      <div>
        {/* Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-secondary mb-4">
          {!imgError ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-dark-300 gap-2">
              <Package className="w-10 h-10" />
              <span className="text-[10px] font-medium uppercase tracking-wider">
                {product.category}
              </span>
            </div>
          )}

          {product.badge && (
            <span className="absolute top-3 left-3 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm z-10">
              {product.badge}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
            {product.category}
          </span>
          <span className="text-[10px] text-dark-400 font-mono">
            MOQ: {product.moq}
          </span>
        </div>

        <h3 className="font-bold text-dark-950 text-sm mb-1.5 line-clamp-2 group-hover:text-brand-600 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-dark-400 text-xs line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price + Add */}
      <div className="pt-3 border-t border-dark-50 flex items-center justify-between gap-2">
        <div>
          <p className="text-[10px] text-dark-400 uppercase tracking-wider font-semibold">
            Wholesale
          </p>
          <p className="font-mono font-extrabold text-dark-950 text-base leading-tight">
            ₦{product.priceNaira.toLocaleString()}
          </p>
          <p className="text-[10px] text-dark-400 font-mono">
            ¥{product.priceRmb.toLocaleString()} RMB
          </p>
        </div>

        <button
          onClick={() => addItem(product)}
          className="btn-primary !py-2.5 !px-4 !text-xs shrink-0"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Add
        </button>
      </div>
    </div>
  );
}