"use client"

import { ChevronDown, Search, ShoppingCart, Trash2, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CartItem {
  id: number
  name: string
  price: string
  unit: string
  supplier: string
  image: string
  iconType: string
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Lemon California",
    price: "Rp10.000",
    unit: "Kg",
    supplier: "Ryo Hariyono Angwyn",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&crop=center",
    iconType: "fruit",
  },
  {
    id: 2,
    name: "Ikan Lele",
    price: "Rp100.000",
    unit: "Ekor",
    supplier: "Ryo Hariyono Angwyn",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=200&h=200&fit=crop&crop=center",
    iconType: "fish",
  },
  {
    id: 3,
    name: "Nama produk",
    price: "Harga",
    unit: "",
    supplier: "Ryo Hariyono Angwyn",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&crop=center",
    iconType: "product",
  },
  {
    id: 4,
    name: "CPU",
    price: "Rp10.000",
    unit: "Kg",
    supplier: "Fahrell and haza",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop&crop=center",
    iconType: "product",
  },
  {
    id: 5,
    name: "LCD",
    price: "Rp100.000",
    unit: "Ekor",
    supplier: "Fahrell and haza",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop&crop=center",
    iconType: "tech",
  },
  {
    id: 6,
    name: "TUF Gaming",
    price: "Harga",
    unit: "",
    supplier: "Fahrell and haza",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop&crop=center",
    iconType: "product",
  },
]

// Minimalist icon component
const MinimalistIcon = ({ type }: { type: string }) => {
  const iconClass = "w-5 h-5 text-gray-400"

  switch (type) {
    case "fruit":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path d="M12 6v12" strokeWidth="1.5" />
          <path d="M6 12h12" strokeWidth="1.5" />
        </svg>
      )
    case "fish":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="4" strokeWidth="1.5" />
          <path d="M3 12h18" strokeWidth="1.5" />
        </svg>
      )
    case "tech":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
          <path d="M9 9h6v6H9z" strokeWidth="1.5" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path d="M12 8v8" strokeWidth="1.5" />
          <path d="M8 12h8" strokeWidth="1.5" />
        </svg>
      )
  }
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  // Group items by supplier
  const groupedItems = cartItems.reduce(
    (acc, item) => {
      if (!acc[item.supplier]) {
        acc[item.supplier] = []
      }
      acc[item.supplier].push(item)
      return acc
    },
    {} as Record<string, CartItem[]>,
  )

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
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
            </div>

            {/* Right Section: Icons */}
            <div className="flex items-center gap-6">
              <Link href="/cart" className="text-green-600 hover:text-green-700 transition-colors relative">
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-green-500">Keranjang Anda </span>
            {/* <span className="text-blue-500">Anda</span> */}
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-gray-500 mb-2">Keranjang Anda kosong</h2>
            <p className="text-gray-400 mb-6">Mulai berbelanja untuk menambahkan produk ke keranjang</p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Mulai Berbelanja</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {Object.entries(groupedItems).map(([supplier, items]) => (
                <div key={supplier} className="border border-gray-200 rounded-lg bg-white p-6">
                  {/* Supplier Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900 text-base">{supplier}</span>
                  </div>

                  {/* Supplier Items */}
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center gap-4">
                          {/* Minimalist Product Icon */}
                          <div className="flex-shrink-0">
                            <MinimalistIcon type={item.iconType} />
                          </div>

                          {/* Product Image */}
                          <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 text-sm mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.price}
                              {item.unit && ` / ${item.unit}`}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Divider between items (except last item) */}
                        {index < items.length - 1 && <div className="border-b border-gray-100 mt-4"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link href="/">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Kembali beranda
                </button>
              </Link>
              <button
                onClick={clearCart}
                className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors bg-white"
              >
                Bersihkan keranjang
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
