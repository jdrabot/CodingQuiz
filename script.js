var countdownEl = document.getElementById("countdown-timer");
var startButtonEl = document.getElementById("start");
var titleEl = document.getElementById("coding-quiz-challenge");

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            countdownEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            countdownEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            countdownEl.textContent = "";
            clearInterval(timeInterval)
            gameOver()
        }
    }, 1000);
}

startButtonEl.addEventListener("click", function(){
    countdown();
    titleEl.classList.add("hidden");
})