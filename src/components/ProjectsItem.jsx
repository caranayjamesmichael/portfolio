import React from "react";

import { motion } from "framer-motion";

import githubIcon from "../assets/images/github.png";
import websiteIcon from "../assets/images/web.png";

const ProjectsItem = ({ project }) => {
  return (
    <motion.div className="flex flex-col w-96 h-96 rounded-2xl shadow-black shadow-xl" initial={{opacity: 0}} animate={{opacity: 1}}>
      <div className="flex justify-between items-center h-1/6 px-5">
        <img className="w-5" src={project.logo}></img>
        <div className="flex gap-5">
          <img className="w-5" src={githubIcon}></img>
          <img className="w-5" src={websiteIcon}></img>
        </div>
      </div>
      <div className="h-4/6">a</div>
      <div className="flex flex-col gap-3 items-center justify-center p-3">
        <p>
          <small>Technologies used:</small>
        </p>
        <ul className="flex justify-center items-center gap-4">
          {project.technologies.map((technology) => (
            <li>
              <img className="w-7" src={technology}></img>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectsItem;
