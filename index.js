const scoreValueEL = document.getElementById("player-score")
const cpuValueEL = document.getElementById("cpu-score")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playerSelectionEl = document.getElementById("player-selection")
const compSelectionEl = document.getElementById("computer-selection")
const gameOptionsEl = document.getElementById("game-options")
const rockSelection = document.querySelector("#player-selection .rock")
const paperSelection = document.querySelector("#player-selection .paper")
const scissorsSelection = document.querySelector("#player-selection .scissors")
const compRockSelection = document.querySelector("#computer-selection .rock")
const compPaperSelection = document.querySelector("#computer-selection .paper")
const compScissorsSelection = document.querySelector("#computer-selection .scissors")
const compEmptyPlaceholder = document.querySelector("#computer-selection .empty-placeholder")
const playAgain = document.getElementById("play-again")
const resultDisplayEl = document.getElementById("result-display")
const resultsEl = document.getElementById("results")
const rulesEl = document.getElementById("rules")
const rulesBtn = document.getElementById("rules-button")
const modalEl = document.getElementById("modal")
const closeModal = document.getElementById("close-modal")

let playerScore = 0;
let cpuScore = 0;
let currentSelection;
let currentSelectionNum;
let compNumber;

rock.addEventListener("click", playerSelection)
paper.addEventListener("click", playerSelection)
scissors.addEventListener("click", playerSelection)
playAgain.addEventListener("click", restart)
rulesBtn.addEventListener("click", displayRules)
closeModal.addEventListener("click", closeRules)
window.addEventListener("touchend", closeRules)

function playerSelection() {

  currentSelection = event.target.id;
  gameOptionsEl.style.display = "none"
  playerSelectionEl.style.visibility = "visible"

    if(currentSelection === "rock") {
      paperSelection.classList.add("hidden")
      scissorsSelection.classList.add("hidden")
      // rockSelection.style.marginTop = "40px";
      currentSelectionNum = 0
    }   else if (currentSelection === "paper") {
          rockSelection.classList.add("hidden")
          scissorsSelection.classList.add("hidden")
          currentSelectionNum = 1
    }   else {
          rockSelection.classList.add("hidden")
          paperSelection.classList.add("hidden")
          currentSelectionNum = 2
    }

  compEmptyPlaceholder.style.visibility = "visible"

  setTimeout(computerSelection,500)
}

function computerSelection() {
  compEmptyPlaceholder.style.visibility = "hidden"
  compEmptyPlaceholder.classList.add("hidden")
  compRockSelection.style.display = "block"
  compPaperSelection.style.display = "block"
  compScissorsSelection.style.display = "block"


  compSelectionEl.style.visibility = "visible"
  let randomNumber = Math.floor(Math.random()*3)
  compNumber = randomNumber
  if (randomNumber === 0) {
    compPaperSelection.style.display = "none"
    compScissorsSelection.style.display = "none"
    compPaperSelection.classList.add("hidden")
    compScissorsSelection.classList.add("hidden")
    // compRockSelection.style.marginTop = "50px"
  } else if (randomNumber === 1) {
    compScissorsSelection.style.display = "none"
    compRockSelection.style.display = "none"
    compScissorsSelection.classList.add("hidden")
    compRockSelection.classList.add("hidden")
  } else {
    compPaperSelection.style.display = "none"
    compRockSelection.style.display = "none"
    compPaperSelection.classList.add("hidden")
    compRockSelection.classList.add("hidden")
  }

  // restartButton();
  // result()

  setTimeout(restartButton,1000)
  setTimeout(result,500)
}

function result() {
  resultDisplayEl.style.visibility = "visible"

  if (compNumber === currentSelectionNum) {
    resultDisplayEl.innerHTML = "DRAW"
  } else if (compNumber === 0 && currentSelectionNum === 1){
    resultDisplayEl.innerHTML = "YOU WIN"
  } else if (compNumber === 0 && currentSelectionNum === 2) {
    resultDisplayEl.innerHTML = "YOU LOSE"
  } else if (compNumber === 1 && currentSelectionNum === 0){
    resultDisplayEl.innerHTML = "YOU LOSE"
  } else if (compNumber === 1 && currentSelectionNum === 2) {
    resultDisplayEl.innerHTML = "YOU WIN"
  } else if (compNumber === 2 && currentSelectionNum === 0){
    resultDisplayEl.innerHTML = "YOU WIN"
  } else if (compNumber === 2 && currentSelectionNum === 1) {
    resultDisplayEl.innerHTML = "YOU LOSE"
  }

  if (resultDisplayEl.innerHTML === "YOU WIN") {
    playerScore += 1;
    scoreValueEL.innerHTML = playerScore;
    paperSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(86,113,245),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
    rockSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(220,46,78),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
    scissorsSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px rgb(236,158,78),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
    } else if (resultDisplayEl.innerHTML === "YOU LOSE") {
     cpuScore += 1;
     cpuValueEL.innerHTML = cpuScore
     compPaperSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(86,113,245),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
     compRockSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(220,46,78),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
     compScissorsSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px rgb(236,158,78),0 0 0 50px rgb(42,56,85),0 0 0 100px rgb(37,52,83), 0 0 0 150px rgb(33,50,80)";
     playerSelectionEl.style.zIndex = "1"
   } else {
   }
  }


function restartButton() {
  playAgain.style.visibility = "visible"
}

function restart() {
  gameOptionsEl.style.display = "flex";
  rockSelection.classList.remove("hidden");
  paperSelection.classList.remove("hidden");
  scissorsSelection.classList.remove("hidden");
  compRockSelection.classList.remove("hidden")
  compPaperSelection.classList.remove("hidden")
  compScissorsSelection.classList.remove("hidden");
  playAgain.style.visibility = "hidden";
  resultDisplayEl.innerHTML = "";
  playerSelectionEl.style.visibility = "hidden";
  compSelectionEl.style.visibility = "hidden";
  compEmptyPlaceholder.style.visibility = "hidden"
  compEmptyPlaceholder.classList.remove("hidden")
  compRockSelection.style.display = "none"
  compPaperSelection.style.display = "none"
  compScissorsSelection.style.display = "none"
  paperSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(86,113,245)";
  rockSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(220,46,78)";
  scissorsSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px rgb(236,158,78)";
  compPaperSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(86,113,245)";
  compRockSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px  rgb(220,46,78)";
  compScissorsSelection.style.boxShadow = "0 5px inset rgb(200, 200, 200), 0 7px rgb(236,158,78)";
  playerSelectionEl.style.zIndex = ""
}

function displayRules() {
  modalEl.style.display = "block"
}

function closeRules() {
  modalEl.style.display = "none"
  }










//
