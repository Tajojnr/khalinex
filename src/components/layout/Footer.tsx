// src/components/layout/Footer.tsx
import Link from "next/link";
import {
  Ship,
  Search,
  Package,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Shipping & Logistics", href: "/services/shipping", icon: Ship },
    { name: "Product Sourcing", href: "/services/sourcing", icon: Search },
    { name: "Wholesale Orders", href: "/services/wholesale", icon: Package },
    { name: "KhalineX Academy", href: "/academy", icon: GraduationCap },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Track Shipment", href: "/track" },
    { name: "FAQ", href: "/faq" },
  ],
  Legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/terms" },
    { name: "Refund Policy", href: "/terms" },
    { name: "Shipping Policy", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-display-sm text-white mb-2">
                Ready to Start{" "}
                <span className="text-gradient-brand">Trading Globally?</span>
              </h3>
              <p className="text-white/50 text-lg">
                Get a free shipping quote or sourcing consultation today.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/services/shipping" className="btn-primary">
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center font-display text-[24px] font-black tracking-tight leading-none">
                <span className="text-brand-500">Lin</span>
                <div className="relative w-5 h-5 ml-0.5 flex items-center justify-center">
                  <div className="absolute w-[3px] h-[24px] bg-dark-400 rotate-45 rounded-full" />
                  <div className="absolute w-[3px] h-[24px] bg-brand-500 -rotate-45 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col border-l-2 border-white/10 pl-3">
                <span className="font-display font-bold text-sm text-white tracking-tight leading-tight">
                  KhalineX
                </span>
                <span className="text-[9px] text-white/40 font-semibold tracking-widest uppercase">
                  Store Limited
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner in international shipping, product sourcing,
              and wholesale trade. Connecting African businesses to global
              markets.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                +234 800 000 0000
              </a>
              <a
                href="mailto:info@khalinex.com"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                info@khalinex.com
              </a>
              <p className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                Lagos, Nigeria • Guangzhou, China
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-brand-400 transition-colors flex items-center gap-2"
                    >
                      {"icon" in link && link.icon && (
                        <link.icon className="w-3.5 h-3.5" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} KhalineX Store Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/20">Payment Partners:</span>
            <div className="flex items-center gap-3">
              {["Paystack", "Flutterwave", "Bank Transfer"].map((method) => (
                <span
                  key={method}
                  className="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}