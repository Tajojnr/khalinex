// src/app/admin/layout.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  BarChart3,
  Package,
  FileSpreadsheet,
  Boxes,
  Users,
  LogOut,
  ShieldAlert,
  Bell,
  Search,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const adminNav = [
    { name: "Overview & Analytics", href: "/admin", icon: BarChart3 },
    { name: "Shipments & Logistics", href: "/admin/shipments", icon: Package },
    { name: "Sourcing & Quotes", href: "/admin/quotations", icon: FileSpreadsheet },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-white flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-dark-900 border-r border-white/10 md:min-h-screen flex flex-col shrink-0">
        {/* Header */}
        <div className="h-16 md:h-20 flex items-center justify-between px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center font-display text-[22px] font-black tracking-tight leading-none">
              <span className="text-brand-500">Lin</span>
              <div className="relative w-5 h-5 ml-0.5 flex items-center justify-center">
                <div className="absolute w-[3px] h-[24px] bg-dark-400 rotate-45 rounded-full" />
                <div className="absolute w-[3px] h-[24px] bg-brand-500 -rotate-45 rounded-full" />
              </div>
            </div>
            <span className="text-[10px] font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30 px-2 py-0.5 rounded uppercase">
              Staff Portal
            </span>
          </Link>
        </div>

        {/* Staff Identity */}
        <div className="p-6 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center shrink-0 shadow-brand">
              KX
            </div>
            <div>
              <p className="font-bold text-sm text-white">KhalineX Operations</p>
              <p className="text-[10px] text-brand-400 font-mono">Guangzhou &amp; Lagos Desk</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {adminNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-brand-500 text-white shadow-brand font-bold"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3.5 py-2.5 w-full rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Exit Admin Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-dark-950">
        {/* Topbar */}
        <header className="h-16 md:h-20 bg-dark-900 border-b border-white/10 flex items-center justify-between px-6 sm:px-10 shrink-0">
          <div className="relative w-64 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search Waybill, Order ID or Customer..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/40 focus:border-brand-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              China Server Online
            </div>
          </div>
        </header>

        {/* Content View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">{children}</div>
      </main>
    </div>
  );
}