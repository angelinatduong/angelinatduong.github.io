const baseLayer = document.getElementById("baseLayer");
const outfitLayer = document.getElementById("outfitLayer");
const accessoryLayer = document.getElementById("accessoryLayer");
const accessoryLayer2 = document.getElementById("accessoryLayer2");

const accs = [
  "images/bandanar.png",
  "images/bowor.png",
  "images/bowpblue.png",
  "images/bowye.png",
  "images/chainsil.png",
  "images/gchain.png",
  "images/glassb.png",
  "images/glassesg.png",
  "images/heartglasses.png",
  "images/redbowtie.png"
];

const accs2 = [
  "images/bandanar.png",
  "images/bowor.png",
  "images/bowpblue.png",
  "images/bowye.png",
  "images/chainsil.png",
  "images/gchain.png",
  "images/glassb.png",
  "images/glassesg.png",
  "images/heartglasses.png",
  "images/redbowtie.png"
];

const outfits = [
  "images/frogpj.png",
  "images/heartshorts.png",
  "images/oradress.png",
  "images/sahmama.png",
  "images/sahpapa.png",
  "images/white tee jeans.png",
  "images/bluegreenfit.png"
];

const bases = [
  "images/base bunny.png",
  "images/teddyb.png"
];

let baseIndex = 0;
let outfitIndex = 0;
let accIndex = 0;
let acc2Index = 0;

function nextOutfit() {
  outfitIndex = (outfitIndex + 1) % outfits.length;
  outfitLayer.src = outfits[outfitIndex];
}

function prevOutfit() {
  outfitIndex = (outfitIndex - 1 + outfits.length) % outfits.length;
  outfitLayer.src = outfits[outfitIndex];
}

function nextAccessory() {
  accIndex = (accIndex + 1) % accs.length;
  accessoryLayer.src = accs[accIndex];
}

function prevAccessory() {
  accIndex = (accIndex - 1 + accs.length) % accs.length;
  accessoryLayer.src = accs[accIndex];
}

function nextAccessory2() {
  acc2Index = (acc2Index + 1) % accs2.length;
  accessoryLayer2.src = accs2[acc2Index];
}

function prevAccessory2() {
  acc2Index = (acc2Index - 1 + accs2.length) % accs2.length;
  accessoryLayer2.src = accs2[acc2Index];
}

function nextBase() {
  baseIndex = (baseIndex + 1) % bases.length;
  baseLayer.src = bases[baseIndex];
}

function prevBase() {
  baseIndex = (baseIndex - 1 + bases.length) % bases.length;
  baseLayer.src = bases[baseIndex];
}


function toggleDucks(){
  document.body.classList.toggle("show-ducks");
}

let score = 0;

function collectDuck(duck){
  duck.style.opacity = "0";
  duck.style.pointerEvents = "none";

  score++;
  document.getElementById("score").innerText = "Ducks found: " + score;

  playSound();
}

function playSound(){
  let audio = new Audio("sounds/pop.mp3");
  audio.play();
}

function toggleDucks(){
  document.body.classList.toggle("show-ducks");

  const scoreEl = document.getElementById("score");

  scoreEl.style.opacity = "1";
  scoreEl.style.transform = "translateY(0)";

  let audio = new Audio("sounds/appear.mp3");
  audio.play();

  randomSpawnDucks();
}

/*const music = document.getElementById("bgMusic");
let musicOn = false;

function toggleMusic(){
  if(musicOn){
    music.pause();
    musicOn = false;
    document.getElementById("musicBtn").innerText = "Music: OFF 🔇";
  } else {
    music.play().catch(err => {
      console.log("Audio blocked until user interacts:", err);
    });

    musicOn = true;
    document.getElementById("musicBtn").innerText = "Music: ON 🎵";
  }
}

*/


