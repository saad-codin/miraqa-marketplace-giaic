"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import sanityClient from "@sanity/client";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const sanity = sanityClient({
  projectId: "pgn6ioec",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  tags?: string[];
}

export default function ProductCards() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id, 
          title, 
          price, 
          "imageUrl": productImage.asset->url, 
          tags
        }`;
        const data = await sanity.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = useCallback(
    (product: Product) => {
      addToCart({
        _id: product._id,
        title: product.title,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
      });
      router.push("/cart");
    },
    [addToCart, router]
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Shop Banner */}
      <div className="w-full">
        <Image
          src="/Group 78 (4).png"
          alt="Shop"
          height={316}
          width={1440}
          className="w-full h-auto"
          priority
        />
      </div>

   

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse p-4 rounded-lg h-[400px]"
              />
            ))
          : products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 cursor-pointer flex flex-col justify-between min-h-[400px]"
              >
                {/* Product Image */}
                <Link href={`/products/${product._id}`} className="block">
                  <div className="w-full h-[220px] relative">
                    <Image
                      src={`${product.imageUrl}?w=500&auto=format`}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                  <p className="text-yellow-600 text-xl font-bold mt-2">
                    ${product.price.toLocaleString()}
                  </p>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="mt-auto flex justify-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full flex items-center justify-center bg-black text-white py-2 rounded-md text-lg hover:bg-gray-800 transition duration-300 min-h-[50px]"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div> 
      
    </div>
  );
}
