const dice = document.querySelector("#dice")
const throwButton = document.querySelector("#throw")
const turnDisplay = document.querySelector("#turn")
const allPieces = document.querySelectorAll(".piece")

let team = ["green", "yellow", "red", "blue"]
let diceValue = 0
let turn
const paths = {
  green: [
    "greenSqrLobby",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "greenplace1",
    "greenplace2",
    "greenplace3",
    "greenplace4",
    "greenplace5",
    "greenplace6",
  ],
  yellow: [
    "yellowSqrLobby",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "yellowplace1",
    "yellowplace2",
    "yellowplace3",
    "yellowplace4",
    "yellowplace5",
    "yellowplace6",
  ],
  red: [
    "redSqrLobby",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "redplace1",
    "redplace2",
    "redplace3",
    "redplace4",
    "redplace5",
    "redplace6",
  ],
  blue: [
    "blueSqrLobby",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "blueplace1",
    "blueplace2",
    "blueplace3",
    "blueplace4",
    "blueplace5",
    "blueplace6",
  ],
}
let piecesPotion = {
  green1: "greenSqrLobby",
  green2: "greenSqrLobby",
  green3: "greenSqrLobby",
  green4: "greenSqrLobby",
  yellow1: "yellowSqrLobby",
  yellow2: "yellowSqrLobby",
  yellow3: "yellowSqrLobby",
  yellow4: "yellowSqrLobby",
  red1: "redSqrLobby",
  red2: "redSqrLobby",
  red3: "redSqrLobby",
  red4: "redSqrLobby",
  blue1: "blueSqrLobby",
  blue2: "blueSqrLobby",
  blue3: "blueSqrLobby",
  blue4: "blueSqrLobby",
}

function throwDice() {
  const randomValue = Math.floor(Math.random() * 6) + 1
  diceValue = randomValue
  dice.textContent = `DICE: ${diceValue}`
}
function randomStart() {
  let randomTeam = team[Math.floor(Math.random() * team.length)]
  turn = randomTeam
  turnDisplay.textContent = `TURN: ${turn} `
  turnDisplay.style.color = `${turn}`
}
function render() {
  const pieceName = Object.keys(piecesPotion)
  for (let i = 0; i < pieceName.length; i++) {
    let piece = pieceName[i]
    let pieceDiv = document.getElementById(`${piece}`)
    let cellposition = document.getElementById(`${piecesPotion[piece]}`)
    cellposition.appendChild(pieceDiv)
  }
  for (let i = 0; i < pieceName.length; i++) {
    let piece = pieceName[i]
    let piecePotion = piecesPotion[piece]
    let pieceDiv = document.getElementById(`${piece}`)
    let cellposition = document.getElementById(`${piecePotion}`)
    if (cellposition.childElementCount > 1) {
      pieceDiv.classList.add("pieceinsidecell")
    }
    if (cellposition.childElementCount > 1 && piecePotion === paths.green[0]) {
      pieceDiv.classList.remove("pieceinsidecell")
    }
    if (cellposition.childElementCount > 1 && piecePotion === paths.yellow[0]) {
      pieceDiv.classList.remove("pieceinsidecell")
    }
    if (cellposition.childElementCount > 1 && piecePotion === paths.red[0]) {
      pieceDiv.classList.remove("pieceinsidecell")
    }
    if (cellposition.childElementCount > 1 && piecePotion === paths.blue[0]) {
      pieceDiv.classList.remove("pieceinsidecell")
    }
  }
}
function switchTurn() {
  if (turn === "green") {
    turn = "yellow"
  } else if (turn === "yellow") {
    turn = "red"
  } else if (turn === "red") {
    turn = "blue"
  } else {
    turn = "green"
  }
  turnDisplay.textContent = `TURN: ${turn} `
  turnDisplay.style.color = `${turn}`
}
function movePieces(event) {
  const pieceId = event.target.id
  const pieceColor = pieceId.replace(/[0-9]/g, "")

  if (pieceColor !== turn) {
    alert(`it is ${turn} turn`)
    return
  }

  if (diceValue === 0) {
    alert("Throw the dice")
    return
  }

  const path = paths[pieceColor]
  const currentPosition = piecesPotion[pieceId]
  const currentIndex = path.indexOf(currentPosition)

  if (currentIndex === 0) {
    if (diceValue !== 6) {
      return
    }
    piecesPotion[pieceId] = path[1]
  } else {
    const nextIndex = currentIndex + diceValue

    if (nextIndex >= path.length) {
      alert("you need small number to jump ")
      return
    }

    piecesPotion[pieceId] = path[nextIndex]
  }

  diceValue = 0
  dice.textContent = "DICE : 0"

  render()
  switchTurn()
}
randomStart()

allPieces.forEach((piece) => {
  piece.addEventListener("click", movePieces)
})
throwButton.addEventListener("click", throwDice)
