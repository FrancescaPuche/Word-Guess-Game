Pseudocode For Word Guessing Game: 
--------------------------------------------------------
- Variables / Arrays
    • answers = []; //array of answers that will be randomly selected
    currentWord =""; // Current word to guess

    • numLettersInWord = []; // An array to hold the letters of the current word

    • dashNumber = 0; // How many dashed lines the current word needs

    • lettersCorrect = []; // The correct letters in the current word

    • currentGuess; // Current letter the user has guessed

    • lettersGuessed = []; // The incorrect letters in the current word

    • winCount = 0; // How many times the player has won

    • guessesLeft = 10; // How many guesses the player has left for the current word

    • lossCount = 0; // How many time the player has lost
---------------------------------------------------------
- Starting the Game
    • start = Boolean declaring a confirm alert to asking the user to start the game 

    • If statement - if start === true

        - In the Begin Game function: 
            • currentWord  = random number generator to choose word from the answers array 
            • numLetterInWord = set to the currentWord variable with a split separator 
            • dashNumber = numLetterInWord array length 

            • guessesLeft = 10 chances that the user has to figure out the word
            • lettersCorrect = an empty array 
                - will be filled with dashes and then replaced by the correct letters chosen
            • lettersGuessed = an empty array 
                - will be filled with the incorrect letters chosen by the user 

            • For loop that will take lettersCorrect and adda a dash for ever letter in the current word in play 
                - i starts at 0 
                - i is less than dasNumber 
                - i++ 

            • Will be using document.getElementById and .innerHTML to edit the html file using the id's assigned for those elements
                - Will use this for: 
                    • lettersCorrect 
                    • guessesLeft
                    • winCount
                    • lossCount 
---------------------------------------------------------------- 
- In the Letters Pressed function: 
        • document.onkeyup function(event) - get which key the user used
        • currentGuess is set to event.key and changes it to lowercase

        • For Loop - this loop starts at 0, goes for the length of currentWord, and the counter adds 1 after each round
            
            - inside the for loop is a variable isLetterInWord that is set to false
            
            - If Statement - if the currentGuess is a letter in currentWord the isLetterInWord is true 
                • use the document.getElementById and .innerHTML to swap the dash(es) with the correct letter

            - If Statement - if lettersGuessed use indexOf to return the index of the last occurrence of currentGuess in the lettersGuessed array 

            - if isLetterinWord is false then used document.getElementBy and .innerHTML to add letter incorrectly choosen to Guesses row in html and subtract 1 from guessesLeft 
-----------------------------------------------------------------
• Once for loop is complete for the current word:

        • If Statement - if the word has been correctly guessed then a confirm alert saying "You Win! Would you like to play again will appear.

            - winCount++

            -If statement - if playAgain === true the run the startGame and LettersPressed funtions

            Else - Alert saying "Thank you for playing! Goodbye!" 

        • If Statement - guessesLeft === 0 

            - LossCount++ 

            - Confirm alert saying "You Lost. Would you like to play again? 
                • If statement - if playAgain === true the run the startGame and LettersPressed funtions

                Else - Alert saying "Thank you for playing! Goodbye!"  





