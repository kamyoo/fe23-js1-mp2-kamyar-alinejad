const compChoice = document.getElementById("computer-choice");
const yourChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const playButton = document.getElementById("play");
const possibleChoices = ["rock", "paper", "scissors"];

const choices = document.getElementsByName("choice");
choices.forEach((c) => {
  c.addEventListener("click", () => {
    playButton.disabled = false;
  });
});

playButton.addEventListener("click", (e) => {
  const buttonsArray = Array.from(choices);
  const selected = buttonsArray.filter((b) => b.checked);
  addTextToSpan(yourChoice, selected[0].id);
  const randChoice = generateComputerChoice();
  showResult(selected[0].id, randChoice);
  e.target.disabled = true;
  choices.forEach((b) => {
    b.checked = false;
  });
});

function addTextToSpan(spanControl, text) {
  spanControl.textContent = text;
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  const computerChoice = possibleChoices[randomNumber];
  addTextToSpan(compChoice, possibleChoices[randomNumber]);
  return computerChoice;
}

function showResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    addTextToSpan(resultDisplay, "tied");
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "scissors") {
      addTextToSpan(resultDisplay, "you won");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "rock") {
      addTextToSpan(resultDisplay, "you won");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "paper") {
      addTextToSpan(resultDisplay, "you won");
    }
  }
}
