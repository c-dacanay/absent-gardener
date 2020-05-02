class Bed {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    if (random(1) < 0.5) {
      this.flower = true;
    } else {
      this.flower = false;
    }
  }

  display() {
    stroke(0);
    fill(200);
    rect(this.x, this.y, this.w, this.w);

    if (this.flower) {
      fill(255);
      ellipse(this.x + w * 0.5, this.y + w * 0.5, this.w);
    }
  }
}