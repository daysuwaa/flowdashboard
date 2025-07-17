"use client";

import React, { useState, Suspense } from "react";
import ActiveTabs from "./ActiveTabs";
import EditProfile from "./profile/EditProfile";
import Preferences from "./Preferences";
import Security from "./Security";

const tabs = [
  { label: "Edit profile", value: "profile" },
  { label: "Preferences", value: "preferences" },
  { label: "Security", value: "security" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <EditProfile />;
      case "preferences":
        return <Preferences />;
      case "security":
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <Suspense fallback={<div>Loading tabs...</div>}>
        <ActiveTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Suspense>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Page;