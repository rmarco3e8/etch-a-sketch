size = 16;

function fillDrawContainer() {
    let container = document.querySelector(".draw-container");
    container.innerHTML = "";
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }

    for (let i = 0; i < size; i++) {
        container.appendChild(row.cloneNode(true));
    }

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", fill));
}

function fill(e) {
    e.target.classList.add("filled");
}

function clear() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.remove("filled"));
}

function resize() {
    num = parseInt(prompt("Enter side length:", "16"));

    if (!num || num > 100) return;

    size = num;
    fillDrawContainer();
}

fillDrawContainer();

let clearButton = document.querySelector(".clear");
clearButton.onclick = clear;

let resizeButton = document.querySelector(".resize");
resizeButton.onclick = resize;