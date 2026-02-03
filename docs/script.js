let timer;
let timeLeft;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const workInput = document.getElementById("workInput");
const breakInput = document.getElementById("breakInput");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Session completed! 🎉");
        }
    }, 1000);
}

function startWork() {
    clearInterval(timer);
    const workMinutes = parseInt(workInput.value);

    if (!workMinutes || workMinutes <= 0) {
        alert("Enter valid work time");
        return;
    }

    timeLeft = workMinutes * 60;
    isRunning = false;
    updateDisplay();
    startTimer();
}

function startBreak() {
    clearInterval(timer);
    const breakMinutes = parseInt(breakInput.value);

    if (!breakMinutes || breakMinutes <= 0) {
        alert("Enter valid break time");
        return;
    }

    timeLeft = breakMinutes * 60;
    isRunning = false;
    updateDisplay();
    startTimer();
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = parseInt(workInput.value) * 60 || 25 * 60;
    isRunning = false;
    updateDisplay();
}

// Initial load
timeLeft = parseInt(workInput.value) * 60;
updateDisplay();
