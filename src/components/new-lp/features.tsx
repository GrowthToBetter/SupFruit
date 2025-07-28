import React from "react";
import { Briefcase, Shield, UserCheck, Package } from "lucide-react";
import Link from "next/link";

const featuresData = [
  {
    id: 1,
    icon: Briefcase,
    title: "Registrasi Buah",
    description:
      "Daftarkan buah dan produk pangan anda untuk memudahkan dalam pengelolaan dan juga pemasaran",
  },
  {
    id: 2,
    icon: Shield,
    title: "Validasi Produk yang didaftarkan",
    description:
      "Memperkuat kepercayaan pembeli terkait kualitas dan kesegaran dari produk",
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Verifikasi Data Supplier",
    description:
      "Sistem verifikasi data supplier oleh pihak yang terpercaya membuat kepercayaan pembeli terhadap penjual",
  },
  {
    id: 4,
    icon: Package,
    title: "Pengelolaan Produk yang terverifikasi",
    description:
      "Menampilkan produk unggulan kami dan mempermudah konsumen menemukan produk yang mereka inginkan",
  },
];

export default function Features() {
  return (
    <section
      className="bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-20 sm:my-28 md:my-32 lg:my-40 items-center flex flex-col gap-8 sm:gap-12 md:gap-16"
      id="features"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 md:gap-6 text-center px-4">
        <h2 className="text-lg sm:text-xl text-primary">Fitur Utama</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
          Solusi Lengkap untuk Pengelolaan{" "}
          <span className="text-primary">
            Buah, Sayur Mayur, dan Hewani Desa
          </span>
        </h1>
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center text-base sm:text-lg leading-relaxed">
          Platform yang dirancang untuk memaksimalkan potensi supplier buah pada
          desa-desa untuk memvalidasi kesegaran dan kepercayaan terhadap produk
        </p>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-8 md:px-16 lg:px-20">
        {featuresData.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 border border-gray-200 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon */}
              <div className="p-3 sm:p-4 rounded-full bg-primary/10 w-fit">
                <IconComponent className="text-xl sm:text-2xl text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                  {feature.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <Link
        href="/list"
        className="rounded-full px-6 sm:px-8 py-3 sm:py-4 outline outline-primary text-primary flex gap-2 hover:bg-primary hover:text-white hover:outline-none duration-200 hover:scale-105 transform transition-all text-sm sm:text-base font-medium"
      >
        Cek Bisnis Kami
      </Link>
    </section>
  );
}
