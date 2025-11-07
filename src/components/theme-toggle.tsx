"use client"

import {useEffect, useState} from 'react';
import {IoMdMoon} from "react-icons/io";
import {MdOutlineWbSunny} from "react-icons/md";
import CustomSelect from "@/components/dropdown/select";
import {HiDesktopComputer} from "react-icons/hi";

type Theme = "system-theme" | "dark" | "light";

export interface Option {
    value: string;
    label: string;
    icon: React.ReactNode;
}

const options = [
    {
        value: "system-theme",
        label: "System",
        icon: (
            <HiDesktopComputer/>
        )
    },
    {
        value: "dark",
        label: "Dark",
        icon: (
            <IoMdMoon/>
        ),
    }, {
        value: "light",
        label: "Light",
        icon: (
            <MdOutlineWbSunny/>),
    },
];

export default function ThemeToggle() {
    const [preferredTheme, setPreferredTheme] = useState("dark");
    const [currentTheme, setCurrentTheme] = useState<Theme>("system-theme");




    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme && storedTheme === "dark" || storedTheme === "light") {
            setCurrentTheme(storedTheme);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setPreferredTheme(systemPrefersDark ? "dark" : "light");
            setCurrentTheme("system-theme");
        }


    }, []);

    function handleThemeChange(newTheme: string) {
        let isDark
        console.log(newTheme)
        if (newTheme === 'system-theme') {
            isDark = preferredTheme
            localStorage.removeItem('theme');
        } else {
            isDark = newTheme === 'dark'
            localStorage.setItem('theme', newTheme);
        }

        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

    }

    function getThemeByValue(value: Theme): Option {
        return options.find((theme) => theme.value === value) || options[0];
    }

    return (
        <CustomSelect
            options={options}
            initial={getThemeByValue(currentTheme)}
            onChange={handleThemeChange}
        />

    );
}