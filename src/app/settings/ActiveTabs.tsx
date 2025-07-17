"use client";

import React from "react";

type Tab = {
  label: string;
  value: string;
};

type ActiveTabsProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ActiveTabs: React.FC<ActiveTabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b  border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`lg:mr-[5.5rem] cursor-pointer mr-5 pb-3 text-sm font-medium transition-all duration-200 ${
            activeTab === tab.value
              ? "text-[#2c2c2c] border-b-2 border-[#2c2c2c]"
              : "text-gray-500 hover:text-[#718EBF]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ActiveTabs;