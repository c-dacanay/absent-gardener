let colorArray =
  [
    ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
    ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
    ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
    ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
    ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"],
    ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
    ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"],
    ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2"],
    ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951"],
    ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5"],
    ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"],
    ["#d9ceb2", "#948c75", "#d5ded9", "#7a6a53", "#99b2b7"]]
let populations = [];
let numPops = 3;
let popmax = 12;
let numPlots = 12;
let button;
let aboutButton;
let garden;
let grid;
let cols;
let rows;
let counter = 0;
let seedCount = 0;
let pruneOn = false;
let harvestOn = false;
//width of cells
let w = 70;
let square = 1;

function setup() {

  // console.log(square);
  let width = window.innerWidth * .6;
  let height = window.innerHeight * .6;

  if (width < height) {
    w = width / numPlots
  } else {
    w = height / numPlots
  }

  square = w * numPlots
  let myCanvas = createCanvas(square, square);
  myCanvas.parent("#canvas-destination");
  console.log(myCanvas);
  let mutationRate = 0.04;

  //make the garden beds
  cols = floor(numPlots);
  rows = floor(numPlots);
  garden = new Garden(mutationRate);
  // console.log(garden);


  //make the plant populations. these are seperate from the garden itself.
  for (let i = 0; i < numPops; i++) {
    populations.push(new Population(mutationRate, popmax));
  }

  // button = createButton("evolve new generation");
  // button.mousePressed(nextGen);
  // button.position(20, square + 20);
  // info = createDiv('');
  // info.position(20, square + 40);
  // textAlign(CENTER, CENTER);
}

function draw() {

  // console.log(width, height)
  // background(150);
  garden.display();

  // info.html("Generation #:" + populations[0].getGenerations());
}

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// If the button is clicked, evolve next generation
function nextGen() {
  for (let i = 0; i < numPops; i++) {
    populations[i].selection();
    populations[i].reproduction();
  }
  garden.changeDNA();
  // garden.change();
  // garden.grow();
}