"use client";
import React from 'react';
import Link from 'next/link'; // Better for Next.js routing
import { Div, SearchBar } from '../common/index.js';
import { TfiSearch } from "react-icons/tfi";
import { PiShoppingCartSimpleThin, PiHandbagSimpleLight } from "react-icons/pi";
import { BsHeart } from 'react-icons/bs';

export const Nav = () => {
    const navItems = [
        { item: "Home", link: "/home" },
        { item: "Store", link: "/store" },
        { item: "About", link: "/about" },
    ];

    return (
        <div className="flex fixed top-0 z-50 items-center justify-between w-full px-4 sm:px-10 md:px-20 h-20   dark:bg-dark   bg-gradient-to-r from-[#FFF7E7] dark:from-dark dark:to-dark/20 to-[#FFF7E7] overflow-hidden dark:bg-dark shadow-md">

            <div className="flex gap-4 md:gap-8">
                {navItems.map((nav, index) => (
                    <Link href={nav.link} key={index} className="text-sm md:text-base hover:text-secondary-light text-primary-light dark:text-primary-dark  transition-colors">
                        {nav.item}
                    </Link>
                ))}
            </div>

            {/* Center: Logo */}
            <div className="flex items-center gap-2 text-sm md:text-lg font-medium text-primary text-center">
                <PiHandbagSimpleLight className="text-xl md:text-2xl dark:text-primary-dark text-primary-light" />
                <h2 className="tracking-wide text-secondary-light dark:text-secondary-dark font-bold md:text-3xl">GLAMORA</h2>
            </div>

            <div className="flex items-center gap-2 md:gap-4">


                <div className="border rounded-full p-1 md:p-2 hover:bg-secondary-light  cursor-pointer dark:bg-primary-dark  bg-primary-light transition">
                    <PiShoppingCartSimpleThin className="text-md text-text-light md:text-2xl " />
                </div>
                <div className="border rounded-full p-1 md:p-2  hover:bg-secondary-light dark:bg-primary-dark  bg-primary-light cursor-pointer transition">
                    <BsHeart className="text-md md:text-2xl text-text-light " />
                </div>
            </div>
        </div>
    );
};
