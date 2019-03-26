// Javascript for Hangman Game


// Variables and Arrays
var answers = ["monkey", "penguin", "platypus", "seahorse", "tiger"]; // The answers that will be randomly selected
var currentWord =""; // Current word to guess
var numLettersInWord = []; // An array to hold the letters of the current word
var dashNumber = 0; // How many dashed lines the current word needs
var lettersCorrect = []; // The correct letters in the current word
var currentGuess; // Current letter the user has guessed
var lettersGuessed = []; // The incorrect letters in the current word
var winCount = 0; // How many times the player has won
var guessesLeft = 10; // How many guesses the player has left for the current word
var lossCount = 0; // How many time sthe player has lost
//-------------------------------------------------------




// Functions Loops and Statments
var start = confirm("Would you like to play Animal Hangman?"); // Asks the user if they want to play hangman


if (start === true) {

    function beginGame () { 
        // Getting the currentWord randomly and them splitting it up into dashes
        currentWord = answers[Math.floor(Math.random() * answers.length)];
        numLettersInWord = currentWord.split(""); 
        dashNumber = numLettersInWord.length;
        
        guessesLeft = 10; 
        lettersCorrect = []; 
        lettersGuessed = [];

        for (i = 0; i < dashNumber; i++) { 
            lettersCorrect.push("_");
        }
        
        //Placing info in the HTML 
        document.getElementById("currentWord").innerHTML = lettersCorrect.join(" "); 
        document.getElementById("guessesLeft").innerHTML = guessesLeft; 
        document.getElementById("winCount").innerHTML = winCount; 
        document.getElementById("lossCount").innerHTML = lossCount; 






        // Testing
        console.log(currentWord);
        console.log(numLettersInWord); 
        console.log(dashNumber);
        console.log(lettersCorrect); 
    }
    //Function for when letters are pressed to check to see if they are in the current Word
    function lettersPressed() {
        document.onkeyup = function(event) {
            currentGuess = event.key.toLowerCase();
            for (i = 0; i < currentWord.length; i++) {
                if (currentGuess === currentWord[i]) {
                lettersCorrect[i] = currentGuess;
                document.getElementById("currentWord").innerHTML = lettersCorrect.join(" ");
                }
            }
        }
    }
}

beginGame();
lettersPressed(); 