let populations = [];
// let grid;
let popArr = [];
let flowerArr = [];
let newGarden = true;
let numPops = 4;
let gardenSize = 10;
let info;
let cellSize = 25;
let popmax = 12;
let colorArray =
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"]


function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let numPlots = 12;
let cols;
let rows;
let w;

function setup() {
  createCanvas(windowWidth / 2, windowHeight);
  let mutationRate = 0.01;

  w = 50;
  cols = floor(numPlots);
  rows = floor(numPlots);

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Bed(i * w, j * w, w);
    }
  }

  // console.log(grid);


  // for (let i = 0; i < numPops; i++) {
  // populations.push(new Population(mutationRate, popmax, cellSize))
  // }

  // drawGarden();

}

function draw() {

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // console.log('im running')
      grid[i][j].display();
    }
  }

}

function drawGarden() {
  for (let i = 0; i < gardenSize; i++) {
    popArr.push(floor(random(0, numPops)));
    for (let f = 0; f < gardenSize; f++) {
      flowerArr.push(floor(random(0, popmax)))
    }
    console.log(flowerArr);
  }
}

function hover(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}

// If the button is clicked, evolve next generation
function nextGen() {
  for (let i = 0; i < numPops; i++) {
    // console.log(populations[0]);
    populations[i].selection();
    populations[i].reproduction();
    // console.log(populations[0]);
  }
}