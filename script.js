 let userScore = 0;
    let computerScore = 0;
    const userScoreSpan = document.getElementById("user-score");
    const computerScoreSpan = document.getElementById("computer-score");
    const resultDiv = document.getElementById("result");
    const historyLog = document.getElementById("history-log");

    function play(userChoice) {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const winner = getWinner(userChoice, computerChoice);
      updateScores(winner);
      showResult(userChoice, computerChoice, winner);
      logHistory(userChoice, computerChoice, winner);
    }

    function getWinner(user, computer) {
      if (user === computer) return "draw";
      if (
        (user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") 
        || (user === "scissors" && computer === "paper")
      ) {
        return "user";
      }
      return "computer";
    }

    function updateScores(winner) {
      if (winner === "user") userScore++;
      if (winner === "computer") computerScore++;
      userScoreSpan.textContent = userScore;
      computerScoreSpan.textContent = computerScore;
    }

    function showResult(user, computer, winner) {
      let message = `You chose ${user}, Computer chose ${computer}`;
      if (winner === "draw") {
        message += "It's a draw!";
      } else if (winner === "user") {
        message += "You win! ";
      } else {
        message += "You lose! ";
      }
      resultDiv.textContent = message;
    }

    function logHistory(user, computer, winner) {
      const entry = document.createElement("li");
      entry.textContent = `You: ${user}, Computer: ${computer} → ${
        winner === "draw" ? "Draw" : winner === "user" ? "Win" : "Loss"
      }`;
      historyLog.prepend(entry);
    }

    function resetGame() {
      userScore = 0;
      computerScore = 0;
      userScoreSpan.textContent = 0;
      computerScoreSpan.textContent = 0;
      resultDiv.textContent = "";
      historyLog.innerHTML = "";
    }