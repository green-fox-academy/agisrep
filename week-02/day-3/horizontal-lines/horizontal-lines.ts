'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawOneLine (x,y) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.stroke();

    for (let i: number = 2; i <= 600; i+=100) {
        drawOneLine(x*i,y);
    }
}

drawOneLine(75,200);