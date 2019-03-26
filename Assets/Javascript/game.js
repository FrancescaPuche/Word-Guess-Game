// Javascript for Hangman Game


// Variables and Arrays
var answers = ["monkey", "penguin", "platypus", "seahorse", "tiger"]; // The answers that will be randomly selected
var currentWord =""; // Current word to guess
var numLettersInWord = []; // An array to hold the letters of the current word
var dashNumber = 0; // How many dashed lines the current word needs
var lettersCorrect = []; // The correct letters in the current word
var lettersGuessed = []; // The incorrect letters in the current word
var winCount = 0; // How many times the player has won
var guessesLeft = 10; // How many guesses the player has left for the current word
var lossCount = 0; // How many time sthe player has lost
//-------------------------------------------------------




// Functions Loops and Statments
var start = confirm("Would you like to play Animal Hangman?"); // Asks the user if they want to play hangman


if (start === true) {

    function beginGame () { 
        currentWord = answers[Math.floor(Math.random() * answers.length)];
        numLettersInWord = currentWord.split(""); 
        dashNumber = numLettersInWord.length;


        // Testing
        console.log(currentWord);
        console.log(numLettersInWord); 
        console.log(dashNumber);
    }
}

beginGame(); 