import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-[1440px] h-[100px] bg-white">
      <div className="w-[1286px] h-[41px] mx-auto flex items-center justify-between py-[50px] "> {/* Changed height to h-full */}
       
        <div className="flex items-center ml-[54px]">
          
          <Image src="/logo.png" alt="Furniro Logo" height={32} width={50} />
          <h1 className="text-3xl font-bold text-gray-800 ">Furniro</h1>
        </div>

        
        <nav className="flex space-x-8">
          <Link href="/" 
             className="text-gray-600 hover:text-gray-800">Home 
          </Link>
          <Link href="/shop" 
            className="text-gray-600 hover:text-gray-800">Shop
          </Link>
          <Link href="/blog" 
             className="text-gray-600 hover:text-gray-800">Blog
          </Link>
          <Link href="/contact"
             className="text-gray-600 hover:text-gray-800">Contact
          </Link>
        </nav>

      
        <div className="flex items-center space-x-6">
          <Image src="/Vector.png" alt="Vector Icon" height={28} width={28} />
          <Image src="/Vector (1).png" alt="Vector Icon 1" height={28} width={28} />
          <Image src="/akar-icons_heart.png" alt="Heart Icon" height={28} width={28} /> 
          <Link href="/cart" > 
          
          <Image src="/ant-design_shopping-cart-outlined.png" alt="Shopping Cart Icon" height={28} width={28} />
        
          </Link>
        </div>
      </div>
    </div>
  );
}