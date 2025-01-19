function generateRandomRGBValue(){
  return Math.floor(Math.random() * 255);
}

function draw(){
  const r = generateRandomRGBValue();
  const g = generateRandomRGBValue();
  const b = generateRandomRGBValue();
  this.style.backgroundColor = `rgba(${r}, ${g}, ${b}`;
  if(this.dataset.opacity < 100)
    this.dataset.opacity = parseInt(this.dataset.opacity) + 10;
  this.style.opacity = `${this.dataset.opacity}%`;
}

function activateDraw(){
  document.querySelectorAll(".square").forEach(function(square) {
    square.addEventListener("mouseover", draw);
  });
}

function deactivateDraw(){
  document.querySelectorAll(".square").forEach(function(square) {
    square.removeEventListener("mouseover", draw);
  });
}

function clearGrid(){
  document.querySelectorAll(".square").forEach((square) => {
    square.style = `background-color: "white"; opacity: 0%;`;
    square.opacity = "0%";
  })
}

function createGrid(size){
  for(let i = 0; i < size; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.opacity = 0;
        row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function createNewGrid(){
    document.querySelectorAll(".row").forEach((row)=>{
        row.remove();
    });

    let size;
    // input validation
    while(true){
        size = parseInt(prompt("Enter size: "));

        if(size > 0 && size === Math.floor(size) && size <= 100) break;
        else alert("Invalid size.");
    }
    createGrid(size);
}

const changeSize = document.querySelector("#change-size");
changeSize.addEventListener("click", createNewGrid);
const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);
const container = document.querySelector(".container");
container.addEventListener("mousedown", activateDraw);
container.addEventListener("mouseup", deactivateDraw);
container.addEventListener("mouseleave", deactivateDraw);

createGrid(16);