import React from "react";
import { Nav } from "./Nav";
import { Theme } from "../common/index";


export const Background = ({ children }) => {



  return (
    <div className="relative min-h-screen bg-gradient-to-bl  bg-light   overflow-hidden    dark:bg-dark  dark:text-primary text-primary  ">
      <Nav />
      <div className=" mx-auto px-2 md:px-20  ">{children}</div>
      <Theme />
    </div>
  );
};