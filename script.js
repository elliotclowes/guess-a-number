// Generate random number. Added `+ 1` so that it includes the possiblity of getting '20' as Math.floor rounds down.
let randomNumber = Math.floor(Math.random() * 20) + 1
let attempts = 0
let score = 0

document.getElementById('guessButton').addEventListener('click', function() {
    // Get the number that the user enters.
    let userGuess = document.getElementById('userGuess').value
    
    // If user guesses correctly.
    if (userGuess == randomNumber) {
        // Tell them they've won.
        document.getElementById('result').textContent = "Congratulations, you've guessed correctly!"

        // Add 1 to their score.
        score++

        // Update their score.
        document.getElementById('score').textContent = "Your score: " + score

        // Show them the 'Start New Game' button by chaning "display:none" to "display:block".
        document.getElementById('newGameButton').style.display = 'block'

        // Hide the 'Guess' button.
        document.getElementById('guessButton').style.display = 'none'
    }
         // If they don't guess correctly.
        else {

        // Update the number of attemps they've had. 
        attempts++

        // If they had less than 3 attempts.
        if (attempts < 3) {
            // Add text to <p id="result"></p> to tell them to "Try again".
            document.getElementById('result').textContent = "Try again!"
        }
            // If they've had more than 3 attempts.
            else {
                // Tell user they've run out of attemps and that the random number was.
                document.getElementById('result').textContent = "Game over! The number was " + randomNumber
                // Show "Start New Game" button.
                document.getElementById('newGameButton').style.display = 'block'

                // Hide "Guess" button.
                document.getElementById('guessButton').style.display = 'none'
        }
    }
})

// If user wants to play again.
document.getElementById('newGameButton').addEventListener('click', function() {
    // Generate new random number.
    randomNumber = Math.floor(Math.random() * 20) + 1

    // Set 'attempts' to zero again.
    attempts = 0

    // Make <p id="result"></p> empty again.
    document.getElementById('result').textContent = ''

    // Make the form where user guesses number blank again.
    document.getElementById('userGuess').value = ''

    // Hide new game button.
    document.getElementById('newGameButton').style.display = 'none'

    // Show "Guess" button again.
    document.getElementById('guessButton').style.display = 'block'
})
