const game = () => {
  let pScore = 0;
  let cScore = 0;

  /// starting the game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play game

  const playGame = () => {
    const options = document.querySelectorAll(".options button");

    //computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    const playerImage = document.querySelector(".player-hand");
    const compImage = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", e => {
        e.target.style.animation = "";
      });
    });

    options.forEach(option => {
      option.addEventListener("click", e => {
        let audio = new Audio("audio/sh.mp3");
        audio.play();
        let compNum = Math.floor(Math.random() * 3);
        let compChoice = computerOptions[compNum];

        setTimeout(() => {
          compareHands(e.target.classList.value, compChoice);
          compImage.setAttribute("src", `images/${compChoice}.png`);
          playerImage.setAttribute(
            "src",
            `images/${e.target.classList.value}.png`
          );
        }, 2000);

        //Animation

        playerImage.style.animation = "shakePlayer 2s ease";
        compImage.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //update sccore

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const comScore = document.querySelector(".computer p");
    playerScore.innerHTML = pScore;
    comScore.innerHTML = cScore;
  };

  const compareHands = (playerChoice, compChoice) => {
    const heading = document.querySelector(".winner");

    //checking draw
    if (playerChoice === compChoice) {
      heading.innerHTML = "Draw";
      return;
    }

    //checking rock

    if (playerChoice === "rock") {
      if (compChoice === "scissors") {
        heading.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        let audio = new Audio("audio/win.mp3");
        audio.play();
        return;
      } else {
        heading.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //checking paper

    if (playerChoice === "paper") {
      if (compChoice === "scissors") {
        heading.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        heading.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        let audio = new Audio("audio/win.mp3");
        audio.play();
        return;
      }
    }

    //checking scissors
    if (playerChoice === "scissors") {
      if (compChoice === "paper") {
        heading.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        let audio = new Audio("audio/win.mp3");
        audio.play();
      } else {
        heading.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
      }
    }
  };
  startGame();
  playGame();
};

game();
