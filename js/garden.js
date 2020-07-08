class Garden {
  constructor(mutationRate_) {
    this.dna = new DNA();
    this.newGarden;
    this.newDNA = [];
    this.mutationRate = mutationRate_;
    this.plot = make2DArray(cols, rows); //to hold the current population
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        counter++;
        this.plot[i][j] = new Bed(this.dna, i * w, j * w, w, counter);
      }
    }
  }

  display() {
    for (var i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.plot[i][j].hover(mouseX, mouseY);
        this.plot[i][j].display();

      }
    }
  }

  change() {
    //I need to get the DNA from the plots themselves I think...
    //take this DNA and mutate it slightly.
    //This changes where the flowers are on the plots.
    this.newGarden = this.dna;
    this.newGarden.mutate(this.mutationRate);
  }

  changeDNA() {
    //I think this one is pushing the plot's DNA, but the plot's DNA isn't mutated??
    for (var i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.newDNA.push(this.plot[i][j].getDNA());
      }
    }
    console.log(this.newDNA);
    this.newGarden = this.dna;
    // console.log(this.newGarden);
    // this.newDNA 
  }

  grow() {
    counter = 0;
    this.plot = [];

    this.plot = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        counter++;
        this.plot[i][j] = new Bed(this.newGarden, i * w, j * w, w, counter);
      }
    }

  }
}
