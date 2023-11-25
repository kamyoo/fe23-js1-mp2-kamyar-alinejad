let mittAntal = 0;
let datorAntal = 0;

const stenSaxPase = ["sten", "sax", "pase"];
const mittVal = document.getElementById("mittVal");
const dataVal = document.getElementById("dataVal");
const visaResultat = document.getElementById("clickMsg");
const spelaBtn = document.getElementById("spela");
let result = document.getElementById("resultat");
const divEl = document.querySelector("div");
const btn = document.querySelector("button");
const sten = document.querySelector("#sten");
const sax = document.querySelector("#sax");
const pase = document.querySelector("#pase");
const rspImg = document.querySelectorAll("img");
const formEl = document.querySelector("form");
const h3Message = document.querySelector("#meddelande");
const vinnare = document.querySelector("#vinnare");
const playerOne = document.querySelector("#playerOne");
function skapaDatorVal() {
  const stenSaxPase = ["sten", "sax", "pase"];
  const randomNumber = Math.floor(Math.random() * stenSaxPase.length);
  const datornsVal = stenSaxPase[randomNumber];
  addTextToSpan(datornsVal, stenSaxPase[randomNumber]);
  return datornsVal;
}

formEl.addEventListener("submit", (event) => {
  const nameInput = formEl.querySelector("input").value;
  h3Message.innerText = `Då kör vi ${nameInput}. Låt oss se om du kan överlista dumburken.`;
  playerOne.innerText = `${nameInput}:`;
  event.preventDefault();
});

function addTextToSpan(spanControl, text) {
  spanControl.textContent = text;
}

function visaResultatet(myPick) {
  let compPick = skapaDatorVal();
  console.log(myPick, compPick);

  if (myPick == compPick) {
    addTextToSpan(visaResultat, "Fan! Vi valde samma!");
    const cpuVal = document.getElementById("cpuPick");
    cpuVal.src = `./img/${compPick}.jpg`;
  } else if (myPick == "sten") {
    if (compPick == "pase") {
      addTextToSpan(visaResultat, "Torsk! Dumburken vann!");
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/pase.jpg`;
      datorAntal += 1;
    } else if (compPick == "sax") {
      addTextToSpan(visaResultat, `Bravooo!! ${mittAntal + 1} poäng till dig!`);
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/sax.jpg`;
      mittAntal += 1;
    }
  } else if (myPick === "pase") {
    if (compPick === "sax") {
      addTextToSpan(visaResultat, "Torsk! Dumburken vann!");
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/sax.jpg`;
      datorAntal += 1;
    } else if (compPick == "sten") {
      addTextToSpan(visaResultat, `Bravooo!! ${mittAntal + 1} poäng till dig!`);
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/sten.jpg`;
      mittAntal += 1;
    }
  } else if (myPick === "sax") {
    if (compPick === "sten") {
      addTextToSpan(visaResultat, "Torsk! Dumburken vann!");
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/sten.jpg`;
      datorAntal += 1;
    } else if (compPick == "pase") {
      addTextToSpan(visaResultat, `Bravooo!! ${mittAntal + 1} poäng till dig!`);
      const cpuVal = document.getElementById("cpuPick");
      cpuVal.src = `./img/pase.jpg`;
      mittAntal += 1;
    }
  }
  result.innerText = `${mittAntal} - ${datorAntal}`;
  if (mittAntal >= 3) {
    addTextToSpan(visaResultat, `Grattis! Du knäckte dumburken!`);
    document.querySelector("#pase").disabled = true;
    document.querySelector("#sax").disabled = true;
    document.querySelector("#sten").disabled = true;
    const gameOverBox = document.querySelector("#vinnare");
    gameOverBox.classList.add("gameOver");
  } else if (datorAntal >= 3) {
    addTextToSpan(visaResultat, `Nej du, dumburken ägde dig!`);
    document.querySelector("#pase").disabled = true;
    document.querySelector("#sax").disabled = true;
    document.querySelector("#sten").disabled = true;
    const gameOverBox = document.querySelector("#vinnare");
    gameOverBox.classList.add("gameOver");
  }
}

sten.addEventListener("click", (event) => {
  visaResultatet(event.currentTarget.id);
  const minSten = document.getElementById("mittPick");
  minSten.src = "./img/sten.jpg";
});

sax.addEventListener("click", (event) => {
  visaResultatet(event.currentTarget.id);
  const minSax = document.getElementById("mittPick");
  minSax.src = "./img/sax.jpg";
});

pase.addEventListener("click", (event) => {
  visaResultatet(event.currentTarget.id);
  const minPase = document.getElementById("mittPick");
  minPase.src = "./img/pase.jpg";
});

document.querySelector("#reset").addEventListener("click", (event) => {
  mittAntal = 0;
  datorAntal = 0;
  result.innerText = "0 - 0";
  clickMsg.innerText = "Då kör vi igen!";

  document.querySelector("#pase").disabled = false;
  document.querySelector("#sax").disabled = false;
  document.querySelector("#sten").disabled = false;
  document.querySelector("#vinnare").classList.remove("gameOver");
  document.querySelector("#mittPick").src = "";
  document.querySelector("#cpuPick").src = "";
});
