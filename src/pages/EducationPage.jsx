import React from "react";
import data from "../utils/data.json";

export const EducationPage = () => {
  return (
    <section className="">
      <div className="grid max-w-fit  md:grid-cols-2 xl:grid-cols-3 gap-6 p-5 md:p-10">
        {[...data.education].reverse().map((edu) => (
          <div
            key={edu.id}
            className="bg-zinc-800 shadow-lg rounded-lg p-6 transition-all duration-200 hover:bg-zinc-700 hover:shadow-xl"
          >
            <div className="flex space-x-4 items-start">
              {/* Institution Logo */}
              <a href={edu.url} target="_blank">
                <img
                  src={`/assets/institutionImages/${edu.code}.png`}
                  alt={edu.institution}
                  className="w-24 h-24 object-contain rounded-md border border-gray-600"
                  onError={(e) => (e.target.style.display = "none")} // Hide broken images
                />
              </a>
              <div>
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <p className="text-sm font-semibold text-gray-300">
                  {edu.studyType} in {edu.area}
                </p>
                <p className="text-sm text-gray-400">
                  {edu.startDate} {edu.endDate}
                </p>
                <p className="text-white font-medium">{edu.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
