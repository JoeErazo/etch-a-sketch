const container = document.querySelector(".container");

// create 16x16 grid of square divs
for(let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}

function changeColor(){
    this.classList.toggle("change-color");
}

document.querySelectorAll(".square").forEach(function(square) {
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mouseout", changeColor);
});