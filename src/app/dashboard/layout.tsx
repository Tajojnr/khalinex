// src/app/(customer)/layout.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  CreditCard, 
  GraduationCap, 
  LogOut,
  Settings,
  Bell
} from "lucide-react";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const navLinks = [
    { name: "Dashboard Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Orders & Cargo", href: "/dashboard/orders", icon: Package },
    { name: "Quotations", href: "/dashboard/quotations", icon: FileText },
    { name: "Payment History", href: "/dashboard/payments", icon: CreditCard },
    { name: "My Courses", href: "/dashboard/academy", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-surface-secondary flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-dark-100 md:min-h-screen flex flex-col">
        {/* Mobile Header / Desktop Brand */}
        <div className="h-16 md:h-20 flex items-center justify-between px-6 border-b border-dark-100 bg-white">
          <Link href="/" className="flex items-center gap-2">
             <div className="flex items-center font-display text-[22px] font-black tracking-tight leading-none">
                <span className="text-brand-500">Lin</span>
                <div className="relative w-5 h-5 ml-0.5 flex items-center justify-center">
                  <div className="absolute w-[3px] h-[24px] bg-dark-400 rotate-45 rounded-full" />
                  <div className="absolute w-[3px] h-[24px] bg-brand-500 -rotate-45 rounded-full" />
                </div>
              </div>
          </Link>
        </div>

        {/* User Profile Mini */}
        <div className="p-6 border-b border-dark-50">
          <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 font-bold text-lg flex items-center justify-center mb-3">
            {user?.name?.charAt(0) || "U"}
          </div>
          <p className="font-bold text-dark-950 text-sm">{user?.name || "Customer"}</p>
          <p className="text-[10px] text-dark-400 font-mono mt-0.5">{user?.id}</p>
          {user?.companyName && (
            <p className="text-[10px] uppercase font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded mt-2 inline-block">
              {user.companyName}
            </p>
          )}
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive 
                    ? "bg-dark-950 text-white shadow-sm" 
                    : "text-dark-500 hover:bg-dark-50 hover:text-dark-950"
                }`}
              >
                <link.icon className={`w-4 h-4 ${isActive ? "text-brand-400" : ""}`} />
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-dark-100">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-xs font-semibold text-dark-500 hover:bg-dark-50 transition-colors">
            <Settings className="w-4 h-4" /> Account Settings
          </button>
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors mt-1">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 md:h-20 bg-white border-b border-dark-100 flex items-center justify-between px-6 sm:px-10 shrink-0">
          <h2 className="font-display font-bold text-lg text-dark-950 hidden sm:block">
            {navLinks.find(l => l.href === pathname)?.name || "Dashboard"}
          </h2>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-dark-400 hover:bg-dark-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <Link href="/shop" className="btn-primary !py-2 !px-4 !text-xs">
              New Order
            </Link>
          </div>
        </header>

        {/* Page Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}