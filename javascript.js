// Done: September 6th 2019

var action;
var correctAnswer;
var playing = false;
var score = 0;
var timeremaining = 30;
hide("gameover");

// Button Start/Reset clicked -> Starts or Resets the game
document.getElementById("startreset").onclick = startReset;

function startReset(){
    if (playing){ // Reset
        location.reload();
        playing = false;
        score = 0;
        updateScore(score);
        hide("timeremaining");
        hide("gameover");
        document.getElementById("startreset").innerText = "Start Game";
    }else{ // Start new game
        playing = true;
        score = 0;
        updateScore(score);
        timeremaining = 10;
        updateTimeRemaining(timeremaining);
        startCountdown();
        show("timeremaining");
        document.getElementById("startreset").innerText = "Reset Game";
        generateQA();
        hide("gameover");
    }
}

function updateScore(score){
    document.getElementById("scorevalue").innerText = score;
}

function updateTimeRemaining(time){
    document.getElementById("timeremainingvalue").innerText = time;
}

document.getElementById("box1").onclick = function(){
    if (playing == true && timeremaining > 0){
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
}

document.getElementById("box2").onclick = function(){
    if (playing == true && timeremaining > 0){
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
}

document.getElementById("box3").onclick = function(){
    if (playing == true && timeremaining > 0){
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
}

document.getElementById("box4").onclick = function(){
    if (playing == true && timeremaining > 0){
        if (this.innerHTML == correctAnswer) {
            score++;
            updateScore(score);
            generateQA()
        }
    }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        updateTimeRemaining(timeremaining);
        if (timeremaining == 0) { // Game Over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is: " + score + "</p>";
            hide("timeremaining");
        }
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide (Id){
    document.getElementById(Id).style.display = "none";
}

function show (Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var x = randomNumber(9);
    var y = randomNumber(9);
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = randomNumber(3); //Chooses randomly the box thats going to hold the correct answer
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //Fill one of the boxes with the correct answer
    
    var answers = [correctAnswer];

    for (i=1; i<=4; i++) {
        if (i !== correctPosition){
            var wrongAnswer = 0;

            do { wrongAnswer = (randomNumber(9))*(randomNumber(9));
            } while (answers.indexOf(wrongAnswer)>-1);
                        
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function randomNumber(num){
    result = 1 + Math.round(num * Math.random());
    return result;
}