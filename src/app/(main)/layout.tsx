import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Providers from "@/services/providers";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Toaster } from "sonner";
import "../globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Eco-Friendly Marketplace',
  description: 'Buy and sell preloved items to save the planet',
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Toaster position="top-right" richColors />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}