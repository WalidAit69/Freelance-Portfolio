import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import MobileNav from "@/components/main/MobileNav";
import { Toaster } from "react-hot-toast";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walid Ait Harma",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={"/universe.png"} type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster />

        <Cursor />

        <StarsCanvas />
        <Navbar />
        <MobileNav />

        {children}
      </body>
    </html>
  );
}
