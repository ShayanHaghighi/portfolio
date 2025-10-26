const fs = require('fs-extra');
const path = require('path');
const {toProject, compareProjects} = require("./markdown-utils");

const inputDir = './project-data';
const outputFile = './src/data/projects.json';

const imageInputDir = inputDir + "/images";
const imageOutputDir = "./public/images";

fs.mkdirs(imageOutputDir)
fs.copySync(imageInputDir, imageOutputDir);

const projects = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.md'))
    .map((file) => {
            return toProject(path.join(inputDir, file));
    })
    .sort(compareProjects);

fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
console.log('✔ Projects built to projects.json');
