import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1E1E1E] flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 justify-center items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9"
      id="contact"
    >
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#9900DDEE] via-[#FFB300] to-[#CDDC39] bg-clip-text text-transparent leading-tight text-center">
        Dari KandAgro
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center max-w-4xl leading-relaxed px-2">
        Jadikan buah buah segar anda menjadi buah buah segar terbaik bagi para
        supplier
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <Link
          href={"/list"}
          className="rounded-full px-4 sm:px-6 py-3 sm:py-3 outline outline-white text-white flex justify-center items-center gap-2 hover:bg-white hover:text-black hover:outline-none duration-200 hover:scale-105 transform transition-all hover:shadow-lg text-sm sm:text-base whitespace-nowrap"
        >
          Lihat Daftar Buah
        </Link>
        <Link
          href={"/login"}
          className="rounded-full px-4 sm:px-6 py-3 sm:py-3 outline outline-white text-white flex justify-center items-center gap-2 hover:bg-white hover:text-black hover:outline-none duration-200 hover:scale-105 transform transition-all hover:shadow-lg text-sm sm:text-base whitespace-nowrap"
        >
          Masuk ke Akun
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24" />
    </section>
  );
}
