"use client";

import React from "react";
import Link from "next/link";

// Mock menuItems for demonstration
const menuItems = [
  { section: "home", href: "#home", label: "Beranda" },
  { section: "about", href: "#about", label: "Tentang" },
  { section: "services", href: "#services", label: "Layanan" },
  { section: "contact", href: "#contact", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 lg:py-12 bg-[#1E1E1E] flex flex-col justify-between gap-12 sm:gap-16 lg:gap-20">
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1 max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold">KandAgro</h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Menghubungkan supplier pada instansi resmi, mengelola dengan system
            management yang efisien dan efektif.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl font-bold">Navigasi</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.section}>
                <Link
                  href={item.href}
                  className="text-white text-sm sm:text-base hover:text-gray-400 transition-colors duration-200 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl font-bold">Bantuan</h2>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-white text-sm sm:text-base hover:text-gray-400 transition-colors duration-200 inline-block"
                href={"#"}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm sm:text-base hover:text-gray-400 transition-colors duration-200 inline-block"
                href={"#"}
              >
                Pengembang
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm sm:text-base hover:text-gray-400 transition-colors duration-200 inline-block"
                href={"#"}
              >
                Panduan Pengguna
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold">Kontak</h2>
          <Link
            href={"https://wa.me/6285106655664"}
            className="text-white text-sm sm:text-base hover:text-gray-400 transition-colors duration-200 leading-relaxed"
          >
            Muhammad Chusni Agus, M.Pd., Gr.
            <br className="hidden sm:inline" />
            <span className="sm:block">Malang, Jawa Timur</span>
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20 pt-6 sm:pt-8">
        <p className="text-white text-xs sm:text-sm text-center sm:text-left">
          © 2025 Fruit Supplier. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
