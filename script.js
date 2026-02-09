const pieceNumber = document.querySelector("#piecenums")
const playNumber = document.querySelector("#Players")
const saveButton = document.querySelector("#submit")
class Plays_Pieces {
  constructor(numbers, players) {
    this.pieceNumber = numbers
    this.players = players
  }
}
function init() {
  let num = pieceNumber.value
  let plNumber = playNumber.value
  let plays_Pieces = new Plays_Pieces(num, plNumber)
  return plays_Pieces
}

function save() {
  const saveInfo = init()
  console.log(saveInfo.pieceNumber)
}

saveButton.addEventListener("click", save)
// startButton.addEventListener("click", takeinfo)
