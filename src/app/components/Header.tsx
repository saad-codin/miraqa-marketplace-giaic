import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-[1440px] h-[100px] bg-white">
      <div className="w-[1286px] h-full mx-auto flex items-center justify-between"> {/* Changed height to h-full */}
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Replace with your actual logo */}
          <Image src="/logo.png" alt="Furniro Logo" height={32} width={50} />
          <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Home</a> 
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Blog</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Contact</a>
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Image src="/Vector.png" alt="Vector Icon" height={28} width={28} />
          <Image src="/Vector (1).png" alt="Vector Icon 1" height={28} width={28} />
          <Image src="/akar-icons_heart.png" alt="Heart Icon" height={28} width={28} />
          <Image src="/ant-design_shopping-cart-outlined.png" alt="Shopping Cart Icon" height={28} width={28} />
        </div>
      </div>
    </div>
  );
}