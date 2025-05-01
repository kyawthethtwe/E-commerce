import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/IProduct";
import { useCartStore } from "@/services/stores/cart";
import { toast } from "sonner";
import { useWishlistStore } from "@/services/stores/wishlist";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addItem);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeWishlist);
  const isWishlisted = (id: number) => wishlist.some((item) => item.id === id);
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success("Product added to cart  🛒");
  };

  const handleAddToWithlist = () => {
    addToWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success("Product added to wishlist ❤️");
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.id);
    toast.success("Product removed from wishlist 💔");
  };
  return (
    <Card className="w-full h-full overflow-hidden">
      <div className="relative w-full h-[140px] min-[400px]:h-[160px] min-[500px]:h-[180px] sm:h-[200px] md:h-[240px] xl:h-[260px] overflow-hidden">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image || "/retro.jpg"}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </Link>
        <Button
          onClick={() =>
            isWishlisted(product.id)
              ? handleRemoveFromWishlist()
              : handleAddToWithlist()
          }
          className={cn(
            "absolute top-2 right-2 z-10",
            isWishlisted(product.id) ? "text-red-500" : "text-white"
          )}
        >
          <Heart
            size={24}
            fill={product && isWishlisted(product.id) ? "currentColor" : "none"}
          />
        </Button>
      </div>

      <div className="flex flex-col gap-1 sm:gap-2  p-2 sm:p-3 md:p-4">
        <h2 className="text-sm md:text-base xl:text-lg font-semibold tracking-tight line-clamp-1">
          {product.title}
        </h2>
        <p className="text-zinc-400 text-xs md:text-sm line-clamp-2">
          {product.description}
        </p>
        <Badge className="w-fit rounded-full px-2 md:px-3 xl:px-4 py-1 md:py-1.5 text-[6px] w-[480px]:text-[10px] md:text-xs">
          {product.category}
        </Badge>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-400 text-xs sm:text-sm">Price</p>
            <p className="text-xs sm:text-base md:text-base font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className=""
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
