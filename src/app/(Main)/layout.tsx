"use client";

import Navbar from "@/components/new-lp/navbar";
import Footer from "@/components/new-lp/footer";
import AuthProvider from "@/components/providers/session-provider";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/providers/smoothscroll-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <AuthProvider>
        <Navbar />
        <SmoothScroll>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster />
      </AuthProvider>
    </div>
  );
}
