import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="relative w-full h-[716px] flex items-center justify-center">
      <Image 
        src="/hero1.png" 
        alt="Hero" 
        fill 
        style={{ objectFit: 'cover' }}  
      /> 
      <div className="absolute right-0 w-[90%] max-w-[643px] h-auto p-6 bg-[#FFF3E3] text-center md:text-left md:p-10 md:right-10 lg:right-20">
        <h1 className="text-lg md:text-xl font-semibold font-[Poppins] tracking-[3px] leading-[24px]">New Arrival</h1> 
        <h2 className="text-3xl md:text-[52px] leading-[40px] md:leading-[65px] font-bold text-[#B88E2F] mt-2">Discover Our <br className="hidden md:block" /> New Collection</h2>
        <p className="text-base md:text-xl leading-[24px] font-semibold mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden md:block" /> Nisi qui ipsum necessitatibex.</p> 
         <Link href="/shop"><button className="mt-6 w-full md:w-[222px] h-[60px] md:h-[74px] border border-[#B88E2F] text-white bg-[#B88E2F] text-lg font-medium">BUY NOW</button> </Link>
      </div>
    </div>
  );
}