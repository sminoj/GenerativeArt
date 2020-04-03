// Syed Minhaj Shahid
// March 03, 2020
// Project: Using generative artistry - Tiled Lines tutorial to generate art

// Generating a canvas 
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// Setting the size of the canvas to adjust based on the user's device pixel ratio
var vert_size = window.innerHeight;
var horiz_size = window.innerWidth;
//var size = 500
var step = 30
var dpr = window.devicePixelRatio;
canvas.height = vert_size * dpr;
canvas.width = horiz_size * dpr;
context.scale(dpr, dpr);

// Restricting the canvas to be a square as well as the width of the lines
context.lineCap = 'square';
context.lineWidth = 3;

// Creating a function to draw the diagonal lines
function draw(x, y, width, height)
{
    var leftToRight = Math.random() >= 0.6;
  
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
  
for(var x = 0; x < horiz_size; x += step)
{
    for(var y = 0; y < vert_size; y += step)
    {
        draw(x, y, step, step);
    }
}
