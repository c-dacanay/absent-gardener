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
      this.bloom = new Rose(this.dna, this.x + w * 0.5, this.y + w * 0.5, w * .8)
    } else {
      this.flower = false;
    }
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
      this.bloom.display();
    }

  }

  hover(x, y) {
    if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w) {
      this.mouseover = true
    } else {
      this.mouseover = false
    };
  }

}

