import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="bg-[#171717] min-h-screen">
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
