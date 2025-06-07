"use client";

import useTheme from "@/theme/ThemeContext";
import { Toaster as ReactToast } from "react-hot-toast";

export const Toaster = () => {
  const { theme } = useTheme();

  return (
    <ReactToast
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        // Default style (used only if not overridden)
        style: {
          background: theme.primaryBgColor,
          border: `2px solid ${theme.themeColor}`,
          color: theme.themeTextColor,
        },
        iconTheme: {
          primary: theme.color1,
          secondary: theme.themeTextColor,
        },

        // ✅ Success toast: color1
        success: {
          style: {
            background: theme.primaryBgColor,
            color: theme.color1,
            border: `2px solid ${theme.color1}`,
          },
          iconTheme: {
            primary: theme.color1,
            secondary: theme.themeTextColor,
          },
        },

        loading: {
          style: {
            background: theme.primaryBgColor,
            color: theme.color3,
            border: `2px solid ${theme.color3}`,
          },
          iconTheme: {
            primary: theme.color3,
            secondary: theme.themeTextColor,
          },
        },

        error: {
          style: {
            background: theme.primaryBgColor,
            color: theme.themeColor,
            border: `1px solid ${theme.themeColor}`,
          },
          iconTheme: {
            primary: theme.themeColor,
            secondary: theme.themeTextColor,
          },
        },
      }}
    />
  );
};
