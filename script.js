let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector("#resetBtn");
let newgame = document.querySelector("#newBtn");
let winnertxt = document.querySelector("#winner");

let turnO = true;
let count = 0;
let hasWinner = false;

let winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const showWinner = (winner) => {
  winnertxt.innerHTML = `Winner is ${winner}`;
  hasWinner = true;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let value1 = boxes[pattern[0]].innerHTML;
    let value2 = boxes[pattern[1]].innerHTML;
    let value3 = boxes[pattern[2]].innerHTML;

    if (value1 !== "" && value1 === value2 && value2 === value3) {
      showWinner(value1);
      for (let box of boxes) box.disabled = true;
      for (let i = 0; i < 3; i++) {
        boxes[pattern[i]].style.backgroundColor = "#3c4948ff";
      }
      break;
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML !== "") return;

    box.innerHTML = turnO ? "o" : "x";
    box.disabled = true;
    turnO = !turnO;
    count++;

    checkWinner();

    if (count === 9 && !hasWinner) {
      winnertxt.innerHTML = "DRAW";
    }
  });
});

const resetGame = () => {
  turnO = true;
  count = 0;
  hasWinner = false;
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
    box.style.backgroundColor = "#121212";
  }
  winnertxt.innerHTML = "";
};

resetgame.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);
