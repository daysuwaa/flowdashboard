"use client";
import React from 'react';
import Popover from '@mui/material/Popover';
import { User, Settings, LogOut, Bell, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import UserProfile from "../assets/UserIcon.png";

interface ProfilePopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

const ProfilePopover: React.FC<ProfilePopoverProps> = ({ isOpen, onClose, anchorEl }) => {
  const router = useRouter();

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    onClose();
  };

  const handleLogout = () => {
  // Simulate logout process
  console.log('Logging out...')
  onClose();
};

  const menuItems = [
    {
      icon: <User className="w-4 h-4" />,
      label: 'Profile',
      action: () => handleMenuItemClick('/settings?tab=profile')
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: 'Settings',
      action: () => handleMenuItemClick('/settings?tab=profile')
    },
    {
      icon: <Bell className="w-4 h-4" />,
      label: 'Preferences',
      action: () => handleMenuItemClick('/settings?tab=preferences')
    },
    {
      icon: <Lock className="w-4 h-4" />,
      label: 'Security',
      action: () => handleMenuItemClick('/settings?tab=security')
    },
  ];

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        elevation: 8,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 8,
          borderRadius: 2,
          minWidth: 240,
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <div className="p-4">
        {/* User Info Section */}
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-12 h-12 rounded-full  flex items-center justify-center text-white font-semibold">
            <Image src={UserProfile} alt='profile'/> 
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Charlene Reed</h3>
            <p className="text-sm text-gray-600">charleenreed@gmail.com</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item, index) => (
            <button
              
              key={index}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Logout Section */}
        <div className="pt-2 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 rounded-lg transition-colors duration-200 text-red-600 hover:text-red-700"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </Popover>
  );
};

export default ProfilePopover;