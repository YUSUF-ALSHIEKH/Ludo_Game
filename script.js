const pieceNumber = document.querySelector("#info")
const green_Pieces = document.querySelector("#g1")
const up_Down_Cells = document.getElementById("1")
const startButton = document.querySelector("#sumbit")

class Plays_Pieces {
  constructor(numbers, color, players) {
    this.number = numbers
    this.color = color
    this.players = players
  }
}
function init() {
  const pieceNum = pieceNumber.Value()
  console.log(pieceNum)
}
const pieceNum = pieceNumber.Value
console.log(pieceNum)

startButton.addEventListener("click", init)
// startButton.addEventListener("click", takeinfo)
