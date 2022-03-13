const player = document.querySelector("#player")

document.addEventListener("keydown",function(event){
    console.log("S-a apasat tasta", event)
    if(event.key == "ArrowUp"){

        player.style.bottom = "10px"
    }

    if(event.key == "ArrowRight"){
        
    }

    if(event.key == "ArrowDown"){
        let oldTop = parseInt(player.style.top)
        console.log("oldTop este: " + oldTop)
        oldTop += 20;
        player.style.top = `${oldTop + 10}px`;
        
    }

    if(event.key == "ArrowLeft"){
        
    }

    // positionTop = player.style.top
    // if(player.style.top < 360){
    //     player.style.top = '20px';
    // }
});