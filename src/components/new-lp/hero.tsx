"use client";

import { CheckCircle, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="justify-center relative" id="#">
      <Image
        src="/img/illustration4.jpg"
        alt="Description of the image"
        fill
        className="absolute object-cover -z-10 brightness-50"
      />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col justify-center h-screen text-white gap-3 sm:gap-4 md:gap-5">
        <div className="max-w-full lg:max-w-1/3 flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            KandAgro
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Mempermudah supplier sayur, buah dan hewani
          </p>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Menghubungkan supplier pada instansi resmi, mengelola dengan system
          management yang efisien dan efektif.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-9">
          <div className="relative">
            <button
              className="w-full sm:w-auto rounded-full px-4 py-3 bg-white text-black flex gap-2 justify-center sm:justify-start hover:brightness-90 duration-200 hover:scale-105 transform transition-all"
              onClick={handleOpen}
            >
              Daftar atau Beli Sekarang{" "}
              <ChevronDown
                className={`${
                  open ? "rotate-180" : ""
                } duration-300 ease-in-out transform`}
              />
            </button>

            {/* Dropdown dengan animasi */}
            <div
              className={`
            left-0 right-0 sm:right-auto sm:min-w-full z-10
              flex flex-col text-md mt-2 gap-2 overflow-hidden transition-all duration-300 ease-in-out transform origin-top
              ${
                open
                  ? "max-h-40 opacity-100 scale-y-100 translate-y-0"
                  : "max-h-0 opacity-0 scale-y-95 -translate-y-2"
              }
            `}
            >
              <Link
                href="/daftar"
                className="text-black bg-white px-4 py-3 rounded-full flex justify-between hover:bg-gray-100 transform transition-all duration-200 hover:shadow-lg"
              >
                Daftar Sebagai Supplier{" "}
                <ChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/toko"
                className="text-black bg-white px-4 py-3 rounded-full flex justify-between hover:bg-gray-100 transform transition-all duration-200 hover:shadow-lg"
              >
                Beli Buah Sekarang{" "}
                <ChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <Link
            href={"/auth/signin"}
            className="w-full sm:w-auto rounded-full px-4 py-3 outline outline-white text-white flex gap-2 justify-center sm:justify-start hover:bg-white h-fit hover:text-black hover:outline-none duration-200 hover:scale-105 transform transition-all hover:shadow-lg"
          >
            Masuk ke Akun
          </Link>
        </div>
        <div className="p-2 gap-2 flex items-center">
          <CheckCircle className="animate-pulse" />
          <h1 className="text-sm sm:text-base">
            Terverifikasi oleh mentri pertanian
          </h1>
        </div>
      </div>
    </section>
  );
}
