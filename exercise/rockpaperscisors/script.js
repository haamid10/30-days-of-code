/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {computerChoice: 0, playerChoice: 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let bsr =['Rock','Paper','Scissors']
  let bsrButton = Math.floor(Math.random()*3)
   return bsr[bsrButton]
}
// console.log(getComputerChoice()) 

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;

  if(playerChoice == computerChoice){
    score = 0
  }
    else if( playerChoice == 'Rock' && computerChoice == 'Scissors'){
       score = 1
    }
    else if( playerChoice == 'Scissors' && computerChoice == 'Paper'){
      score = 1
   } else if( playerChoice == 'Paper' && computerChoice == 'Scissors'){
    score = 1
 }else{
   score= -1
 }
 return score;
  }
  
  
  // Scissors

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1

  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  let score = getResult(playerChoice ,computerChoice)
  console.log(score)


  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let RpsButtons = document.querySelectorAll('.rpsButton')
  console.log(RpsButtons)
  // RpsButtons.onclick = () => console.log(RpsButtons.value)
 
RpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value)
})
 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()