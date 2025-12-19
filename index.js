

const containerElement = document.querySelector(".screen");
const containerWidth = containerElement.clientWidth;
const containerHeight = containerElement.clientHeight;

function generateGrid(size) {
  // RESET GRID
  containerElement.innerHTML = "";
  
  // CREATE GRID
  for (let i = 0; i < size * size; i++) {
    // CREATE ITEM ELEMENT AND SET SIZE
    const itemElement = document.createElement("div");
    itemElement.id = "item";
    itemElement.style.width = `${containerWidth / size}px`;
    itemElement.style.height = `${containerHeight / size}px`;
    
    // ADD HOVER EFFECT FOR GRID ITEM
    itemElement.addEventListener("mouseover", () => {
      itemElement.style.backgroundColor = "black";
    });
    
    // APPEND ITEM TO CONTAINER
    containerElement.appendChild(itemElement);
  } 
}

const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", () => {
  const size = parseInt(window.prompt("Enter new grid size:"));
  generateGrid(size);
});

generateGrid(16);