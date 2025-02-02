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
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400">About Me</h1>
          <p className="mt-2 text-xl text-gray-400">
            I'm Kuntal Kargupta, a passionate Full Stack Developer from India 
          </p>
        </header>

        {/* Bio Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold">Who Am I?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            I’m a Computer Science & Engineering student with a passion for web
            development and building solutions that improve people's lives. I
            specialize in both frontend and backend technologies, and I love
            diving into new challenges. I’m constantly learning and excited to
            grow in the field of software development.
          </p>
        </section>
      </div>
    </div>
  );
};
