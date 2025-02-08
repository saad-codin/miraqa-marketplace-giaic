"use client";

import Image from "next/image";
import Link from "next/link";
import Feature from "../components/Feature";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full">
        <Image src="/Group 78 (5).png" alt="cart" width={1440} height={316} className="w-full" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 mt-10">
        <div className="w-full lg:w-3/5 bg-white shadow-lg p-4 rounded-md">
          <div className="hidden md:flex justify-between bg-gray-100 p-4 text-sm font-bold rounded-md">
            <h1 className="w-1/5 text-center">Product</h1>
            <h1 className="w-1/5 text-center">Price</h1>
            <h1 className="w-1/5 text-center">Quantity</h1>
            <h1 className="w-1/5 text-center">Subtotal</h1>
            <h1 className="w-1/5 text-center">Remove</h1>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row items-center p-4 border-b gap-4 md:gap-0">
                <Image src={item.imageUrl} alt={item.title} height={105} width={108} className="mb-4 md:mb-0" />
                <div className="w-full md:w-1/5 text-center text-gray-600">{item.title}</div>
                <div className="w-full md:w-1/5 text-center text-gray-600">$ {item.price.toLocaleString()}</div>
                <div className="w-full md:w-1/5 flex justify-center items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                    className="w-16 border text-center rounded-md p-1"
                  />
                </div>
                <div className="w-full md:w-1/5 text-center text-black">$ {(item.price * item.quantity).toLocaleString()}</div>
                <div className="w-full md:w-1/5 flex justify-center">
                  <Button variant="outline" size="icon" onClick={() => removeFromCart(item._id)}>
                    <Trash2 className="text-red-500" size={18} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">Your cart is empty. Add products to checkout.</p>
          )}
        </div>

        <div className="w-full lg:w-2/5 bg-gray-100 p-6 shadow-lg rounded-md">
          <h1 className="text-center font-semibold text-2xl mb-4">Cart Totals</h1>
          <div className="flex justify-between border-b py-2">
            <p className="font-semibold">Subtotal</p>
            <p className="text-gray-600">$ {calculateTotal().toLocaleString()}</p>
          </div>
          <div className="flex justify-between border-b py-2 mt-2">
            <p className="font-semibold">Total</p>
            <p className="text-xl text-yellow-600 font-semibold">$ {calculateTotal().toLocaleString()}</p>
          </div>
          <div className="text-center mt-6">
            <Link href="/checkout">
              <button className="bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition duration-300 w-full md:w-auto">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Feature />
      </div>
    </div>
  );
}