/*const baseLayer = document.getElementById("baseLayer");
const outfitLayer = document.getElementById("outfitLayer");
const accessoryLayer = document.getElementById("accessoryLayer");
const accessoryLayer2 = document.getElementById("accessoryLayer2");

const accs = [
  "images/bandanar.png",
  "images/bowor.png",
  "images/bowpblue.png",
  "images/bowye.png",
  "images/chainsil.png",
  "images/gchain.png",
  "images/glassb.png",
  "images/glassesg.png",
  "images/heartglasses.png",
  "images/redbowtie.png"
];

const accs2 = [
  "images/bandanar.png",
  "images/bowor.png",
  "images/bowpblue.png",
  "images/bowye.png",
  "images/chainsil.png",
  "images/gchain.png",
  "images/glassb.png",
  "images/glassesg.png",
  "images/heartglasses.png",
  "images/redbowtie.png"
];
 
const outfits = [
  "images/frogpj.png",
  "images/heartshorts.png",
  "images/oradress.png",
  "images/sahmama.png",
  "images/sahpapa.png",
  "images/white tee jeans.png",
  "images/bluegreenfit.png"
];
 
const bases = [
"images/base bunny.png",
"images/teddyb.png"
];
 
let baseIndex = 0;
let outfitIndex = 0;
let accIndex = 0;
let acc2Index = 0;
 
 
 
function nextOutfit() {
  outfitLayer.src = outfits[outfitIndex];
  outfitIndex = (outfitIndex + 1) % outfits.length;
}
 
function nextAccessory() {
  accessoryLayer.src = accs[accIndex];
  accIndex = (accIndex + 1) % accs.length;
}
 
 
 
function prevOutfit() {
  outfitIndex = (outfitIndex - 1 + outfits.length) % outfits.length;
  outfitLayer.src = outfits[outfitIndex];
}
 
function prevAccessory() {
  accIndex = (accIndex - 1 + accs.length) % accs.length;
  accessoryLayer.src = accs[accIndex];
}
 
function nextBase() {
  baseLayer.src = bases[baseIndex];
  baseIndex = (baseIndex + 1) % bases.length;
}
 
function prevBase() {
  baseIndex = (baseIndex - 1 + bases.length) % bases.length;
  baseLayer.src = bases[baseIndex];
}

function nextAccessory2() {
  accessoryLayer2.src = accs2[acc2Index];
  acc2Index = (acc2Index + 1) % accs2.length;
}

function prevAccessory2() {
  acc2Index = (acc2Index - 1 + accs2.length) % accs2.length;
  accessoryLayer2.src = accs2[acc2Index];
}
 


function saveCharacter() {
  const state = {
    baseIndex: baseIndex,
    outfitIndex: outfitIndex,
    accIndex: accIndex,
    acc2Index: acc2Index
  };
  localStorage.setItem("savedCharacter", JSON.stringify(state));
  window.location.href = "ss.html";
}

*/
//////
 

 


/*
function changeClothes(type) {

  if (type === "Outfits") {
    clothingImage.src = outfits[outfitIndex];
    outfitIndex = (outfitIndex + 1) % outfits.length;
  }

  else if (type === "Accessories") {
    clothingImage.src = accs[accIndex];
    accIndex = (accIndex + 1) % accs.length;
  }

  else if (type === "Base") {
    clothingImage.src = "";
  }
}

*/


















/*
let outfitIndex = 0;
let accIndex = 0;

function changeClothes(type) {
  const clothingLayer = document.getElementById("clothing-layer");

  if (type === "Outfits") {
    clothingLayer.innerHTML = `<img src="${outfits[outfitIndex]}">`;
    outfitIndex++;
    if (outfitIndex >= outfits.length) {
      outfitIndex = 0;
    }
  }

  else if (type === "Accessories") {
    clothingLayer.innerHTML = `<img src="${accs[accIndex]}">`;
    accIndex++;
    if (accIndex >= accs.length) {
      accIndex = 0;
    }
  }

  else if (type === "Base") {
    clothingLayer.innerHTML = "";
  }
}
*/




















/*const accs = [
    "Project/bandanar.png",
    "Project/bowor.png",
    "Project/bowpblue.png",
    "Project/bowye.png",
    "Project/chainsil.png",
    "Project/gchain.png",
    "Project/glassb.png",
    "Project/glassesg.png",
    "Project/heartglasses.png",
    "Project/redbowtie.png"
];

const outfits = [
"Project/froggiepj.png",
"Project/heartshorts.png",
"Project/oradress.png",
"Project/sahmama.png",
"Project/sahpapa.png",
"Project/white tee jeans.png"
];

let currentIndex = 0;

function changeClothes() {
  const clothingLayer = document.getElementById("clothing-layer");

  clothingLayer.innerHTML = `<img src="${outfits[currentIndex]}">`;

  currentIndex++;

  if (currentIndex >= outfits.length) {
    currentIndex = 0;
  }
}*/


/*function changeClothes(itemType) {
    const clothingLayer = document.getElementById('clothing-layer');
    
    // Switch case to determine which "clothing" to show
    switch (itemType) {
        case 'shirt':
            clothingLayer.innerText = '👕';
            break;
        case 'dress':
            clothingLayer.innerText = '👗';
            break;
        case 'clear':
            clothingLayer.innerText = '';
            break;
        default:
            clothingLayer.innerText = '';
    }
}*/

