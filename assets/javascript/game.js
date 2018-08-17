//Available choices
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer randomly chooses a letter

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];

//guesses left function

var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').textContent = "Guesses Left: " + guessesLeft;
};

//letter to guess function

var updateletterToGuess = function(){
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
    document.querySelector('#let').textContent = "Your guesses so far: " + guessedLetters.join(', ');
};

//reset

var reset = function(){
    console.log('Your Guesses: ' + guessedLetters);
    console.log('Correct Guess: ' + letterToGuess);
    console.log('-------------------');
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateletterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();

//user input key

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = event.key; 
    
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').textContent = 'Wins: ' + wins;
                alert("WITCHCRAFT!! YOU'RE A WITCH!");
                reset();
            }
        } else if (guessesLeft == 0){
            losses++;
            document.querySelector('#losses').textContent = 'Losses: ' + losses;
            alert("You only had a 34.6% chance of getting it right. Don't feel too bad.");

            reset();
        }
}