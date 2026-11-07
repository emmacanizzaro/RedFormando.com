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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://redformando.com",
  ),
  title: "RedFormando | Familia Ministerial",
  description:
    "Somos una Red, estamos en permanente Formación y creemos en una profunda Reforma en el Cuerpo de Cristo.",
  openGraph: {
    type: "website",
    locale: "es_LA",
    siteName: "RedFormando",
    images: [
      {
        url: "/cielo-nuevo-tierra-nueva.png",
        width: 1695,
        height: 768,
        alt: "RedFormando | Familia Ministerial",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="site-content">{children}</div>
        <Footer />
        <CartWidget />
      </body>
    </html>
  );
}
