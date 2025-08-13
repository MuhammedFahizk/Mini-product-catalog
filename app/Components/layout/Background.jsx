import React from "react";
import { Nav } from "./Nav";
import { Theme } from "../common/index";


export const Background = ({ children }) => {



  return (
    <div className="relative min-h-screen   bg-gradient-to-r from-[#FFF7E7] dark:from-dark dark:to-dark/20 to-[#FFF7E7]   overflow-hidden    dark:bg-dark  dark:text-primary text-primary  ">
      <Nav />
      <div className=" mx-auto px-2 md:px-20  ">{children}</div>
      <Theme />
    </div>
  );
};