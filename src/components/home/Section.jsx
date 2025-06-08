"use client";

import React, { useEffect, useState } from "react";
import data from "../../helper/data.json";
import Link from "next/link";

import { FAQSection } from "./FAQSection";
import useTheme from "@/theme/ThemeContext";
import { KnowledgePanel } from "./KnowledgePanel";

export const Section = () => {
  const { theme } = useTheme();
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const beforeFaqsSections = data.sections.slice(
    0,
    data.settings.show_faqs_after
  );
  const afterFaqsSections = data.sections.slice(data.settings.show_faqs_after);

  return (
    <div
      style={{ color: theme.primaryTextColor }}
      className="flex flex-col-reverse md:flex-row md:space-x-20"
    >
      <div className="md:ps-24 p-3 mt-4">
        {/* Render Sections Before Faqs*/}
        {beforeFaqsSections.map((section) => (
          <div
            key={section.id}
            className="group transition-all w-full duration-300 ease-in-out cursor-pointer dark:bg-[#1e1e1e] md:dark:bg-transparent md:hover:dark:bg-[#1e1e1e] hover:shadow-md rounded-2xl p-5 mb-6"
          >
            <Link href={`${baseUrl}/${section.url}`}>
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${section.title}`}
                  alt=""
                  width="44"
                  className="rounded-full shadow-sm"
                />
                <div>
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                  <p
                    style={{ color: theme.secondaryTextColor }}
                    className="text-xs"
                  >
                    {`${baseUrl} > ${section.url}`}
                  </p>
                </div>
              </div>

              <p className="text-xl font-medium text-blue-500 transition-colors duration-200">
                {section.content}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-3xl line-clamp-2">
                {section.description}
              </p>
            </Link>
          </div>
        ))}

        {/* Render FAQs */}
        <FAQSection />

        {/* Render Sections After Faqs*/}
        {afterFaqsSections.map((section) => (
          <div
            key={section.id}
            className="group transition-all w-full duration-300 ease-in-out cursor-pointer dark:bg-[#1e1e1e] md:dark:bg-transparent md:hover:dark:bg-[#1e1e1e] hover:shadow-md rounded-2xl p-5 mb-6"
          >
            <Link href={`${baseUrl}/${section.url}`}>
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${section.title}`}
                  alt=""
                  width="44"
                  className="rounded-full shadow-sm"
                />
                <div>
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                  <p
                    style={{ color: theme.secondaryTextColor }}
                    className="text-xs"
                  >
                    {`${baseUrl} > ${section.url}`}
                  </p>
                </div>
              </div>

              <p className="text-xl font-medium text-blue-500 transition-colors duration-200">
                {section.content}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-3xl line-clamp-2">
                {section.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <KnowledgePanel />
    </div>
  );
};
