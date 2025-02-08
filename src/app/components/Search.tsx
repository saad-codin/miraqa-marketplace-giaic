"use client";

import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import Image from "next/image"; 

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

interface SearchProps {
  products: Product[];
}

const Search: React.FC<SearchProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.tags.some((tag: string) =>
          tag.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search by tags..."
        className="p-2 w-full border rounded-md shadow-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon className="absolute top-3 right-3 w-5 h-5 text-gray-600" />

      {searchQuery && filteredProducts.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-xl">Search Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
            
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={500}
                  height={500} 
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="mt-2 font-bold">${product.price}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#C8A348] text-white py-1 px-3 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchQuery && filteredProducts.length === 0 && (
        <div className="mt-4 text-center text-gray-500">No products found.</div>
      )}
    </div>
  );
};

export default Search;
