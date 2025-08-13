"use client";
import React, { useState, useEffect, useCallback } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export const Theme = () => {
    // Initialize darkMode and loading states
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("color-theme");
            if (savedTheme) {
                return savedTheme === "dark";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false; // Default to light mode for SSR
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate async theme loading (e.g., checking localStorage or system preference)
        const initializeTheme = () => {
            if (darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
            setLoading(false); // Set loading to false after theme is applied
        };

        initializeTheme();
    }, [darkMode]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return (
        <>
            {loading ? (
                <div
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
                    style={{ width: "48px", height: "48px" }} // Match button size
                />
            ) : (
                <button
                    onClick={toggleDarkMode}
                    className="fixed bottom-6 right-6 p-3 rounded-full transition bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-primary-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-900"
                >
                    {darkMode ? (
                        <IoSunnyOutline className="text-primary-dark  text-xl" />
                    ) : (
                        <IoMoonOutline className="text-primary-light text-xl" />
                    )}
                </button>
            )}
        </>
    );
};