export default function Footer() {
  return (
    <div className="w-full h-auto border-[3px] px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="mb-8 lg:mb-0">
            <h1 className="font-bold text-2xl leading-[24px]">Furniro.</h1>
            <p className="mt-8 text-[16px] text-[#9F9F9F] font-normal leading-[24px]">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-[16px] font-medium leading-[24px] text-[#9F9F9F]">Links</h1>
              <ul className="space-y-3">
                <li className="text-[16px] font-medium leading-[24px]">Home</li>
                <li className="text-[16px] font-medium leading-[24px]">Shop</li>
                <li className="text-[16px] font-medium leading-[24px]">About</li>
                <li className="text-[16px] font-medium leading-[24px]">Contact</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[16px] font-medium leading-[24px] text-[#9F9F9F]">Help</h1>
              <ul className="space-y-3">
                <li className="text-[16px] font-medium leading-[24px]">Payment Options</li>
                <li className="text-[16px] font-medium leading-[24px]">Returns</li>
                <li className="text-[16px] font-medium leading-[24px]">Privacy Policies</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-[16px] font-medium text-[#9F9F9F] leading-[24px]">Newsletter</h1>
            <div className="mt-4 flex flex-col md:flex-row md:items-center">
              <input type="text" placeholder="Enter Your Email Address" className="p-2 border border-gray-300 rounded-md w-full md:w-auto" />
              <button className="mt-2 md:mt-0 md:ml-2 bg-black text-white px-4 py-2 rounded-md">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] mt-8 pt-4 text-center text-[14px] text-[#9F9F9F]">
          <p>2025 Furniro. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
