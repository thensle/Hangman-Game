window.onload = function runJavascript(){

// Array filled with words for the game to access
var wordBank = ["bake", "baste", "batter","caramelize","clarify","cream","dissolve","dredge","drizzle","fillet","flambe","fricassee","garnish","glaze","gratin","julienne","marinate","meuniere","parboil","reduce","render","scallop","scald","simmer","steep","stir","toss","truss","tongs","colander","whisk","sieve","grater","chinois","spatula","ladle","corkscrew","knives","crockpot"]

// Selecting a word
var gameStatus = 0;
var randomNum;
var selectedWord;
var selectedWordArray;
var winCounter = 0;
var guessCounter = 10;
var stringWord = [];
var guessedLetters = [];


//Starting the game/turn; program randomly picks a word
if(gameStatus === 0) {
	randomNum = Math.floor(Math.random() * wordBank.length);
	selectedWord = wordBank[randomNum];
	selectedWordArray = selectedWord.split("");
	displayWord(selectedWord);
	guessCounter = 10;
	guessedLetters = [];
}

//Capturing user input

document.onkeyup = function(event) {

// Get user input in a common format
        var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();

          if ((letterTyped === "a") || (letterTyped === "b") || (letterTyped === "c") || (letterTyped === "d") || (letterTyped === "e") || (letterTyped === "f") || (letterTyped === "g") || (letterTyped === "h") || (letterTyped === "i") || (letterTyped === "j") || (letterTyped === "k") || (letterTyped === "l") || (letterTyped === "m") || (letterTyped === "n") || (letterTyped === "o") || (letterTyped === "p") || (letterTyped === "q") || (letterTyped === "r") || (letterTyped === "s") || (letterTyped === "t") || (letterTyped === "u") || (letterTyped === "v") || (letterTyped === "w") || (letterTyped === "x") || (letterTyped === "y") || (letterTyped === "z")){
  				guessedLetters.push(letterTyped);


      		
          }

          if ((letterTyped != "a") && (letterTyped != "b") && (letterTyped != "c") && (letterTyped != "d") && (letterTyped != "e") && (letterTyped != "f") && (letterTyped != "g") && (letterTyped != "h") && (letterTyped != "i") && (letterTyped != "j") && (letterTyped != "k") && (letterTyped != "l") && (letterTyped != "m") && (letterTyped != "n") && (letterTyped != "o") && (letterTyped != "p") && (letterTyped != "q") && (letterTyped != "r") && (letterTyped != "s") && (letterTyped != "t") && (letterTyped != "u") && (letterTyped != "v") && (letterTyped != "w") && (letterTyped != "x") && (letterTyped != "y") && (letterTyped != "z")) {
          	alert("Invalid key! Try again!");
          }
      }

function displayWord(word) {
	var parent = document.getElementById("word");
	var childDiv = document.createElement("div");
	var stringWord = [];

		for (var i = 0; i < word.length; i++) {
			stringword = stringWord.push("_ ");
 
		}

	childDiv.innerHTML = stringWord;
	parent.appendChild(childDiv);

}

function checkLetter(letter) {
	var letterInWord = false;

		for (var i = 0; i < selectedWord.length; i++) {
			 if (selectedWord.charAt(i) === letter) {
			 	letterInWord = true;

			 }
			 if (letterInWord = true) {
			 	for (var i = 0; i < selectedWord.length; i++) {
			 		if (selectedWord.charAt(i) === letter) {
			 			stringWord[i] = letter;

			 }
			}


			}
 
		

	childDiv.innerHTML = stringWord;
	parent.appendChild(childDiv);
}

function updateScores(){

}

// function addLetterToBank(letter){


// }

function revealLetter(index, word, letter){
	
}
}