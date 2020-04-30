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
let grid = [];
let numPops = 5;
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
  textAlign(CENTER, CENTER);
}

function draw() {
  ///display the grid
  // let gridsize = size * 3;
  background(200);
  // translate(size / 2, size / 2)

  // for (let y = 0; y < 10; y++) {
  //   for (let x = 0; x < 10; x++) {
  //     let xpos = x * gridsize;
  //     let ypos = y * gridsize;

  //     let index = y * 10 + x; //find the index

  //     if (hover(xpos, ypos, gridsize, gridsize)) {
  //       fill(255, 0, 0);
  //     } else {
  //       fill(255);
  //     }
  //     stroke(0);
  //     rect(xpos, ypos, gridsize, gridsize);
  //     text(grid[index], xpos, ypos, gridsize, gridsize);

  //     push()
  //     translate(xpos - size / 2, ypos - size);
  //     populations[0].display(y);
  //     pop();

  //   }
  // }

  // display all the roses!
  for (let i = 0; i < numPops; i++) {
    push();
    translate(0, size + 20 * (i * 3));
    populations[i].display();
    populations[i].rollover(mouseX, mouseY);

    pop();
  }


  info.html("Generation #:" + populations[0].getGenerations());
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