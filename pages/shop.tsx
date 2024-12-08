import React from "react";

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
    imageUrl: '/Images (4).png',
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
  },
  {
    imageUrl: '/Image (5).png',
    name: 'Levisio',
    description: 'Luxury big sofa',
    price: 2500000,
    discount: 50,
  },
  {
    imageUrl: '/image 3 (1).png',
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
  },
  {
    imageUrl: '/Images (5).png',
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    originalPrice: 1000000,
    discount: 50,
    isNew: true,
  },
  {
    imageUrl: '/Image 5.png',
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    originalPrice: 2500000,
    discount: 40,
  },
  {
    imageUrl: '/Images (1).png',
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    isNew: true,
  },
  {
    imageUrl: '/Images (6).png',
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    discount: 50,
  },
  {
    imageUrl: '/Images (7).png',
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    isNew: true,
  },
];

const ProductCard: React.FC<Product> = ({ imageUrl, name, description, price, originalPrice, discount, isNew }) => {
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

const Shop: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      {/* Hero Section */}
      <div className="w-[1440px] h-[316px]">
        <img src="/Group 78.png" alt="Hero Image" className="w-full h-full object-cover" />
        <div className="w-[1440px] h-[316px]">
          <img src="/Group 63.png" alt="Hero Banner" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Product List Section */}
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-center w-full h-[48px]">
          <h1 className="text-center text-4xl font-bold">Our Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[32px] gap-y-[83px] mt-[100px]">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
