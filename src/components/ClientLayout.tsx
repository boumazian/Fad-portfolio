"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}