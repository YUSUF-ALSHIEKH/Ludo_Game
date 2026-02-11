const dice = document.querySelector("#dice")
const throwButton = document.querySelector("#throw")
const turnDisplay = document.querySelector("#turn")
const allPieces = document.querySelectorAll(".piece")
const alertDisplay = document.querySelector("#alert")
const nextPlayer = document.querySelector("#nextplayer")
let team = ["green", "yellow", "red"]
let diceValue = 0
let turn
let win = false
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
}

function throwDice() {
  // no twice click if not 6
  if (diceValue !== 0) {
    return
  }

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
  // add all piece in its place
  const pieceName = Object.keys(piecesPotion)
  for (let i = 0; i < pieceName.length; i++) {
    let piece = pieceName[i]
    let pieceDiv = document.getElementById(`${piece}`)
    let cellposition = document.getElementById(`${piecesPotion[piece]}`)
    cellposition.appendChild(pieceDiv)
  }
  // add class if the piece in same cell (make it smaller)
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
    if (cellposition.childElementCount === 1) {
      pieceDiv.classList.remove("pieceinsidecell")
    }
  }
}

function switchTurn() {
  if (turn === "green") {
    turn = "yellow"
  } else if (turn === "yellow") {
    turn = "red"
  } else {
    turn = "green"
  }
  //to reset
  diceValue = 0
  dice.textContent = "DICE : 0"
  turnDisplay.textContent = `TURN: ${turn} `
  turnDisplay.style.color = `${turn}`
}
function allPiecesInLobby(color) {
  const lobby = paths[color][0]
  let allInLobby = true
  let potion = Object.keys(piecesPotion)
  potion.forEach((piece) => {
    if (piece.startsWith(color)) {
      if (piecesPotion[piece] !== lobby) {
        allInLobby = false
      }
    }
  })

  return allInLobby
}
function handleMoving(pieceId, nextIndex) {
  const pieceColor = pieceId.replace(/[0-9]/g, "")
  const path = paths[pieceColor]
  const nextPosition = path[nextIndex]
  //check if there are any piece in next place
  const piecesOnNext = Object.keys(piecesPotion).filter(
    (piece) => piecesPotion[piece] === nextPosition
  )
  //check color
  let capturedOpponent = false
  piecesOnNext.forEach((opponentPiece) => {
    const opponentColor = opponentPiece.replace(/[0-9]/g, "")
    if (opponentColor !== pieceColor) {
      piecesPotion[opponentPiece] = paths[opponentColor][0]
      capturedOpponent = true
    }
  })
  //if color true (mean enemy piece)
  if (capturedOpponent) {
    const extraIndex = nextIndex + 3
    if (extraIndex < path.length) {
      piecesPotion[pieceId] = path[extraIndex]
    } else {
      piecesPotion[pieceId] = nextPosition
    }
  } else {
    piecesPotion[pieceId] = nextPosition
  }
}
function checkTheWin() {
  const redHome = paths.red[paths.red.length - 1]
  const yellowHome = paths.yellow[paths.yellow.length - 1]
  const greenHome = paths.green[paths.green.length - 1]
  let redCount = 0
  let yellowCount = 0
  let greenCount = 0
  const pieces = Object.keys(piecesPotion)
  pieces.forEach((piece) => {
    const pieceDiv = document.getElementById(piece)

    if (piecesPotion[piece] === redHome) {
      redCount++
      pieceDiv.classList.add("hidden")
    }
    if (piecesPotion[piece] === yellowHome) {
      yellowCount++
      pieceDiv.classList.add("hidden")
    }

    if (piecesPotion[piece] === greenHome) {
      greenCount++
      pieceDiv.classList.add("hidden")
    }
  })
  document.getElementById("redhome").textContent = redCount
  document.getElementById("yellowhome").textContent = yellowCount
  document.getElementById("greenhome").textContent = greenCount

  if (redCount === 4 || yellowCount === 4 || greenCount === 4) {
    win = true
    window.location.href = "./winer.html"
  }
}

function everythingTogether(event) {
  alertDisplay.textContent = ""
  alertDisplay.style.color = turn
  const pieceId = event.target.id
  const pieceColor = pieceId.replace(/[0-9]/g, "") // youtube XD : https://youtube.com/shorts/4gsATwvQj04?si=I43HhZlQgylJiFmu for remove the 1,2,3,4

  //for error
  if (pieceColor !== turn) {
    alertDisplay.textContent = `it is ${turn} turn !!`
    return
  }
  if (diceValue === 0) {
    alertDisplay.textContent = "Throw the dice !!"
    return
  }

  const path = paths[pieceColor]
  const currentPosition = piecesPotion[pieceId]
  const currentIndex = path.indexOf(currentPosition) // w3shool : https://www.w3schools.com/jsref/jsref_indexOf.asp

  //if all in lobby and you unlucky
  if (allPiecesInLobby(pieceColor) && diceValue !== 6) {
    switchTurn()
    return
  }
  //if is in lobby start on path 1
  let nextIndex
  if (currentIndex === 0) {
    if (diceValue !== 6) {
      return
    } else {
      nextIndex = 1
    }
  } else {
    nextIndex = currentIndex + diceValue
    if (nextIndex >= path.length) {
      alertDisplay.textContent = "You need a smaller number to jump !!"
      return
    }
  }
  //move the piece and check if there are enemy on next cell
  handleMoving(pieceId, nextIndex)
  alertDisplay.textContent = ""

  render()
  checkTheWin()

  if (diceValue === 6) {
    diceValue = 0
    dice.textContent = "DICE : 0"
    return
  }
  switchTurn()
}
/////////////////start////////////////////////
randomStart()

allPieces.forEach((piece) => {
  piece.addEventListener("click", everythingTogether)
})
throwButton.addEventListener("click", throwDice)
nextPlayer.addEventListener("click", switchTurn)
