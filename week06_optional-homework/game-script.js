if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

//HOMEWORK
const player = document.getElementById("player")
const gameContainer = document.getElementsByClassName("game-container")
const obstaclesClass = document.getElementsByClassName("obstacol")

const obstaclesList = [];

// randomizam pozitia obstacolelor + 2. le adaugam pozitiile in obiecte, intr-un array
for(let i = 0; i < obstaclesClass.length; i++){
    let obstacle;
    do{
    obstacle = {
        top: Math.random() * 380,
        left: Math.random() * 380
    }
    } while(obstacle.top > 50 && obstaclesClass.left > 50)  //pentru a nu se suprapune cu player cand se incepe programul


    obstaclesClass[i].style.top = `${obstacle.top}px`
    obstaclesClass[i].style.left = `${obstacle.left}px`
        
    obstaclesList.push(obstacle)
}


// Optional Homework	3.Player daca intalneste un obstacol, nu poate trece de el. Ne folosim de array-ul cu obiecte.
// function restrictedArea(obstaclesList){
//     for(let i = 0; i < obstaclesList.length; i++){


//         if(player.style.top === stopArea || player.style.left === stopArea)
//             return true;
//         else
//             return false;
//     }
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

