// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Ship,
  Search,
  ShoppingCart,
  Package,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  User,
  Home,
  Info,
  MessageSquare,
  HelpCircle,
  LogIn,
} from "lucide-react";
import CartDrawer from "@/components/shop/CartDrawer";
import { useCartStore } from "@/store/cartStore";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Services",
    href: "/services",
    icon: Package,
    children: [
      {
        name: "Shipping & Logistics",
        href: "/services/shipping",
        icon: Ship,
        description: "Fast cargo from China to Africa",
      },
      {
        name: "Product Sourcing",
        href: "/services/sourcing",
        icon: Search,
        description: "We find the best suppliers for you",
      },
      {
        name: "Wholesale Orders",
        href: "/services/wholesale",
        icon: Package,
        description: "Bulk purchasing at factory prices",
      },
      {
        name: "KhalineX Academy",
        href: "/academy",
        icon: GraduationCap,
        description: "Learn importation & entrepreneurship",
      },
    ],
  },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
  { name: "Track Shipment", href: "/track", icon: Package },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: MessageSquare },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const { openCart, getTotalItems } = useCartStore();
  const totalItems = mounted ? getTotalItems() : 0;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Top Bar — Desktop only */}
      <div className="hidden lg:block bg-dark-950 text-white/60 text-xs border-b border-white/10">
        <div className="container-main flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-brand-500" />
              +234 800 000 0000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-brand-500" />
              info@khalinex.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-brand-500" />
              Lagos, Nigeria • Guangzhou, China
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track" className="hover:text-brand-400 transition-colors">
              Track Your Shipment
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/auth/login"
              className="hover:text-brand-400 transition-colors flex items-center gap-1"
            >
              <User className="w-3 h-3" /> My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-soft border-b border-dark-100"
            : "bg-white border-b border-dark-50"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* LinX Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMobile}>
              <div className="flex items-center font-display text-[26px] font-black tracking-tight leading-none">
                <span className="text-brand-500">Lin</span>
                <div className="relative w-6 h-6 ml-0.5 flex items-center justify-center">
                  <div className="absolute w-[3.5px] h-[28px] bg-dark-400 rotate-45 rounded-full" />
                  <div className="absolute w-[3.5px] h-[28px] bg-brand-500 -rotate-45 rounded-full" />
                </div>
              </div>
              <div className="hidden sm:flex flex-col border-l-2 border-dark-100 pl-3">
                <span className="font-display font-bold text-sm text-dark-950 tracking-tight leading-tight">
                  KhalineX
                </span>
                <span className="text-[9px] text-dark-400 font-semibold tracking-widest uppercase">
                  Store Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation
                .filter((item) => item.name !== "FAQ")
                .map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.children && setServicesDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      item.children && setServicesDropdownOpen(false)
                    }
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        item.name === "Track Shipment"
                          ? "text-brand-600 hover:text-brand-700 hover:bg-brand-50 font-semibold"
                          : "text-dark-600 hover:text-dark-950 hover:bg-dark-50"
                      }`}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                    </Link>

                    {/* Desktop Mega Dropdown */}
                    <AnimatePresence>
                      {item.children && servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-strong border border-dark-100 p-3 grid grid-cols-2 gap-1 z-50"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-secondary transition-colors group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-dark-50 flex items-center justify-center shrink-0 group-hover:bg-brand-50 transition-colors">
                                <child.icon className="w-4 h-4 text-dark-600 group-hover:text-brand-600 transition-colors" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-dark-950">
                                  {child.name}
                                </p>
                                <p className="text-xs text-dark-400 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-xl text-dark-600 hover:bg-dark-50 transition-colors flex items-center justify-center"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-brand animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Get a Quote — Desktop */}
              <Link
                href="/services/shipping"
                className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-xs"
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-dark-600 hover:bg-dark-50 transition-colors"
                aria-label="Open Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cart Drawer */}
        <CartDrawer />
      </header>

      {/* MOBILE SLIDE-OVER DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-strong z-50 flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-dark-100 flex items-center justify-between bg-dark-950 text-white shrink-0">
                <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
                  <div className="flex items-center font-display text-[22px] font-black tracking-tight leading-none">
                    <span className="text-brand-500">Lin</span>
                    <div className="relative w-5 h-5 ml-0.5 flex items-center justify-center">
                      <div className="absolute w-[3px] h-[24px] bg-dark-400 rotate-45 rounded-full" />
                      <div className="absolute w-[3px] h-[24px] bg-brand-500 -rotate-45 rounded-full" />
                    </div>
                  </div>
                  <div className="flex flex-col border-l border-white/20 pl-2.5">
                    <span className="font-display font-bold text-xs text-white leading-tight">
                      KhalineX
                    </span>
                    <span className="text-[8px] text-white/40 font-semibold tracking-widest uppercase">
                      Store Limited
                    </span>
                  </div>
                </Link>
                <button
                  onClick={closeMobile}
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Strip */}
              <div className="px-5 py-3 bg-surface-secondary border-b border-dark-50 flex flex-col gap-1.5 text-[11px] text-dark-500 shrink-0">
                <a href="tel:+2348000000000" className="flex items-center gap-2 hover:text-brand-600">
                  <Phone className="w-3 h-3 text-brand-500" /> +234 800 000 0000
                </a>
                <a href="mailto:info@khalinex.com" className="flex items-center gap-2 hover:text-brand-600">
                  <Mail className="w-3 h-3 text-brand-500" /> info@khalinex.com
                </a>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-dark-700 hover:bg-dark-50 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-brand-500" />
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-dark-400 transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 border-l-2 border-brand-100 pl-2 space-y-0.5 mb-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={closeMobile}
                                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-50 transition-colors group"
                                >
                                  <child.icon className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                                  <div>
                                    <p className="text-xs font-semibold text-dark-950 group-hover:text-brand-700">
                                      {child.name}
                                    </p>
                                    <p className="text-[10px] text-dark-400 mt-0.5">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          item.name === "Track Shipment"
                            ? "text-brand-600 hover:bg-brand-50"
                            : "text-dark-700 hover:bg-dark-50"
                        }`}
                      >
                        <item.icon
                          className={`w-4 h-4 ${
                            item.name === "Track Shipment"
                              ? "text-brand-500"
                              : "text-dark-400"
                          }`}
                        />
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="p-4 border-t border-dark-100 space-y-2 shrink-0 bg-white">
                <Link
                  href="/services/shipping"
                  onClick={closeMobile}
                  className="btn-primary w-full !justify-center !py-3.5 !text-xs"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/auth/login"
                  onClick={closeMobile}
                  className="btn-secondary w-full !justify-center !py-3 !text-xs"
                >
                  <LogIn className="w-4 h-4" />
                  My Account / Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}