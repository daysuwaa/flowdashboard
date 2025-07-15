import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flow",
  description: "Dashboard",
};

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#ececec] flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}