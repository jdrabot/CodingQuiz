var countdownEl = document.getElementById("countdown-timer");


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