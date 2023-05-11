const board = []

function loadgame() {
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
loadgame();
function dialogue() {
    const dialogueButton = document.getElementById("btn-dialogue")
dialogueButton.style.display="none"
}






