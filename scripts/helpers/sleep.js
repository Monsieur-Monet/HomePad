export const sleep = (delayInMs) => new Promise(resolve => setTimeout(resolve, delayInMs));

export const awaitDOM = () => new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve));
