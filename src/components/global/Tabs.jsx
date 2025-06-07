"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Tabs = () => {
  const pathname = usePathname();
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
    const currentTab = pathname.split("/")[1].toLowerCase();
    setActiveTab(
      tabs.some((tab) => tab.toLowerCase() === currentTab) ? currentTab : "all"
    );

    if (tabRefs.current[currentTab]) {
      tabRefs.current[currentTab].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [pathname]);

  return (
    <div className="flex overflow-x-auto whitespace-nowrap ps-4 md:ps-28 text-[#e8eaed] space-x-6 border-b border-gray-700 scrollbar-hide">
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={`/${tab.toLowerCase()}`}
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
