// pages/TokoPage.tsx
"use client";

import { useState } from "react";
import { BannerSlider } from "@/components/toko/BannerSlider";
import { ProductSection } from "@/components/toko/ProductSection";
import { Product, SlideData } from "@/components/toko/types";
import { LoadMoreButton } from "@/components/toko/LoadMoreButton";
import { allProducts } from "@/components/toko/DummyData";

// Data

const sliderData: SlideData[] = [
  {
    id: 1,
    title: "Promo Buah Segar Hari Ini",
    subtitle: "Diskon hingga 30% untuk semua buah pilihan",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "Buah Import Premium",
    subtitle: "Kualitas terbaik langsung dari petani",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-orange-400 to-red-500",
  },
  {
    id: 3,
    title: "Organik & Berkualitas",
    subtitle: "100% organik tanpa pestisida berbahaya",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-purple-400 to-pink-500",
  },
];

export default function TokoPage() {
  const [loading, setLoading] = useState(false);

  // Handler functions
  // const handleProductClick = (product: Product) => {
  //   console.log("Product clicked:", product);
  //   // Add your logic here (e.g., navigate to product detail, add to cart, etc.)
  // };

  const handleLoadMore = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log("Loading more products...");
      // Add your load more logic here
    }, 2000);
  };

  // Generate href for product links
  const generateProductHref = (product: Product) => {
    return `/toko/produk/${product.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Section */}
        <BannerSlider
          slides={sliderData}
          autoSlide={true}
          autoSlideInterval={5000}
          height="h-48 md:h-64"
          className="mb-8 md:mb-12"
        />

        {/* Fruit Products Section */}
        <ProductSection
          title="Produk Buah-buahan"
          products={allProducts.filter(
            (product) => product.category === "fruit"
          )}
          viewAllHref="/products"
          generateHref={generateProductHref}
          className="first:mt-0"
        />

        {/* Animal Products Section */}
        <ProductSection
          title="Produk Hewani"
          products={allProducts.filter(
            (product) => product.category === "animal"
          )}
          viewAllHref="/animal-products"
          generateHref={generateProductHref}
        />

        {/* Viral Products Section */}
        <ProductSection
          title="Produk Viral"
          products={allProducts.filter((product) => product.trending === true)}
          viewAllHref="/viral-products"
          generateHref={generateProductHref}
          showTrendingBadge={true}
        />

        {/* Load More Button */}
        <LoadMoreButton
          onClick={handleLoadMore}
          loading={loading}
          text="Muat Lebih Banyak"
          loadingText="Memuat..."
        />
      </main>
    </div>
  );
}

// Alternatif untuk menggunakan onProductClick tanpa href
export function TokoPageWithClickHandlers() {
  const [loading, setLoading] = useState(false);

  const handleProductClick = (product: Product) => {
    console.log("Fruit product clicked:", product);
    // Handle navigation programmatically
    // router.push(`/toko/produk/${product.id}`);
  };

  const handleAnimalProductClick = (product: Product) => {
    console.log("Animal product clicked:", product);
    // Handle navigation programmatically
    // router.push(`/toko/hewani/${product.id}`);
  };

  const handleViralProductClick = (product: Product) => {
    console.log("Viral product clicked:", product);
    // Handle navigation programmatically
    // router.push(`/toko/viral/${product.id}`);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Loading more products...");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BannerSlider slides={sliderData} />

        <ProductSection
          title="Produk Buah-buahan"
          products={allProducts.filter(
            (product) => product.category === "fruit"
          )}
          viewAllHref="/products"
          onProductClick={handleProductClick}
          className="first:mt-0"
        />

        <ProductSection
          title="Produk Hewani"
          products={allProducts.filter(
            (product) => product.category === "animal"
          )}
          viewAllHref="/animal-products"
          onProductClick={handleAnimalProductClick}
        />

        <ProductSection
          title="Produk Viral"
          products={allProducts.filter((product) => product.trending === true)}
          viewAllHref="/viral-products"
          onProductClick={handleViralProductClick}
          showTrendingBadge={true}
        />

        <LoadMoreButton onClick={handleLoadMore} loading={loading} />
      </main>
    </div>
  );
}
