import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
    return (
        <div className="border-2 border-emerald-200 w-full h-[716.83px] max-w-[1440px] relative">
            <Image 
                src="/Hero.jpg" // Use forward slash for the correct path
                alt="A descriptive text for the image" // Provide a meaningful description
                layout="fill" 
                objectFit="cover" 
                priority // Optional: Load the image with priority if it's critical for the page
            />
        </div>
    );
};

export default HeroSection;