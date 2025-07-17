"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";
import { Sun, Moon } from "lucide-react";

const Preferences = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  
  return (
    <div className="lg:p-6 max-w-2xl mx-auto ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Preferences
      </h1>
      
      <div className="bg-white  rounded-lg  lg:p-6">
        <div className="space-y-4">
          {/* Theme Section */}
          <div className="lg:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-100">
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 ">
                  Theme
                </h3>
                <p className="text-sm text-gray-600 ">
                  Currently using {isDarkMode ? "dark" : "light"} mode
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-yellow-600" />
              <Switch 
                checked={isDarkMode}
                onChange={toggleTheme}
                color="primary"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#3b82f6',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#3b82f6',
                  },
                }}
              />
              <Moon className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Switch between light and dark themes to match your preference or system setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;