import React from "react";
import Image from "next/image";

export default function Range() {
  return (
    <div className=" w-[1183px] h-[685px] ml-[131px] mt-[50px]">
      <div className="w-[559px] h-[76.71px] mx-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl text-center font-bold">Browse The Range</h1>
          <p className="text-xl text-center font-light p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="my-[80px] w-[auto] flex flex-wrap ml-[20px] gap-2">
        {/* Image 1 */}
        <div className="w-[381px] h-[480px]">
          <Image src="/Mask Group (1).png" alt="Image 1" width={381} height={480} />
           <p className="text-center mt-4 font-semibold text-2xl">Dining</p>
        </div>
        
        {/* Image 2 */}
        <div className=" w-[381px] h-[480px]">
          <Image src="/koko2.png" alt="Image 2" width={381} height={480} />
          <p className="text-center mt-4 font-semibold text-2xl">Living</p>
        </div>

        {/* Image 3 */}
        <div className="w-[381px] h-[480px]">
          <Image src="/koko.png" alt="Image 3" width={381} height={480} />
          <p className="text-center mt-4 font-semibold text-2xl">Bedroom</p>
        </div> 

      
      </div>
    </div>
  );
}
