/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var roundScore, dice, finalScore
roundScore = 0;
finalScore = 0;

var DDice = document.querySelector(".btn-roll");

function rollDice (){
     //generate random values to display for dice
     dice = Math.floor(Math.random() * 6) + 1;
     //display the result of the dice
     var diceDOM = document.querySelector(".dice");
     diceDOM.style.display = "block";
     diceDOM.src = `dice-${dice}.png`;

     //current score to be updated
     var currentUpdate = document.querySelector(".player-current-score");

     if (dice !== 1){
        roundScore += dice;
     }else{
        roundScore = 0;
    }
 
    currentUpdate.innerHTML = roundScore;    

}

DDice.addEventListener("click", rollDice);


    //if user pressed hold button
    var holdBtn = document.querySelector(".btn-hold");    
    function hold(){
        var scoreUpdate = document.querySelector(".player-score")
        finalScore += roundScore;
        scoreUpdate.innerHTML = finalScore;
    }
holdBtn.addEventListener("click", hold);







