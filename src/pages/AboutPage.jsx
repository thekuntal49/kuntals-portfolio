import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-gray-800 text-white min-h-screen flex items-start">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm{" "}
            <span className="text-yellow-400 font-semibold">
              Kuntal Kargupta
            </span>
            , a passionate Full Stack Developer from India. As a Computer
            Science & Engineering student, I specialize in both frontend and
            backend technologies, solving real-world problems through web
            development.
          </p>
        </header>

        <div className="text-center mt-10">
          <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            Top Skills
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4 transform hover:scale-105 transition">
              <FaReact className="text-blue-400 text-2xl animate-spin-slow" />
              <span className="text-lg font-semibold">React.js</span>
            </div>
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4 transform hover:scale-105 transition">
              <FaNodeJs className="text-green-400 text-2xl" />
              <span className="text-lg font-semibold">Node.js</span>
            </div>
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4 transform hover:scale-105 transition">
              <FaDatabase className="text-purple-400 text-2xl" />
              <span className="text-lg font-semibold">MongoDB & MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
