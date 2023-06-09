// Generate random number. Added `+ 1` so that it includes the possiblity of getting '10' as Math.floor rounds down.
let randomNumber = Math.floor(Math.random() * 10) + 1
let attempts = 0
let score = 0
let computerScore = 0
let guessDifference = 0
let attemptsLeft = 3


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


            // Update the number of attemps left. 
            attemptsLeft--

            // If they had less than 2 attempts.
            if (attempts < 2) {

                // Update guess difference
                guessDifference = Math.abs(randomNumber - userGuess)

                document.getElementById('attempts').innerHTML = `You have <b>${attemptsLeft} attempts</b> left.`

                // Add text to <p id="result"></p> to tell them to "Try again".
                document.getElementById('result').textContent = "Try again!"
            }
                else if (attempts < 3) {
                    // Make note of new guess difference.
                    let newGuessDifference = Math.abs(randomNumber - userGuess)

                    // Create string based on if they're warmer or colder.
                    let warmerOrColder = newGuessDifference < guessDifference ? "warmer" : "colder"

                    // Tell user if they're getting warmer or colder.
                    document.getElementById('result').textContent = "You're getting " + warmerOrColder + ". Try again!"

                    // Tell user how many attempts they have left.
                    document.getElementById('attempts').innerHTML = `You have <b>${attemptsLeft} attempts</b> left.`
                }
                // If they've had more than 3 attempts.
                else {

                    // Update computer score
                    computerScore++

                     // Update computer score HTML.
                    document.getElementById('computerscore').textContent = "Computers score: " + computerScore

                    document.getElementById('attempts').innerHTML = `You have <b>${attemptsLeft} attempts</b> left.`

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
    randomNumber = Math.floor(Math.random() * 10) + 1

    // Set 'attempts' to zero again.
    attempts = 0

    // Set 'attemptsLeft' to 3 again.
    attemptsLeft = 0

    // Make <p id="result"></p> empty again.
    document.getElementById('result').textContent = ''

    // Make the form where user guesses number blank again.
    document.getElementById('userGuess').value = ''

    // Hide new game button.
    document.getElementById('newGameButton').style.display = 'none'

    // Show "Guess" button again.
    document.getElementById('guessButton').style.display = 'block'

    // Ressets attempts left.
    document.getElementById('attempts').innerHTML = `You have <b>${attemptsLeft} attempts</b> left.`
})
