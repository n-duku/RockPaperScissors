const getUserChoice = (userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else {
      console.log('Please enter a correct game option');
    }
  }
  
  let getComputerChoice = ()=>{
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  let determineWinner = (userChoice, computerChoice)=>{
    if(userChoice === computerChoice){
      return 'This game was a tie';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer has won';
      }else{
        return 'User has won'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User has won'; 
      }else {
        return 'Computer has won'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'User has won';
      }else {
        return 'Computer has won';
      }
    }
  }
  
  function playGame(){
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice();
   console.log(determineWinner(userInput, computerChoice));
  }
  
  playGame();