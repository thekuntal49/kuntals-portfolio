import React from "react";
import projectList from "../../utils/projects.json";

export const Projects = () => {
  return (
    <section className="flex mt-20 justify-end" id="projects">
      {/* Right Side: Introduction */}
      <div className="w-full text-white md:w-2/3 text-center md:text-left">
        <h1 className="text-[109px] max-lg:text-[60px] max-xl:text-[90px] leading-[120px] max-xl:leading-[90px]  font-bold mb-8">
          RECENT <p className="text-zinc-400"> PROJECTS</p>
        </h1>

        <div className="flex gap-10 flex-wrap">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="max-w-xs bg-zinc-800 shadow-lg rounded-3xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-semibold 0">{project.title}</h1>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="flex justify-between">
                  <button className="bg-white mt-4 text-black rounded font-semibold px-5 py-3 rounded-bl-2xl transition duration-300">
                    Live Demo
                  </button>
                  <button className="mt-4 bg-zinc-900 text-white rounded font-semibold px-5 py-3 rounded-br-2xl transition duration-300">
                    GitHub 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
