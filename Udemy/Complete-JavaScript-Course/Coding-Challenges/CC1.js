



var height1=prompt('What is the height of player 1?');
height1=parseInt(height1);
var height2=prompt('What is the height of player 2?');
height2=parseInt(height2);
var height3=prompt('What is the height of player 3?');
height3=parseInt(height3);

var age1=prompt('What is the age of player 1?');
age1=parseInt(age1);
var age2=prompt('What is the age of player 2?');
age2=parseInt(age2);
var age3=prompt('What is the age of player 3?');
age3=parseInt(age3);

var player1Score=height1+age1*5;
var player2Score=height2+age2*5;
var player3Score=height3+age3*5;

if(player1Score>player2Score && player3Score){
    alert('Player 1 is the Winner\nPlayer 1 Score: '+player1Score+'\nPlayer 2 Score: '+player2Score+'\nPlayer 3 Score: '+player3Score);
}

else if(player1Score && player3Score < player2Score){
    alert('Player 2 is the Winner\nPlayer 1 Score: '+player1Score+'\nPlayer 2 Score: '+player2Score+'\nPlayer 3 Score: '+player3Score);
}

else if(player1Score && player2Score < player3Score){
    alert('Player 3 is the Winner\nPlayer 1 Score: '+player1Score+'\nPlayer 2 Score: '+player2Score+'\nPlayer 3 Score: '+player3Score);
}

else{
    alert('Players 1, 2, and 3 Tied!\nPlayer 1 Score: '+player1Score+'\nPlayer 2 Score: '+player2Score+'\nPlayer 3 Score: '+player3Score);
}
