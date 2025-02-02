import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const Tabs = () => {
  const location = useLocation();
  const tabs = [
    "All",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];
  const [activeTab, setActiveTab] = useState("All");
  const tabRefs = useRef({}); // Store refs for each tab

  useEffect(() => {
    const currentTab = location.pathname.split("/")[1].toLowerCase();
    setActiveTab(
      tabs.some((tab) => tab.toLowerCase() === currentTab) ? currentTab : "all"
    );

    // Scroll the active tab into view
    if (tabRefs.current[currentTab]) {
      tabRefs.current[currentTab].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [location]);

  return (
    <div className="flex overflow-x-auto whitespace-nowrap ps-4 md:ps-28 text-[#e8eaed] space-x-6 border-b border-gray-700 scrollbar-hide">
      {tabs.map((tab) => (
        <Link
          key={tab}
          to={`/${tab.toLowerCase()}`}
          ref={(el) => (tabRefs.current[tab.toLowerCase()] = el)}
          className={`pb-2 p-3 md:hover:-translate-y-2 duration-200 text-sm font-medium ${
            activeTab === tab.toLowerCase() ? "border-b-2" : "text-gray-500"
          }`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
};
