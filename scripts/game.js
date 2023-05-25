let enabledSystemSound = true
const music = new Audio()
music.src = "./assets/audios/music.mp3"
music.play();


const board = []

function loadGame() {
    board.push("start")

    for (let i = 2; i <= 99; i++) {

        console.log(i);
        const randomPath = Math.floor(Math.random() * 2)

        board.push(randomPath)

        const element = document.getElementById("path" + i)

        if (randomPath === 0) {
            element.style.backgroundImage = "url('./assets/tiles/path_free.png')"
        } else {
            element.style.backgroundImage = "url('./assets/tiles/arbusto.png')"

        }

    }


    console.log(board)
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
        music.volume = 0

    } else {
        enabledSystemSound = true
        soundButton.src = "./assets/images/muteNao.png"
        music.volume = 100



    }



}





