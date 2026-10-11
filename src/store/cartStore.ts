// src/store/cartStore.ts
import { create } from "zustand";

export interface Product {
  id: string;
  slug: string;
  name: string;
  // Replace line 7 in src/store/cartStore.ts with this:
  category: "electronics" | "textiles" | "household" | "industrial" | "stationery";
  priceNaira: number;
  priceRmb: number;
  image: string;
  moq: number;
  inStock: boolean;
  description: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product, quantity = 1) => {
    const currentItems = get().items;
    const existingIndex = currentItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingIndex > -1) {
      const updatedItems = [...currentItems];
      updatedItems[existingIndex].quantity += quantity;
      set({ items: updatedItems, isOpen: true });
    } else {
      set({
        items: [...currentItems, { product, quantity }],
        isOpen: true,
      });
    }
  },

  removeItem: (productId) => {
    set({
      items: get().items.filter((item) => item.product.id !== productId),
    });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set({
      items: get().items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.priceNaira * item.quantity,
      0
    );
  },
}));