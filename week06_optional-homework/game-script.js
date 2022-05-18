// Optional
//     1.Player daca intalneste un obstacol, nu poate trece de el +1
//     2.Adaugam numar de vieti la player ( +1 activitate )
//     3.Sa adaugam obstacole care scad din viata +1


if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

//HOMEWORK
const player = document.getElementById("player")
const gameContainer = document.getElementsByClassName("game-container")

//A.Obstacolele de sine statatoare
const obstaclesClass = document.getElementsByClassName("obstacol")
const obstaclesList = [];
// randomizam pozitia obstacolelor + 2. le adaugam pozitiile in obiecte, 
//intr-un array
createObjectsForArray(obstaclesList, obstaclesClass)

//B. Obstacolele care scad vieti
const enemiesClass = document.getElementsByClassName("enemy")
const enemiesList = [];
// randomizam pozitia obstacolelor + 2. le adaugam pozitiile in obiecte, intr-un array
createObjectsForArray(enemiesList, enemiesClass)

function createObjectsForArray(array, elementClass){
    //pentru a nu se suprapune cu player cand se incepe programul
    //Va fi intre 380 si 50
    for(let i = 0; i < elementClass.length; i++){
        let enemy = {
            top: Math.floor(Math.random() * (380 - 50) + 50),
            left: Math.floor(Math.random() * (380 - 50) + 50)
        }
    
        elementClass[i].style.top = `${enemy.top}px`
        elementClass[i].style.left = `${enemy.left}px`
        array.push(enemy)
    }
}

function checkIfTouchObstacle(array, player){

}

function checkIfTouchEnemy(array, player){

}

// Optional Homework	3.Player daca intalneste un obstacol, nu poate trece de el. 
//Ne folosim de array-ul cu obiecte.


// function restrictedArea(obstaclesList){
//     for(let i = 0; i < obstaclesList.length; i++){
//         if(player.style.top === stopArea || player.style.left === stopArea){
//             return true;
//         }
//     }
//             return false;
// }

// function coordinateBoxes(box, player){
//     //Coordinate Box
//     let coordinateTop = parseInt(box.style.top);
//     let stopZoneTop = `${coordinateTop + 20}px`;
//     let endOfZoneTop = `${coordinateTop - 10}px`;

//     let coordinateLeft = parseInt(box.style.left);
//     let stopZoneLeft = `${coordinateLeft - 10}px`;
//     let endOfZoneLeft = `${coordinateTop + 20}px`;


//     //Coordinate Player
//     let playerTop = parseInt(player.style.top);
//     let playerLeft = parseInt(player.style.left);

//     if(playerTop > stopZoneTop && playerTop < endOfZoneTop){
//        return 0;
//     }
// }

//Player movement
document.addEventListener("keydown",function(event){
    console.log("S-a apasat tasta", event)
    if(event.key == "ArrowUp"){
        let oldTop = parseInt(player.style.top);
        console.log(oldTop)
        if(oldTop > 10){
            oldTop -= 10
            player.style.top = `${oldTop}px`
        } else {
            console.log("Player-ul iese din arie.")
        }
    }

    if(event.key == "ArrowRight"){
        let oldLeft = parseInt(player.style.left);
        console.log(oldLeft)
        if(oldLeft < 370 ){
            oldLeft += 10
            player.style.left = `${oldLeft}px`
        } else {
            console.log("Player-ul iese din arie.")
        }
    }

    if(event.key == "ArrowDown"){

        let oldTop = parseInt(player.style.top);
        console.log(oldTop)
        if(oldTop < 370 ){
            oldTop += 10
            player.style.top = `${oldTop}px`
        } else {
            console.log("Player-ul iese din arie.")
        }
    }

    if(event.key == "ArrowLeft"){
        let oldLeft = parseInt(player.style.left);
        console.log(oldLeft)
        if(oldLeft > 10){
            oldLeft -= 10
            player.style.left = `${oldLeft}px`
        } else {
            console.log("Player-ul iese din arie.")
        }
    }

});

