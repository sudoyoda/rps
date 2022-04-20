
function computerChoice()  {
    let x = Math.random();
    if (x<1/3)
    {
        return 'rock';
    }
    else if (x<2/3)
    {
        return 'paper';
    }
    else return 'scissors';
}

function playRound(playerChoice, computerChoice) {
        
    if (playerChoice === computerChoice)
    {
        return '-1';
    }
    else if (playerChoice === 'rock')
    {
        return computerChoice === 'scissors' ? true : false;
    }
    else if (playerChoice === 'scissors')
    {
        return computerChoice === 'paper' ? true : false;
    }
    else if (playerChoice === 'paper')
    {
        return computerChoice === 'rock' ? true : false;
    }
}


const computerElement = document.querySelector('.computer-choice');
const playerElement = document.querySelector('.player-choice');
const roundResult = document.querySelector('.round');
const playerScore = document.querySelector('.score-player');
const computerScore = document.querySelector('.score-computer');
const audioRock = document.querySelector('.rock-audio');
const audioPaper = document.querySelector('.paper-audio');
const audioScissors = document.querySelector('.scissors-audio');

    const options = document.querySelectorAll('.playerChoices');
    options.forEach(option => {
        option.addEventListener('click', function(e) {
            if (e.target.alt=='rock')
                {   
                    e.target.classList.add('clicked');
                    const unclicked = setTimeout(function()
                    {
                        e.target.classList.remove('clicked'); 
                } , 150);
                    audioRock.currentTime = 0;
                    audioRock.play();
                    let x = computerChoice();
                    computerElement.textContent = `Computer chose ${x}`;
                    playerElement.textContent = `Player chose rock`;
                    let y = playRound('rock',x);
                    if (!y) 
                    {
                        computerScore.textContent += "x";
                        roundResult.textContent = "Computer won this round";
                        if (computerScore.textContent === "xxxxx")
                            {
                                roundResult.textContent = "Computer won";
                                playerScore.textContent = '';
                                computerScore.textContent = '';
                                playerElement.textContent = 'Player';
                                computerElement.textContent = 'Computer';
                            }
                        
                    }    
                    else if (y==1) 
                    {
                        playerScore.textContent+= "x";
                        roundResult.textContent = "Player won this round";
                        if (playerScore.textContent === "xxxxx")
                        {
                            roundResult.textContent = "Player won";
                            playerScore.textContent = '';
                            computerScore.textContent = '';
                            playerElement.textContent = 'Player';
                            computerElement.textContent = 'Computer';
                        }
                        
                    }
                    else roundResult.textContent = "tie";
                }
                else if (e.target.alt=='paper')
                {   
                    e.target.classList.add('clicked');
                    const unclicked = setTimeout(function()
                    {
                        e.target.classList.remove('clicked'); 
                } , 150);
                    audioPaper.currentTime = 0;
                    audioPaper.play();
                    let x = computerChoice();
                    computerElement.textContent = `Computer chose ${x}`;
                    playerElement.textContent = `Player chose paper`;
                    let y = playRound('paper',x);
                    if (!y) 
                    {
                        computerScore.textContent += "x";
                        roundResult.textContent = "Computer won this round";
                        if (computerScore.textContent === "xxxxx")
                            {
                                roundResult.textContent = "Computer won";
                                playerScore.textContent = '';
                                computerScore.textContent = '';
                                playerElement.textContent = 'Player';
                                computerElement.textContent = 'Computer';
                            }
                        
                    }    
                    else if (y==1) 
                    {
                        playerScore.textContent+= "x";
                        roundResult.textContent = "Player won this round";
                        if (playerScore.textContent === "xxxxx")
                        {
                            roundResult.textContent = "Player won";
                            playerScore.textContent = '';
                            computerScore.textContent = '';
                            playerElement.textContent = 'Player';
                            computerElement.textContent = 'Computer';
                        }
                        
                    }
                    else roundResult.textContent = "tie";
                    
                } 
                else if (e.target.alt='scissors')
                {   
                    e.target.classList.add('clicked');
                    const unclicked = setTimeout(function()
                    {
                        e.target.classList.remove('clicked'); 
                } , 150);
                    audioScissors.currentTime = 0;
                    audioScissors.play();
                    let x = computerChoice();
                    computerElement.textContent = `Computer chose ${x}`;
                    playerElement.textContent = `Player chose scissors`;
                    let y = playRound('scissors',x);
                    if (!y) 
                    {
                        computerScore.textContent += "x";
                        roundResult.textContent = "Computer won this round";
                        if (computerScore.textContent === "xxxxx")
                            {
                                roundResult.textContent = "Computer won";
                                playerScore.textContent = '';
                                computerScore.textContent = '';
                                playerElement.textContent = 'Player';
                                computerElement.textContent = 'Computer';
                            }
                        
                    }    
                    else if (y==1) 
                    {
                        playerScore.textContent+= "x";
                        roundResult.textContent = "Player won this round";
                        if (playerScore.textContent === "xxxxx")
                        {
                            roundResult.textContent = "Player won";
                            playerScore.textContent = '';
                            computerScore.textContent = '';
                            playerElement.textContent = 'Player';
                            computerElement.textContent = 'Computer';
                        }
                        
                    }
                    else roundResult.textContent = "tie";
                }
            });
    });







    if (computerScore.textContent === "xxxxx")
    {
        roundResult.textContent = "Computer won";
        playerScore.textContent = '';
        computerScore.textContent = '';
        playerElement.textContent = 'Player';
        computerElement.textContent = 'Computer';
    }
