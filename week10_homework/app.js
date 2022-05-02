// ## Spaceship Homework
// Avem 3 tipuri de spaceship: red,green,blue. Sa folositi imaginile din folderul asta
// ### Tasks
// 1. Generati un random spaceship cand apasati pe button-ul "generate spaceship".
// 2. User va putea sa conduca un spaceship dupa ce da click pe ea ( Se accepta si daca doar ultima nava creat este activa) - asemanatorul cu workshopul car
// 3. A conduce nava se refera la a permite user-ului sa foloseaca arrow up/down/right/left dar va rog sa va concentrati sa merga cu arrow right pentru inceput iar dupa faceti restul

import {Spaceship, activeShip} from "./spaceship.js"

const listSpaceships = [];
const gameBoard = document.getElementById("game-board")

const addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random()*3);

    const newSpaceshipHtml = new Spaceship(randomNumber, gameBoard);
    listSpaceships.push(newSpaceshipHtml);
    const spaceship = newSpaceshipHtml.objectImage
    gameBoard.appendChild(spaceship)

    console.log(newSpaceshipHtml);
    console.log(listSpaceships);
});

document.addEventListener("keydown", (event) => {
    if(event.code === 'ArrowRight' && activeShip){
        activeShip.moveRight();
    }
    if(event.code === 'ArrowLeft' && activeShip){
        activeShip.moveLeft();
    }
    if(event.code === 'ArrowUp' && activeShip){
        activeShip.moveUp();
    }
    if(event.code === 'ArrowDown' && activeShip){
        activeShip.moveDown();
    }
})

//sdsd