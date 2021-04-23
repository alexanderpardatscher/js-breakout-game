let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.beginPath();
context.rect(20,40,50,50);
context.fillStyle = "#786788";
context.fill();
context.closePath();