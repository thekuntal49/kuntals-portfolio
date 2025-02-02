import React from "react";
import { FiDownload } from "react-icons/fi";


export const Hero = () => {
  return (
    <section className="flex gap-24 mt-10 justify-end">
      {/* Left Side: My Photo */}


      {/* Right Side: Introduction */}
      <div className="w-full text-white md:w-2/3 text-center md:text-left">
        <h1 className="text-[109px] max-lg:text-[60px] max-xl:text-[90px] leading-[120px] max-xl:leading-[90px]  font-bold mb-8">
          HEY <p className="text-zinc-400"> IT'S KUNTAL</p>
        </h1>
        <p className="text-orange-200 mb-10">
          I'm a Backend Developer skilled in Node.js (Express.js), MongoDB, PHP
          (CodeIgniter), and MySQL. Over the past year, I’ve gained experience
          through internships in backend and full-stack development.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#explore"
            className="bg-white text-black font-semibold px-6 py-3 transition duration-300"
          >
            Explore Now
          </a>
          <a
            href="#download-cv"
            className="font-semibold flex items-center gap-2 bg-zinc-800 text-white px-6 py-3  transition duration-300"
          >
            <FiDownload size={24} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
