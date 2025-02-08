"use client";

import Image from "next/image";
import { Circle } from 'lucide-react';
import BillingDetailsForm from "../components/BillingDetailsForm";
import { useCartStore } from "@/store/cartStore"; // Assuming this is your cart store

export default function Checkout() {
  // Accessing the cart state from the store
  const { cart } = useCartStore(); 

  // Calculate the total subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full">
        <Image src="/Group 78 (6).png" alt=" " height={316} width={1440} className="w-full" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 mt-10">
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-md">
          <BillingDetailsForm />
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 p-6 shadow-lg rounded-md">
          <h1 className="text-center font-semibold text-2xl mb-4">Cart Totals</h1>

          {/* Render cart items dynamically */}
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between border-b py-2 mt-2">
                  <p className="text-gray-600">{item.title} x {item.quantity}</p>
                  <p className="text-gray-600">$ {item.price * item.quantity}</p>
                </div>
              ))}

              {/* Subtotal */}
              <div className="flex justify-between border-b py-2 mt-2">
                <p className="font-semibold">Subtotal</p>
                <p className="text-gray-600">$ {subtotal}</p>
              </div>

              {/* Total */}
              <div className="flex justify-between border-b py-2 mt-2">
                <p className="font-semibold">Total</p>
                <p className="text-xl text-yellow-600 font-semibold">$ {subtotal}</p>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          {/* Payment methods */}
          <div className="mt-6">
            <div className="flex items-center space-x-3">
              <Circle size={14} />
              <h1 className="text-lg">Direct Bank Transfer</h1>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <Circle size={14} />
              <p className="text-gray-600 text-lg">Cash on Delivery</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b className="text-black">privacy policy.</b>
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition duration-300 w-full mt-6">Place Order</button>
        </div>
      </div>
    </div>
  );
}
  