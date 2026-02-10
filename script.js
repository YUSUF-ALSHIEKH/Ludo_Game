const playNumber = document.querySelector("#Players")
const saveButton = document.querySelector("#save")
const startButton = document.querySelector("#start")
const indexHtml = "index.html"
const fourPlayer = "four_player.html"
const threePlayer = "three_player.html"

function init() {
  let plNumber = playNumber.value
  if (plNumber === "2") {
    startButton.href = indexHtml
  } else if (plNumber === "3") {
    startButton.href = threePlayer
  } else {
    startButton.href = fourPlayer
  }
}

saveButton.addEventListener("click", init)
