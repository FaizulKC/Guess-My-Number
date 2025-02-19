let randomBox = document.querySelector(".random_number span");
let form = document.querySelector("form");
let guessInput = document.querySelector("#guessInput");
let againBtn = document.querySelector(".againBtn");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let body = document.querySelector("body");
//random number function
function randomNumber() {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  return randomNum;
}

let scoreNumber = 20;
let highestScore = 0;

let randomNum = randomNumber();

//Again button function
againBtn.addEventListener("click", function () {
  scoreNumber = 20;
  score.innerText = `💯 score: ${scoreNumber}`;
  result.innerText = "Start guessing...";
  randomNum = randomNumber();
  guessInput.value = "";
  randomBox.innerText = "?";
  body.style.backgroundColor = "#222";
});

//Main section function
form.addEventListener("submit", function myfunction(event) {
  event.preventDefault();
  let guessedNumber = guessInput.value;

  if (guessInput.value !== "" && guessInput.value != randomNum) {
    scoreNumber = scoreNumber - 1;
    scoreNumber < 0 ? "" : (score.innerText = `💯 score: ${scoreNumber}`);
    if (scoreNumber == 0) {
      result.innerText = `💥 You lost the game!`;
      body.style.backgroundColor = "#E52020";
    }
  }

  if (guessInput.value === "") {
    result.innerText = "⛔️ No number!";
  } else if (guessedNumber == randomNum) {
    result.innerText = "🎉 Correct Number!";
    randomBox.innerText = randomNum;

    if (scoreNumber > highestScore) {
      highscore.innerText = `🥇 Highscore: ${scoreNumber}`;
      highestScore = scoreNumber;
    }

    body.style.backgroundColor = "#60b347";
    guessInput.style.backgroundColor = "#222";
  } else if (guessedNumber < randomNum && scoreNumber != 0) {
    result.innerText = "📉 Too Low!";
  } else if (guessedNumber > randomNum && scoreNumber != 0) {
    result.innerText = "📈 Too High!";
  } else {
    console.log("");
  }
});
