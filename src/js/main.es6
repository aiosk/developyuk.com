let lastFile = document.referrer.split('/');
lastFile = lastFile[lastFile.length - 1].trim();

let currentFile = document.location.pathname.slice(1).trim();

const isFromIndex = lastFile.length === 0 || lastFile === 'index.html';
const isIndex = currentFile.length === 0 || currentFile === 'index.html';

const $nav = document.querySelector('nav');
const $logo = $nav.querySelector('a:first-child');
