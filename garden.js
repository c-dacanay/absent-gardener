class Garden {
  constructor(mutationRate_) {
    this.dna = new DNA();
    this.newGarden = []
    this.newDNA;
    this.mutationRate = mutationRate_;
    this.plot = make2DArray(cols, rows); //to hold the current population
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        counter++;
        this.plot[i][j] = new Bed(this.dna, i * w, j * w, w, counter);
      }
    }
    // console.log('this plot:', this.plot);
    // console.log('this dna', this.dna)
  }

  display() {
    for (var i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.plot[i][j].hover(mouseX, mouseY);
        this.plot[i][j].display();
      }
    }
    // console.log(this.plot[1][1])

  }

  mutate() {
    // console.log('hi')
    this.newGarden = [];
    counter = 0;
    for (var i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.newGarden.push(this.plot[i][j]);
        // console.log('here')
      }
      console.log(this.newGarden)
      let m = floor(random(this.newGarden.length));
      this.newDNA = this.newGarden[8].getDNA();
      console.log(this.newDNA);
      // console.log(this.newGarden);
      // console.log(this.newDNA)

      this.newDNA.mutate(this.mutationRate);

      // console.log(this.newDNA);
    }

  }

  grow() {
    // console.log(newGarden)
    // this.plot = [];
    this.plot = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        counter++;
        this.plot[i][j] = new Bed(this.newDNA, i * w, j * w, w, counter);
      }
      // /  console.log('thisplot2', this.plot)
    }

  }
}
