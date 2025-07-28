import Link from "next/link";

export const contact = "6285106655664";
export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Fruit Supplier</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menghubungkan supplier pada instansi resmi, mengelola dengan
              system management yang efisien dan efektif.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/list"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  List Buah
                </Link>
              </li>
              <li>
                <Link
                  href="/daftar"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Daftar Supplier
                </Link>
              </li>
              <li>
                <Link
                  href="/Pengembang"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Bantuan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/Pengembang"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pengembang
                </Link>
              </li>
              <li>
                <Link
                  href="/panduan"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Panduan Pengguna
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Kontak</h3>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              <div className="break-words">
                Muhammad Chusni Agus, M.Pd., Gr.
              </div>
              <div className="break-words">Malang, Jawa Timur</div>
            </address>
          </div>
        </div>

        <div className="pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Fruit Supplier. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
