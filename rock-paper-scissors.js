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
  const roundResults = document.createElement('h3');
  const currentScore = document.createElement('h2');
  const finalScore = document.createElement('h1');

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

  // when any of the players reach 5 points, announce winner
  if(humanScore === 5 || computerScore === 5){
    if(humanScore > computerScore){
     finalScore.innerText = `🏆 CONGRATULATIONS! YOU WIN` 
    }else{
      finalScore.innerText = `COMPUTER WINS` 
    }
    resultDisplay.appendChild(finalScore)
    disableBtns();
    document.querySelector(".restartBtn").style.display = 'block'; //display restart btn when player score get to 5
  }
  
}

// playGame triggers the game to start once a player clicks either of the buttons
// It takes value of the clicked button and compares it to the computer humanChoice
// then announces the winner of that round and display the score once one of the scores reaches 5 points
function playGame(){
    let btns = document.querySelectorAll(".container button");

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

// disable the rock paper scissors buttons when a player score is 5 points
function disableBtns (){
  let btns = document.querySelectorAll('.container button');
  btns.forEach(btn =>{
    btn.disabled = true;
  })
}

// function to restart the game when player final score is 5
function restartGame(){
  // reinitialize scores
  humanScore = 0;
  computerScore = 0;
  
  // clear the results display
  const resultDisplay = document.querySelector(".result-display")
  resultDisplay.innerHTML = ''; 

  // reenable buttons and disable restart
  let btns = document.querySelectorAll('.container button');
  btns.forEach(btn =>{
      btn.disabled = false;
  })

  document.querySelector('.restartBtn').style.display = 'none';
}
restartGame();

// attach restart game to restart button
const restartBtn = document.querySelector(".restartBtn")
restartBtn.addEventListener("click", restartGame);