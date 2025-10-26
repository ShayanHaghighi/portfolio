import hljs from "highlight.js";
import fs from 'fs-extra';

const codeBlockPath = './build-scripts/resources/code-block.html';

const raw = fs.readFileSync(codeBlockPath, 'utf8');


function highlightCode(code, language) {
    if (language) {
        return hljs.highlight(code, {language: language}).value
    }
    else{
        return code
    }
}


export const extensions = {
    extensions: [{
        name: 'code', renderer(token) {
            return `<pre><code>${highlightCode(token.text, token.lang)}</code>${raw}</pre>`
        }
    }, {
        name: 'image', renderer(token) {
            return `<div class="img-container"><img src=/${token.href} alt=${token.text}/><span class="img-text">${token.text}</span></div>`
        }
    }]
}