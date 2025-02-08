"use client";

import { create } from "zustand";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        // ✅ If item exists, update its quantity correctly
        return {
          cart: state.cart.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity } // 🔥 Add selected quantity instead of just +1
              : cartItem
          ),
        };
      }

      // ✅ If item does not exist, add it with its quantity
      return { cart: [...state.cart, item] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item // ✅ Prevents quantity from going below 1
      ),
    })),
}));
