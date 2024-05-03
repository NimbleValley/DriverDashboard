var socket = io();

let tl = gsap.timeline(); //create the timeline

// Elements
const hexhoundImage = document.getElementById('hexhound-image');
const hexhoundText = document.getElementById('hexhound-text');
const localButton = document.getElementById('local-button');
const radioButton = document.getElementById('radio-button');
const loader = document.getElementsByClassName("loader")[0];

// Animation
tl.fromTo(hexhoundImage, {x: '25vw', opacity: 0}, {x: '0', opacity: 1, duration: 1.5, ease: "power1.out",}, "+=0.5");
tl.fromTo(hexhoundText, {x: '-25vw', opacity: 0}, {x: '0', opacity: 1, duration: 1.5, ease: "power1.out",}, '-=1.5');

tl.to(hexhoundImage, {scale: 0.95, duration: 0.75, y: "-15vh", ease: "power1.out",}, "+=0.5");
tl.to(hexhoundText, {scale: 0.95, duration: 0.75, y: "-15vh", ease: "power1.out",}, '-=0.75');

tl.fromTo(localButton, {scale: 0.25, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: "power1.out",}, "-=0.5");
tl.fromTo(radioButton, {scale: 0.25, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: "power1.out",}, '-=0.75');

tl.fromTo(loader, {scale: 0.25, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: "power1.out",}, '-=0.5');

function useLocal() {
    radioButton.classList = "home-button";
    localButton.classList = "home-button active";
    socket.emit('refresh', '127.0.0.1');
}

function useRadio() {
    localButton.classList = "home-button";
    radioButton.classList = "home-button active";
    socket.emit('refresh', '10.31.97.2');
}

socket.on('update', checkForConnection);

function checkForConnection(args) {
    if(args.connected) {
        window.open('dashboard.html', '_self');
    }
}