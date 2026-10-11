// src/app/(public)/contact/page.tsx
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface-secondary min-h-screen py-12 md:py-20">
      <div className="container-main max-w-6xl">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full">
            We are here to help
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-dark-950 mt-4 mb-4">
            Contact KhalineX
          </h1>
          <p className="text-dark-500 text-sm sm:text-base">
            Have questions about shipping rates, RMB payments, or wholesale orders? Speak directly with our representatives in Nigeria or China.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Hub 1: Lagos, Nigeria */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dark-100 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-dark-950">
                  Lagos Corporate Office &amp; Hub
                </h3>
                <p className="text-xs text-dark-400 font-medium">Headquarters • Nigeria</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-dark-600">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>12 Commercial Avenue, Ikeja Industrial Zone, Lagos State, Nigeria</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-mono font-semibold">+234 800 000 0000</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>info@khalinex.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM (WAT)</span>
              </p>
            </div>
          </div>

          {/* Hub 2: Guangzhou, China */}
          <div className="bg-dark-950 text-white rounded-3xl p-6 sm:p-8 shadow-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-400 border border-white/10">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Guangzhou Logistics Hub
                  </h3>
                  <p className="text-xs text-white/50 font-medium">Sourcing &amp; Cargo Warehouse • China</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-white/70">
                <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>No. 88 Xiamao International Logistics Park, Baiyun District, Guangzhou, Guangdong, China</span>
                </p>
                <p className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="font-mono font-semibold">WeChat / WhatsApp: +86 188 0000 0000</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>china-desk@khalinex.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM (CST)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl border border-dark-100 p-8 sm:p-12 shadow-strong max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-dark-950 mb-2 text-center">
            Send Us a Message
          </h2>
          <p className="text-xs text-dark-400 text-center mb-8">
            Fill out the form below and a representative will reply via email or WhatsApp within 2 hours.
          </p>

          {submitted ? (
            <div className="text-center py-10 bg-brand-50 rounded-2xl p-6">
              <CheckCircle2 className="w-16 h-16 text-brand-500 mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-dark-950 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-dark-600 max-w-sm mx-auto mb-6">
                Thank you for reaching out. A KhalineX agent has been assigned to your query.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-primary !py-2.5">
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adebayo Johnson"
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
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
                    className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Inquiry Topic
                </label>
                <select className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none">
                  <option>Air / Sea Cargo Shipping Rate Inquiry</option>
                  <option>China Product Sourcing &amp; Procurement</option>
                  <option>Wholesale Order Assistance</option>
                  <option>KhalineX Academy Course Registration</option>
                  <option>General Support / Waybill Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we help your business today?"
                  className="w-full p-3.5 rounded-xl border border-dark-200 text-xs focus:border-brand-500 outline-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full !py-4 text-xs font-bold">
                Submit Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}