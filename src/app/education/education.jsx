"use client";

import React from "react";
import data from "../../helper/data.json";
import { Card } from "@/components/global/Card";

const EducationPage = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-10">
        {[...data.education].map((edu, index) => (
          <Card
            key={index}
            imgSrc={`/assets/images/institutions/${edu.code}.png`}
            imgAlt={edu.institution}
            heading={edu.institution}
            subHeading={`${edu.studyType} in ${edu.area}`}
            desc={[`${edu.startDate} - ${edu.endDate}`, edu.score]}
            skills={edu.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
