import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";

export const NavBar = () => {
  return (
    <nav className="h-20 text-white sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 leading-[3rem]">
          {/* Menu */}

          <div className="hidden bg-zinc-900 px-6 py-2 rounded-2xl md:flex space-x-4">
            {/* Home */}
            <Tippy
              content="Home"
              className="text-white duration-200 bg-zinc-900 px-2 py-1 rounded-md"
            >
              <a
                href="#home"
                className="text-white bg-orange-700 p-2 rounded-lg flex items-center space-x-2 transition duration-300 "
              >
                <FaHome size={24} />
              </a>
            </Tippy>

            {/* Skills */}
            <Tippy
              content="Skills"
              className="text-white bg-zinc-900 px-2 py-1 rounded-md"
            >
              <a
                href="#skills"
                className="text-white p-2 rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-orange-700 "
              >
                <FaCode size={24} />
              </a>
            </Tippy>

            {/* Projects */}
            <Tippy
              content="Projects"
              className="text-white bg-zinc-900 px-2 py-1 rounded-md"
            >
              <a
                href="#projects"
                className="text-white p-2 rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-orange-700 "
              >
                <FaProjectDiagram size={24} />
              </a>
            </Tippy>
            {/* Experience */}
            <Tippy
              content="Experience"
              className="text-white bg-zinc-900 px-2 py-1 rounded-md"
            >
              <a
                href="#experience"
                className="text-white p-2 rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-orange-700 "
              >
                <FaBriefcase size={24} />
              </a>
            </Tippy>
            {/* Contact */}
            <Tippy
              content="Contact"
              className="text-white bg-zinc-900 px-2 py-1 rounded-md"
            >
              <a
                href="#contact"
                className="text-white p-2 rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-orange-700 "
              >
                <FaEnvelope size={24} />
              </a>
            </Tippy>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
