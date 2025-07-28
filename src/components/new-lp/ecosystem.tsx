import React from "react";
import { Building, ShoppingBasket, User } from "lucide-react";

const ecosystemData = [
  {
    id: 1,
    icon: User,
    title: "Supplier",
    bgColor: "bg-neutral-1/20",
    iconColor: "text-neutral-1",
    titleColor: "text-neutral-1",
    benefits: [
      "Tingkatkan penjualan",
      "Dapatkan dukungan teknis",
      "Dapatkan peluang bisnis",
      "Dapatkan dukungan keuangan",
    ],
  },
  {
    id: 2,
    icon: ShoppingBasket,
    title: "Konsumen",
    bgColor: "bg-neutral-4/20",
    iconColor: "text-neutral-4",
    titleColor: "text-neutral-4",
    benefits: [
      "Harga terjangkau",
      "Mempermudah mencari produk",
      "Kualitas terjamin dan aman",
      "Mendapatkan penawaran terbaik",
    ],
  },
  {
    id: 3,
    icon: Building,
    title: "Instansi Pemerintah",
    bgColor: "bg-neutral-2/20",
    iconColor: "text-neutral-2",
    titleColor: "text-neutral-2",
    benefits: [
      "Monitoring penjualan",
      "Verifikasi produk",
      "Monitoring pembelian",
      "Menjamin keamanan dan legalitas",
    ],
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="min-h-screen bg-gray-100/50 flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-24 py-12 lg:py-0 lg:items-center justify-between mb-12 sm:mb-16 lg:mb-24 gap-8 lg:gap-0"
    >
      {/* Left side - Title */}
      <div className="w-full lg:max-w-4xl lg:pr-8">
        <p className="text-primary text-sm sm:text-base mb-2 sm:mb-4">
          EKOSISTEM KAMI
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
          Menghubungkan semua pihak dalam satu ekosistem digital terpadu.
        </h1>
      </div>

      {/* Right side - Ecosystem cards */}
      <div className="w-full lg:w-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">
        {ecosystemData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div key={item.id} className="w-full">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                {/* Header with icon and title */}
                <div className="flex gap-3 sm:gap-4 items-center group cursor-pointer">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full ${item.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg flex-shrink-0`}
                  >
                    <IconComponent
                      className={`${item.iconColor} w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:rotate-6`}
                    />
                  </div>
                  <h2
                    className={`${item.titleColor} text-lg sm:text-xl lg:text-2xl font-semibold transition-colors duration-300 group-hover:brightness-110`}
                  >
                    {item.title}
                  </h2>
                </div>

                {/* Benefits list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className="transition-all duration-300 hover:scale-105 hover:text-primary cursor-default p-1 rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider (not for last item) */}
              {index < ecosystemData.length - 1 && (
                <div className="border-t border-black/60 mt-6 sm:mt-8 lg:mt-12" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
