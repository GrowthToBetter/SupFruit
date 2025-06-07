"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Fruit Supplier</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Beranda
            </Link>
            <Link
              href="/list"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              List Buah
            </Link>
            <Link
              href="/daftar"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Daftar Sebagai Supplier
            </Link>
            <Link
              href="/Pengembang"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Tentang
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {!session ? (
              <Button variant="outline" asChild>
                <Link href="/auth/signin">Masuk</Link>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        {session.user?.name?.slice(0, 2).toUpperCase() || "PR"}
                      </AvatarFallback>
                    </Avatar>
                    {session.user?.name || "Profil"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>Keluar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bg-background border-b shadow-lg transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none",
          )}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/list"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                List Buah
              </Link>
              <Link
                href="/daftar"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar Sebagai Supplier
              </Link>
              <Link
                href="/Pengembang"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                {!session ? (
                  <Button variant="outline" asChild className="w-full">
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Masuk
                    </Link>
                  </Button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full flex justify-between">
                        <span>{session.user?.name || "Profil"}</span>
                        <Avatar className="ml-2 h-6 w-6">
                          <AvatarFallback>
                            {session.user?.name?.slice(0, 2).toUpperCase() || "PR"}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2">
                      <DropdownMenuItem asChild>
                        <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                          Profil
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          setIsMenuOpen(false);
                          signOut();
                        }}
                      >
                        Keluar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}