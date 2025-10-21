"use client";
import { useEffect } from "react";
import {Section} from "@/types/sections";

export default function FadeUpObserver({section}:{section:Section}) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll(".fade-up-on-view").forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [section]);

    return null;
}
