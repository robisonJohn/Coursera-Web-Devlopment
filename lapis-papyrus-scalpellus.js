const userScore = 0;
const computerScore = 0;
//Here we are caching the DOM, i.e. storing all of these variables for future use
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//we separate using _ to differentiate between regular variables and DOM variables
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

