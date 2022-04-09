//generam un random spaceship


// function addSpaceship(){
//     const images=["./homework/blue-spaceship.png", "./homework/green-spaceship.png", "./homework/red-spaceship.png"];
//     const randomNumber = Math.floor(Math.random()*3)
//     const spaceShip = document.createElement("img")
//     spaceShip.style.img = `${images[randomNumber]}`;

//     const gameBoard = document.getElementById("game-board")
//     gameBoard.appendChild(spaceShip);

// }
let activeShip;
class Spaceship{
    // #spaceshipElement;

    constructor(type){
        console.log('se creeaza un obiect')

        const images = ["./blue-spaceship.png", "./green-spaceship.png", "./red-spaceship.png"];
        const spaceshipImg = document.createElement("img")
        spaceshipImg.src = `${images[type]}`;

        spaceshipImg.style.width = '70px';
        spaceshipImg.style.height = '70px';
        spaceshipImg.style.position = 'relative';
        spaceshipImg.style.top = '0';
        spaceshipImg.style.left = '0';

        this.objectImage = spaceshipImg;

        spaceshipImg.addEventListener("click", () => {
            activeShip = this;
        })
    }
    

    moveRight(){
        const oldLeft = parseInt(this.objectImage.style.left)
        this.objectImage.style.left = `${oldLeft + 10}px`;
    }
}

export {Spaceship, activeShip} 