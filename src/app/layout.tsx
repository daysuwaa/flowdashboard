import type { Metadata } from "next";
import "./globals.css";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import './globals.css'
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Flow",
  description: "Dashboard",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#ececec] ">
        <ThemeProvider>
        <div className="flex">
          <Sidebar />
        
          <div className="flex-1 min-h-screen">
            <Navbar /> 
            <main className="p-5 lg:p-7 mt-[130px] lg:ml-[250px]  lg:mt-0">{children}</main>
          </div>
        </div>
        <Toaster position="top-right"/>
        </ThemeProvider>
      </body>
    </html>
  );
}