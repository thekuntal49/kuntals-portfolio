"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaNewspaper, FaEnvelope } from "react-icons/fa";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  // const homeMenu = [
  //   { name: "Home", icon: <FaHome size={24} />, link: ROUTES.HOME },
  //   {
  //     name: "About",
  //     icon: <FaInfoCircle size={24} />,
  //     link: ROUTES.ABOUT,
  //   },
  //   { name: "Categories", icon: <FaNewspaper size={24} />, link: "#category" },
  // ];

  const theme = {
    primaryBgColor: "#1a1a1a",
    secondaryBgColor: "#1a252e",
    primaryTextColor: "#f5f5f5",
    secondaryTextColor: "#9f9fa9",
    primaryButton: "#e36d1a",
    secondaryButton: "#ff9900",
    inputBgColor: "#333333",
    borderColor: "#444444",
    skeletonColor: "#554433",

    // constant for both mode
    themeColor: "#e36d1a",
    themeTextColor: "#ffffff",
    color1: "#00c951",
    color2: "#ff6900",
    color3: "#2b7fff",
    color4: "#6610f2",
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export default useTheme;
