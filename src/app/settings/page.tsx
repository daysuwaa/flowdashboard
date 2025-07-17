"use client";

import React, { useState } from "react";
import ActuveTabs from "./ActiveTabs";
import EditProfile from "./profile/EditProfile";
import Preferences from "./Preferences";
import Security from "./Security";

const tabs = [
  { label: "Edit profile", value: "profile" },
  { label: "Preferences ", value: "preferences" },
  { label: "Security", value: "security" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <EditProfile/>;
      case "preferences":
        return <Preferences/>
      case "security":
        return <Security/>
      default:
        return null;
    }
  };

  return (
    <div className="bg-white  rounded-lg  p-6">
      <ActuveTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Page;