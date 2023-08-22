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
  
  // Get references to the elements you want to update
  const winner = document.querySelector(".winner");
  const s1 = document.querySelector(".scoreP");
  const s2 = document.querySelector(".scoreC");
  
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.value;
      const computerSelection = getComputerChoice();
      const result = playRound(computerSelection, playerSelection);
      const popup=document.querySelector(".popup");
      const popupHeader=document.querySelector(".header");
      const overflow=document.querySelector("#overlay");
      const playAgain=document.querySelector(".again");
      
      switch (result) {
        case "computer wins":
          computerScore++;
          s2.innerHTML = computerScore;  
          winner.innerHTML = "You lost!";
          break;
        case "you win":
          playerScore++;
          winner.innerHTML = "You won!";
          s1.innerHTML = playerScore; 
          break;
        case "draw":
          winner.innerHTML = "It's a draw!";
          break;
      }
      
      round++;
      
      if (round >= 5) {
        popupHeader.innerHTML=(`Game over! Final scores: Computer ${computerScore}, You ${playerScore}`);
        popup.classList.add("active")
        overflow.classList.add("active")
        playAgain.addEventListener('click',()=>{window.location.reload()})
        
        document.querySelectorAll("input").forEach(input => {
          input.value = "";
        });
      }
    });
  });
  