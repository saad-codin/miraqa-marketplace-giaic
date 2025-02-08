"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import sanityClient from "@sanity/client";
import { Button } from "@/components/ui/button";
import { Minus, Plus, CheckCircle } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Toaster, useToast } from "@/components/ui/toaster";

const sanity = sanityClient({
  projectId: "pgn6ioec",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

const ProductPage = () => {
  const pathname = usePathname() ?? "";
  const id = pathname.split("/").pop() || "";
  const { addToCart } = useCartStore();
  const { toast } = useToast();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == "${id}"][0]{
          _id,
          title,
          price,
          description,
          "imageUrl": productImage.asset->url
        }`;

        const data = await sanity.fetch(query);
        console.log("Fetched Product:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 text-lg">Product not found!</p>;
  }

  const handleAddToCart = () => {
    if (!product) return;
  
    addToCart({
      _id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity,
    });
  
    toast({
      title: "Added to Cart",
      description: (
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} />
          <span>{`${product.title} (x${quantity}) has been added to your cart.`}</span>
        </div>
      ),
    });
  };
  
  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <img
          src={product.imageUrl || "https://via.placeholder.com/400"}
          alt={product.title}
          className="rounded-lg shadow-md w-full max-w-md object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">{product.description.slice(0, 100)}...</p>
        <p className="text-2xl font-semibold mt-4">${product.price}</p>
        <div className="mt-6 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus size={16} />
          </Button>
          <span className="text-lg font-medium">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <Plus size={16} />
          </Button>
        </div>
        <Button className="mt-6 w-full bg-black text-white hover:bg-gray-800" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductPage;
