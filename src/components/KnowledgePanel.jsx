import React, { useState } from "react";
import myPhoto from "/assets/images/Kuntal's_Photo.jpg";
import { IoMdClose } from "react-icons/io";
import data from "../utils/data.json";

export const KnowledgePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 mt-4  md:border-l border-gray-700 text-white">
      {/* Fullscreen Image Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <button
              className="absolute top-3 right-3 text-white text-3xl bg-gray-800 p-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <img
              src={myPhoto}
              alt="Profile"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Title & Image */}
      <div className="flex space-x-6 items-center ">
        <div className="w-36 h-36 rounded-2xl overflow-hidden group">
          <img
            src={myPhoto}
            alt="Profile"
            onClick={() => setIsOpen(true)} // Open fullscreen on click
            className="w-full cursor-pointer h-full object-cover transition-transform duration-200 group-hover:scale-110"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Kuntal Kargupta</h2>
          <p className="text-gray-300 mt-2 text-lg">Full Stack Developer</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-3 text-sm">
        <p className="max-w-sm font-medium bg-gray-700 p-3 rounded-2xl">
          I am Kuntal Kargupta, a passionate Backend Developer with experience in Node.js, Express.js, and MongoDB. I have built scalable backend solutions and RESTful APIs that enhance application performance.
        </p>
      </div>

      <div className="mt-6 flex flex-col space-y-2 border-t border-gray-700 pt-4">
        <p>
          <strong>Born:</strong> 4 September,{" "}
          <a
            className="text-blue-400 hover:underline"
            href="https://en.wikipedia.org/wiki/Kolkata"
            target="_blank"
          >
            Kolkata
          </a>
        </p>
        <p>
          <strong>Education:</strong> BTech in CSE
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            className="text-blue-400 hover:underline"
            href="https://socialclubs.fun/"
            target="_blank"
          >
            socialclubs.fun
          </a>
        </p>
      </div>

      {/* Links */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h1 className="text-xl font-semibold">Profiles</h1>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {data.profiles.map((profile) => {
            return (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 duration-200"
              >
                <img
                  src={`/assets/svg/${profile.name}.svg`}
                  width="32"
                  alt={profile.name}
                  className="text-2xl"
                />
                <span className="text-white">{profile.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
