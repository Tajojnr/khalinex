// src/app/(public)/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Ship,
  Search,
  Package,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle2,
  Star,
  ChevronRight,
  Users,
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Fade In Wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "Reliable cargo shipping from China, Turkey, and Dubai to Nigeria and across Africa. Air and sea freight with real-time tracking.",
    href: "/services/shipping",
    color: "bg-blue-50 text-blue-600",
    features: ["Air Freight", "Sea Freight", "Door-to-Door", "Customs Clearance"],
  },
  {
    icon: Search,
    title: "Product Sourcing",
    description:
      "Tell us what you need — we find the best suppliers, negotiate prices, verify quality, and handle procurement from factory to warehouse.",
    href: "/services/sourcing",
    color: "bg-purple-50 text-purple-600",
    features: ["Supplier Verification", "Price Negotiation", "Quality Control", "Factory Audits"],
  },
  {
    icon: Package,
    title: "Wholesale & Online Shop",
    description:
      "Browse our catalogue of electronics, textiles, household goods, and industrial equipment. Retail and bulk pricing available.",
    href: "/shop",
    color: "bg-emerald-50 text-emerald-600",
    features: ["Electronics", "Textiles", "Household", "Industrial"],
  },
  {
    icon: GraduationCap,
    title: "KhalineX Academy",
    description:
      "Master importation, product sourcing, and entrepreneurship with our practical training programmes taught by industry experts.",
    href: "/academy",
    color: "bg-amber-50 text-amber-600",
    features: ["Importation 101", "Sourcing Mastery", "E-Commerce", "Logistics"],
  },
];

const stats = [
  { value: 5000, suffix: "+", label: "Shipments Delivered", icon: Package },
  { value: 12, suffix: "", label: "Countries Served", icon: Globe },
  { value: 2500, suffix: "+", label: "Happy Customers", icon: Users },
  { value: 98, suffix: "%", label: "On-Time Delivery", icon: Clock },
];

const steps = [
  {
    step: "01",
    title: "Submit Your Request",
    description:
      "Tell us what you need — shipping, sourcing, or wholesale. Fill out a simple form with your requirements.",
  },
  {
    step: "02",
    title: "Receive a Quotation",
    description:
      "Our team reviews your request and sends a detailed quotation within 24 hours. Transparent pricing, no hidden fees.",
  },
  {
    step: "03",
    title: "Approve & Pay",
    description:
      "Accept the quotation and make a secure payment online. We accept bank transfers, cards, and mobile payments.",
  },
  {
    step: "04",
    title: "Track & Receive",
    description:
      "Monitor your order in real-time through your dashboard. We handle logistics, customs, and final delivery.",
  },
];

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Electronics Dealer, Lagos",
    content:
      "KhalineX has transformed my business. I used to struggle with unreliable suppliers in China. Now I just send them a link and they handle everything — sourcing, quality checks, and shipping.",
    rating: 5,
  },
  {
    name: "Fatima Ibrahim",
    role: "Textile Importer, Kano",
    content:
      "The shipping tracking is incredible. I can see exactly where my cargo is at every stage. Their customs clearance team saved me weeks of delays at the port.",
    rating: 5,
  },
  {
    name: "Chukwuemeka Obi",
    role: "Academy Graduate, Abuja",
    content:
      "The KhalineX Academy importation course gave me the confidence to start my own sourcing business. Within 3 months, I had my first successful shipment from Guangzhou.",
    rating: 5,
  },
];

/* ─── Homepage ─── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating glow orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 bg-brand-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-main relative z-10">
          <div className="py-20 md:py-32 lg:py-40 max-w-4xl">
            {/* Trust Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <Shield className="w-4 h-4 text-brand-400" />
                <span className="text-white/70 text-sm font-medium">
                  Trusted by 2,500+ businesses across Africa
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.2}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                Your Gateway to{" "}
                <span className="text-gradient-brand">Global Trade</span>{" "}
                &amp; Logistics
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-10">
                From product sourcing in China to doorstep delivery in Nigeria —
                we handle shipping, procurement, wholesale, and training so you
                can focus on growing your business.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/shipping"
                  className="btn-primary !py-4 !px-8 !text-base"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/shop"
                  className="btn-secondary !py-4 !px-8 !text-base !bg-white/5 !text-white !border-white/15 hover:!bg-white/10"
                >
                  Browse Products
                </Link>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  "CAC Registered",
                  "Guangzhou Office",
                  "24/7 Tracking",
                  "Secure Payments",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/40 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative z-20 -mt-12">
        <div className="container-main">
          <div className="bg-white rounded-3xl shadow-strong p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 mb-3">
                    <stat.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-dark-950">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-dark-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="section bg-surface-secondary">
        <div className="section-narrow">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">
                <Globe className="w-4 h-4" />
                Our Services
              </span>
              <h2 className="section-title">
                Everything You Need to{" "}
                <span className="text-gradient-brand">Trade Globally</span>
              </h2>
              <p className="section-subtitle">
                From sourcing products in China to delivering them to your
                doorstep, we provide end-to-end solutions for African
                businesses.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="card-hover p-6 md:p-8 group block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-dark-300 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-950 mb-2 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium text-dark-500 bg-dark-50 px-2.5 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="section bg-white">
        <div className="section-narrow">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">
                <TrendingUp className="w-4 h-4" />
                How It Works
              </span>
              <h2 className="section-title">
                Four Simple Steps to{" "}
                <span className="text-gradient-brand">Get Started</span>
              </h2>
              <p className="section-subtitle">
                No complicated processes. No hidden fees. Just straightforward
                global trade solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.15}>
                <div className="relative text-center">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-300 to-transparent" />
                  )}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-950 text-brand-500 font-display font-bold text-xl mb-5">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section bg-surface-secondary">
        <div className="section-narrow">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">
                <Star className="w-4 h-4" />
                Testimonials
              </span>
              <h2 className="section-title">
                Trusted by{" "}
                <span className="text-gradient-brand">
                  Businesses Like Yours
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="card p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-brand-500 text-brand-500"
                      />
                    ))}
                  </div>
                  <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-dark-50">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-700">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-950">
                        {t.name}
                      </p>
                      <p className="text-xs text-dark-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="section bg-white">
        <div className="section-narrow">
          <FadeIn>
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-dark-mesh opacity-40" />
              <div className="relative z-10">
                <h2 className="font-display text-display-sm md:text-display-md text-white mb-4">
                  Ready to Grow Your Business{" "}
                  <span className="text-gradient-brand">Globally?</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                  Join thousands of African entrepreneurs who trust KhalineX for
                  their international trade and logistics needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/auth/register"
                    className="btn-primary !py-4 !px-8 !text-base"
                  >
                    Create Free Account
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary !py-4 !px-8 !text-base !bg-white/5 !text-white !border-white/15 hover:!bg-white/10"
                  >
                    Talk to Our Team
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}