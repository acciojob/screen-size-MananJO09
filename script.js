//your JS code here. If required.
const sizeInfo = document.querySelector('#sizeInfo');
const width = sizeInfo.querySelector('h1:first-child');
const height = sizeInfo.querySelector('h1:last-child');

function setScreenSize() {
width.innerText = `Width: ${window.innerWidth}px`;
height.innerText = `Height: ${window.innerHeight}px`;
}

window.addEventListener('resize', setScreenSize);

setScreenSize();