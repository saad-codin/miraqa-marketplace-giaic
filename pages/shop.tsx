
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/backimg.png')" }}>
      {/* Right-Side Box */}
      <div
        className="absolute bg-[#fef5e7] p-8 shadow-lg rounded-lg"
        style={{
          width: "643px", // Fixed width
          height: "443px", // Fixed height
          top: "253px", // Top position
          left: "739px", // Left position
        }}
      >
        <p className="text-sm text-gray-600 mb-2">New Arrival</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Discover Our New Collection</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-6 py-3 bg-[#c29d5b] text-white rounded-lg font-semibold hover:bg-[#b18c4c] transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
