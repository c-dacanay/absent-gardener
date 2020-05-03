class Bed {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.mouseover = false;
    this.dna = new DNA();
    this.fill = 255;
    if (random(1) < 0.5) {
      this.flower = true;
      this.pop = floor(random(numPops));
      this.bloom = floor(random(popmax));
    } else {
      this.flower = false;
    }

    // this.blossom = populations[this.pop].population[this.bloom];
  }

  display() {
    stroke(200);
    fill(this.fill);
    rect(this.x, this.y, this.w, this.w);

    if (this.mouseover) {
      this.fill = 150;
    } else {
      this.fill = 255;
    }

    if (this.flower) {

      push();
      translate(this.x + w / 2, this.y + w / 2)
      //pick a flower randomly from the array of populations
      populations[this.pop].population[this.bloom].display();
      pop();
    }

  }

  hover(x, y) {
    if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w) {
      this.mouseover = true;
      if (this.flower) {
        //hovering adds fitness
        populations[this.pop].population[this.bloom].addFit();
      }
    } else {
      this.mouseover = false
    };
  }

}

