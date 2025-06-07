"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

export const Card = ({
  key,
  imgSrc,
  imgAlt,
  heading,
  subHeading,
  desc = [],
  skills = [],
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative md:w-[50vw] w-[90vw] max-h-[80vh] aspect-video bg-center bg-no-repeat bg-contain bg-zinc-900 border border-zinc-200 rounded-2xl shadow-2xl"
            style={{ backgroundImage: `url(${imgSrc})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-2xl bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}

      <div
        key={key}
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:dark:bg-[#1e1e1e]"
      >
        <div className="flex space-x-4 items-start">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-20 h-20 object-cover rounded-xl shadow-md cursor-pointer"
            onClick={() => setIsOpen(true)}
            title="Click to view full image"
          />
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
              {heading}
            </h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-300 mt-1">
              {subHeading}
            </p>
            {desc.map((d, i) => (
              <p
                key={i}
                className="text-sm text-zinc-600 dark:text-zinc-400 mt-1"
              >
                {d}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-zinc-700 dark:text-zinc-200">
            Skills:
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, idx) => (
              <button
                key={idx}
                onClick={() => router.push(`/skills?name=${skill}`)}
                className="bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
