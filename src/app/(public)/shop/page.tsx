// src/app/(public)/shop/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  X,
  Package,
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgePercent,
} from "lucide-react";
import { MOCK_PRODUCTS, PRODUCT_CATEGORY_COUNTS } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

type CategoryId =
  | "all"
  | "electronics"
  | "stationery"
  | "textiles"
  | "industrial"
  | "household";

type SortId = "featured" | "price-asc" | "price-desc" | "name-asc";

const CATEGORIES: { id: CategoryId; label: string; count: number }[] = [
  { id: "all", label: "All Items", count: MOCK_PRODUCTS.length },
  { id: "electronics", label: "Phones & Electronics", count: PRODUCT_CATEGORY_COUNTS.electronics },
  { id: "stationery", label: "Office & Stationery", count: PRODUCT_CATEGORY_COUNTS.stationery },
  { id: "textiles", label: "Blankets & Textiles", count: PRODUCT_CATEGORY_COUNTS.textiles },
  { id: "industrial", label: "Industrial & Solar", count: PRODUCT_CATEGORY_COUNTS.industrial },
  { id: "household", label: "Household", count: PRODUCT_CATEGORY_COUNTS.household },
];

const SORT_OPTIONS: { id: SortId; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Name: A to Z" },
];

export default function ShopPage() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortId>("featured");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = MOCK_PRODUCTS.filter((p) => {
      const inCategory = category === "all" || p.category === category;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return inCategory && matchesQuery;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.priceNaira - b.priceNaira);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.priceNaira - a.priceNaira);
        break;
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured: badged items first, then original order
        list = [...list].sort((a, b) => Number(!!b.badge) - Number(!!a.badge));
    }

    return list;
  }, [category, query, sort]);

  const activeCategory = CATEGORIES.find((c) => c.id === category)!;
  const hasFilters = category !== "all" || query.trim().length > 0;

  const clearFilters = () => {
    setCategory("all");
    setQuery("");
    setSort("featured");
  };

  return (
    <div className="bg-surface-secondary min-h-screen">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <section className="bg-dark-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-60" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="container-main relative z-10 py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-400 font-semibold text-xs tracking-widest uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Package className="w-3.5 h-3.5" />
              Wholesale &amp; Retail Catalogue
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-5 mb-4 tracking-tight">
              KhalineX <span className="text-gradient-brand">Store</span>
            </h1>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              {MOCK_PRODUCTS.length}+ verified direct-from-factory products —
              phones, stationery, blankets, solar, and household goods. Prices
              locked in Naira with RMB reference.
            </p>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" /> Factory-verified suppliers
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-500" /> Air &amp; sea delivery nationwide
            </span>
            <span className="flex items-center gap-2">
              <BadgePercent className="w-4 h-4 text-brand-500" /> Bulk discounts above MOQ
            </span>
          </div>
        </div>
      </section>

      <div className="container-main py-8 md:py-12">
        {/* ═══════════ FILTER BAR ═══════════ */}
        <div className="bg-white rounded-2xl shadow-soft border border-dark-100 p-4 mb-6 space-y-4">
          {/* Category chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((cat) => {
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    active
                      ? "bg-dark-950 text-white shadow-sm"
                      : "bg-surface-secondary text-dark-600 hover:bg-dark-100"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                      active ? "bg-brand-500 text-white" : "bg-white text-dark-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search iPhone, blankets, A4 paper, inverter..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-dark-200 text-sm text-dark-950 placeholder:text-dark-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-dark-400 hover:text-dark-950 hover:bg-dark-50"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative sm:w-56">
              <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 pointer-events-none" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortId)}
                className="w-full appearance-none pl-10 pr-8 py-2.5 rounded-xl border border-dark-200 text-sm font-medium text-dark-700 bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ═══════════ RESULTS META ═══════════ */}
        <div className="flex items-center justify-between mb-5 text-xs">
          <p className="text-dark-500">
            Showing{" "}
            <span className="font-bold text-dark-950">{filtered.length}</span>{" "}
            of{" "}
            <span className="font-bold text-dark-950">{MOCK_PRODUCTS.length}</span>{" "}
            products
            {category !== "all" && (
              <>
                {" "}in{" "}
                <span className="font-semibold text-brand-600">
                  {activeCategory.label}
                </span>
              </>
            )}
            {query.trim() && (
              <>
                {" "}matching{" "}
                <span className="font-semibold text-brand-600">
                  &ldquo;{query.trim()}&rdquo;
                </span>
              </>
            )}
          </p>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-semibold"
            >
              <X className="w-3.5 h-3.5" /> Clear filters
            </button>
          )}
        </div>

        {/* ═══════════ PRODUCT GRID ═══════════ */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-dark-100 shadow-soft text-center py-20 px-6">
            <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center mx-auto mb-4 text-dark-300">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-950 mb-1">
              No products found
            </h3>
            <p className="text-sm text-dark-400 max-w-sm mx-auto mb-6">
              We couldn&apos;t find anything matching your filters. Try a different
              keyword, or let our sourcing team find it for you in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={clearFilters} className="btn-secondary !py-3 !text-xs">
                Reset Filters
              </button>
              <Link href="/services/sourcing" className="btn-primary !py-3 !text-xs">
                Request Product Sourcing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* ═══════════ WHOLESALE CTA ═══════════ */}
        <div className="mt-14 bg-dark-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-mesh opacity-50" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-brand-400 font-semibold text-xs tracking-widest uppercase">
                Buying in Bulk?
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mt-2 mb-2">
                Get a custom wholesale quotation
              </h2>
              <p className="text-white/55 text-sm leading-relaxed">
                Ordering above MOQ, mixing categories, or need a product not
                listed here? Send us your list and our Guangzhou team will price
                it with shipping included.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/services/wholesale" className="btn-primary !py-3.5">
                Request Bulk Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348000000000?text=Hello%20KhalineX%2C%20I%20want%20a%20wholesale%20quotation."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-3.5 !bg-white/5 !text-white !border-white/15 hover:!bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}