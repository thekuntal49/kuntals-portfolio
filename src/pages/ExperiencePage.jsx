import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../utils/data.json";

export const ExperiencePage = () => {
  const navigate = useNavigate();

  return (
    <section className="">
      <div className="grid   md:grid-cols-2 xl:grid-cols-3 gap-6 p-5 md:p-10">
        {data.experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-zinc-800 shadow-lg rounded-lg p-6 transition-all duration-200 hover:bg-zinc-700 hover:shadow-xl"
          >
            <div className="flex space-x-4 items-start">
              {/* Company Logo */}
              <img
                src={`/assets/companyImages/${exp.code}.jpeg`}
                alt={exp.company}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
                <p className="text-md font-semibold text-zinc-300">{exp.company}</p>
                <p className="text-sm  text-zinc-400">{exp.duration}</p>
                <p className="text-sm  text-zinc-400">{exp.location}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-4">
              <h4 className="font-semibold">Skills:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(`/skills?name=${skill}`)}
                    className="bg-zinc-900 text-zinc-200 text-sm px-3 py-1 "
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
