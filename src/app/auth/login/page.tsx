// src/app/auth/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore, type UserRole } from "@/store/authStore";
import { Lock, Mail, ArrowRight, UserCog } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    login(email, role);

    // Absolute routing - forces clean URL paths
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-surface-secondary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="flex items-center font-display text-[32px] font-black tracking-tight leading-none">
              <span className="text-brand-500">Lin</span>
              <div className="relative w-7 h-7 ml-0.5 flex items-center justify-center">
                <div className="absolute w-[4px] h-[32px] bg-dark-400 rotate-45 rounded-full" />
                <div className="absolute w-[4px] h-[32px] bg-brand-500 -rotate-45 rounded-full" />
              </div>
            </div>
          </Link>
          <p className="text-dark-500 text-sm mt-3">Sign in to your account to manage orders</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dark-100 shadow-strong">
          <div className="flex bg-surface-secondary p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                role === "customer"
                  ? "bg-white text-dark-950 shadow-sm"
                  : "text-dark-400 hover:text-dark-700"
              }`}
            >
              Customer Portal
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-all ${
                role === "admin"
                  ? "bg-dark-950 text-white shadow-sm"
                  : "text-dark-400 hover:text-dark-700"
              }`}
            >
              <UserCog className="w-3.5 h-3.5" /> Staff Login
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-dark-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    role === "admin" ? "admin@khalinex.com" : "adebayo@example.com"
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-dark-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] text-brand-600 hover:underline font-semibold"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-dark-200 text-sm focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full !py-3.5 mt-2">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}