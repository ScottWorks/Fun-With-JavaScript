/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach a user defined number of points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll, setPoints;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Generate Random Number
        var dice1=Math.floor((Math.random()*6)+1);
        var dice2=Math.floor((Math.random()*6)+1);
        
        // 2. Display Result
        var diceDOM1=document.querySelector('.dice1');
        diceDOM1.style.display='block';
        diceDOM1.src='dice-'+dice1+'.png';

        var diceDOM2=document.querySelector('.dice2');
        diceDOM2.style.display='block';
        diceDOM2.src='dice-'+dice2+'.png';

        // 3. Update the round score if the rolled number is not 1.
        if(dice1!==1 && dice2!==1){
            roundScore+=dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
            // If player rolls 6 two times in a row, restart score and change player
            if(dice1==6 && lastRoll==6 || dice2==6 && lastRoll==6){
                scores[activePlayer]=0; 
                document.getElementById('score-'+activePlayer).textContent='0'; 
                dice1=null;
                dice2=null;                                
                nextPlayer();   
            }
            else{
                lastRoll=null;           
            }
            
            if(dice1==6){
                lastRoll=dice1;
            }
            else if(dice2==6){
                lastRoll=dice2;
            }
        }
        else{
            nextPlayer();
        }    
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // add current score to global score
        scores[activePlayer]+=roundScore;
    
        // update UI
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]; 
    
        // check if someone won
        if(scores[activePlayer]>=setPoints){
            gamePlaying=false;
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice1').style.display='None';
            document.querySelector('.dice2').style.display='None';            
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }
        else{
            nextPlayer();        
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    gamePlaying = true; 
    scores=[0, 0];
    roundScore=0;
    activePlayer=0        
    lastRoll=null;
    setPoints=prompt('Please enter score limit:');


    document.querySelector('.dice1').style.display='None';
    document.querySelector('.dice2').style.display='None';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('score-user').textContent=setPoints;
}


function nextPlayer(){    
    if(activePlayer==0){
        activePlayer=1;
        clearAndSwitch();                
    }
    else{
        activePlayer=0;
        clearAndSwitch();        
    }
}


function clearAndSwitch(){
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display='None';
    document.querySelector('.dice2').style.display='None';
    
}
