const getUserChoice = (userInput) => {
  	userInput = userInput.toLowerCase();
      if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    } else {
    console.log ('Please type rock/paper/scissors');
  }
 };

function getComputerChoice(){
 const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  };
};

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return 'The game is a tie'
  };
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won'
    }else{
      return 'Human won'
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won'
    }else{
      return 'Human won'
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won'
    }else{
      return 'Human won'
    }
  }
  if (userChoice === 'bomb'){
    return 'Human won. Your blew everything up!'
  }
}


function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log (`You chose ${userChoice}`);
  console.log (`Computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
  }
playGame();
