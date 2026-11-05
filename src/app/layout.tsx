import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CartWidget from "@/components/CartWidget";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RedFormando | Familia Ministerial",
  description: "Formación para una iglesia en movimiento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <CartWidget />
      </body>
    </html>
  );
}
