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

$(document).ready(function () {

    var totalScore = 0;
    var ranGenNum = 0;
    
    startGame();

    function checkEnd() {
        if ((totalScore === ranGenNum)) {
            wins++;
            startGame();
        }
        if ((totalScore > ranGenNum)) {
            losses++;
            startGame();
        }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
    }

    function clickGem() {
        var x = parseInt(event.target.textContent);
        totalScore += x;
        $("#your-total-score").text(totalScore);
        checkEnd();
    }

    function startGame() {

        totalScore = 0;

        $("#your-total-score").text(totalScore);

        // Generate random number(19-120) then put into 'random-number' div.
        ranGenNum = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(ranGenNum);

        // Generate a random number(1) then put into 'amethyst' image. 
        // Allows player to win no matter if ranGenNum is even or odd.
        var amethyst = Math.floor(Math.random() * 1) + 1;
        $("#amethyst").text(amethyst);

        // Generate a random number(1-12) then put into 'bernstein' image.
        var bernstein = Math.floor(Math.random() * 12) + 1;
        $("#bernstein").text(bernstein);

        // Generate a random number(1-12) then put into 'diamond' image.
        var diamond = Math.floor(Math.random() * 12) + 1;
        $("#diamond").text(diamond);

        // Generate a random number(1-12) then put into 'fluorite' image.
        var fluorite = Math.floor(Math.random() * 12) + 1;
        $("#fluorite").text(fluorite);
        console.log(ranGenNum, "is this")
    }


    // Grabs string from image, turns into an integer and adds to total score.
    $("#amethyst").on("click", function (event) {
        clickGem();
    })

    // Grabs string from image, turns into an integer and adds to total score.
    $("#bernstein").on("click", function (event) {
        clickGem();
    });

    // Grabs string from image, turns into an integer and adds to total score.
    $("#diamond").on("click", function (event) {
        clickGem();
    });

    // Grabs string from image, turns into an integer and adds to total score.
    $("#fluorite").on("click", function (event) {
        clickGem();
    });

});