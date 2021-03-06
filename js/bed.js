class Bed {
  constructor(dna_, x, y, w, counter_) {
    this.dna = dna_;
    this.x = x;
    this.y = y;
    this.w = w;
    this.counter = counter_;
    this.mouseover = false;
    this.fill = 255;
    let genes = this.dna.genes;
    // console.log('genes', genes);
    if (genes[this.counter] < 0.67) {
      this.flower = true;
      this.pop = floor(map(genes[this.counter], 0, 1, 0, numPops));
      // this.pop = floor(random(numPops));
      this.bloom = floor(map(genes[this.counter], 0, 1, 0, popmax));
    } else {
      this.flower = false;
    }

  }

  display() {
    stroke(200);
    strokeWeight(2);
    fill(this.fill);
    rect(this.x, this.y, this.w, this.w);

    if (this.mouseover) {
      this.fill = 200;
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
    // console.log(this.dna);
    if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w) {
      this.mouseover = true;


      if (this.flower) {
        //hovering adds fitness
        populations[this.pop].population[this.bloom].addFit();


        //if clicking on a flower...d
        if (this.mouseover && mouseIsPressed) {
          //prune and turn off flower
          if (pruneOn) {
            console.log("prune!");
            this.flower = false;
          };
          //harvest flower
          if (harvestOn) {
            console.log("harvesting!");


            // let seed = populations[this.pop].population[this.bloom].seed();
            // seed.parent("#seed1")
            // console.log(seed)
            // image(seed, 0, 0);
          };
        }


      } else { return };
    } else {
      this.mouseover = false
    };
  }

  getDNA() {
    return this.dna;
  }
}

