import "./styles.css";

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  console.log("Initializing");

  renderBoard();
}

let turn = "x";
const x = "x";
const o = "o";
let tableBoard;

function renderBoard() {
  //renders the 5x5 board

  tableBoard = document.getElementById("tableBoard");

  for (let i = 0; i <= 4; i++) {
    let row = document.createElement("tr");
    tableBoard.append(row);
    for (let j = 0; j <= 4; j++) {
      let cell = document.createElement("td");
      cell.onclick = function () {
        if (cell.innerHTML !== "") {
          return;
        }
        cell.innerHTML = turn;
        checkWinner(cell, i, j);
        turn = turn === x ? o : x;
      };
      row.append(cell);
    }
  }
}

function checkWinner(cell, i, j) {
  for (let k = -4; k <= 4; k++) {
    let cell_i = i + k;
    if (cell_i >= 0 && cell_i <= 4) {
      const row = tableBoard.rows[cell_i];
      console.log(row);
    }
  }
}
