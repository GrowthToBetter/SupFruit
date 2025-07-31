"use client";

import { Product } from "./types";
import { ProductCard } from "./ProductCard";
import { useRouter } from "next/navigation";

interface ProductGridProps {
  products: Product[];
  showTrendingBadge?: boolean;
  generateHref?: (product: Product) => string;
  onProductClick?: (product: Product) => void;
  className?: string;
  cardClassName?: string;
}

export function ProductGrid({
  products,
  generateHref,
  onProductClick,
  className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
  cardClassName = "",
}: ProductGridProps) {
  const router = useRouter();
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          href={generateHref ? generateHref(product) : undefined}
          onClick={onProductClick ? () => onProductClick(product) : undefined}
          onAddToCart={() =>
            console.log("Add to cart clicked for", product.name)
          }
          onOrderNow={() =>
            router.push(
              `https://wa.me/6285106655664?text=Halo, saya tertarik dengan produk ${product.name} yang ada di toko Anda. Apakah masih tersedia?`
            )
          }
          className={cardClassName}
        />
      ))}
    </div>
  );
}
