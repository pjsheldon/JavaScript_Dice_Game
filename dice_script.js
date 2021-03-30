/* dice_Script. JS for Dice.html
         by PJ sheldon 
           10/18/20              */

var score1 = 0;                                                  // player score variable global
var score2 = 0;                                                  // computer score variable glabal

var pPointStatus = document.getElementById("pScore");            // variable for the player score location global
var cPointStatus = document.getElementById("compScore");         // variable for the computer score location global

function rolldice() {                                            // roll dice section
	var die1 = document.getElementById("die1");                  // variable location for dice 1
	var die2 = document.getElementById("die2");                  // variable location for dice 2
	var die3 = document.getElementById("die3");                  // variable location for dice 3
	var die4 = document.getElementById("die4");                  // variable location for dice 4 

	var playerStatus = document.getElementById("playerStatus");  // variable location for the player status of what is rolled
	var compStatus =  document.getElementById("computerStatus"); // variable location for the computer stuatus of what is rolled
	var winnerStatus = document.getElementById("winnerStatus");  // variable location for winner of each round status
	
	var d1 = Math.floor(Math.random() * 6) + 1;                  // variable and math for the first dice with random selection between 1 and 6 
	var d2 = Math.floor(Math.random() * 6) + 1;                  // variable and math for the second dice with random selction between 1 and 6
	var d3 = Math.floor(Math.random() * 6) + 1;                  // variable and math for the third dice with random selection between 1 and 6
	var d4 = Math.floor(Math.random() * 6) + 1;                  // variable and math for the fourth dice with randmom selection between 1 and 6 
	
	var diceTotal1 = d1 + d2;                                    // variable and math for the total of dice 1 and dice 2  
	var diceTotal2 = d3 + d4;                                    // variable and math for the total of dice 3 and dice 4 
	
	var pPointStatus = document.getElementById("pScore");        // variable for the player score location
	var cPointStatus = document.getElementById("compScore");     // variable for the computer score location

	var playerDoublePoints = d1 + d2 * 2;                        // variable and math for the player's double points 
	var compDoublePoints = d3 + d4 * 2;                          // variable and math for the computer's double points

	
	var targetScore = 100;                                       // variable of the highest that game can go
	//var gameOver = false;                                      // the gameover use for a while loop

	die1.innerHTML = d1;                                         // to change the dice one to the from the 0 place holder to the random number
	die2.innerHTML = d2;                                         // to change dice two from the 0 placeholder the random number generated
	die3.innerHTML = d3;                                         // to change dice three from the 0 placeholder to the random number genrated 
	die4.innerHTML = d4;                                         // to change dice four from the 0 placeholder to the random number generated 
	
	playerStatus.innerHTML = "You rolled a  " + d1 + " and a " + d2 + " for a total of " + diceTotal1 + ".";   // player status writing the number of each die and the total
	compStatus.innerHTML = "Computer rolled a " + d3 + " and a " + d4 + " for a total of " + diceTotal2 + "."; // computer status writing the number of each die and the total


	/* if player's score is more than computer's score */
	if (diceTotal1 > diceTotal2) {
		winnerStatus.innerHTML = "Player Wins This Round!!\n "; // the winning status changes to player wins 
		score1 = score1 + diceTotal1;                           // players score has the total of the dice added to it  
		pPointStatus.textContent = score1.toString();           // points displays changes
	}

	/* if thew computer's score is more than the player's */
	else if (diceTotal1 < diceTotal2) {
		winnerStatus.innerHTML = "Computer Wins This Round!\n ";// winner status changes to computer wins
		score2 = score2 + diceTotal2;                           // computer score has the total of the dice added to it
		cPointStatus.textContent = score2.toString();           // computers points display changes
	}

	/* if doubles rolled and players score morw than computer's score */
	if (d1 == d2 && diceTotal1 > diceTotal2) {
		winnerStatus.innerHTML = "Player Wins this round!! Double Points, For Rolling Doubles"; // winner status changes to the play wins and double points
		score1 = diceTotal1 + score1;                            // adds total plus the total again to the score
		pPointStatus.textContent = score1.toString();            // changes the display total of the player's
	}

	/* if the computer rolls doubles and more than player's score */
	else if (d3 == d4 && diceTotal1 < diceTotal2) {
		winnerStatus.innerHTML = "Computer Wins This Round! Double Points, For Rolling Doubles"; // winner status changes to the computer wins ans doubles 
		score2 = diceTotal2 + score2;                            // adds the total score and the total score again to the overl score
		cPointStatus.textContent = score2.toString();            // changes the display total of the computers 
	}

	/* if the totals are the same */
	else if (diceTotal1 == diceTotal2) {         
		winnerStatus.innerHTML = "Tie!! No Points awarded"      // changes the winner status to a tie and no point to computer or player
	}


	/*if (d1 == d2) {
		playerStatus.innerHTML += " Doubles!";
	}

	else if (d3 == d4) {
		compStatus.innerHTML += " Doubles!" 
	}*/
	
	/* if player reaches 100 or more first */	
	if (score1 >= targetScore) {
		alert("Game Over!\nPlayer Wins!!\nCongradualtions!\nPlay Again by Pressing Reset"); // an alert let the player know they won
	}

	/* if computer reaches 100 or more first */
	else if (score2 >= targetScore) {
		alert("Game Over!\nComputer Wins!\nTry Again By Pressing Reset") // an aler to let the player know the ocmputer won
	}
}

function resetBar() { // fuction for the rest button
	location.reload(); // reloads webpage
}
	

	