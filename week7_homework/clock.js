
// Digital timer
// Acesta tema va porni de la ce sa facut la workshop
// Tasks:
// 1.	Terminat cerintele de la workshop

// 1. Vream sa afisam un timer in browser, va incepe cu 00:00:00
const itemHtml = document.createElement("div")
itemHtml.innerHTML = `
<span id="hours"> 00 </span>:
<span id="minutes"> 00 </span> :
<span id="seconds"> 00 </span> 
`

document.body.appendChild(itemHtml)

// 2. Sa se faca update in real time ( la fiecare secunda )
var seconde = document.getElementById('seconds')
var minute = document.getElementById('minutes')
var hour = document.getElementById('hours')

setInterval( () => {
    console.log("se adauga o secunda")
    seconde += 1;
}, 1000)




// Task1: Sa definim in html ca va arata acest timer + acces in js 
// Task2: Sa incrementam secundele, incepem de la zero, 
// iar dupa ce trece o secunda sa cresca cu 1
// Task3: Sa crestem minutele iar secundele vor incepe de la zero
// Task3: Sa crestem orele iar minutele vor incepe de la zero





// 2.	Adaugati un button plus functionalitate pentru start timer
// 3.	Adaugati un button plus functionalitate pentru stop timer
// 4.	Adaugati un button plus functionalitate pentru reset timer
// 5.	Adaugati un button plus functionalitate pentru save timer
// Recomand sa folosi functii pentru fiecare. De exemplu: startTimer, stopTimer, resetTimer, saveTimer
// Tips: General: Se fac in html 4 buttoane cu id-uri unice si se inregistreaza in fisier de js eventul de click
// Task 1: functionalitate de la setInterval trebuie pusa intr-o functie si apela doar cand dam click pe buttonul start
// Task 2: Gasiti un exemplu aici https://www.w3schools.com/jsref/met_win_clearinterval.asp, trebuie sa apelati clearInterval 
//cu valoare returnata de setInterval
// Task 3: Trebuie sa faceti un restart, adica va incepe de la 00:00:00. Puteti sa va folositi de Task2, pentru a opri timerul si 
//dupa sa resetati valorile din browser iar la final ii dati start
// Task 4: Se va creea un nou element in pagina cu valoare de la momentul apasari butonului de save
// •	00:21:34
// •	00:25:56
