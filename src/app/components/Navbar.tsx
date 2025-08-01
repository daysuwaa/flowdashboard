"use client";

import { Search } from "lucide-react";
import React, { useState, useRef } from "react";
import SettingsIcon from "../assets/Settings__Nav.png";
import NotificationsIcon from "../assets/Notification.png";
import Profile from "../assets/UserProfile.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NotificationModal from "./NotificationModal";
import { useRouter } from "next/navigation";
import ProfilePopover from "./ProfilePopover";

const Navbar = () => {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfilePopover, setShowProfilePopover] = useState(false);
  const profileButtonRef = useRef<HTMLImageElement>(null);
  const route = useRouter();

  const routeToTitleMap: { [key: string]: string } = {
    "/": "Overview",
    "/transactions": "Transactions",
    "/accounts": "Accounts",
    "/investment": "Investment",
    "/credit-cards": "Credit Cards",
    "/loans": "Loans",
    "/services": "Services",
    "/privilege": "My Privilege",
    "/settings": "Settings",
  };

  const pageTitle = routeToTitleMap[pathname] || "Dashboard";

  const handleProfileClick = () => {
    setShowProfilePopover(true);
  };

  const handleCloseProfilePopover = () => {
    setShowProfilePopover(false);
  };

  return (
    <>
      <div className="hidden lg:flex justify-between items-center bg-white px-6 py-3">
        <h1 className="lg:text-[28px] font-semibold text-center text-[#343C6A]">
          {pageTitle}
        </h1>
        <div className="flex items-center">
          <div className="relative mr-5">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8BA3CB]" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-3xs pl-10 rounded-4xl text-[#8BA3CB] placeholder:text-[#8BA3CB] placeholder:text-sm font-normal bg-gray-200 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Image
            onClick={() => route.push('/settings')}
            src={SettingsIcon}
            alt="settings_icon"
            className="bg-gray-200 p-2 cursor-pointer rounded-full w-10 h-10 mr-5 hover:bg-gray-300 transition-colors"
          />
          <Image
            onClick={() => setShowNotifications(true)}
            src={NotificationsIcon}
            alt="notifications_icon"
            className="bg-gray-200 p-2 rounded-full w-10 h-10 mr-5 cursor-pointer hover:bg-gray-300 transition-colors"
          />
          <Image
            ref={profileButtonRef}
            onClick={handleProfileClick}
            src={Profile}
            alt="profile"
            className="rounded-full w-[60px] h-[60px] mr-5 cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
          />
        </div>
      </div>

      {/* Notification Modal */}
      <NotificationModal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
      
      {/* Profile Popover */}
      <ProfilePopover 
        isOpen={showProfilePopover}
        onClose={handleCloseProfilePopover}
        anchorEl={profileButtonRef.current}
      />
    </>
  );
};

export default Navbar;