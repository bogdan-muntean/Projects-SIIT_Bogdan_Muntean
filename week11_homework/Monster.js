import ElementMovement from "./ElementMovement.js"; //va mosteni metodele pentru a putea misca monstrul 


class Monster extends ElementMovement{
    //adaugam monster in game container
    constructor(location){
        super()
        this.element = Monster.createMonster();
        location.appendChild(this.element);
    }

    //functia pentru a crea monster
    static createMonster(){
        const monsterHtml = document.createElement("img")
        monsterHtml.style.height = '30px'
        monsterHtml.style.width = '30px'
        monsterHtml.style.position = 'absolute'

        //monstrul sa fie pe o pozitie randomizata
        let randomPositionTop = Math.floor(Math.random() * 571);
        let randomPositionLeft = Math.floor(Math.random() * 871);

        while(randomPositionTop < 50 || randomPositionLeft < 50){
            randomPositionTop = Math.floor(Math.random() * 571);
            randomPositionLeft = Math.floor(Math.random() * 871);
        }
        monsterHtml.style.top = randomPositionTop + 'px';
        monsterHtml.style.left = randomPositionLeft + 'px';

        //monstrul sa aibe type-ul randomizat
        const randomNumber = Math.floor(Math.random() * 11) + 1;
        monsterHtml.src = `./monster/monster${randomNumber}.svg`;
        return monsterHtml
    }

}

export default Monster