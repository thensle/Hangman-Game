window.onload = function runJavascript(){

// Array filled with words for the game to access
var wordBank = ["bake", "baste", "batter","caramelize","clarify","cream","dissolve","dredge","drizzle","fillet","flambe","fricassee","garnish","glaze","gratin","julienne","marinate","meuniere","parboil","reduce","render","scallop","scald","simmer","steep","stir","toss","truss","tongs","colander","whisk","sieve","grater","chinois","spatula","ladle","corkscrew","knives","crockpot"]

// Selecting a word
var gameStatus = 0;
var randomNum;
var selectedWord;
var selectedWordArray;
var winCounter = 0;
var guessCounter;
var stringWord = [];
var guessedLetters = [];




//Starting the game/turn; program randomly picks a word
gameStart();

function gameStart(){
	randomNum = Math.floor(Math.random() * wordBank.length);
	selectedWord = wordBank[randomNum];
	selectedWordArray = selectedWord.split("");
	displayWord(selectedWord);
	console.log(selectedWord);
	guessCounter = 10;
	guessedLetters = [];
	guesses.innerHTML = guessCounter;
	wins.innerHTML = winCounter;

}
//Capturing user input

document.onkeyup = function(event) {

// Get user input in a common format
        var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();

          if ((letterTyped === "a") || (letterTyped === "b") || (letterTyped === "c") || (letterTyped === "d") || (letterTyped === "e") || (letterTyped === "f") || (letterTyped === "g") || (letterTyped === "h") || (letterTyped === "i") || (letterTyped === "j") || (letterTyped === "k") || (letterTyped === "l") || (letterTyped === "m") || (letterTyped === "n") || (letterTyped === "o") || (letterTyped === "p") || (letterTyped === "q") || (letterTyped === "r") || (letterTyped === "s") || (letterTyped === "t") || (letterTyped === "u") || (letterTyped === "v") || (letterTyped === "w") || (letterTyped === "x") || (letterTyped === "y") || (letterTyped === "z")){
  			
          	//First, check if letter has been typed before, if so, return out of loop
  			for (var i = 0; i < guessedLetters.length; i++){
  				if (guessedLetters[i] === letterTyped){
  					return;
  				}
  			}
  				checkLetter(letterTyped);
  				guessedLetters.push(letterTyped);
  				updateScores();
  				console.log(letterTyped);
  				console.log(guessedLetters);
  				
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
			stringWord.push("_");
 
		}

	childDiv.innerHTML = stringWord.join(" ");
	parent.appendChild(childDiv);
	console.log(stringWord);

}

function checkLetter(letter) {
	var letterInWord = false;

		for (var i = 0; i < selectedWord.length; i++) {
			 if (selectedWord.charAt(i) === letter) {
			 	letterInWord = true;
			 }
			}
			 if (letterInWord === true) {
			 	for (var i = 0; i < selectedWord.length; i++) {
			 		if (selectedWord.charAt(i) === letter) {
			 			stringWord[i] = letter;

			 } if (selectedWord.charAt(i) != letter){
			 	stringWord[i] = stringWord[i];
			 }
			 console.log("display on screen after guess: " + stringWord);
			}
			} if (letterInWord === false) {
				guessCounter--;
			}
			
		}

function updateScores() {
	//For word/underscore spaces

	word.innerHTML=stringWord.join(" ");

	//For guesses remaining
	guesses.innerHTML = guessCounter;

	if (guessCounter === 0){
		alert("Sorry - no more guesses left!");
		gameStart();
	}

	//For letters

	bank.innerHTML = guessedLetters.join(" ");

	// Did the user win? Update winner counter

	if (selectedWordArray === stringWord){
		console.log(selectedWordArray);
		console.log(stringWord);
		winCounter++;
		wins.innerHTML = winCounter;

	}


	}
}