"use client";

import { Product } from "./types";
import { ProductCard } from "./ProductCard";

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
  showTrendingBadge = false,
  generateHref,
  onProductClick,
  className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
  cardClassName = "",
}: ProductGridProps) {
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
          onOrderNow={() => console.log("Order now clicked for", product.name)}
          showTrendingBadge={showTrendingBadge}
          className={cardClassName}
        />
      ))}
    </div>
  );
}
