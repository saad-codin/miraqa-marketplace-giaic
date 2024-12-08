import React from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Range from "./components/Range"
import ProductList from "./components/ProductList"
import Inspiration from "./components/Inspiration"
import SetupGallery from "./components/SetupGallery"


export default function Home () {

  return ( 
    <div>
    <Header />
    <HeroSection />
    <Range />
    <ProductList/>
    <Inspiration /> 
    <SetupGallery />
    </div>
  )
}