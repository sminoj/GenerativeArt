// Syed Minhaj Shahid
// March 03, 2020
// Project: Using generative artistry - Tiled Lines tutorial to generate art

// Generating a canvas 
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// Setting the size of the canvas to adjust based on the user's device pixel ratio
var size = window.innerWidth;
//var size = 500
var step = 30
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

// Restricting the canvas to be a square as well as the width of the lines
context.lineCap = 'square';
context.lineWidth = 2;

// Creating a function to draw the diagonal lines
function draw(x, y, width, height)
{
    var leftToRight = Math.random() >= 0.75;
  
    if(leftToRight)
    {
      context.moveTo(x, y);
      context.lineTo(x + width, y + height);
    } else
    {
      context.moveTo(x + width, y);
      context.lineTo(x, y + height);
    }
  
    context.stroke();
}
  
for(var x = 0; x < size; x += step)
{
    for(var y = 0; y < size; y += step)
    {
        draw(x, y, step, step);
    }
}
