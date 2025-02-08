"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import sanityClient from "@sanity/client";

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
}

interface ProductCardProps {
  limit?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ limit }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{ _id, title, price, "imageUrl": productImage.asset->url }`;
        const data = await sanity.fetch(query);
        setProducts(limit ? data.slice(0, limit * 4) : data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-[45px] mt-2">Browse Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product._id} href={`/products`} passHref>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer bg-white">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">${product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
