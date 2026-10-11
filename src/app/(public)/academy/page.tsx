// src/app/(public)/academy/page.tsx
"use client";

import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Star,
  PlayCircle,
  X,
} from "lucide-react";

const courses = [
  {
    id: "imp-101",
    title: "China Importation Mastery 101",
    level: "Beginner to Intermediate",
    duration: "4 Weeks (Live Online + Recordings)",
    students: "1,240+ Graduates",
    price: "₦ 45,000",
    badge: "Most Popular",
    description:
      "Learn how to source directly from 1688, Taobao, and Xianyu without paying costly middlemen. Master procurement in RMB, RMB supplier payments, and air/sea shipping to Nigeria.",
    curriculum: [
      "Setting up 1688 and Alipay accounts from Nigeria",
      "Finding verified factory suppliers & negotiating discounts",
      "Understanding RMB payments & card solutions",
      "Shipping, waybill tracking & customs clearance hacks",
    ],
  },
  {
    id: "src-201",
    title: "Advanced Factory Procurement & Sourcing Agent Training",
    level: "Advanced / B2B Agents",
    duration: "6 Weeks (Masterclass)",
    students: "480+ Graduates",
    price: "₦ 85,000",
    badge: "Career Focused",
    description:
      "Become a certified procurement agent. Learn how to run a sourcing agency in Nigeria, charge client commissions, perform factory audits in China, and resolve trade disputes.",
    curriculum: [
      "Building a profitable sourcing agency brand in Africa",
      "Supplier background checks & quality control inspections",
      "Negotiating OEM/ODM custom branding and private labels",
      "Handling logistics demurrage, refunds and supplier claims",
    ],
  },
  {
    id: "ecom-301",
    title: "E-Commerce & Social Media Selling Strategy",
    level: "All Levels",
    duration: "3 Weeks (Practical Workshop)",
    students: "890+ Graduates",
    price: "₦ 35,000",
    description:
      "Turn imported products into cash flow. Learn high-converting TikTok, Instagram, and WhatsApp ad campaigns tailored specifically for the West African retail market.",
    curriculum: [
      "Product selection: Finding high-margin trending products",
      "Running profitable TikTok & Instagram video ads",
      "WhatsApp automation & sales closing scripts",
      "Nationwide Pay-On-Delivery logistics management",
    ],
  },
];

export default function AcademyPage() {
  const [selectedCourse, setSelectedCategory] = useState<any>(null);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main">
        {/* Header Hero */}
        <div className="bg-hero-gradient text-white rounded-3xl p-8 md:p-14 mb-16 relative overflow-hidden shadow-dark">
          <div className="absolute inset-0 bg-dark-mesh opacity-50 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              KhalineX Academy
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Master the Art of <span className="text-gradient-brand">Global Importation</span> &amp; Trade
            </h1>
            <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
              Stop guessing. Learn proven procurement systems directly from industry veterans operating ground hubs in Guangzhou and Lagos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs text-white/70">
              <div>
                <p className="font-mono text-xl font-bold text-white mb-0.5">2,600+</p>
                <p className="text-white/50">Trained Entrepreneurs</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-white mb-0.5">98%</p>
                <p className="text-white/50">Successful First Imports</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-white mb-0.5">1-on-1</p>
                <p className="text-white/50">Mentorship Group Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-dark-950 mb-3">
            Available Training Programmes
          </h2>
          <p className="text-dark-500 text-sm sm:text-base">
            Hands-on practical classes with step-by-step video modules, live Q&amp;A sessions, and direct access to trusted Chinese freight forwarders.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-dark-100 p-6 shadow-soft flex flex-col justify-between hover:shadow-medium transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">
                    {course.level}
                  </span>
                  {course.badge && (
                    <span className="text-[10px] font-bold bg-dark-950 text-white px-2.5 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-dark-950 mb-3 leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-dark-500 leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-dark-50">
                  <p className="text-xs font-bold text-dark-950 mb-2 uppercase tracking-wider">
                    Key Modules:
                  </p>
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-dark-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-dark-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-semibold">
                    Tuition Fee
                  </p>
                  <p className="font-mono font-extrabold text-dark-950 text-xl">
                    {course.price}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory(course);
                    setEnrolled(false);
                  }}
                  className="btn-primary !py-2.5 !px-4 !text-xs"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enrollment Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 bg-dark-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-strong border border-dark-100">
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-5 right-5 text-dark-400 hover:text-dark-950 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              {enrolled ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-brand-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-dark-950 mb-2">
                    Enrollment Submitted!
                  </h3>
                  <p className="text-xs text-dark-500 max-w-xs mx-auto mb-6 leading-relaxed">
                    Check your email and WhatsApp for class schedule links and student portal login instructions.
                  </p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="btn-primary !py-3 !px-6"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                    Course Registration
                  </span>
                  <h3 className="font-display font-bold text-xl text-dark-950 mt-2 mb-1">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs text-dark-400 font-mono mb-6">
                    Tuition: <span className="font-bold text-dark-950">{selectedCourse.price}</span>
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setEnrolled(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Adebayo Johnson"
                        className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="adebayo@example.com"
                        className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        className="w-full p-3 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full !py-3.5 text-xs font-bold mt-2">
                      Proceed to Secure Payment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}