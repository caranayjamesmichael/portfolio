import React from "react";

//Logos
import dormanilaLogo from "../assets/images/dormanila.png";
import orderxpressLogo from "../assets/images/orderxpress.png";
import trailermotionLogo from "../assets/images/trailermotion.png";

//Technologies
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import expressIcon from "../assets/images/express.png";
import mongoIcon from "../assets/images/mongo.png";
import tailwindIcon from "../assets/images/tailwind.png";
import bootstrapIcon from "../assets/images/bootstrap.png";
import viteIcon from "../assets/images/vite.png"

import websiteIcon from "../assets/images/web.png";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Dormanila",
      description: "Improvised AirBnB",
      logo: dormanilaLogo,
      technologies: [htmlIcon, cssIcon, jsIcon],
    },
    {
      id: 1,
      title: "OrderXpress",
      description: "Improvised AirBnB",
      logo: orderxpressLogo,
      technologies: [reactIcon, bootstrapIcon, expressIcon, viteIcon],
    },
    {
      id: 2,
      title: "Trailermotion",
      description: "Improvised AirBnB",
      logo: trailermotionLogo,
      technologies: [reactIcon, tailwindIcon, expressIcon, mongoIcon, viteIcon],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 min-h-screen">
      {projects.map((project) => (
        <ProjectsItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
