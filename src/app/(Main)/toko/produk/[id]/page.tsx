"use client";

import {
  ChevronLeft,
  MessageCircle,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/components/toko/DummyData";
import { Product } from "@/components/toko/types";

export default function ProductDetail() {
  const productData = allProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {} as Record<number, Product>);
  const params = useParams();
  const productId = Number.parseInt(params.id as string);
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 sm:mb-6 lg:mb-8">
          <Link
            href=".."
            className="flex items-center gap-1 sm:gap-2 text-green-600 hover:text-green-700"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Kembali ke beranda</span>
            <span className="sm:hidden">Kembali</span>
          </Link>
          <button className="flex items-center gap-1 sm:gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Bagikan produk</span>
            <span className="sm:hidden">Bagikan</span>
          </button>
        </div>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="aspect-square max-h-80 sm:max-h-96 lg:max-h-none bg-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden w-full max-w-80 sm:max-w-96">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Description */}
            <div className="prose text-gray-600 max-w-none text-sm sm:text-base">
              {product.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-3 sm:mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Supplier Info */}
            <div className="border-t pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Supplier:</p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {product.supplier}
                  </p>
                </div>
                <button
                  title="Chat Supplier"
                  className="rounded-full cursor-pointer px-4 sm:px-6 lg:px-8 py-1 sm:py-2 lg:py-2 outline outline-primary text-primary flex gap-2 hover:bg-primary hover:text-white hover:outline-none duration-200 hover:scale-105 transform transition-all text-sm sm:text-base font-medium items-center justify-center sm:justify-start w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Chat Supplier</span>
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-4 sm:pt-6">
              <h3 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                Pengiriman
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 flex-shrink-0" />
                  <span>{product.shipping.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 ml-6">
                  <span>{product.shipping.cost}</span>
                </div>
              </div>

              {/* Report Section */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors"
                  >
                    Ada masalah dengan produk ini?
                  </Link>
                  <Button
                    variant="link"
                    className="text-xs sm:text-sm text-red-500 hover:text-red-600 p-0 h-auto cursor-pointer transition-colors justify-start sm:justify-end"
                  >
                    Laporkan
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 sm:pt-8">
              <button
                title="Add to Cart"
                className="rounded-full cursor-pointer w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-2 lg:py-3 outline hover:outline-1 outline-primary bg-primary text-white flex gap-2 hover:bg-white hover:text-primary duration-200 hover:scale-105 transform transition-all text-sm sm:text-base font-medium items-center justify-center order-2 sm:order-1"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Tambahkan Keranjang</span>
                <span className="sm:hidden">Keranjang</span>
              </button>
              <button
                title="Buy Now"
                className="rounded-full cursor-pointer w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-2 lg:py-3 outline outline-primary text-primary flex gap-2 hover:bg-primary hover:text-white hover:outline-none duration-200 hover:scale-105 transform transition-all text-sm sm:text-base font-medium items-center justify-center order-1 sm:order-2"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Beli Sekarang</span>
                <span className="sm:hidden">Beli</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
