function draw(){
  this.classList.add("change-color");
}

function clearGrid(){
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("change-color");
  })
}

function createGrid(size){
  const container = document.querySelector(".container");

  for(let i = 0; i < size; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
  }

  document.querySelectorAll(".square").forEach(function(square) {
      square.addEventListener("mouseover", draw);
  });
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

createGrid(16);