const images = ["2.jpg", "chihiro005.jpg", "chihiro043.jpg"];
const background = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

background.style = `background-image: url( img/${chosenImage}); background-repeat : no-repeat; background-size: 100%;`;