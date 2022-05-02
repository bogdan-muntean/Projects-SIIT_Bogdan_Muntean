class ElementMovement{

    //sa il facem sa se miste dreapta,stanga,sus,jos cu ajutorul metodelor
    moveRight(){
        const oldLeft = parseInt(this.element.style.left);
        if(oldLeft < 870){
            const newLeft = `${oldLeft + 10}px`;
            this.element.style.left = newLeft;
        }
    }
    moveLeft(){
        const oldLeft = parseInt(this.element.style.left);
        if(oldLeft >= 10){
            const newLeft = `${oldLeft - 10}px`;
            this.element.style.left = newLeft;
        }
    }
    moveUp(){
        const oldTop = parseInt(this.element.style.top);
        if(oldTop >= 10){
            const newTop = `${oldTop - 10}px`;
            this.element.style.top = newTop;
        }
    }
    moveDown(){
        const oldTop = parseInt(this.element.style.top);
        if(oldTop < 570){
            const newTop = `${oldTop + 10}px`;
            this.element.style.top = newTop;
        }
    }
}

export default ElementMovement