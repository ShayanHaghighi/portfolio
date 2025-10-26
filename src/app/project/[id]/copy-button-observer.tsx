"use client"
import {useEffect} from "react";

function copyToClipboard(text: string) {
    return navigator.clipboard.writeText(text);
}

export default function CopyButtonObserver() {
    useEffect(() => {
        // Client-side logic to add "onClick" to elements with the 'copy-text' class
        const elements = document.querySelectorAll('.copy-code');

        elements.forEach(element => {
            element.addEventListener('click', handleClick);
        });

        function handleClick(event) {
            const copyIcon = event.target.querySelector('.copy-svg');
            const tickIcon = event.target.querySelector('.tick-svg');
            const code = event.target.parentNode.getElementsByTagName('code')[0]?.textContent;

            if (code && copyIcon && tickIcon) {
                copyToClipboard(code).then(() => {
                    copyIcon.classList.add('svg-hidden');
                    tickIcon.classList.add('svg-show');

                    setTimeout(() => {
                        tickIcon.classList.remove('svg-show');
                        copyIcon.classList.remove('svg-hidden');
                    }, 1000);
                }).catch(e => {window.alert("Error copying clipboard")});


            }
        }

        return () => {
            // Clean up event listeners
            elements.forEach(element => {
                element.removeEventListener('click', handleClick);
            });
        };
    }, []);
    return;
}