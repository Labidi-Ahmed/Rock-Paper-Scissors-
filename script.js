function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function playRound(computerSelection, playerSelection) {
    switch (true) {
      case computerSelection === "rock" && playerSelection === "rock":
        return "draw";
      case computerSelection === "rock" && playerSelection === "paper":
        return "you win";
      case computerSelection === "rock" && playerSelection === "scissors":
        return "computer wins";
      case computerSelection === "paper" && playerSelection === "paper":
        return "draw";
      case computerSelection === "paper" && playerSelection === "scissors":
        return "you win";
      case computerSelection === "paper" && playerSelection === "rock":
        return "computer wins";
      case computerSelection === "scissors" && playerSelection === "rock":
        return "you win";
      case computerSelection === "scissors" && playerSelection === "paper":
        return "computer wins";
      case computerSelection === "scissors" && playerSelection === "scissors":
        return "draw";
      default:
        return "Invalid selection"; // Handle invalid input
    }
  }
  
  let round = 0;
  let computerScore = 0;
  let playerScore = 0;
  
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.value;
      const computerSelection = getComputerChoice();
      const result = playRound(computerSelection, playerSelection);
      
      switch (result) {
        case "computer wins":
          computerScore++;
          alert("Computer wins!");
          break;
        case "you win":
          playerScore++;
          alert("You win!");
          break;
        case "draw":
          alert("It's a draw!");
          break;
      }
      
      round++;
      
      
      if (round >= 5) {
        alert(`Game over! Final scores: Computer ${computerScore}, You ${playerScore}`);
        location.reload()
      }
    });
  });
  