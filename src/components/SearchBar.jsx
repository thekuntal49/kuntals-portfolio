import React from "react";
import { FaSun, FaFileAlt, FaMicrophone } from "react-icons/fa";
import myPhoto from "/assets/images/Kuntal's_Photo.jpg";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { TbSunHigh } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export const SearchBar = () => {
  return (
    <div className="flex gap-5 flex-col-reverse sm:flex-row justify-between text-[#e8eaed] p-4 sm:p-10 mx-auto">
      {/* Left Side - Logo and Name */}
      <div className="flex flex-grow items-center max-w-5xl sm:mb-0">
        <img
          src={myPhoto}
          width="54"
          alt="Kuntal's_Photo"
          className="rounded-full hidden sm:inline"
        />
        <div className="flex flex-grow max-w-xl md:max-w-md  lg:max-w-3xl relative sm:ml-4">
          <input
            type="text"
            placeholder="Kuntal's Portfolio"
            className="w-full p-3 sm:p-4 bg-zinc-700 rounded-full focus:outline-none"
            value="Kuntal's Portfolio"
            readOnly
          />
          <div className="absolute inset-y-0 right-5 flex items-center space-x-3">
            <RxCross2 className="cursor-pointer" size={24} />
            <IoSearchOutline className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>

      {/* Right Side - Icons */}
      <div className="flex justify-between  items-center space-x-4 gap-5">
        {/* Download CV Button */}
        <Tippy
          content="Download CV"
          placement="bottom"
          animation="scale"
          delay={[100, 50]}
          theme="dark"
        >
          <a
            href="/assets/files/Kuntal's_Resume(New).pdf"
            download="Kuntal's_Resume"
            className="flex items-center space-x-1 p-3 sm:p-4 xl:px-5 xl:py-4 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-all"
          >
            <FiDownload size={24} />
            <span className="hidden xl:inline font-semibold">Download CV</span>
          </a>
        </Tippy>

        {/* Switch Mode Button */}
        {/* <Tippy
          content="Toggle Light/Dark Mode"
          placement="bottom"
          animation="scale"
          delay={[100, 50]}
          theme="dark"
        >
          <button className="flex items-center space-x-1 p-3 sm:p-4 xl:px-5 xl:py-4 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-all">
            <TbSunHigh size={24} />
            <span className="hidden xl:inline font-semibold">Switch Mode</span>
          </button>
        </Tippy> */}

        <img
          src={myPhoto}
          width="46"
          alt="Kuntal's_Photo"
          className="rounded-full sm:hidden inline"
        />
      </div>
    </div>
  );
};
