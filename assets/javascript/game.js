window.onload = function runJava(){

// Array filled with words for the game to access
var wordBank = ["bake", "baste", "batter","caramelize","clarify","cream","dissolve","dredge","drizzle","fillet","flambe","fricassee","garnish","glaze","gratin","julienne","marinate","meuniere","parboil","reduce","render","scallop","scald","simmer","steep","stir","toss","truss","tongs","colander","whisk","sieve","grater","chinois","spatula","ladle","corkscrew","knives","crockpot"]

// Selecting a word
var gameStatus = 0;
var randomNum;
var selectedWord;
var winCounter = 0;
var guessCounter = 10;
var stringWord;


//Starting the game/turn; program randomly picks a word
if(gameStatus === 0) {
	var randomNum = Math.floor(Math.random() * wordBank.length);
	var selectedWord = wordBank[randomNum];
	displayWord(selectedWord);
}

//Capturing user input

document.onkeyup = function(event) {

// Get user input in a common format
        var letterTyped = String.fromCharCode(event.keyCode).toLowerCase();

          if ((letterTyped === "a") || (letterTyped === "b") || (letterTyped === "c") || (letterTyped === "d") || (letterTyped === "e") || (letterTyped === "f") || (letterTyped === "g") || (letterTyped === "h") || (letterTyped === "i") || (letterTyped === "j") || (letterTyped === "k") || (letterTyped === "l") || (letterTyped === "m") || (letterTyped === "n") || (letterTyped === "o") || (letterTyped === "p") || (letterTyped === "q") || (letterTyped === "r") || (letterTyped === "s") || (letterTyped === "t") || (letterTyped === "u") || (letterTyped === "v") || (letterTyped === "w") || (letterTyped === "x") || (letterTyped === "y") || (letterTyped === "z")){
          		for (var i = 0; i < selectedWord.length; i++) {
					if (selectedWord.charAt(i) === letterTyped) {
						stringWord[i] === letter;

		}
	}
      		
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
			stringWord.push("_ ");

		}

	childDiv.innerHTML = stringWord;
	parent.appendChild(childDiv);
	return stringWord;

}

function checkLetter(word, letter) {
	for (var i = 0; i < word.length; i++) {
			if (word.charAt(i) = letter) {
				stringWord[i] = letter;

		}
	}
}

// function addLetterToBank(letter){


// }

function revealLetter(index, word, letter){
	
}
}