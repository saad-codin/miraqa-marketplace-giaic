import React from "react";
import Image from "next/image";

export default function Range() {
  return (
    <div className="w-full max-w-[1183px] mx-auto mt-12 px-4">
      <div className="max-w-[559px] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Browse The Range</h1>
        <p className="text-lg md:text-xl font-light p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="mt-10 flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {/* Image 1 */}
        <div className="w-full sm:w-1/3 h-auto">
          <Image src="/Mask Group (1).png" alt="Image 1" width={381} height={480} className="w-full h-auto" />
          <p className="text-center mt-4 font-semibold text-xl md:text-2xl">Dining</p>
        </div>

        {/* Image 2 */}
        <div className="w-full sm:w-1/3 h-auto">
          <Image src="/koko2.png" alt="Image 2" width={381} height={480} className="w-full h-auto" />
          <p className="text-center mt-4 font-semibold text-xl md:text-2xl">Living</p>
        </div>

        {/* Image 3 */}
        <div className="w-full sm:w-1/3 h-auto">
          <Image src="/koko.png" alt="Image 3" width={381} height={480} className="w-full h-auto" />
          <p className="text-center mt-4 font-semibold text-xl md:text-2xl">Bedroom</p>
        </div>
      </div>
    </div>
  );
}
