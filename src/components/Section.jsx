import React, { useEffect } from "react";
import data from "../utils/data.json";
import { Link } from "react-router-dom";
import { KnowledgePanel } from "./KnowledgePanel";
import { FAQSection } from "./FAQSection";
import { useLocation, useParams, } from "react-router-dom";

export const Section = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  // const baseUrl = "http://localhost:3000";
  // const baseUrl = location;
  console.log(baseUrl)

  // Extract first two sections and the remaining ones
  const firstTwoSections = data.sections.slice(
    0,
    data.settings.show_faqs_after
  );
  const remainingSections = data.sections.slice(data.settings.show_faqs_after);

  return (
    <div className="flex flex-col-reverse md:flex-row md:space-x-20">
      <div className="md:ps-28 p-6 mt-4 text-[#e8eaed]">
        {/* Render First Two Sections */}
        {firstTwoSections.map((section) => (
          <div key={section.id} className="pb-10">
            <div className="flex items-center  space-x-4 mb-2">
              <img
                src={`https://ui-avatars.com/api/?name=${section.title}`}
                alt=""
                width="44"
                className="rounded-full"
              />
              <div>
                <h2 className="">{section.title}</h2>
                <p className="text-zinc-400 text-xs">{`${baseUrl} > ${section.url}`}</p>
              </div>
            </div>
            <Link
              to={`${baseUrl}/${section.url}`}
              className="text-xl text-blue-400 hover:underline"
            >
              {section.content}
            </Link>
            <p className="max-w-3xl line-clamp-2">{section.description}</p>
          </div>
        ))}

        {/* Render FAQs */}
        <FAQSection />

        {/* Render Remaining Sections */}
        {remainingSections.map((section) => (
          <div key={section.id} className="pb-10">
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={`https://ui-avatars.com/api/?name=${section.title}`}
                alt=""
                width="44"
                className="rounded-full"
              />
              <div>
                <h2 className="">{section.title}</h2>
                <p className="text-zinc-400 text-xs">{`${baseUrl} > ${section.url}`}</p>
              </div>
            </div>
            <Link
              to={`${baseUrl}/${section.url}`}
              className="text-xl text-blue-400 hover:underline"
            >
              {section.content}
            </Link>
            <p className="max-w-3xl line-clamp-2">{section.description}</p>
          </div>
        ))}
      </div>
      <KnowledgePanel />
    </div>
  );
};
