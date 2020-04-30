// augmented from code by Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

//////////Questions//////////////
//This seems taxing on my computer! It's breathing heavily, which it doesn't really do for p5 sketches. Any thoughts?
//Ways to create a grid that 'sees' every cell? Right now, each of these roses are being translated multiple times to their position.
//I'm not sure if the ICM columns/rows array is going to work. 

////////////////////////////////

let populations = [];
let numPops = 10;
let info;
let size = 25;
let colorArray =
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"]

function setup() {
  createCanvas(windowWidth / 2, windowHeight);
  // colorMode(RGB, 1.0, 1.0, 1.0, 1.0);
  let popmax = 12;
  let mutationRate = 0.01;

  for (let i = 0; i < numPops; i++) {
    populations.push(new Population(mutationRate, popmax, size))
  }
  // console.log(populations);
  button = createButton("evolve new generation");
  button.mousePressed(nextGen);
  button.position(20, 900);
  info = createDiv('');
  info.position(20, 950);
}

function draw() {

  background(200);
  // translate(size / 2, size / 2)

  //display the roses!
  // for (let i = 0; i < numPops; i++) {
  //   push();
  //   translate(0, size + 20 * (i * 3));
  //   populations[i].display();
  //   populations[i].rollover(mouseX, mouseY);

  //   pop();
  // }

  info.html("Generation #:" + populations[0].getGenerations());
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