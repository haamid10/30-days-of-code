
const totalScore = {computerChoice: 0, playerChoice: 0}

function getComputerChoice() {
  let bsr =['Rock','Paper','Scissors']
  let bsrButton = Math.floor(Math.random()*3)
   return bsr[bsrButton]
}

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
  
  

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  // Hint: on a score of -1
  if(score == -1){
    resultDiv.innerText= 'you lose '
  } else if( score == 0){
    resultDiv.innerText=  'its tie'
  }else{
    resultDiv.innerText= 'you won'
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `${totalScore['playerChoice']}`
}

function onClickRPS(playerChoice) {
  console.log(playerChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  let score = getResult(playerChoice ,computerChoice)
  console.log(score)
  totalScore['playerChoice'] += score
  console.log(totalScore)
  showResult(score, playerChoice ,computerChoice)


  
}


function playGame() {
  let RpsButtons = document.querySelectorAll('.rpsButton')
  console.log(RpsButtons)
  // RpsButtons.onclick = () => console.log(RpsButtons.value)
 
RpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value)
})
 


  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
  
}


function endGame(totalScore) {
  totalScore['playerChoice'] = 0
  totalScore['computerChoice'] = 0


  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
 handsDiv.innerText = ''
 playerScoreDiv.innerText = ''
  
}

playGame()