export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription?: string ;
    tags: string[];
    highlights?: string[];
    repo?: string;
    demo?: string;
};