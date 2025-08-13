"use client"
import React, { useState } from 'react';
import { BsCrosshair } from 'react-icons/bs';
import { TfiSearch } from 'react-icons/tfi';
import { IoCloseOutline } from "react-icons/io5";
import { useSearchParams, useRouter } from 'next/navigation';

export const SearchBar = ({ query, setQuery, }) => {
    const router = useRouter();

    const handleSearch = () => {
        router.push(`?query=${encodeURIComponent(query)}`);
    };
    const handleClear = () => {
        setQuery('');
        router.push(`?query=`);
    };

    return (
        <div className="flex items-center border rounded-full px-3 py-3 justify-end   gap-2 w-full max-w-md">
            {query && (
                <button onClick={handleClear} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors text-lg">
                    <IoCloseOutline />
                </button>
            )}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        handleSearch()
                    }
                }}
                className="flex-grow outline-none bg-transparent text-sm md:text-base"
            />
            <button
                onClick={handleSearch}
                className="text-xl md:text-2xl text-gray-600 hover:text-black transition-colors"
            >
                <TfiSearch />
            </button>
        </div>
    );
};
