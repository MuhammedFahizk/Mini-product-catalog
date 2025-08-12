"use client"; // Add this if using Next.js with client-side features
import React from 'react';
import { Div } from '../common/index.js';
import { TfiSearch } from "react-icons/tfi";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiHandbagSimpleLight } from "react-icons/pi";

export const Nav = () => {
    const navItem = [
        {
            item: "Home",
            link: "/home",
        },
        {
            item: "Store",
            link: "/store",
        },
        {
            item: "About",
            link: "/about",
        },
    ];

    return (
        <div className='grid grid-cols-3 items-center px-5 md:px-20 h-20'>
            <Div className="flex justify-start w-full gap-2 md:gap-5">
                {navItem.map((item, index) => (
                    <Div key={index} className="text-sm   hover:text-primary-800 md:text-base">
                        <a href={item.link}>{item.item}</a>
                    </Div>
                ))}
            </Div>
            <Div className="text-center flex justify-center items-center gap-1 text-sm md:text-base lg:text-lg">
                <PiHandbagSimpleLight className='text-md lg-text-lg text-primary' />
                <h2>
                    GLAMORA
                </h2>
            </Div>
            <Div className="flex justify-end    w-full gap-2 md:gap-5 text-sm font-light text-primary  ">
                <div className='flex border gap-3 rounded-full cursor-pointer  md:px-5 p-1.5 items-center h-fit'>
                    <TfiSearch className="text-xl lg:text-2xl" />
                    <h3 className='text-primary-200 hidden md:block'>SEARCH</h3>
                </div>
                <div className='flex border gap-3  cursor-pointer rounded-full md:px-5 p-1.5 items-center h-fit'>

                    <PiShoppingCartSimpleThin className="text-xl lg:text-2xl" />
                    <h3 className='text-primary-200 hidden md:block'>MY CART</h3>

                </div>
            </Div>
        </div>
    );
};