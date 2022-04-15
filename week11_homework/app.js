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
    console.log(keydownEvent)
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

//6. sa verific daca player-ul a atins vreun monstru
var gameOver = false;

//TODO
//Optional Homework:   
//Adaugam nr de vieti
const tabelVietiHtml = document.getElementById("tabel-vieti")
const vietiHtml = document.createElement("span")
const numarVieti = []
for(let i = 1; i < 4; i++){
    vietiHtml.id = `life${i}`
    tabelVietiHtml.appendChild(vietiHtml)
    numarVieti.push(i)
}

let vietiValue = parseInt(vietiHtml.innerHTML)

//sa se miste random pe harta
setInterval(() => {
    for (let i = 0; i < listMonster.length; i++) {
        const monsterElement = listMonster[i];
        moveMonster(monsterElement);
    }
    console.log(gameOver);

    //6. Functia prin care daca player intalneste un monstru sa fie game over
    for (let i = 0; i < listMonster.length; i++) {
        const monsterElement = listMonster[i].element;

        const positionPlayerTop = parseInt(player.element.style.top);
        const positionPlayerLeft = parseInt(player.element.style.left);
        const positionMonsterTop = parseInt(monsterElement.style.top);
        const positionMonsterLeft = parseInt(monsterElement.style.left);

        if (positionMonsterTop >= positionPlayerTop && positionMonsterTop <= (positionPlayerTop + 30) &&
            positionMonsterLeft >= positionPlayerLeft && positionMonsterLeft <= (positionPlayerLeft + 30)) {
            console.log("Minus one life");
            // alert("GAME OVER")
            gameOver = true;
        }
    }
}, 100);




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
}






