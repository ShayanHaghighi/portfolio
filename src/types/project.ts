export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    highlights?: string[];
    repo?: string;
    demo?: string;
    content: string;
};