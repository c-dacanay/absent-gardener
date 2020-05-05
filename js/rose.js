// The Nature of Code by Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

// Fitness Function f(t) = t (where t is "time" mouse rolls over face)

// Create a new face
class Rose {
  constructor(dna_, x_, y_, size_, colors_) {
    // this.rolloverOn = false; // Are we rolling over this face?
    this.dna = dna_; // rose's DNA
    this.x = x_; // Position on screen
    this.y = y_;
    this.wh = size_ * 2; // Size of square enclosing face
    this.fitness = 1;
    this.size = size_;
    this.colors = colors_;
    // this.r = new Rectangle(this.x - this.wh / 2, this.y - this.wh / 2, this.wh, this.wh);
    // this.center = random(colorArray.length);
    this.ran = random(-4);
    this.offset = random(-1, 1)
    this.canvas = createGraphics(this.wh, this.wh);
    // this.canvas = createGraphics(this.size, this.size);
    this.canvas.pixelDensity(2);
    ///this is where we start to draw the flowers
    let genes = this.dna.genes;

    //creates the shape for the flower
    let n = floor(map(genes[0], 0, 1, 2, 7));
    let d = floor(map(genes[1], 0, 1, 2, 9));
    if (n == d) {
      n += n - .5
    }

    //creates the petal colors
    let c_petal = map(genes[0], 0, 1, 0, this.colors.length);
    let petal_color;
    if (c_petal > 4) {
      petal_color = this.colors[floor(c_petal) + floor(this.offset)];
    } else {
      petal_color = this.colors[floor(c_petal)];
    }

    //other color for stroke
    let size_stroke = map(genes[4], 0, 1, .09, 1.5);
    let otherColor = floor(c_petal + this.ran);
    if (otherColor < 0) {
      otherColor = this.colors.length - 2;
    } else if (otherColor > this.colors.length) {
      otherColor = floor(random(this.colors.length));
    }
    let c_stroke = this.colors[otherColor];

    //radius and color for the center circle
    let r_center = map(genes[5], 0, 1, 4, 30) + (this.ran) * 5;


    this.canvas.push();
    //damn it. incredible.
    this.canvas.translate(this.size, this.size)
    // this.canvas.background(0, 10);
    // this.canvas.translate(this.x, this.y);
    imageMode(CENTER);
    let k = n / d;

    this.canvas.blendMode(OVERLAY);
    this.canvas.stroke(c_stroke);
    this.canvas.strokeWeight(size_stroke);
    // this.canvas.noStroke();
    this.canvas.blendMode(BLEND);
    this.canvas.fill(petal_color);

    this.canvas.beginShape();
    for (let a = 0; a < TWO_PI * d; a += .01) {
      let radius = this.size / 2 * cos(k * a);
      let x = radius * cos(a);
      let y = radius * sin(a);
      this.canvas.vertex(x, y);
    }
    this.canvas.endShape();

    this.canvas.blendMode(OVERLAY);
    this.canvas.ellipseMode(CENTER);
    this.canvas.fill(c_stroke);
    this.canvas.ellipse(0, 0, r_center);
    this.canvas.pop();



  }

  // Display the flower
  display() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.canvas, 0, 0);
    pop();

    // Display fitness value
    // textAlign(CENTER);
    if (this.rolloverOn) fill(0);
    else fill(0.25);
    // text('' + floor(this.fitness), this.x, this.y + 55);
  }

  seed() {
    return this.canvas;
    image(this.canvas, 0, 0)
  }

  getFitness() {
    this.fitness = random(0, 1);
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }

  // Increment fitness if mouse is rolling over face
  addFit() {
    this.fitness += 0.25;
  }
  // }
}