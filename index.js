const stopwatch = document.getElementById("stopwatch")
const startTime = document.getElementById("start-time")
const pauseTime = document.getElementById("pause-time")
const stopTime = document.getElementById("stop-time")
const resetEL = document.getElementById("reset-el")
const agendaStart = document.getElementById("agenda-start")
const agendaNotes = document.getElementById("agenda-notes")

let hr = 0
let min = 0
let sec = 0
let stoptime = true

resetEL.addEventListener("click", function(){
    agendaStart.value = ""
    agendaNotes.value = ""
})

startTime.addEventListener("click", function () {
    if (stoptime === true) {
        stoptime = false;
        timerCycle();
    }
})

pauseTime.addEventListener("click", function() {
    if (stoptime === false) {
      stoptime = true;
    }
  })

stopTime.addEventListener("click",  function() {
    stopwatch.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
})

function timerCycle() {
    if (stoptime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        stopwatch.innerHTML = `${hr}:${min}:${sec}`;
        setTimeout("timerCycle()", 1000);
    }
}
