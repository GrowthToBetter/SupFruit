"use client";

import Link from "next/link";
import { Product, ProductSectionVariant } from "./types";
import { ProductGrid } from "./ProductGrid";

interface ProductSectionProps {
  title: string;
  products: Product[];
  variant?: ProductSectionVariant;
  category?: "fruit" | "animal";
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
  generateHref,
  onProductClick,
  className = "mt-12",
}: ProductSectionProps) {
  // Auto-detect trending badge for viral variant

  // Auto-generate href based on variant and category
  const getDefaultHref = (): string => {
    if (viewAllHref) return viewAllHref;

    switch (variant) {
      case "category":
        if (category === "fruit") return "/toko/buah";
        if (category === "animal") return "/toko/hewani";
        return "/toko/kategori";
      default:
        return "/toko/semua";
    }
  };

  // Auto-generate product href based on variant
  const getProductHref = (product: Product): string => {
    if (generateHref) return generateHref(product);

    switch (variant) {
      case "category":
        if (category === "fruit") return `/toko/buah/${product.id}`;
        if (category === "animal") return `/toko/hewani/${product.id}`;
        return `/toko/produk/${product.id}`;
      default:
        return `/toko/produk/${product.id}`;
    }
  };

  // Style variants based on section type
  const getSectionStyles = () => {
    switch (variant) {
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
        generateHref={(product) => getProductHref(product)}
        onProductClick={onProductClick}
      />
    </section>
  );
}
