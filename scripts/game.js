const board = []
for (let i = 0; i < 20; i++) {
    const randomPath = Math.floor(Math.random() * 2)
board.push(randomPath)
}
for(let i=2; i<=19; i++){
const pathBackground= document.getElementById("path-"+i)
pathBackground.style.backgroundImage="url('./assets/tiles/path_free.png')"

}
console.log(board)