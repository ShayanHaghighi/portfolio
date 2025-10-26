import fs from "fs-extra";
import matter from "gray-matter";
import {marked} from "marked";
import {extensions} from "./marked-extension.js";

marked.use(extensions)

export function toProject(rawFile) {
    const raw = fs.readFileSync(rawFile, 'utf8');
    const {data, content} = matter(raw);
    return {
        ...data, content: marked.parse(content),
    };
}

export function compareProjects(project1, project2) {
    if (project1.position === undefined) {
        return 1
    }
    if (project2.position === undefined) {
        return -1;
    }
    return project1.position - project2.position
}