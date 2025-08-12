"use client";
import React from 'react';
import { Div } from '.'; // Adjust path if needed
import Image from 'next/image';
import { BsCartPlus } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

export const Card = ({ product }) => {
  return (
    <Div className="flex flex-col px-4   justify-between bg-gradient-to-t h-60 md:h-full from-primary/40 dark:from-primary-200 via-primary/20 to-primary/10  dark:to-primary-800/50 dark:bg-primary/20 rounded-2xl ">
      <Image
        src={product?.image || '/fallback-image.jpg'}
        alt={product?.title || 'Product Image'}
        width={400}
        height={400} // Increased height for better visibility
        className="object-contain h-40  md:h-70 w-full p-5" // Tailwind h-72 = 18rem
        priority={false}
      />
      <Div className="    p-2 py-4 flex flex-col  md:flex-row  ">
        <h2 className="text-md font-semibold truncate overflow-hidden text-ellipsis w-34 md:w-fit  text-white ">{product?.title || 'No Title'}</h2>
        <h2 className="text-md font-semibold  cursor-pointer bg-light/20 px-2 rounded-full  w-fit ms-auto   text-end text-white "> ${product?.price || 'No Title'}</h2>

      </Div>
      <Div className={'absolute end-5 top-4 flex gap-4 py-5 flex-col  bg-white dark:bg-dark shadow-2xl  rounded-full cursor-pointer p-2 '}>
       <BsCartPlus/>
       <GoHeart/>
      </Div>
    </Div>
  );
};