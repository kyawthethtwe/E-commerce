import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";
import Providers from "@/services/providers";
import Footer from "@/components/home/footer";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Eco-Friendly Marketplace',
  description: 'Buy and sell preloved items to save the planet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased`}
      >
        <Providers>
        {children}
        <Footer />
        </Providers>
      </body>
    </html> 
  );
}
