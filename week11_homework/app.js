// The Player with Monster - OOP Style
//     1.Definiti un container de dimensiuni fixe unde puteti playerul - il numim gameContainer
//     2.Player sa poate misca in toate directile ( folosim arrow up/down etc)
//     3.Un player nu poate iesi inafara gameContainer ( de la punctul 1)
//     4.Adaugati monstrii,pusi random in container. Acesti vor fi de mai multe tipuri
//     5.Monstru se misca random prin container ( cauta playerul )
//TODO
//     6.Player daca intalneste un monstru va fi game over
// Optional +1p
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
    if(keydownEvent.code === "ArrowRight"){
        player.moveRight();
    }
    if(keydownEvent.code === "ArrowLeft"){
        player.moveLeft();
    }
    if(keydownEvent.code === "ArrowUp"){
        player.moveUp();
    }
    if(keydownEvent.code === "ArrowDown"){
        player.moveDown();
    }
        
})

//cream o lista unde adaugam monstrii, din lista asta vom luam pe rand monstrii pentru a le creea un setInterval
//prin care sa se miste
const listMonster = []

//-cream monstrii + adaugam monstrii pe pozitii random in container + adaugam in listMonster[]
for(let i = 0; i < 5; i++){
    const monster = new Monster(gameContainer);
    listMonster.push(monster);
}

//sa se miste random pe harta

setInterval(() => {
    for(let i = 0; i < listMonster.length; i++){
        const monsterElement = listMonster[i];
        moveMonster(monsterElement)
    } 
}, 500)

function moveMonster(myMonster){
    const movementList = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomMovement = movementList[randomNumber]

    if(randomMovement === "ArrowRight"){
        myMonster.moveRight();
    }
    if(randomMovement === "ArrowLeft"){
        myMonster.moveLeft();
    }
    if(randomMovement === "ArrowUp"){
        myMonster.moveUp();
    }
    if(randomMovement === "ArrowDown"){
        myMonster.moveDown();
    }
}


//sa verific daca player-ul a atins vreun monstru
let gameOver = false;

function stopGame(player) => {
    const positionPlayerTop = parseInt(player.style.top); 
    const positionPlayerLeft = parseInt(player.style.left); 

    for(let i = 0; i < listMonster.length; i++){
        const monster = listMonster[i];
        const positionMonsterTop = parseInt(monster.style.top);
        const positionMonsterLeft = parseInt(monster.style.left);
        if(positionMonsterTop >= positionPlayerTop && 
        positionMonsterTop <= ${positionPlayerTop} + 30){
            gameOver = true;
        }

    }
}