let content = document.getElementById("grab");
let tendGardenButton;

window.onload = function () {
  console.log('hi');
  introScreen();
  // tendGarden();
};

function introScreen() {
  content.innerHTML = `
  <div class="header debug">
  <h1>
  <span id="the">The</span>
  Absent<br />
  Gardener
  </h1>
  </div>
  <div class="info debug">
  <p>Here we put some info bleet bloot</p>
  <p>Here's s'more information</p>
  <p>Wow! Nice garden you have.</p>
  <br />
  
  <button id="tendGarden" class="button color-tran bg-tran" onclick="tendGarden()">
  Tend the Garden
  </button>`

}

function tendGarden() {
  content.innerHTML = ` 
  <div class="center">
  <button id="prunePlant" class="button color-tran bg-tran" onclick="tendGarden()">
  Prune Plant
  </button>
  <button id="harvestSeeds" class="button color-tran bg-tran" onclick="tendGarden()">
  Harvest Seeds
  </button>
  <br>
  <p class="stop" onclick="stopGardening()">Stop Gardening</p>
  </div>
  `
}

function stopGardening() {
  content.innerHTML = `
  <br>
  <p>After a long day in the sun, you leave the garden.<br>

  In some time, you will be able to visit again.<br>
  
  When would you like to come back?<br>
  </p>
  <br><br>
  <button id="prunePlant" class="button color-tran bg-tran" onclick="tendGarden()">
  1 Year
  </button>
  <button id="harvestSeeds" class="button color-tran bg-tran" onclick="tendGarden()">
  10 Years
  </button>
  <button id="harvestSeeds" class="button color-tran bg-tran" onclick="tendGarden()">
  100 Years
  </button>
  <br>

  `
}


// function introScreen() {
//   console.log(element);
//   element = `
//   <div class="header debug">
//   <h1>
//     <span id="the">The</span>
//     Absent<br />
//     Gardener
//   </h1>
// </div>
// <div class="info debug">
//   <p>Here we put some info bleet bloot</p>
//   <br />

//   <button id="tendGarden" class="button color-tran bg-tran">
//     Tend the Garden
//   </button>
//   <button id="tendGarden" class="button color-tran bg-tran">
//     Tend the Garden
//   </button>
//   <button id="tendGarden" class="button color-tran bg-tran">
//     Tend the Garden
//   </button>`;
// }