"use client"


import React, { useState } from "react";
import Image from "next/image";
import Feature from "../components/Feature";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";

interface Product {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
}

const products: Product[] = [
  {
    imageUrl: "/Images (4).png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
  },
  {
    imageUrl: "/Image (5).png",
    name: "Levisio",
    description: "Luxury big sofa",
    price: 2500000,
    discount: 50,
  },
  {
    imageUrl: "/image 3 (1).png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
  },
  {
    imageUrl: "/Images (5).png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    originalPrice: 1000000,
    discount: 50,
    isNew: true,
  },
];

const repeatedProducts = Array(4).fill(products).flat();
const itemsPerPage = 8;

const ProductCard: React.FC<Product> = ({
  imageUrl,
  name,
  description,
  price,
  originalPrice,
  discount,
  isNew,
}) => {
  return (
    <div className="w-[285px] h-[446px] border border-gray-300 rounded-lg overflow-hidden relative">
      {isNew && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
          New
        </div>
      )}
      <div className="w-[285px] h-[301px] relative">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        {discount && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-md text-xs">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center">
          {originalPrice && (
            <p className="text-gray-500 text-sm line-through mr-2">
              Rp {originalPrice.toLocaleString()}
            </p>
          )}
          <p className="text-lg font-semibold">Rp {price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(repeatedProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = repeatedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      <div>
        <Image src="/Group 78 (4).png" alt="Shop" height={316} width={1440} className="w-full" />
      </div>
      <div>
        <Image src="/Group 63 (2).png" alt="Filter" height={100} width={1440} className="w-full" />
      </div>
      <div className="w-[1440px] h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-[50px] w-[1244px] mx-auto">
          {paginatedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="mt-[40px] flex items-center justify-center">
        <Pagination>
          <PaginationContent>
          <PaginationItem>
  <PaginationPrevious
    onClick={() => handlePageChange(currentPage - 1)}
    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
  />
</PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem>
  <PaginationNext
    onClick={() => handlePageChange(currentPage + 1)}
    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
  />
</PaginationItem>

          </PaginationContent>
        </Pagination>
      </div>
      <div className="mt-[60px]">
        <Feature />
      </div>
    </div>
  );
}
