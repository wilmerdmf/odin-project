const containerElement = document.getElementById("container"),
  gridInputElement = document.getElementById("size-input"),
  gridButtonElement = document.getElementById("size-button");

let originalGridSize = 16;

const newGrid = (gridSize) => {
  if (!gridSize || typeof gridSize != "number") {
    alert("Please enter a number.");
    gridSize = originalGridSize;
  }

  if (gridSize > 50) {
    alert("Number must be less than 50.");
    gridSize = originalGridSize;
  }

  if (gridSize % 1 !== 0 || Math.sign(gridSize) === -1) {
    alert("No decimals or negative numbers allowed.");
    gridSize = originalGridSize;
  }

  let squareSize = (containerElement.offsetHeight - containerElement.offsetHeight * 0.004) / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    containerElement.appendChild(square);
  }

  gridInputElement.value = "";
};

const resetGrid = () => {
  let squareElements = document.querySelectorAll(".square");
  for (const square of squareElements) containerElement.removeChild(square);
};

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target === gridButtonElement) {
    resetGrid();
    newGrid(Number(gridInputElement.value));
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    let activeSquare = e.target;
    activeSquare.classList.add("is-active");
  }
});

newGrid(originalGridSize);
