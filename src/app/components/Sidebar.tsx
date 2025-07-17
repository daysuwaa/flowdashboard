"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import logo from "../assets/logo.svg";
import DashboardIcon from "../assets/dashboard.png";
import InvestmentIcon from "../assets/Investment.png";
import LoanIcon from "../assets/loan.png";
import PriviledgeIcon from "../assets/priviledge.png";
import ServicesIcon from "../assets/services.png";
import SettingIcon from "../assets/Settings.png";
import AccountsIcon from "../assets/Account.png";
import CreditCardIcon from "../assets/Credit Card Design.png";
import TransferIcon from "../assets/Transfer.png";
import { Search } from "lucide-react";
import Profile from "../assets/UserIcon.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ProfilePopover from "./ProfilePopover";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [showProfilePopover, setShowProfilePopover] = useState(false);
  const profileButtonRef = useRef<HTMLImageElement>(null);
  const handleProfileClick = () => {
    setShowProfilePopover(true);
  };

  const handleCloseProfilePopover = () => {
    setShowProfilePopover(false);
  };

  const routeToTitleMap: { [key: string]: string } = {
    "/": "Overview",
    "/not-found": "Transactions",
    "/accounts": "Accounts",
    "/investment": "Investment",
    "/credit-cards": "Credit Cards",
    "/loans": "Loans",
    "/services": "Services",
    "/privilege": "My Privilege",
    "/settings": "Settings",
  };

  const pageTitle = routeToTitleMap[pathname] || "Dashboard";

  const sidebarLinks = [
     { label: "Dashboard", href: "/", icon: DashboardIcon },
    { label: "Transactions", href: "/not-found", icon: TransferIcon },
    { label: "Accounts", href: "/accounts", icon: AccountsIcon },
    { label: "Investment", href: "/investment", icon: InvestmentIcon },
    { label: "CreditCards", href: "/credit-cards", icon: CreditCardIcon },
    { label: "Loans", href: "/loans", icon: LoanIcon },
    { label: "Services", href: "/services", icon: ServicesIcon },
    { label: "My Priviledge", href: "/privilege", icon: PriviledgeIcon },
    { label: "Settings", href: "/settings", icon: SettingIcon },
  ];

  const isActive = (href: string) => pathname === href;

  const SidebarContent = () => (
    <nav className="space-y-2  mt-10 ">
      {sidebarLinks.map((link, index) => (
        <Link key={index} href={link.href} onClick={() => setIsOpen(false)}>
          <div
            className={`
              group flex items-center px-4 py-5 rounded-lg transition-all duration-200 cursor-pointer
              ${isActive(link.href)
                ? "text-slate-800"
                : "text-[#b1b1b1] hover:text-slate-800"}
            `}
          >
            <div
              className={`mr-5 transition-transform duration-200${
                isActive(link.href) ? "scale-110" : "group-hover:scale-110"
              }`}
            >
              <Image src={link.icon} alt={link.label} width={25} height={25}  />
            </div>
            <span className="font-medium text-[18px]">{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed w-full z-30 bg-white p-4 shadow-sm">
        {/* Top Row: Menu + Page Title + Profile */}
         <div className="flex justify-between items-center mb-3">
            <button onClick={() => setIsOpen(true)} aria-label="Open navbar">
             <Menu size={24} />
             </button>
             <h1 className="text-lg font-semibold">{pageTitle}</h1>
             <Image src={Profile}  onClick={handleProfileClick} alt="profile" className="rounded-full w-10 h-10 cursor-pointer" />
         </div>

          {/* Search Bar  */}
           <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8BA3CB]" />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="w-full pl-10 rounded-4xl text-[#8BA3CB] placeholder:text-[#8BA3CB] placeholder:text-sm font-normal bg-gray-200 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
           </div>
         </div>
               

      {/* Sidebar for large screens */}
      <div className="hidden fixed left-0 top-0  max-w-sm z-50 lg:block px-9  pt-7 h-screen border border-[#e6eff5] bg-white">
        <div className="flex mx-2.5 mb-12 items-center">
          <Image src={logo} alt="flow-logo" />
          <h1 className="font-bold text-2xl ml-3 text-[#343C6A]">Flow</h1>
        </div>
        <SidebarContent />
      </div>

      {/* Slide-in Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[55%] mx-auto justfify-center  bg-white z-40 transform transition-transform duration-300 shadow-md lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="flow-logo" width={30} height={30} />
            <h1 className="font-bold text-xl text-[#343C6A]">Flow</h1>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close nav">
            <X size={24} className="text-[#343C6A]" />
          </button>
        </div>
        <SidebarContent />
      </div>

      {/* Overlay when mobile sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000030] bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <ProfilePopover 
        isOpen={showProfilePopover}
        onClose={handleCloseProfilePopover}
        anchorEl={profileButtonRef.current}
      />
    </>
  );
};

export default Sidebar;