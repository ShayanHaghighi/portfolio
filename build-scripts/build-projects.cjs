// scripts/build-projects.cjs
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const inputDir = './project-data';
const outputFile = './src/data/projects.json';

const projects = fs.readdirSync(inputDir).map((file) => {
    const raw = fs.readFileSync(path.join(inputDir, file), 'utf8');
    const { data, content } = matter(raw);
    return {
        ...data,
        content: marked(content),
    };
});

fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
console.log('✔ Projects built to projects.json');
