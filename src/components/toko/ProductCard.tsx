"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Product } from "./types";

interface ProductCardProps {
  product: Product;
  href?: string;
  onClick?: () => void;
  onAddToCart?: () => void;
  onOrderNow?: () => void;
  className?: string;
}

export function ProductCard({
  product,
  href,
  onClick,
  onAddToCart,
  onOrderNow,
  className = "",
}: ProductCardProps) {
  const CardContent = () => (
    <div
      className={`bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 relative group ${className}`}
    >
      {/* Trending Badge */}

      {/* Product Image */}
      <div className="aspect-square bg-gray-200 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl overflow-hidden relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover Action Buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 px-4 transition-opacity duration-200 flex items-end pb-4 justify-center gap-2 sm:gap-3">
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart();
              }}
              className="bg-white w-full text-gray-900 p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex justify-center duration-200 shadow-lg"
              title="Add to Cart"
            >
              <ShoppingCart size={16} className="sm:w-5 sm:h-5" />
            </button>
          )}
          {onOrderNow && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOrderNow();
              }}
              className="bg-primary w-full text-white p-2 sm:p-3 rounded-full hover:bg-primary hover:brightness-90 flex justify-center cursor-pointer transition-all duration-200 shadow-lg"
              title="Pesan Sekarang"
            >
              <MessageCircle size={16} className="sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3 lg:p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm sm:text-base">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">
          {product.price.price}
        </p>
        <p className="text-xs p-1.5 sm:p-2 rounded-sm sm:rounded-2xl w-fit bg-primary/20 font-semibold text-primary line-clamp-1">
          {product.supplier.user.name}
        </p>
      </div>
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  // If onClick is provided, wrap in button
  if (onClick) {
    return (
      <button
        title="Button"
        onClick={onClick}
        className="block w-full text-left"
      >
        <CardContent />
      </button>
    );
  }

  // Otherwise, just return the content
  return <CardContent />;
}
