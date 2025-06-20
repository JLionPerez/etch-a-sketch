const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "Resize Grid";
container.appendChild(button);

const canvas = document.createElement("div");
canvas.setAttribute("class", "canvas");
container.appendChild(canvas);

let size = 16;

let createGrid = (num) => {
    for (let i = 0; i < num; i++) { 
        const row = document.createElement("div");
        row.setAttribute("class","row");
        for(let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            cell.setAttribute("class","cell");
            colorOver(cell);
            row.appendChild(cell);
        }
    canvas.appendChild(row);
    }
}

let randomColor = () => {
    let values = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * values.length)];
    }
    return color;
}

let colorOver = (obj) => {
    obj.addEventListener("mouseover", (event) => {
        event.target.style.background = randomColor();
    });
}

createGrid(size)

button.addEventListener("click", (event) => {
    alert(size = parseInt(prompt("Size of new grid: ")))
    if (size > 100) {
        alert("You cannot exceed a size of 100 cells.")
    }
    if (size <= 100) {
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }
        createGrid(size)
    }
})