var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
// var userText = userGuess.toLowercase();

// Variable for random letter selection from alphabet array
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


// while(var i = 0; i < guesses; i++) {
    
// }

document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess.toLowercase;
    document.getElementById('userGuess').innerHTML = "Your Guesses So Far: " + userGuess;
    
    if(userGuess === computerChoice){
        wins++; console.log('User Guess: ' + userGuess); reset();
    }   else{
            guesses--;
        }

    if(guesses === 0){
        losses++; console.log('Computer Choice: ' + computerChoice); reset();
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('userGuess').innerHTML = "You Guessed: " + userGuess;
}

var reset = function(){
    guesses = 9;
    userGuess = [];
}


