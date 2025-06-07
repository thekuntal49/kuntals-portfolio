"use client";

import React from "react";
import { useRouter } from "next/navigation";
import data from "../../helper/data.json";
import { Card } from "@/components/global/Card";

const ProjectsPage = () => {
  const router = useRouter();

  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-10">
        {data.projects.map((project, index) => (
          // <div
          //   key={index}
          //   className="bg-zinc-800 shadow-lg rounded-lg p-6 transition-all duration-200 hover:bg-zinc-700 hover:shadow-xl"
          // >
          //   <div className="flex space-y-5 md:space-y-0 flex-col md:flex-row items-center space-x-4 md:items-start">
          //     <a href={project.url} target="_blank">
          //       <img
          //         src={`/assets/images/projects/${project.code}.png`}
          //         alt={project.title}
          //         className="w-30 h-20 object-contain rounded-md"
          //       />
          //     </a>
          //     <div className="flex flex-col justify-center items-center md:inline">
          //       <h3 className="text-2xl font-semibold">{project.title}</h3>
          //       <p className="text-sm text-zinc-400">{project.duration}</p>
          //       <p className="text-sm text-zinc-400">{project.description}</p>
          //     </div>
          //   </div>

          //   {/* Skills */}
          //   <div className="mt-4">
          //     <h4 className="font-semibold">Skills:</h4>
          //     <div className="flex flex-wrap gap-2 mt-2">
          //       {project.skills.map((skill, idx) => (
          //         <button
          //           key={idx}
          //           onClick={() => router.push(`/skills?name=${skill}`)}
          //           className="bg-zinc-900 text-zinc-200 text-sm px-3 py-1"
          //         >
          //           {skill}
          //         </button>
          //       ))}
          //     </div>
          //   </div>
          // </div>

          <Card
            key={index}
            imgSrc={`/assets/images/projects/${project.code}.png`}
            imgAlt={project.title}
            heading={project.title}
            subHeading={project.duration}
            desc={[project.description]}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
