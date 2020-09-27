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
  const button = document.getElementById("start");
  button.addEventListener("mousedown", (event) => {
    renderBoard();
    event.stopPropagation();
  });
}

function renderBoard() {
  //renders the 5x5 board
  const tableBody = document.getElementById("tableData");
  let dataHtml = "";

  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
      dataHtml += `<tr><td id=${("i", "j")}></td></tr>`;
    }
  }
  console.log(dataHtml);
  tableBody.innerHTML = dataHtml;
}
