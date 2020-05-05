let content = document.getElementById("grab");
let tendGardenButton;

window.onload = function () {
  console.log('hi');
  introScreen();
  // tendGarden();
  // pruneGarden();
  // harvestSeeds();
};

function introScreen() {
  checkAbil();

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
  checkAbil();

  content.innerHTML = ` 
  <div class="center">
  <button id="prunePlant" class="button color-tran bg-tran" onclick="pruneGarden()">
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

function pruneGarden() {
  checkAbil();
  pruneOn = true;
  content.innerHTML = ` 
  <div class="center">
  <div class="info debug">
  <p>you be prunin. Prune the plan yo! Yeah.</p><br><br><br>
  </div>
  <button id="harvestSeeds" class="button color-tran bg-tran" onclick="tendGarden()">
  Harvest Seeds
  </button>
  <br>
  <p class="stop" onclick="stopGardening()">Stop Gardening</p>
  </div>
  `
}

function harvestSeeds() {
  // checkAbil();
  harvestOn = true;
  content.innerHTML = ` 

  <div class="center">
  <div id="seed1"></div>
  <p>Harvest seeds baby!</p>
  <button id="prunePlant" class="button color-tran bg-tran" onclick="pruneGarden()">
  Prune Plant
  </button>
  <button id="planttSeeds" class="button color-tran bg-tran" onclick="plantSeeds()">
  Plant Seeds
  </button>
  <br>
  <p class="stop" onclick="stopGardening()">Stop Gardening</p>
  </div>
  `
}

function plantSeeds() {

}

function stopGardening() {
  checkAbil();
  content.innerHTML = `
  <br>
  <p>After a long day in the sun, you leave the garden.<br>

  In some time, you will be able to visit again.<br>
  
  When would you like to come back?<br>
  </p>
  <br><br>
  <button id="prunePlant" class="button color-tran bg-tran" onclick="pruneGarden()">
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

function aboutGarden() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("overlay-text").style.display = "block";
}

function aboutGardenOff() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay-text").style.display = "none";
}

function checkAbil() {
  pruneOn = false;
  harvestOn = false;
}

