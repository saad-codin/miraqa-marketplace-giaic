import Image from "next/image"
export default function HeroSection () {  
  return ( 

    <div className="w-[1440px] h-[716px] relative">
    <Image 
      src="/Hero.jpg" 
      alt="Hero" 
      fill 
      style={{ objectFit: 'cover' }} 
    />
  </div>
  )
}