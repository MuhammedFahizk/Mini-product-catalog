"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export const Div = ({ style, children, className, id, onClick }) => {
  const divRef = useRef(null);

  useGSAP(() => {
    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { y: 100, opacity: 0 }, 
        {
          y: 0,
          opacity: 1, 
          duration: 2, 
          ease: "back.in",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 90% ", 
            end: "bottom 50%",
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
  }, []);

  return (
    <div
      id={id}
      ref={divRef}
      onClick={onClick}
      style={style}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};