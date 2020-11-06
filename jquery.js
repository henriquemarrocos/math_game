//jQuery version

var action;
var correctAnswer;
var playing = false;
var score = 0;
var timeremaining = 30;
$("#gameover").show();

var document;

// Button Start/Reset clicked -> Starts or Resets the game
$("#startreset").click(startReset);

function startReset() {
    if (playing) {
        location.reload();
        playing = false;
        score = 0;
        updateScore(score);
		$("#timeremaining").hide();
        $("#gameover").hide();
        $("#startreset").text("Start Game");
    } else {
        playing = true;
        score = 0;
        updateScore(score);
        timeremaining = 10;
        updateTimeRemaining(timeremaining);
        startCountdown();
        $("#timeremaining").show();
        $("#startreset").text("Reset Game");
        generateQA();
        $("#gameover").hide();
    };
};

function updateScore(score) {
    $("#scorevalue").text(score);
};

function updateTimeRemaining(time){
    $("#timeremainingvalue").text(time);
};

$("#box1").click(function(){
	if (playing == true && timeremaining > 0) {
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
});

$("#box2").click(function(){
	if (playing == true && timeremaining > 0) {
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
});

$("#box3").click(function(){
	if (playing == true && timeremaining > 0) {
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
});

$("#box4").click(function(){
	if (playing == true && timeremaining > 0) {
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
});

function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        updateTimeRemaining(timeremaining);
        if (timeremaining == 0) { // Game Over
            stopCountdown();
            $("#gameover").show();
			$("#gamescore").text("Your score is: " + score);
            $("#timeremaining").hide();
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

function generateQA() {
    var x = randomNumber(9);
    var y = randomNumber(9);
    correctAnswer = x * y;
	$("#question").text(x + "x" + y);
    var correctPosition = randomNumber(3); //Chooses randomly the box thats going to hold the correct answer
    $("#box" + correctPosition).text(correctAnswer); //Fill one of the boxes with the correct answer

    var answers = [correctAnswer];

    for (i = 1; i <= 4; i++) {
        if (i !== correctPosition) {
            var wrongAnswer = 0;

            do {
                wrongAnswer = (randomNumber(9)) * (randomNumber(9));
            } while (answers.indexOf(wrongAnswer) > -1);
			
			$("#box" + i).text(wrongAnswer);
            answers.push(wrongAnswer);
        }
    }
}

function randomNumber(num) {
    result = 1 + Math.round(num * Math.random());
    return result;
}