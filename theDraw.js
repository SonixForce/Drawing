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
var color = "blue";
var width = 21;
var x = 250;
var y = 250;

document.addEventListener("keydown", drawArrows);



function drawArrows(event)
{
  var move = width;

  function movImpar(mov)
  {
    if (mov % 2 == 0)
    {
      mov = mov / 2;
    }
    else
    {
      mov = mov / 2 + 0.5;
    }
    return mov;
  }

  switch (event.keyCode)
  {
    case keys.UP:
      draw(color, width, x, y + movImpar(move), x, y - movImpar(move), paper);
      y = y - movImpar(move);
      break;

    case keys.DOWN:
      draw(color, width, x, y - movImpar(move), x, y + movImpar(move), paper);
      y = y + movImpar(move);
      break;

    case keys.LEFT:
      draw(color, width, x + movImpar(move), y, x - movImpar(move), y, paper);
      x = x - movImpar(move);
      break;

    case keys.RIGHT:
      draw(color, width, x - movImpar(move), y, x + movImpar(move), y, paper);
      x = x + movImpar(move);
      break;
  }
}

document.addEventListener("mousedown", mDown);
document.addEventListener("mouseup", mUp);

function mDown(event)
{

  var x = event.clientX;
  var y = event.clientY;

  var xF,yF;

  clickDown = 1;

  for (clickDown == 1; clickDown < 0; i++) {
      draw(color, width, x,y,xF,yF,paper);
      xF=x;
      yF=y;
  }

  console.log(event);
}

function mUp(event)
{
  console.log(event);
  clickDown = 0;
}

function coordenadas(c) //Escribir coordenadas del mouse
{
  var x = c.clientX;
  var y = c.clientY;
  var coor = "Las coordenadas son: (" + x + "," + y + ")";
  document.getElementById("pargraph").innerHTML = coor;
}

function limpiarCoordenadas() //Borrar coordenadas del mouse cuando se sale del canvas
{
  document.getElementById("pargraph").innerHTML = "";
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
