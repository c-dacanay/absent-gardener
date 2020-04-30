// The Nature of Code by Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

// Fitness Function f(t) = t (where t is "time" mouse rolls over face)

// Create a new face
class Rose {
  constructor(dna_, x_, y_, size_) {
    this.rolloverOn = false; // Are we rolling over this face?
    this.dna = dna_; // rose's DNA
    this.x = x_; // Position on screen
    this.y = y_;
    this.wh = size_ * 2; // Size of square enclosing face
    this.fitness = 1;
    this.size = size_;
    this.r = new Rectangle(this.x - this.wh / 2, this.y - this.wh / 2, this.wh, this.wh);
    // this.center = random(colorArray.length);
    this.ran = random(-4);
    this.offset = random(-1, 1)
  }

  // Display the flower
  display() {
    let genes = this.dna.genes;

    //creates the shape for the flower
    let n = floor(map(genes[0], 0, 1, 2, 7));
    let d = floor(map(genes[1], 0, 1, 2, 9));
    if (n == d) {
      n += n - .5
    }

    //creates the petal colors
    let c_petal = map(genes[2], 0, 1, 0, colorArray.length);
    let petal_color;
    if (c_petal > 4) {
      petal_color = colorArray[floor(c_petal) + floor(this.offset)];
    } else {
      petal_color = colorArray[floor(c_petal)];
    }

    //other color for stroke
    let size_stroke = map(genes[2], 0, 1, .09, 1.5);
    let otherColor = floor(c_petal + this.ran);
    if (otherColor < 0) {
      otherColor = colorArray.length - 2;
    } else if (otherColor > colorArray.length) {
      otherColor = floor(random(colorArray.length));
    }
    let c_stroke = colorArray[otherColor];

    //radius and color for the center circle
    let r_center = map(genes[5], 0, 1, 4, 30) + (this.ran) * 5;


    push();
    translate(this.x, this.y);
    let k = n / d;

    blendMode(OVERLAY);
    stroke(c_stroke);
    strokeWeight(size_stroke);

    blendMode(BLEND);
    fill(petal_color);

    beginShape();
    for (let a = 0; a < TWO_PI * d; a += .01) {
      // let xoff = map(cos(ani), -1, 1, 0, .5);
      // let yoff = map(sin(ani), -1, 1, 0, .2);
      // let zoff = map(sin(ani), -1, 1, 0, 1);
      // let radius = (30 * noise(xoff, yoff)) * cos(k * a);
      let radius = this.size * cos(k * a);
      let x = radius * cos(a);
      let y = radius * sin(a);
      vertex(x, y);
    }
    endShape();

    blendMode(OVERLAY);
    ellipseMode(CENTER);
    noStroke();
    fill(c_stroke);
    ellipse(0, 0, r_center);

    //     console.log(otherColor);
    //     console.log(c_stroke);

    // if (this.rolloverOn) {
    //   console.log(n);
    //   console.log(d);
    // } else {
    // 
    // }


    // Draw the bounding box
    // noFill();
    // blendMode(BLEND);
    // stroke(0.25);
    // strokeWeight(.5);

    // rectMode(CENTER);
    // rect(0, 0, this.wh, this.wh);

    pop();

    // Display fitness value
    // textAlign(CENTER);
    if (this.rolloverOn) fill(0);
    else fill(0.25);
    // text('' + floor(this.fitness), this.x, this.y + 55);
  }

  getFitness() {
    this.fitness = random(0, 1);
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }

  // Increment fitness if mouse is rolling over face
  rollover(mx, my) {
    if (this.r.contains(mx, my)) {
      // this.rolloverOn = true;
      return true;
      console.log(mx, my);
      // this.fitness += 0.25;
    } else {
      return false;
      // this.rolloverOn = false;
    }
  }
}