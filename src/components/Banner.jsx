import React from "react";

import { motion } from "framer-motion";

import profileIcon from "../assets/images/profile.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen">
      <div className="flex justify-center items-center w-1/2">
        <div className="w-3/4">
          <motion.h1 initial={{ x: -250 }} animate={{ x: 0 }} className="text-[2.5rem] font-ubuntu text-white">
            Hello, I am James! //
          </motion.h1>
          <p>I am a Fullstack Developer.</p>
          <div className="py-5">
            <p>Looking for work opportunities in the following fields:</p>
            <ul className="flex justify-between items-center">
              <li className="py-3 text-[#676a7c]">
                <small>ReactJS Frontend Developer</small>
              </li>
              <li className="py-3 text-[#676a7c]">
                <small>Node/Express Backend Developer</small>
              </li>
              <li className="py-3 text-[#676a7c]">
                <small>Fullstack Developer</small>
              </li>
            </ul>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button className="w-1/3 text-white border-2 border-blue-600 bg-blue-600 py-4 rounded-md shadow-2xl shadow-black">
              Download CV
            </button>
            <button className="w-1/3 text-white border-2 border-blue-600 hover:bg-blue-600 duration-200 py-4 rounded-md shadow-2xl shadow-black ml-10">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <motion.img
          className="w-1/2 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src={profileIcon}
        ></motion.img>
      </div>
    </div>
  );
};

export default Banner;
