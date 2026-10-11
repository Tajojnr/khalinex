// src/store/authStore.ts
import { create } from "zustand";

export type UserRole = "customer" | "admin" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  companyName?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (email, role) => {
    // Mock login that sets either a customer or admin profile based on input
    const mockUser: User = {
      id: role === "admin" ? "admin-101" : "cus-8829",
      name: role === "admin" ? "KhalineX Admin" : "Adebayo Johnson",
      email: email,
      role: role,
      phone: "+234 800 123 4567",
      companyName: role === "customer" ? "Adebayo Electronics Ltd" : undefined,
    };
    
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));