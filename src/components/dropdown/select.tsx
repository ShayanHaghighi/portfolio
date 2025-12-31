"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import SelectOption, { renderOption } from "@/components/dropdown/select-option";
import { Option } from "@/components/theme-toggle";



interface CustomSelectProps {
    options: Option[];
    initial: Option;
    onChange?: (value: string) => void;
}


export default function CustomSelect({
    options,
    initial,
    onChange,
}: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        onChange?.(option.value);
        setOpen(false);
    };

    return (
        <div className="relative w-28 text-text-secondary" ref={selectRef}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center cursor-pointer justify-between w-full px-3 py-2 bg-dropdown-bg border-2 border-dropdown-border rounded-md shadow-sm hover:bg-dropdown-bg-hover "
            >
                <span className="flex items-center flex-row gap-2 w-max">
                    {renderOption(selected == null ? initial : selected)}
                </span>
                <IoChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />

            </button>

            {open && (
                <div
                    className="absolute top-[85%]  left-0 right-0 z-10 mt-1 text-center rounded-md bg-dropdown-bg border border-dropdown-border shadow-lg">
                    {options.map((option) => <SelectOption key={option.value} option={option}
                        handleSelect={handleSelect}
                        isSelected={selected?.value === option.value} />)}
                </div>
            )}
        </div>
    );
}
