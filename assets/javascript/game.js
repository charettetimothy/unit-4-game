// JS Pseudo
// Game start with randomly generated number (19-120) displayed in 'random-number' 
// Game start with 'wins', 'losses', 'your-total-score' initialized at 0 
// Game start with each img assigned random number between (1-12)
// On img click add number to 'totalScore'
// If totalScore === ranGenNum : wins ++, display "You won!" in 'scoreboard'
// If totalScore > ranGenNum : losses ++, display "You lose!" in 'scoreboard'
// If losses ++ or wins ++ go to function(gameReset)
// Function(gameReset) : set gem values to new random values, set ranGenNum to new
// value, set totalScore = 0

// Game start with wins, losses, totalScore initialized at 0

var wins = 0;
var losses = 0;

var ranGenNum = 0;


$(document).ready(function () {
    // create a random number and place it into 'random-number' div
    var totalScore = 0;
    // ... we generate a random number between 19-120
    var ranGenNum = Math.floor(Math.random() * 120) + 19;

    // ... and then dump the random number into our random-number div.
    $("#random-number").text(ranGenNum);

    // ... we generate a random number between 1-12
    var amethyst = Math.floor(Math.random() * 1) + 1;

    // ... and then dump the random number into our 'amethyst' div.
    $("#amethyst").text(amethyst);

    // ... we generate a random number between 1-12
    var bernstein = Math.floor(Math.random() * 6) + 2;

    // ... and then dump the random number into our 'amethyst' div.
    $("#bernstein").text(bernstein);

    // ... we generate a random number between 1-12
    var diamond = Math.floor(Math.random() * 9) + 7;

    // ... and then dump the random number into our 'amethyst' div.
    $("#diamond").text(diamond);

    // ... we generate a random number between 1-12
    var fluorite = Math.floor(Math.random() * 12) + 10;

    // ... and then dump the random number into our 'amethyst' div.
    $("#fluorite").text(fluorite);
    
    $("#amethyst").on("click", function (event) {
        console.log(event,totalScore)
    })
    $("#bernstein").on("click", function (event) {
        
        var x = parseInt(event.target.textContent)
        console.log(x,totalScore)
        totalScore += x
        console.log(totalScore)
        $youtotalscre.text(totalscore)
        
    })
    $("#diamond").on("click", function (event) {
        console.log(event.target.textContent)
    })
    $("#fluorite").on("click", function (event) {
        console.log(event.target.textContent)
    })



});