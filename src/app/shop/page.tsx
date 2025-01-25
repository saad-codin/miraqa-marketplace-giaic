import React from "react";
import Image from "next/image";


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
  return (
    <div className="w-full">
      
      <div>
        <Image
          src="/Group 78 (4).png"
          alt="Shop"
          height={316}
          width={1440}
          className="w-full"
        />
      </div>

      
      <div>
        <Image
          src="/Group 63 (2).png"
          alt="Filter"
          height={100}
          width={1440}
          className="w-full"
        />
      </div>

      <div className="w-[1440px] h-[2051px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[32px] gap-y-[83px] mt-[50px] w-[1244px]  h-[2034px] ml-[99px] gap-40">
          {repeatedProducts.map((product, index) => (
             <ProductCard key={index} {...product} />
          ))} 
        </div>
      </div> 
      <div className="mt-[40px]  flex items-center justify-center ">
  <div className="w-[392px] h-[90px] flex gap-[30px]">
    {/* Button 1 */}
    <div className="flex items-center justify-center border bg-[rgb(184,142,47)]  h-[60px] w-[60px] rounded-[10px]">
      <p className="text-white text-xl">1</p>
    </div>
    
    {/* Button 2 */}
    <div className="flex items-center justify-center border  bg-[#F9F1E7] h-[60px] w-[60px] rounded-[10px]">
      <p className="text-gray-800 text-xl">2</p>
    </div>
    
    {/* Button 3 */}
    <div className="flex items-center justify-center border  bg-[#F9F1E7] h-[60px] w-[60px] rounded-[10px]">
      <p className="text-gray-800 text-xl">3</p>
    </div>
    
    {/* Button Next */}
    <div className="flex items-center justify-center border  bg-[#F9F1E7] h-[60px] w-[60px] rounded-[10px]">
      <p className="text-gray-800text-xl">Next</p>
    </div> 


  </div>
</div> 
  <div className="mt-[60px]">
    <Image src="/Frame 161.png" alt="frame" height={270} width={1440} ></Image>
  </div>


    </div>
  );
}
