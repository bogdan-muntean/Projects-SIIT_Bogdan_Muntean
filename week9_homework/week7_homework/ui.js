
// Digital timer
// Acesta tema va porni de la ce sa facut la workshop
// Tasks:
// 1.	Terminat cerintele de la workshop

// import './increment-mecanism.js'
import './buttons.js'

// a. Vream sa afisam un timer in browser, va incepe cu 00:00:00

const itemHtml = document.getElementById('timer')
itemHtml.innerHTML = `
<span id="hours"> 00 </span>:
<span id="minutes"> 00 </span> :
<span id="seconds"> 00 </span> 
` 
const containerHtml = document.getElementById('container')   
containerHtml.appendChild(itemHtml)    //introduce itemHtml in container, dar va fi dupa container-buttons
containerHtml.insertBefore(itemHtml, containerHtml.firstChild) //insertBefore il va muta inainte de container-buttons

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


// export * from './ui.js';

