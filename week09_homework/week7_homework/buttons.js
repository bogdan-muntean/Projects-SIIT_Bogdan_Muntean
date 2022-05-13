
import { incrementTimer, addZero } from "./increment-mecanism.js";
// import "./increment-mecanism.js";

// 2.	Adaugati un button plus functionalitate pentru start timer
let startTimerInterval;
let clickCounterStart = 0;
const startHtml = document.getElementById("start-timer");
startHtml.addEventListener("click", () => {
    if (clickCounterStart === 0) {
        // if(secondValue === 0){
        //     secondValue = 0;
        // }
        startTimerInterval = setInterval(incrementTimer(), 1000)
        clickCounterStart++;
    }
})

// 3.	Adaugati un button plus functionalitate pentru stop timer
const stopHtml = document.getElementById("stop-timer");
stopHtml.addEventListener("click", () => {
    console.log("s-a apelat stop")
    clickCounterStart = 0;
    clearInterval(startTimerInterval)
})
// 4.	Adaugati un button plus functionalitate pentru reset timer
const resetHtml = document.getElementById("reset-timer");
resetHtml.addEventListener("click", () => {
    clearInterval(startTimerInterval)
    secondHtml.innerHTML = `00`;
    minuteHtml.innerHTML = `00`;
    hourHtml.innerHTML = `00`;
    secondValue = secondHtml.innerHTML;
    minuteValue = minuteHtml.innerHTML
    hourValue = hourHtml.innerHTML

    clickCounterStart = 0;
    startTimerInterval = setInterval(incrementTimer(), 1000)
})
// 5.	Adaugati un button plus functionalitate pentru save timer
const saveList = document.getElementById("save-list")  // lista <ol> cu salvarile timer-ului

const saveHtml = document.getElementById("save-timer")
saveHtml.addEventListener("click", () => {
    const newSaveHtml = document.createElement("li");
    saveList.appendChild(newSaveHtml)
    newSaveHtml.innerHTML = `${addZero(hourValue)} : ${addZero(minuteValue)} : ${addZero(secondValue)}`
})



