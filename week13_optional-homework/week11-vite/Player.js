import ElementMovement from "./ElementMovement.js"; //va oferi toate metodele pentru a misca player-ul
//va mosteni aceste metode-functii din clasa ElementMovement

class Player extends ElementMovement{
    //adaugam player in game container
    constructor(location){
        super()
        this.element = Player.createPlayer();
        location.appendChild(this.element);
    }
    
    //metoda de a crea player
    static createPlayer(){
        const playerHtml = document.createElement("div")
        playerHtml.classList.add("player")
        playerHtml.style.left = '0px';
        playerHtml.style.top = '0px';
        return playerHtml;
    }

}

export default Player