import React from "react";
import HeroSection from "./components/HeroSection";
import Range from "./components/Range";
import Inspiration from "./components/Inspiration";
import SetupGallery from "./components/SetupGallery";
import ProductCard from "./products/ProductCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Range />
      <ProductCard limit={2} /> {/* Only shows 2 rows (8 products) */}
      <Inspiration />
      <SetupGallery />
    </div>
  );
}
