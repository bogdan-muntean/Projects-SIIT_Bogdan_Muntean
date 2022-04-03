
// Digital timer
// Acesta tema va porni de la ce sa facut la workshop
// Tasks:
// 1.	Terminat cerintele de la workshop

// a. Vream sa afisam un timer in browser, va incepe cu 00:00:00

const itemHtml = document.getElementById('timer')
itemHtml.innerHTML = `
<span id="hours"> 00 </span>:
<span id="minutes"> 00 </span> :
<span id="seconds"> 00 </span> 
`
const containerHtml = document.getElementById('container')   
containerHtml.appendChild(itemHtml)    //introduce itemHtml in container, dar va fi dupa container-buttons
containerHtml.insertBefore(itemHtml, containerHtml.firstChild) //inserBefore il va muta inainte de container-buttons

// b. Sa definim in html cum va arata acest timer + acces in js
const secondHtml = document.getElementById('seconds')
const minuteHtml = document.getElementById('minutes')
const hourHtml = document.getElementById('hours')

console.log(secondHtml)
console.log(minuteHtml)
console.log(hourHtml)

let secondValue = secondHtml.innerHTML;
let minuteValue = minuteHtml.innerHTML
let hourValue = hourHtml.innerHTML

console.log(secondValue)
console.log(minuteValue)
console.log(hourValue)

function incrementTimer(){
    // c. Sa incrementam secundele, incepem de la zero, iar dupa ce trece o secunda sa cresca cu 1
        console.log("se adauga o secunda")
        secondValue++;
    // d. Sa crestem minutele iar secundele vor incepe de la zero
        if(secondValue == 60){
            minuteValue++;
            secondValue = 0;
        }
    
    // e. Sa crestem orele iar minutele vor incepe de la zero
        if(minuteValue == 60){
            hourValue++;
            minuteValue = 0;
        }
    
    // g. Sa se faca update in real time ( la fiecare secunda )
        secondHtml.innerHTML = addZero(secondValue);
        minuteHtml.innerHTML = addZero(minuteValue);
        hourHtml.innerHTML = addZero(hourValue);
}


// f. Sa adaugam '0' in fata cand este valoare de la 1 la 9, fiind o singura unitate.
function addZero(value) {
    if(value >= 1 && value <= 9){
        value = `0${value}`;
    }
    if(value == 0){
        value = `00`;
    }
    return value;
}

// 2.	Adaugati un button plus functionalitate pentru start timer
let startTimerInterval;
let clickCounterStart = 0;
const startHtml = document.getElementById("start-timer");
startHtml.addEventListener("click", () => {
    if(clickCounterStart === 0){
        // if(secondValue === 0){
        //     secondValue = 0;
        // }
        startTimerInterval = setInterval(incrementTimer, 1000)
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
    startTimerInterval = setInterval(incrementTimer, 1000)
})
// 5.	Adaugati un button plus functionalitate pentru save timer
const saveList = document.getElementById("save-list")  // lista <ol> cu salvarile timer-ului

const saveHtml = document.getElementById("save-timer")
saveHtml.addEventListener("click", function saveTimer(){
    const newSaveHtml = document.createElement("li");
    saveList.appendChild(newSaveHtml)

    newSaveHtml.innerHTML = `${addZero(hourValue)} : ${addZero(minuteValue)} : ${addZero(secondValue)}`
})

// Recomand sa folositi functii pentru fiecare. De exemplu: startTimer, stopTimer, resetTimer, saveTimer
// Tips: General: Se fac in html 4 buttoane cu id-uri unice si se 
//inregistreaza in fisier de js eventul de click

// Task 1: functionalitate de la setInterval trebuie pusa intr-o functie si apela doar cand 
//dam click pe buttonul start

// Task 2: Gasiti un exemplu aici https://www.w3schools.com/jsref/met_win_clearinterval.asp, 
//trebuie sa apelati clearInterval cu valoare returnata de setInterval

// Task 3: Trebuie sa faceti un restart, adica va incepe de la 00:00:00. Puteti sa va folositi de Task2, 
//pentru a opri timerul si 
//dupa sa resetati valorile din browser iar la final ii dati start
// Task 4: Se va creea un nou element in pagina cu valoare de la momentul apasari butonului de save
// •	00:21:34
// •	00:25:56
