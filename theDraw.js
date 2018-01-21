var drawArea = document.getElementById("drawing"); //This will detect and bring the canvas in the html to a variable
var paper = drawArea.getContext("2d"); //This will save the 2D context of the canvas in a variable wich can be modifiable

var clickDown = 0; //This will detect if the click of the mouse is pressed or not

//This variable will have the id of the arrow keys in it
var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Temporal variables
var color = "red";
var width = 5;
var x = 250;
var y = 250;

document.addEventListener("keydown", drawArrows);
document.addEventListener("mousedown", drawMouse);


function drawArrows(event)
{
  var move = 5;
  switch (event.keyCode)
  {
    case keys.UP:
      draw(color, width, x, y, x, y - move, paper);
      y = y - move;
      break;

    case keys.DOWN:
      draw(color, width, x, y, x, y + move, paper);
      y = y + move;
      break;

    case keys.LEFT:
      draw(color, width, x, y, x - move, y, paper);
      x = x - move;
      break;

    case keys.RIGHT:
      draw(color, width, x, y, x - move, y, paper);
      x = x + move;
      break;
  }
}

function drawMouse(event)
{

}


// Function that will draw the lines
function draw(color, width, xIn, yIn, xFin, yFin, paper)
{
  paper.beginPath();
  paper.strokeStyle = color;
  paper.lineWidth = width;
  paper.moveTo(xIn, yIn);
  paper.lineTo(xFin, yFin);
  paper.stroke();
  paper.closePath();
}
