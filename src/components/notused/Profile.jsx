import React from "react";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myPhoto from "/assets/Kuntal's_Photo.jpg";

export const Profile = () => {
  return (
    <div className="fixed left-16 top-36 md:w-1/4 rounded-3xl bg-white h-[80vh] text-center ">
      <img
        src="https://puzant.netlify.app/img/shape-1.c0ffa83b.svg"
        alt=""
        width="60px"
        className="rounded-tl-3xl"
      />
      <div className="p-7">
        <img src={myPhoto} alt="Kuntal Kargupta" className="rounded-2xl" />
      </div>

      <h1 className="text-3xl text-zinc-800 font-bold">Kuntal Kargupta</h1>
      <p className="text-xl font-semibold text-zinc-600">Backend Developer</p>
      <div className="flex justify-center mt-8 space-x-4">
        <a
          href="https://github.com/thekuntal49"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black duration-200 hover:-translate-y-2"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/thekuntal49"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 duration-200 hover:-translate-y-2"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://gitlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:text-orange-800 duration-200 hover:-translate-y-2"
        >
          <FaGitlab className="text-2xl" />
        </a>
        <a
          href="mailto:kuntal.kargupta@example.com"
          className="text-red-600 hover:text-red-800 duration-200 hover:-translate-y-2"
        >
          <MdEmail className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
