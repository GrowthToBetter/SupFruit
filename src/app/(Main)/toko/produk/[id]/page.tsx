"use client"

import { ChevronDown, ChevronLeft, MessageCircle, Search, Share2, ShoppingCart, Truck, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const productData = {
  1: {
    id: 1,
    name: "Lemon California",
    price: "Rp10.000 / kg",
    supplier: "Ryo Hariyono Angwyn",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop&crop=center",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    shipping: {
      location: "Dikirim dari Lokasi Supplier",
      cost: "Ongkir mulai Rp63.000",
    },
  },
}

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)
  const product = productData[productId as keyof typeof productData]

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    // Add product to cart logic would go here
    // For now, we'll just redirect to the cart page
    router.push('/keranjang')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end space-x-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-gray-700 transition-colors">
              Tentang KandAgro
            </Link>
            <Link href="/start-selling" className="hover:text-gray-700 transition-colors">
              Mulai berjualan
            </Link>
            <Link href="/fruit-content" className="hover:text-gray-700 transition-colors">
              Daftar kontens buah
            </Link>
            <Link href="/courier" className="hover:text-gray-700 transition-colors">
              Menjadi kurir
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Section: Logo + Kategori */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-green-500">Kand</span>
                  <span className="text-green-500">Agro</span>
                </span>
              </Link>

              <button className="flex items-center gap-2 text-gray-900 font-medium text-base hover:text-green-600 transition-colors duration-200">
                <span>Kategori</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Center Section: Search */}
            <div className="flex-1 max-w-3xl mx-12">
              <div className="flex items-center bg-gray-50 rounded-full px-6 py-3 border border-gray-200 hover:border-green-300 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all duration-200">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Cari buah atau hewani di KandAgro"
                  className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 border-none outline-none text-sm"
                />
              </div>
            </div>            {/* Right Section: Icons */}
            <div className="flex items-center gap-6">
              <Link href="/keranjang" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </Link>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <ChevronLeft className="w-4 h-4" />
            Kembali ke beranda
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span>Bagikan produk</span>
          </div>
        </div>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-gray-900">{product.price}</p>
            </div>

            <div className="prose text-gray-600 max-w-none">
              {product.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Supplier Info */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Supplier:</p>
                  <p className="font-medium text-gray-900">{product.supplier}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </Button>
              </div>
            </div>            {/* Shipping Info */}
            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-4">Pengiriman</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>{product.shipping.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{product.shipping.cost}</span>
                </div>
              </div>
                {/* Report Section */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <Link 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors"
                  >
                    Ada masalah dengan produk ini?
                  </Link>
                  <Button 
                    variant="link" 
                    className="text-sm text-red-500 hover:text-red-600 p-0 h-auto transition-colors"
                  >
                    Laporkan
                  </Button>
                </div>
              </div>
            </div>            {/* Action Buttons */}
            <div className="flex gap-3 pt-8">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 px-6 rounded-xl font-medium bg-transparent transition-all duration-200 hover:border-green-700"
              >
                Beli Langsung
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
