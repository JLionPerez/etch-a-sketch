const container = document.querySelector(".container")
const canvas = document.createElement("div")
canvas.setAttribute("class", "canvas")
container.appendChild(canvas)

let createGrid = (num) => {
    for (let i = 0; i < num; i++) { 
        const row = document.createElement("div");
        row.setAttribute("class","row")
        for(let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            cell.setAttribute("class","cell");
            colorOver(cell);
            row.appendChild(cell);
        }
    canvas.appendChild(row)
    }

}

let colorOver = (obj) => {
    obj.addEventListener("mouseover", (event) => {
        event.target.style.background = "black"
    });
}

createGrid(100)
