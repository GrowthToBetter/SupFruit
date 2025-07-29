"use client"

import { ChevronDown, ChevronLeft, ChevronRight, Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    id: 1,
    name: "Lemon California",
    price: "Rp15.000 / kg",
    supplier: "Ryo Haryanto Anggayni",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Jeruk Manis",
    price: "Rp12.000 / kg",
    supplier: "Sari Buah Nusantara",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Apel Fuji",
    price: "Rp25.000 / kg",
    supplier: "Kebun Apel Malang",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Pisang Cavendish",
    price: "Rp8.000 / kg",
    supplier: "Petani Lokal Jawa",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Mangga Harum Manis",
    price: "Rp20.000 / kg",
    supplier: "Kebun Mangga Indramayu",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Strawberry Organik",
    price: "Rp35.000 / kg",
    supplier: "Tani Organik Lembang",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Anggur Hijau",
    price: "Rp45.000 / kg",
    supplier: "Import Fresh Fruit",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Nanas Madu",
    price: "Rp18.000 / kg",
    supplier: "Petani Lampung",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 9,
    name: "Pepaya California",
    price: "Rp10.000 / kg",
    supplier: "Tani Muda Indonesia",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 10,
    name: "Kiwi Import",
    price: "Rp55.000 / kg",
    supplier: "Premium Fruit Store",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&h=200&fit=crop&crop=center",
  },
]

const animalProducts = [
  {
    id: 1,
    name: "Ayam Kampung",
    price: "Rp35.000 / kg",
    supplier: "Peternakan Sari Ayam",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Telur Ayam Kampung",
    price: "Rp25.000 / kg",
    supplier: "Farm Fresh Eggs",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Ikan Lele",
    price: "Rp18.000 / kg",
    supplier: "Kolam Lele Jaya",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Daging Sapi",
    price: "Rp120.000 / kg",
    supplier: "Peternakan Maju Jaya",
    image: "https://images.unsplash.com/photo-1588347818483-7bc538c4b011?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Susu Sapi Segar",
    price: "Rp15.000 / liter",
    supplier: "Peternakan Sumber Rejeki",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Ikan Nila",
    price: "Rp22.000 / kg",
    supplier: "Tambak Nila Sejahtera",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Kambing",
    price: "Rp85.000 / kg",
    supplier: "Peternakan Kambing Bogor",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Udang Vaname",
    price: "Rp65.000 / kg",
    supplier: "Tambak Udang Modern",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=200&h=200&fit=crop&crop=center",
  },
]

const viralProducts = [
  {
    id: 1,
    name: "Alpukat Mentega Viral",
    price: "Rp45.000 / kg",
    supplier: "Kebun Alpukat Premium",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 2,
    name: "Durian Musang King",
    price: "Rp150.000 / kg",
    supplier: "Durian Sultan",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 3,
    name: "Buah Naga Merah Super",
    price: "Rp28.000 / kg",
    supplier: "Dragon Fruit Paradise",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 4,
    name: "Rambutan Binjai",
    price: "Rp15.000 / kg",
    supplier: "Kebun Rambutan Viral",
    image: "https://images.unsplash.com/photo-1595475038665-8ad8e6043e8c?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 5,
    name: "Kelengkeng Diamond River",
    price: "Rp75.000 / kg",
    supplier: "Premium Exotic Fruits",
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 6,
    name: "Manggis Super",
    price: "Rp40.000 / kg",
    supplier: "Queen of Fruits",
    image: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=200&h=200&fit=crop&crop=center",
    trending: true,
  },
]

const categories = [
  "Semua Kategori",
  "Buah Citrus",
  "Buah Tropis",
  "Buah Musiman",
  "Buah Import",
  "Buah Organik",
  "Sayuran",
  "Rempah-rempah",
]

const sliderData = [
  {
    id: 1,
    title: "Promo Buah Segar Hari Ini",
    subtitle: "Diskon hingga 30% untuk semua buah pilihan",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "Buah Import Premium",
    subtitle: "Kualitas terbaik langsung dari petani",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-orange-400 to-red-500",
  },
  {
    id: 3,
    title: "Organik & Berkualitas",
    subtitle: "100% organik tanpa pestisida berbahaya",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=300&fit=crop&crop=center",
    backgroundColor: "from-purple-400 to-pink-500",
  },
]

export default function Component() {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori")
  const [currentSlide, setCurrentSlide] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoryOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

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

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center gap-2 text-gray-900 font-medium text-base hover:text-green-600 transition-colors duration-200"
                >
                  <span>Kategori</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCategory(category)
                          setCategoryOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 text-sm ${
                          selectedCategory === category ? "bg-green-50 text-green-600 font-medium" : "text-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Section */}
        <div className="relative mb-12">
          <div className="relative rounded-xl h-64 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={sliderData[currentSlide].image || "/placeholder.svg"}
                alt={sliderData[currentSlide].title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${sliderData[currentSlide].backgroundColor} opacity-80`}
              ></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{sliderData[currentSlide].title}</h1>
                <p className="text-lg opacity-90">{sliderData[currentSlide].subtitle}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produk Buah-buahan</h2>
            <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
              Lihat semua
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">            {products.map((product) => (
              <Link
                key={product.id}
                href={`/toko/produk/${product.id}`}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{product.price}</p>
                  <p className="text-xs text-green-600">{product.supplier}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Animal Products Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produk Hewani</h2>
            <Link href="/animal-products" className="text-green-600 hover:text-green-700 font-medium">
              Lihat semua
            </Link>
          </div>

          {/* Animal Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {animalProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{product.price}</p>
                  <p className="text-xs text-green-600">{product.supplier}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Viral Products Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produk Viral</h2>
            <Link href="/viral-products" className="text-green-600 hover:text-green-700 font-medium">
              Lihat semua
            </Link>
          </div>

          {/* Viral Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {viralProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 relative"
              >
                {/* Trending Badge */}
                {product.trending && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium z-10">
                    🔥 Viral
                  </div>
                )}
                <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{product.price}</p>
                  <p className="text-xs text-green-600">{product.supplier}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 flex items-center gap-2">
            <span>Muat Lebih Banyak</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  )
}
