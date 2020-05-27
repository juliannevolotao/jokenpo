let userScore = 0;
let compScore = 0;

const runComputer = async (e) => {
  let user = e.target.alt;

  let types = ["rock", "paper", "scissors"];
  let computer = types[Math.floor(Math.random() * types.length)];

  userChoice_element.innerText = user;
  compChoice_element.innerText = computer;

  let message = await jokenpo(user, computer);
  setResult(message);
  loadScore(userScore, compScore);
};

const jokenpo = (user, computer) => {
  
  // ROCK
  if (computer === "rock" && user === "paper") {
    userScore++;
    return "Você venceu.";
  } else if (computer === "rock" && user === "scissors") {
    compScore++;
    return "Computador venceu.";
  } else if (computer === 'rock' && user === 'rock') {
    return "Empate";
  }

  // PAPER
  if (computer === 'paper' && user === 'scissors') {
    userScore++;
    return "Você venceu.";
  } else if (computer === 'paper' && user === 'rock') {
    compScore++;
    return "Computador venceu.";
  } else if (computer === 'paper' && user === 'paper') {
    return "Empate";
  }

  // SCISSORS
  if (computer === 'scissors' && user === 'rock') {
    userScore++;
    return "Você venceu.";
  } else if (computer === 'scissors' && user === 'paper') {
    compScore++;
    return "Computador venceu.";
  } else if (computer === 'scissors' && user === 'scissors') {
    return "Empate";
  }
};

const setResult = (msg) => {
  result.innerText = msg;
}

const loadScore = (userS, compS) => {
  userScore_element.innerText = userS;
  compScore_element.innerText = compS;

  if( userS > compS) {
    scoreBox_element.className = 'green-glow';
  } else if (userS < compS) {
    scoreBox_element.className = 'red-glow';
  } else {
    scoreBox_element.className = 'grey-glow';
  }

};

document
  .querySelector("#rbutton")
  .addEventListener("click", runComputer, false);
document
  .querySelector("#pbutton")
  .addEventListener("click", runComputer, false);
document
  .querySelector("#sbutton")
  .addEventListener("click", runComputer, false);

let userScore_element = document.getElementById("user-score");
let compScore_element = document.getElementById("comp-score");
let userChoice_element = document.getElementById("user-choice");
let compChoice_element = document.getElementById("comp-choice");
let scoreBox_element = document.getElementById("scores");
let result = document.getElementById("result");
