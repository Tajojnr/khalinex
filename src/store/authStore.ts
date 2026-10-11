import { create } from "zustand";

export type UserRole = "customer" | "admin" | null;

export interface User {
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
  user: {
    id: "CUS-8829",
    name: "Adebayo Johnson",
    email: "adebayo@example.com",
    role: "customer",
    phone: "+234 800 123 4567",
    companyName: "Adebayo Electronics Ltd",
  },
  isAuthenticated: true,

  login: (email, role) => {
    const mockUser: User = {
      id: role === "admin" ? "ADM-101" : "CUS-8829",
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
