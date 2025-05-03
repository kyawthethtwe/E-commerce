import Providers from "@/services/providers";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Toaster } from "sonner";
import "../../globals.css"
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'SecondHand - Authentication',
  description: 'Sign in or create an account for SecondHand marketplace',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        <Providers>
          {children}
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}