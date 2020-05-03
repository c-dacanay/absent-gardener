class Garden {
  constructor(mutationRate_) {
    this.dna = new DNA();
    this.growing = []
    this.mutationRate = mutationRate_;
    this.plot = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        counter++;
        this.plot[i][j] = new Bed(this.dna, i * w, j * w, w, counter);
      }
    }
    console.log('this plot:', this.plot);
    console.log('this dna', this.dna)
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

  grow() {

    counter = 0;
    let newGarden = [];
    // for (var i = 0; i < cols; i++) {
    // for (let j = 0; j < rows; j++) {
    newGarden.push(this.dna);
    // }

    // }
    console.log(newGarden)

    // for (var i = 0; i < cols; i++) {
    // for (let i = 0; i < newGarden.length; i++) {
    newGarden[0].mutate(this.mutationRate);
    // }
    // }

    console.log(newGarden)
    // this.plot = make2DArray(cols, rows);
    // for (let i = 0; i < cols; i++) {
    //   for (let j = 0; j < rows; j++) {
    //     counter++;
    //     this.plot[i][j] = new Bed(newGarden, i * w, j * w, w, counter);
    //   }
    //   console.log('thisplot2', this.plot)
    // }

  }
}