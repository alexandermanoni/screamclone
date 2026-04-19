const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});

const gridWidth = 10;
const gridHeight = 10;

// let grid = [
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ];

// let grid = [
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],

//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0]
// ];

let grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 2, 0, 0, 1, 2, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],

  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
  [2, 1, 0, 0, 1, 2, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const squareSize = 20; // size of squares in px
const squareSpace = 5; // size of padding between squares

// draw a square at that x, y position (in tile terms)
function drawSquare(x, y, type) {
  ctx.beginPath();
  //ctx.strokeRect(squareSpace + x * (squareSize + squareSpace), squareSpace + y * (squareSize + squareSpace), squareSize, squareSize);
  ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);

  switch (type) {
    case 0:
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      break;
    case 1:
      ctx.strokeStyle = "black";
      ctx.fillStyle = "black";
      break;
    default:
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      break;
  }

  ctx.fill();
  ctx.closePath();
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      drawSquare(i, j, grid[i][j]);
    }
  }
}

// return grid coords of mouseclick
function getCoords(e) {
  const tilex = Math.floor((e.clientX - canvas.offsetLeft) / squareSize);
  const tiley = Math.floor((e.clientY - canvas.offsetTop) / squareSize);

  return {tilex, tiley};
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
  drawGrid();
  //startButton.disabled = true;
});

const printBtn = document.getElementById("printButton");
printBtn.addEventListener("click", () => {
  console.log(grid);
});

let selected1 = false;
let selected2 = false;

document.addEventListener("click", async (e) => {

  if (!selected1 || !selected2) {
    selected1 ? selected2 = true : selected1 = true;
    //selected = true;
    return;
  }

  let coords = getCoords(e);
  

  if (coords.tilex >= 0 && coords.tilex < gridWidth && coords.tiley >= 0 && coords.tiley < gridHeight && !hiding && !searching) {
    console.log(coords);
    grid[coords.tilex][coords.tiley] = 1;
  }

  else if (hiding) {
    console.log("Hiding at: ", coords);
    // put fetch request (post) here!!!
    const response = await fetch("http://localhost:3000/hiding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coords: coords
      })
    });

    // const result = await response.json();
    // if (result.success) {
    //   alert("You found the victim");
    // }
  }

  else if (searching) {
    console.log("Searching at: ", coords);
    // put fetch request here!!!

    const response = await fetch("http://localhost:3000/searching", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coords: coords
      })
    });

    const result = await response.json();
    if (result.success) {
      alert("You found the victim!");
    }
    else {
      alert("You didn't find the victim! FUCK YOU");
    }
  }
  

  drawGrid();
});

let hiding = false;

const hidingBtn = document.getElementById("hidingBtn");
hidingBtn.addEventListener("click", () => {
  hiding = true;
  searchingBtn.disabled = true;
  //hidingBtn.disabled = hiding;
});

let searching = false;
const searchingBtn = document.getElementById("searchingBtn");
searchingBtn.addEventListener("click", () => {
  searching = true;
  hidingBtn.disabled = true;
});