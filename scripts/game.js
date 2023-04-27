const board = []

function loadgame() {
    board.push("start")

    for (let i = 2; i <= 24; i++) {
        console.log(i);
        const randomPath = Math.floor(Math.random() * 2)
        
        board.push(randomPath)
        
        const element = document.getElementById("path" + i)
       if(i===15){
        console.log(element);
       } 
        if (randomPath === 0) {
            element.style.backgroundImage = "url('./assets/tiles/path_free.png')"
        } else {  
            element.style.backgroundImage = "url('./assets/tiles/path_blocked.png')"

        }
     
    }


    console.log(board)
}
loadgame();







