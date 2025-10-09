import type {Project} from "../types/project.ts";

export const projects: Project[] = [
    {
        id: "yolov8-pipeline",
        title: "YOLOv8 Model Training Pipeline",
        description:
            "Automated labeling + retraining pipeline using CVAT, Jenkins, and YOLOv8 to iterate models per room.",
        tags: ["Computer Vision", "YOLOv8", "CVAT", "Jenkins"],
        highlights: [
            "Daily job to create labeling tasks from new images",
            "Manual retraining job that archives models with metrics",
        ],
        repo: "#",
    },
    {
        id: "godot-othello",
        title: "Othello / 2-player Board Game (Godot)",
        description:
            "Intro to Godot + implemented a full 2-player Othello with networking & UI polish — target: PC and mobile.",
        tags: ["Game Dev", "Godot", "Networking"],
        highlights: ["8-bit aesthetic", "Animated UI", "Lobby + matchmaking"],
        demo: "#",
    },
    {
        id: "ai-note-taker",
        title: "Local AI Note Taker",
        description:
            "A privacy-first notes tool: markdown files, embedding store (ChromaDB style), semantic search and local hosting.",
        tags: ["NLP", "Embeddings", "TypeScript"],
        highlights: ["Integrates with Obsidian","Spring Boot backend + Ollama embeddings"],
        repo: "#",
    },
    {
        id: "raspberry-vpn",
        title: "Raspberry Pi VPN + Local DNS",
        description:
            "Self-hosted VPN on Raspberry Pi with custom DNS resolution (e.g. dog.lan -> local IP) for home network services.",
        tags: ["DevOps", "Raspberry Pi", "Networking"],
    },
    {
        id: "react-image-ui",
        title: "Interactive React Image UI",
        description:
            "Complex image overlap & object-position syncing in React with Tailwind + TS. Also created a Valentine interactive page for a personal project.",
        tags: ["React", "TypeScript", "Tailwind"],
    },
    {
        id: "mimecast-placement",
        title: "Industrial Placement @ Mimecast",
        description:
            "Placement project work with monthly reflective logs — focused on learning, performance evaluation, and goal setting.",
        tags: ["Professional Experience", "Security"],
    },
];