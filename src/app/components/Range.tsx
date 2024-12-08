import React from "react";
import Image from "next/image";

export default function Range() {
  return (
    <div className="border border-2px border-black w-[1183px] h-[685px] ml-[131px] mt-[100px]">
      <div className="border border-2px border-red-600 w-[559px] h-[76.71px] mx-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-[32px] text-center font-bold">Browse The Range</h1>
          <p className="text-center font-semibold">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>

      <div className="border border-2px border-black my-[80px] w-[auto] flex flex-wrap ml-[20px]">
        {/* Image 1 */}
        <div className="border border-2px border-black w-[381px] h-[480px]">
          <Image src="/koko3.png" alt="Image 1" width={381} height={480} />
        </div>
        
        {/* Image 2 */}
        <div className="border border-2px border-black w-[381px] h-[480px]">
          <Image src="/koko2.png" alt="Image 2" width={381} height={480} />
        </div>

        {/* Image 3 */}
        <div className="border border-2px border-black w-[381px] h-[480px]">
          <Image src="/koko.png" alt="Image 3" width={381} height={480} />
        </div>
      </div>
    </div>
  );
}
