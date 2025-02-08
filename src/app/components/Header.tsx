"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter(); // Router for navigation

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-[1286px] mx-auto flex items-center justify-between p-4 lg:p-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Furniro Logo" height={32} width={50} />
          <h1 className="text-2xl font-bold text-gray-800">Miraqa</h1>
        </div>

        {/* Navigation */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white p-4 space-y-4 lg:static lg:w-auto lg:p-0 lg:flex lg:space-x-8 lg:space-y-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/" className="block text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/products" className="block text-gray-600 hover:text-gray-800">
            Shop
          </Link>
         
          <Link href="/contact" className="block text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>

        {/* Icons & Menu Toggle */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* User Icon - Redirects to Login Page */}
          <button onClick={() => router.push("/user")}>
            <User className="w-5 h-5 text-gray-700" />
          </button>

          {/* Toggle Search Bar */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          

          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-white p-4 shadow-md mt-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </header>
  );
}
