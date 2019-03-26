# Word-Guess-Game
Musical hangman-styled game 

if(start === true) { 
    function animalGame () { 
        currentWord = answers[Math.floor(Math.random() * answers.length)]; 
        charInWord = currentWord.split(""); 
        dashNumber = charInWord.length; 
    
        remainingGuesses = 10; 
        wrongLetters = []; 
        lettersCorrect = [];
    
        for (i = 0; i < dashNumber; i++) {
            lettersCorrect.push("_"); 
        }
    
        document.getElementById("answerWord").innerHTML = lettersCorrect.join(" ");
        document.getElementById("guessesLeft").innerHTML = remainingGuesses; 
        document.getElementById("wins").innerHTML = winCount;
        document.getElementById("losses").innerHTML = lossCount; 
    
    // Testing in console
        console.log(currentWord);
        console.log(charInWord);
        console.log(dashNumber); 
        console.log(lettersCorrect); 
    }
}

else { 
    
}


function lettersPressed(alphabet) { 
    var isLetterInWord = false; 

    for (i=0; i < dashNumber; i++) { 
        if(currentWord[i] == alphabet) { 
            isLetterInWorld = true; 
        }
    }
    
    if (isLetterInWord) { 
        for (i=0; i < dashNumber; i++) { 
            if(currentWord[i] == alphabet) { 
                lettersCorrect[i] = alphabet; 
            }
        }
    }
    
    else { 
        wrongLetters.push(alphabet); 
        remainingGuesses--
    }
}

function endingGame() { 
    console.log("Win Count: " + winCount + " Loss Count: " + lossCount + "Guesses Left: " + remainingGuesses);

    document.getElementById("guessesLeft").innerHTML = remainingGuesses; 
    document.getElementById("answerWord").innerHTML = dashNumber.join(" "); 
    document.getElementById("letterGuesses").innerHTML = wrongLetters.join(" "); 

    if (charInWord.toString() == dashNumber.toString()) { 
        winCount++; 
        alert("You Win!!"); 

        document.getElementById("wins").innerHTML = winCount; 

        animalGame(); 
     }

    else { 
        lossCount++; 
        alert("Sorry, you lost."); 

        document.getElementById("losses").innerHTML = lossCount;

        animalGame(); 
    }
}


// running functions
animalGame();

document.onkeyup = function(event) { 
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    lettersPressed(letter);
    endingGame(); 
}
