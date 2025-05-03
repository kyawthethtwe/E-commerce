"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  backTo?: {
    label: string;
    href: string;
  };
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  backTo,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row mx-auto">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-primary p-8 lg:p-12 text-white flex-col ">
          <Link href="/" className="text-2xl 2xl:text-3xl font-bold hover:underline">
            SecondHand
          </Link>
          <div className="relative h-[50%] w-full mt-16">
          <Image
            src="/auth.jpg"
            alt="Authentication illustration"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
          <h2 className="mt-16 text-4xl lg:text-5xl font-bold leading-tight">
            Welcome to Second Hand Marketplace
          </h2> 
          <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-md">
            Join our community of conscious consumers and give pre-loved items a
            second life.
          </p>
      </div>

      {/* Right side - Auth form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="md:hidden mb-10 flex flex-col items-center">
            <Link href="/" className="mb-6">
              <Image
                src="/logo.jpeg"
                alt="SecondHand Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">
              {title}
            </h1>
            <p className="text-gray-600 mt-3 text-base lg:text-lg 2xl:text-xl">
              {subtitle}
            </p>
          </div>

          {children}

          {backTo && (
            <div className="text-center mt-8 text-base lg:text-lg">
              <Link
                href={backTo.href}
                className="text-primary hover:underline font-medium"
              >
                {backTo.label}
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

