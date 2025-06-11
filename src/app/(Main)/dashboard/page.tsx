import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Search,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DaftarBeliCollapsible from "@/components/dashboard/daftarbeli";
import { generateWhatsInformation } from "@/components/dashboard/encodeMessage";
import { contact } from "@/components/landing-page/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white -z-10"></div>

        <div className="absolute inset-0 opacity-5 -z-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                SupFruit
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Fruit Supplier
                <br />
                <span className="text-slate-900">
                  Mempermudah supplier buah
                </span>
              </h1>
              <p className="max-w-[600px] text-lg text-slate-600">
                Menghubungkan supplier pada instansi resmi, mengelola dengan
                system management yang efisien dan efektif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex-1">
                  <DaftarBeliCollapsible className="w-full" />
                </div>
                <div className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 rounded-lg"
                    asChild>
                    <Link href="/auth/signin">Masuk ke Akun</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-4 flex items-center text-sm text-slate-500">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Terverifikasi oleh mentri pertanian
              </div>
            </div>
            <div className="lg:ml-auto relative">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full filter blur-3xl opacity-30"></div>

              <div className="relative">
                <div className="relative w-full aspect-[4/3] mb-6">
                  <img
                    src="/img/illustration3.png"
                    alt="Digital Fruit Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Fitur Utama
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Solusi Lengkap untuk{" "}
              <span className="text-primary">
                Pengelolaan Buah dan Pangan Desa
              </span>
            </h2>
            <p className="max-w-[800px] text-lg text-slate-600">
              Platform yang dirancang untuk memaksimalkan potensi supplier buah
              pada desa desa untuk memvalidasi kesegaran dan kepercayaan
              terhadap produk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
              <div className="rounded-full bg-primary/10 p-4 w-14 h-14 flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Registrasi Buah
              </h3>
              <p className="text-slate-600">
                Daftarkan buah dan produk pangan anda untuk memudahkan dalam
                pengelolaan dan juga pemasaran
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={generateWhatsInformation(contact)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
              <div className="rounded-full bg-primary/10 p-4 w-14 h-14 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Validasi Produk yang didaftarkan
              </h3>
              <p className="text-slate-600">
                Memperkuat kepercayaan pembeli terkait kualitas dan kesegaran
                dari produk
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={generateWhatsInformation(contact)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
              <div className="rounded-full bg-primary/10 p-4 w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Verifikasi Data Supplier
              </h3>
              <p className="text-slate-600">
                Sistem verifikasi data supplier oleh pihak yang terpercaya
                membuat kepercayaan pembeli terhadap penjual
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={generateWhatsInformation(contact)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
              <div className="rounded-full bg-primary/10 p-4 w-14 h-14 flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Pengelolaan Produk yang terverifikasi
              </h3>
              <p className="text-slate-600">
                Menampilkan produk unggulan kami dan mempermudah konsumen
                menemukan produk yang mereka inginkan
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={generateWhatsInformation(contact)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Ekosistem
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Menghubungkan <span className="text-primary">Semua Pihak</span>
            </h2>
            <p className="max-w-[800px] text-lg text-slate-600">
              Platform yang menjembatani kebutuhan Supplier, Konsumen, dan
              Instansi Pemerintah dalam satu ekosistem digital terpadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300">
              <div className="h-2 bg-blue-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500">
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Supplier
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Tingkatkan penjualan</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Dapatkan peluang bisnis</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Dapatkan dukungan teknis</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Dapatkan dukungan keuangan</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Link href="/daftar">Daftar Sekarang</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-500">
                    <path
                      d="M3 21H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 21V7L13 3V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 21V12L13 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9V9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13V13.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 17V17.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Konsumen
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Mempermudah mencari produk</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Mendapatkan penawaran terbaik</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Harga terjangaku</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Kualitas terjamin dan aman</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  <Link href="/list">Cari Produk</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300">
              <div className="h-2 bg-emerald-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500">
                    <path
                      d="M3 10L12 3L21 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 10V20H19V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 20V14H15V20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Instansi Pemerintah
                </h3>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span>Monitoring penjualan</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span>Monitoring pembelian</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span>Verifikasi produk</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span>Menjamin keamanan dan legalitas</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Area Pemerintah
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
              Mulai Sekarang
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Daftarkan buah buah segar anda pada kami
              <span className="block text-primary mt-2">Dari Subfruit</span>
            </h2>
            <p className="text-xl text-slate-500">
              Jadikan buah buah segar anda menjadi buah buah segar terbaik bagi
              para supplier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-4 h-auto shadow-lg shadow-white/5"
                asChild>
                <Link href="/list">
                  <span className="flex items-center">
                    Lihat Daftar Buah
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 hover:text-white hover:bg-slate-800 text-slate-800 text-lg px-8 py-4 h-auto"
                asChild>
                <Link href="/auth/signin">Masuk ke Akun</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
