"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Hide navbar if not on home page
  if (pathname !== "/") {
    return null;
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
        href={"/list"}
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
            href={"/list"}
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
