// The Player with Monster - OOP Style
//     1.Definiti un container de dimensiuni fixe unde puteti playerul - il numim gameContainer
//     2.Player sa poate misca in toate directile ( folosim arrow up/down etc)
//     3.Un player nu poate iesi inafara gameContainer ( de la punctul 1)
//     4.Adaugati monstrii,pusi random in container. Acesti vor fi de mai multe tipuri
//     5.Monstru se misca random prin container ( cauta playerul )
//     6.Player daca intalneste un monstru va fi game over
// Optional +1p
//TODO
//     Adaugam nr de vieti

import Player from './Player.js'
import Monster from './Monster.js';
//-locatia in care se va creea jocul
const gameContainer = document.getElementById("game-container");

//-cream player
const player = new Player(gameContainer);

//-cream eveniment de la tastatura pentru a misca player-ul
document.addEventListener("keydown", (keydownEvent) => {
    // console.log(keydownEvent)
    if (keydownEvent.code === "ArrowRight") {
        player.moveRight();
    }
    if (keydownEvent.code === "ArrowLeft") {
        player.moveLeft();
    }
    if (keydownEvent.code === "ArrowUp") {
        player.moveUp();
    }
    if (keydownEvent.code === "ArrowDown") {
        player.moveDown();
    }

})

//cream o lista unde adaugam monstrii, din lista asta vom luam pe rand monstrii pentru a le creea un setInterval
//prin care sa se miste
const listMonster = []

//-cream monstrii + adaugam monstrii pe pozitii random in container + adaugam in listMonster[]
for (let i = 0; i < 30; i++) {
    const monster = new Monster(gameContainer);
    listMonster.push(monster);
}

//TODO
//Optional Homework:   
//Adaugam tabelul de vieti HTML si numarul de vieti
const tabelVietiHtml = document.getElementById("tabel-vieti")
const arrayVieti = []
function displayLifes(numberLifes) {
    for(let i = 1; i < numberLifes+1; i++){
        const life = `life${i}`;
        arrayVieti.push(life)
    
        // const newLife = document.createElement("span")
        // newLife.innerHTML = life;
        const newLife = document.createElement("img")
        newLife.src = "heart.PNG";
        tabelVietiHtml.appendChild(newLife)
    }
}
let lifes = 3;
displayLifes(lifes);

//6 + Optional homework - Daca functia monsterTouchPlayer() este adevarata 
//sa ii scada o viata, daca nu are ce scadea, sa fie game over. La fiecare atingere
//player-ul are imunitate de 3 secunde, timp in care nu poate fi atins de monstrii.
let gameOverValue = false;

//6.Functie sa verific daca player-ul a atins vreun monstru

let checkTouchPlayer = true;

function monsterTouchPlayer(monsterIndex){
    const positionPlayerTop = parseInt(player.element.style.top);
    const positionPlayerLeft = parseInt(player.element.style.left);
    const positionMonsterTop = parseInt(monsterIndex.element.style.top);
    const positionMonsterLeft = parseInt(monsterIndex.element.style.left);

    
    if (positionMonsterTop >= positionPlayerTop && positionMonsterTop <= (positionPlayerTop + 30) && 
    positionMonsterLeft >= positionPlayerLeft && positionMonsterLeft <= (positionPlayerLeft + 30)) {
            console.log("monster touch player");
                if(gameOverValue === true){
                    alert("GAME OVER");
                } 
                else {
                    lifes--;
                    tabelVietiHtml.innerHTML = "Lifes: "
                    displayLifes(lifes);
                        if(lifes === 1){
                            gameOverValue = true;
                        }
                    console.log("player lose 1 life")
                    checkTouchPlayer = false;
                    console.log("player-ul este imun 3 secunde")
                    // monsterIndex.element.style.
                    setTimeout(() => {
                        checkTouchPlayer = true;
                    }, 3000)
                }
    }
}

//5. Monstrii sa se miste random pe harta, cu o anumita viteza
var randomMonsterMoves = setInterval(() => {
    for (let i = 0; i < listMonster.length; i++) {
        const monsterElement = listMonster[i];
        moveMonster(monsterElement);
    }
}, 100);

//5. Functie pentru monstrii sa se miste random
function moveMonster(myMonster) {
    const movementList = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomMovement = movementList[randomNumber]

    if (randomMovement === "ArrowRight") {
        myMonster.moveRight();
    }
    if (randomMovement === "ArrowLeft") {
        myMonster.moveLeft();
    }
    if (randomMovement === "ArrowUp") {
        myMonster.moveUp();
    }
    if (randomMovement === "ArrowDown") {
        myMonster.moveDown();
    }
    if(checkTouchPlayer === true){
        monsterTouchPlayer(myMonster);
    }
}





//Prima incercare la punctul 6 + optional. Nu functiona cu setInterval.
//6.Functie sa verific daca player-ul a atins vreun monstru

// function monsterTouchPlayer (){
//     let sumTouches = false;
//     for (let i = 0; i < listMonster.length; i++) {
        
//         const monsterElement = listMonster[i].element;
    
//         const positionPlayerTop = parseInt(player.element.style.top);
//         const positionPlayerLeft = parseInt(player.element.style.left);
//         const positionMonsterTop = parseInt(monsterElement.style.top);
//         const positionMonsterLeft = parseInt(monsterElement.style.left);

    
//         if (positionMonsterTop >= positionPlayerTop && positionMonsterTop <= (positionPlayerTop + 30) &&
//             positionMonsterLeft >= positionPlayerLeft && positionMonsterLeft <= (positionPlayerLeft + 30)) {
//                 console.log("monster touch player");
//                 sumTouches = sumTouches || true;
//         } else{
//             sumTouches = sumTouches || false;
//         }
//     }
//     return sumTouches
// }

//6 + Optional homework - Daca functia monsterTouchPlayer() este adevarata 
//sa ii scada o viata, daca nu are ce scadea, sa fie game over. La fiecare atingere
//player-ul are imunitate de 3 secunde, timp in care nu poate fi atins de monstrii.

// var gameOverValue = false;
// let sumTouches = false;
// function gameOver(){
//     if(sumTouches === true){
//         if(gameOverValue === true){
//             alert("GAME OVER");
//             clearInterval(loseLife);
//             clearInterval(randomMonsterMoves);
//         } 
//         else {
//             arrayVieti.pop()
//                 if(arrayVieti.length <= 1){
//                     gameOverValue = true;
//                 }
//             console.log("player lose 1 life")
//             sumTouches = false;
//             clearInterval(loseLife)
//             imunity(3000);
//         }
//     }
// }
// function imunity(seconds){
//     console.log("player-ul este imun 3 secunde")
//     setTimeout(() => {
//         loseLife = setInterval(gameOver(), 100);
//     }, seconds);
// } 

// var loseLife = setInterval(gameOver(),100)

