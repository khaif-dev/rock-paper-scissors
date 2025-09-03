let computerScore = 0;
let humanScore = 0;

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(){
  let computerChoice = Math.round(Math.random()*2)  
  if(computerChoice === 0){
    return 'rock';
  }
  else if(computerChoice === 1){
    return 'paper'
  }
  else{
    return 'scissors'
  }
};
getComputerChoice();

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
function playRound(humanChoice, computerChoice){
  // determine the winner
  if(humanChoice === computerChoice){
    return "IT's A TIE"
  }
  else if(
    (computerChoice ==='rock' && humanChoice === 'scissors')||
    (computerChoice === 'scissors' && humanChoice === 'paper')||
    (computerChoice === 'paper' && humanChoice === 'rock')){
      return "COMPUTER WINS"
  }
  else{
    return "YOU WIN"
  }  
}

//function to display results
// Display the running score, and announce a winner of the game once one player reaches 5 points
function displayResults(result, humanChoice, computerChoice){
  const resultDisplay = document.querySelector(".result-display")
  resultDisplay.innerHTML = '';
  const roundResults = document.createElement('h3')
  // resultDisplay.classList.add("round-results")
  const currentScore = document.createElement('h2')
  //  score.classList.add('score')

  // display winner for each round
  if(result === "IT's A TIE"){
    roundResults.textContent = `It's a Tie! You both choose ${humanChoice}`     
  }
  else if (result === 'COMPUTER WINS'){
    roundResults.textContent = `YOU LOOSE, ${computerChoice} beats ${humanChoice}`
    computerScore++;
  }
  else{
    roundResults.textContent = `🎉YOU WIN! ${humanChoice} beats ${computerChoice}`
    humanScore++;  
  }

  currentScore.textContent =`YOU: ${humanScore} | Computer : ${computerScore}` 
  // update
  resultDisplay.appendChild(roundResults); 
  resultDisplay.appendChild(currentScore);
  
}

// playGame triggers the game to start once a player clicks either of the buttons
// It takes value of the clicked button and compares it to the computer humanChoice
// then announces the winner of that round and display the score once one of the scores reaches 5 points
function playGame(){
    let btns = document.querySelectorAll("button");

  btns.forEach(btn =>{
    btn.addEventListener("click", function(){
      const humanChoice = btn.value;
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
      displayResults(result, humanChoice, computerChoice);
    });
  });

}

playGame();