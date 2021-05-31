// create two objects: one for the player and one for the computer

const player = {
  currentChoice: null;
}
const computer = {
  currentChoice: null;
}

//We can have three distinct choices
const choices = ["lapis", "papyrus", "scalpellus"];

//We need to create a function called randomIndex that uses a mathematical function to generate the computer's choice
const randomIndex = Math.floor(Math.random * choices.length);

//Then we can update the computer's choice based on the randomIndex function
computer.currentChoice = choices[randomIndex];

//we can hard-code in the player's choice for now
player.currentChoice = choices[0];

//Now we have to account for the various possible solutions: tie, rock beats scissors, paper beats rock, scissors beats paper

//First, consider the tie scenario
if (computer.currentChoice === player.currentChoice) {
	console.log("It is a tie! The computer and player both chose " + computer.currentChoice);
}
//Now consider a scenario in which there is not a tie, i.e. rock beats scissors, paper beats rock, scissors beats paper
// Note: choices[0] is rock, choices[1] is paper, choices[2] is scissors
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[2]) {
	console.log(choices[0] + " beats " + choices[2] + " The player wins!")
}
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[0]) {
	console.log(choices[1] + " beats " + choices[0] + " The player wins!")
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[1]) {
	console.log(choices[2] + " beats " + choices[1] + " The player wins!")
}
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[1]) {
	console.log(choices[1] + " beats " + choices[0] + " The computer wins!")
}
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[2]) {
	console.log(choices[2] + " beats " + choices[1] + " The computer wins!")
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[0]) {
	console.log(choices[0] + " beats " + choices[2] + " The computer wins!")
}