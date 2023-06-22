let enabledSystemSound = true
const music = document.getElementById("sound-control")
let playerPosition = 1
// music.src = "./assets/audios/music.mp3"
// music.play();


const board = []

function loadGame() {
    board.push("start")

    for (let i = 2; i <= 99; i++) {


        const randomPath = Math.floor(Math.random() * 2)

        board.push(randomPath)

        const element = document.getElementById("path" + i)

        if (randomPath === 0) {
            element.style.backgroundImage = "url('./assets/tiles/path_free.png')"
        } else {
            element.style.backgroundImage = "url('./assets/tiles/arbusto.png')"

        }

    }



}
loadGame();

function dialogue() {
    const dialogueButton = document.getElementById("btn-dialogue")
    dialogueButton.style.display = "none"
}

function handleSound() {
    const soundButton = document.getElementById("sound")
    if (enabledSystemSound) {
        enabledSystemSound = false
        soundButton.src = "./assets/images/mute.png"
        music.pause()
        console.log("entrou no if")
    } else {
        enabledSystemSound = true
        soundButton.src = "./assets/images/muteNao.png"
        music.play()
        console.log("entrou no else")

    }



}


function movePlayer(_step) {
    const elementToRemovePlayer = document.getElementById("path" + playerPosition)
    elementToRemovePlayer.innerHTML = ""

    const elementToInsertPlayer = document.getElementById("path" + (playerPosition + _step))
    elementToInsertPlayer.innerHTML = "<div id='character'></div>"

    playerPosition = playerPosition + _step
}


function checkMove(_step) {
    const newPosition = playerPosition + _step

    if (board[newPosition - 1] === 0) {

        return true
    }
    return false

}

window.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (event.key === "ArrowDown") {
        if (checkMove(10)) {
            movePlayer(10)
        }
    }
    if (event.key === "ArrowRight") {
        if (checkMove(1)) {
            movePlayer(1)
        }
        
    }
    if (event.key === "ArrowUp") {
        if (checkMove(-10)) {
            movePlayer(-10)
        }
    }
    if (event.key === "ArrowLeft") {
        if (checkMove(-1)) {
            movePlayer(-1)
        }
    }
}





)

/// QUANDO FOR FAZER PATH COMEÇA COM 0 PQ NO BOARD COMEÇA COM 0 (para não dar problema)



