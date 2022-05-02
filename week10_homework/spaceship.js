//generam un random spaceship

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
    
    //functionalitatea spaceship
    moveRight(){
        const oldLeft = parseInt(this.objectImage.style.left)
        this.objectImage.style.left = `${oldLeft + 10}px`;
    }
    moveLeft(){
        const oldLeft = parseInt(this.objectImage.style.left)
        this.objectImage.style.left = `${oldLeft - 10}px`;
    }
    moveUp(){
        const oldTop = parseInt(this.objectImage.style.top)
        this.objectImage.style.top = `${oldTop - 10}px`;
    }
    moveDown(){
        const oldTop = parseInt(this.objectImage.style.top)
        this.objectImage.style.top = `${oldTop + 10}px`;
    }
}

export {Spaceship, activeShip} 