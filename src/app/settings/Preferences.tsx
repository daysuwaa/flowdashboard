"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Preferences = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  
  return (
    <div className="lg:p-6 max-w-2xl mx-auto ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Preferences
      </h1>
      
      <div className="bg-white rounded-lg lg:p-6">
        <div className="space-y-4">
          {/* Theme Section */}
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center gap-3">
              <div className="p-2 w-fit lg:w-auto rounded-lg bg-gray-100 dark:bg-gray-100">
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600" />
                )}
              </div>
              <div>
                <h3 className="font-semibold mt-2 lg:mt-0 text-gray-800">
                  Theme
                </h3>
                <p className="text-sm text-gray-600">
                  Currently using {isDarkMode ? "dark" : "light"} mode
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-5 lg:mt-0 mx-auto">
              <Sun 
                className={`w-4 h-4 transition-all duration-500 ease-in-out ${
                  isDarkMode ? 'text-gray-400 scale-90' : 'text-yellow-600 scale-100'
                }`} 
              />
              
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="sr-only"
                />
                <div 
                  onClick={toggleTheme}
                  className={`
                    relative w-12 h-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out
                    ${isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30' 
                      : 'bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner'
                    }
                  `}
                >
                  <div 
                    className={`
                      absolute top-0.5 w-5 h-5 rounded-full transition-all duration-500 ease-in-out
                      transform shadow-lg
                      ${isDarkMode 
                        ? 'translate-x-6 bg-white shadow-blue-500/20' 
                        : 'translate-x-0.5 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-yellow-500/30'
                      }
                    `}
                  >
                    <div className={`
                      w-full h-full rounded-full transition-all duration-500 ease-in-out
                      ${isDarkMode 
                        ? 'bg-gradient-to-br from-slate-100 to-slate-200' 
                        : 'bg-gradient-to-br from-yellow-300 to-yellow-400'
                      }
                    `} />
                  </div>
                </div>
              </div>
              
              <Moon 
                className={`w-4 h-4 transition-all duration-500 ease-in-out ${
                  isDarkMode ? 'text-blue-600 scale-100' : 'text-gray-400 scale-90'
                }`} 
              />
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