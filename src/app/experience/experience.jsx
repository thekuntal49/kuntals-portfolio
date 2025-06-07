"use client";

import React from "react";
import data from "../../helper/data.json";
import { Card } from "@/components/global/Card";

const ExperiencePage = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-10">
        {data.experiences.map((exp, index) => (
          <Card
            key={index}
            imgSrc={`/assets/images/companies/${exp.code}.jpeg`}
            imgAlt={exp.company}
            heading={exp.position}
            subHeading={exp.company}
            desc={[exp.duration, exp.location]}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
