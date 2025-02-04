"use client"

import Link from "next/link";
import Image from "next/image";
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-[1286px] mx-auto flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Furniro Logo" height={32} width={50} />
          <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        </div>
        <nav className={`absolute top-16 left-0 w-full bg-white p-4 space-y-4 lg:static lg:w-auto lg:p-0 lg:flex lg:space-x-8 lg:space-y-0 ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="block text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/shop" className="block text-gray-600 hover:text-gray-800">Shop</Link>
          <Link href="/blog" className="block text-gray-600 hover:text-gray-800">Blog</Link>
          <Link href="/contact" className="block text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 lg:space-x-6">
          <User className="w-5 h-5 text-gray-700" />
          <Search className="w-5 h-5 text-gray-700" />
          <Heart className="w-5 h-5 text-gray-700" />
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
