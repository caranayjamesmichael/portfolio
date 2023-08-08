import React, { useState } from "react";
import homeIcon from "../assets/home.png";
import NavItem from "./NavItem";

const Navbar = () => {

  return (
    <div className="flex justify-center items-center m-auto w-1/4 absolute left-0 right-0 bottom-10 h-16 rounded-lg shadow-2xl shadow-black bg-[#171717]">
     <ul className="w-full flex justify-around items-center">
        <li>
            <NavItem text={"Home"} icon={homeIcon} />
        </li>
        <li>
            <NavItem text={"Home"} icon={homeIcon} />
        </li>
        <li>
            <NavItem text={"Home"} icon={homeIcon} />
        </li>
     </ul>
    </div>
  );
};

export default Navbar;
