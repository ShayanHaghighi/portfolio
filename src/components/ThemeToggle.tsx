"use client"

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(localStorage.getItem('theme')==='dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        if(newTheme==='dark') {
            document.documentElement.setAttribute('data-theme','dark');
        } else{
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 h-10 font-bold rounded border hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer border-gray-600 dark:bg-gray-700"
        >
            Toggle Theme
        </button>
    );
}