import Link from "next/link";
import Image from "next/image"
export default function Header() {
  return (
    <div className="w-[1440px] h-[100px] border border-2px border-black">
      <div className="w-[1286px] h-[41px] ml-[54px] my-[29px] border border-2px border-red-600 flex items-center">
        {/* logo */}
        <div className="w-[185px] h-[41px] ml-[54px] gap-[5px] border border-2px border-red-600 flex items-center">
          <div className="border border-2px border-red-600"></div>
          <div>
            <h1>Furniro</h1>
          </div>
        </div>

        <div className="border border-2px border-black w-[430px] h-[24px] ml-[405px]">
          <div className="flex flex-wrap justify-between">
            <h1>Home</h1>

            {/* Updated Shop Link */}
            <Link href="/shop">
              <h1>Shop</h1>
            </Link>

            <h1>Blog</h1>
            <h1>Contact</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-x-2 mx-5">
          <Image src="/Vector.png" alt="Vector Icon" height={28} width={28} />
          <Image src="/Vector (1).png" alt="Vector Icon 1" height={28} width={28} />
          <Image src="/akar-icons_heart.png" alt="Heart Icon" height={28} width={28} />
          <Image src="/ant-design_shopping-cart-outlined.png" alt="Shopping Cart Icon" height={28} width={28} />
        </div>
      </div>
    </div>
  );
}
