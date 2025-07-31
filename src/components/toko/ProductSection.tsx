"use client";

import Link from "next/link";
import { Product, ProductSectionVariant, ProductCategory } from "./types";
import { ProductGrid } from "./ProductGrid";

interface ProductSectionProps {
  title: string;
  products: Product[];
  variant?: ProductSectionVariant;
  category?: ProductCategory;
  viewAllHref?: string;
  viewAllText?: string;
  showTrendingBadge?: boolean;
  generateHref?: (product: Product) => string;
  onProductClick?: (product: Product) => void;
  className?: string;
}

export function ProductSection({
  title,
  products,
  variant = "general",
  category,
  viewAllHref,
  viewAllText = "Lihat semua",
  showTrendingBadge = false,
  generateHref,
  onProductClick,
  className = "mt-12",
}: ProductSectionProps) {
  // Auto-detect trending badge for viral variant
  const shouldShowTrendingBadge = variant === "viral" || showTrendingBadge;

  // Auto-generate href based on variant and category
  const getDefaultHref = (): string => {
    if (viewAllHref) return viewAllHref;

    switch (variant) {
      case "viral":
        return "/toko/viral";
      case "category":
        if (category === ProductCategory.FRUIT) return "/toko/buah";
        if (
          category === ProductCategory.ANIMAL ||
          category === ProductCategory.MEAT ||
          category === ProductCategory.SEAFOOD ||
          category === ProductCategory.DAIRY
        )
          return "/toko/hewani";
        return "/toko/kategori";
      default:
        return "/toko/semua";
    }
  };

  // Auto-generate product href based on variant
  const getProductHref = (product: Product): string => {
    if (generateHref) return generateHref(product);

    switch (variant) {
      case "viral":
        return `/toko/viral/${product.id}`;
      case "category":
        if (category === ProductCategory.FRUIT)
          return `/toko/buah/${product.id}`;
        if (
          category === ProductCategory.ANIMAL ||
          category === ProductCategory.MEAT ||
          category === ProductCategory.SEAFOOD ||
          category === ProductCategory.DAIRY
        )
          return `/toko/hewani/${product.id}`;
        return `/toko/produk/${product.id}`;
      default:
        return `/toko/produk/${product.id}`;
    }
  };

  // Style variants based on section type
  const getSectionStyles = () => {
    switch (variant) {
      case "viral":
        return {
          headerClass: "text-2xl font-bold text-red-600",
          linkClass:
            "text-red-600 hover:text-red-700 font-medium transition-colors duration-200",
        };
      case "category":
        return {
          headerClass: "text-2xl font-bold text-green-600",
          linkClass:
            "text-green-600 hover:text-green-700 font-medium transition-colors duration-200",
        };
      default:
        return {
          headerClass: "text-2xl font-bold text-gray-900",
          linkClass:
            "text-green-600 hover:text-green-700 font-medium transition-colors duration-200",
        };
    }
  };

  const styles = getSectionStyles();
  const defaultHref = getDefaultHref();

  return (
    <section className={className}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className={styles.headerClass}>{title}</h2>
          {variant === "viral" && (
            <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
              🔥 Trending
            </span>
          )}
        </div>
        {defaultHref && (
          <Link href={defaultHref} className={styles.linkClass}>
            {viewAllText}
          </Link>
        )}
      </div>

      {/* Products Grid */}
      <ProductGrid
        products={products}
        showTrendingBadge={shouldShowTrendingBadge}
        generateHref={(product) => getProductHref(product)}
        onProductClick={onProductClick}
      />
    </section>
  );
}
