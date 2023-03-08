// new game
var activePlayer;

var roundScore;

var scores;

var diceDom = document.querySelector(".dice");
var isNewGame;
newGame();

// doll dice button
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("New Game дарж шинэ тоглоом эхлүүлнэ үү!");
  }
});

// hold buttone
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("New Game дарж шинэ тоглоом эхлүүлнэ үү!");
  }
});

document.querySelector(".btn-new").addEventListener("click", newGame);

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

function newGame() {
  activePlayer = 0;

  roundScore = 0;

  scores = [0, 0];
  isNewGame = true;
  document.getElementById("name-0").textContent = "Нараа";
  document.getElementById("name-1").textContent = "Мөөгий";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceDom.style.display = "none";
}
