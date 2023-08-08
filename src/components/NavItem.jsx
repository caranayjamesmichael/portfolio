import React, { useState } from "react";

const NavItem = ({ text, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className="w-10"
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <img className="w-10" src={icon}></img>
      ) : (
        <p className="w-10 text-white text-[1.1rem]">{text}</p>
      )}
    </a>
  );
};

export default NavItem;
