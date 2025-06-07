"use client";

import React from "react";
import data from "../../helper/data.json";
import { Card } from "@/components/global/Card";

const ProjectsPage = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-10">
        {data.projects.map((project, index) => (
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
