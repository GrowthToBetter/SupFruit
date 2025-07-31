"use client";

import { ShoppingCart, Menu, X, ChevronDown, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

// Export menuItems agar bisa digunakan di component lain
export const menuItems = [
  { href: "#", label: "Beranda", section: "beranda" },
  { href: "#features", label: "Fitur Utama", section: "features" },
  { href: "#ecosystem", label: "Ekosistem", section: "ecosystem" },
  { href: "#contact", label: "Kontak", section: "contact" },
];

const categories = [
  "Semua Kategori",
  "Buah Citrus",
  "Buah Tropis",
  "Buah Musiman",
  "Buah Import",
  "Buah Organik",
  "Sayuran",
  "Rempah-rempah",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // Function untuk smooth scroll ke section
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu after click

    if (href === "#") {
      // Scroll ke top untuk "Beranda"
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll ke section yang dituju
      const targetElement = document.querySelector(href) as HTMLElement;
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // 80px offset untuk navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Deteksi section yang sedang aktif
      const sections = ["beranda", "features", "ecosystem", "contact"];
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section dianggap aktif jika berada di viewport bagian atas
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Jika tidak ada section yang terdeteksi dan scroll masih di atas, set beranda sebagai aktif
      if (!currentSection && scrollTop < 200) {
        currentSection = "beranda";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        categoryOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen, categoryOpen]);

  // Hide navbar if not on home page - RESPONSIVE VERSION
  if (pathname !== "/") {
    return (
      <nav className="sticky top-0 w-full z-50 mb-64">
        <div className="bg-white border-b border-gray-200 py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-end space-x-6 text-sm text-gray-500">
              <Link
                href="/about"
                className="hover:text-gray-700 transition-colors"
              >
                Tentang KandAgro
              </Link>
              <Link
                href="/start-selling"
                className="hover:text-gray-700 transition-colors"
              >
                Mulai berjualan
              </Link>
              <Link
                href="/fruit-content"
                className="hover:text-gray-700 transition-colors"
              >
                Daftar kontens buah
              </Link>
              <Link
                href="/courier"
                className="hover:text-gray-700 transition-colors"
              >
                Menjadi kurir
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header - Responsive */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Left Section: Logo + Kategori (Desktop) */}
              <div className="flex items-center gap-2 md:gap-8">
                <Link href="/" className="flex items-center">
                  <span className="text-xl md:text-2xl font-bold">
                    <span className="text-green-500">Kand</span>
                    <span className="text-green-500">Agro</span>
                  </span>
                </Link>

                {/* Desktop Category Dropdown */}
                <div className="relative hidden lg:block" ref={dropdownRef}>
                  <button
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="flex items-center gap-2 text-gray-900 font-medium text-base hover:text-green-600 transition-colors duration-200"
                  >
                    <span>Kategori</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        categoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {categoryOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCategoryOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 text-sm ${
                            selectedCategory === category
                              ? "bg-green-50 text-green-600 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Center Section: Search (Desktop only) */}
              <div className="hidden lg:flex flex-1 max-w-3xl mx-12">
                <div className="flex items-center bg-gray-50 rounded-full px-6 py-3 border border-gray-200 hover:border-green-300 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all duration-200 w-full">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Cari buah atau hewani di KandAgro"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 border-none outline-none text-sm"
                  />
                </div>
              </div>

              {/* Right Section: Icons */}
              <div className="flex items-center gap-2 md:gap-6">
                {/* Mobile Search Button */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors p-2"
                  title="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Shopping Cart */}
                <button
                  title="Shopping Cart"
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                >
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* User */}
                <button
                  title="User Profile"
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                >
                  <User className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 mobile-menu-container"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="lg:hidden pb-4 px-2 animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-3 border border-gray-200 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all duration-200">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Cari buah atau hewani di KandAgro"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 border-none outline-none text-sm"
                    autoFocus
                  />
                  <button
                    title="Button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out mobile-menu-container ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Category Section */}
              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium text-base hover:text-green-600 transition-colors duration-200"
                >
                  <span>Kategori: {selectedCategory}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Category Dropdown */}
                {categoryOpen && (
                  <div className="mt-3 space-y-1 pl-4 animate-in slide-in-from-top-2 duration-200">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-150 text-sm ${
                          selectedCategory === category
                            ? "bg-green-50 text-green-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Top Links */}
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tentang KandAgro
                </Link>
                <Link
                  href="/start-selling"
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mulai berjualan
                </Link>
                <Link
                  href="/fruit-content"
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Daftar kontens buah
                </Link>
                <Link
                  href="/courier"
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menjadi kurir
                </Link>
              </div>
            </div>
          </div>
        </header>
      </nav>
    );
  }

  return (
    <nav
      className={`w-full h-16 md:h-20 px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center fixed top-0 z-50 text-white transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold">KandAgro</h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 xl:gap-24 text-lg xl:text-xl font-extralight">
        {menuItems.map((item) => (
          <li key={item.section} className="relative">
            <Link
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`transition-all duration-300 ease-in-out relative outline-none ${
                activeSection === item.section
                  ? "text-green-400 font-normal"
                  : "text-white hover:text-green-300"
              }`}
            >
              {item.label}
              {/* Underline animation */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ease-in-out ${
                  activeSection === item.section
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <Link
        href={"/toko"}
        className="hidden md:flex gap-2 lg:gap-3 text-base lg:text-xl hover:text-green-300 transition-colors duration-300 items-center"
      >
        <ShoppingCart size={20} />
        <span className="hidden lg:inline">Buka Toko</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 "
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 md:top-20 right-0 h-screen w-64 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col p-6 gap-6">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.section}>
                <Link
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.section
                      ? "text-green-400 bg-green-400/10 font-normal"
                      : "text-white hover:text-green-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <Link
            href={"/toko"}
            className="flex items-center gap-3 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingCart size={20} />
            Buka Toko
          </Link>
        </div>
      </div>
    </nav>
  );
}
