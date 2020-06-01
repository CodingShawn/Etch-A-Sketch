const sketchbox = document.querySelector('#sketchbox');
const stylesheet = document.styleSheets[0];

function createGrid(width) {
    for (let i = 0; i < width * width; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        sketchbox.appendChild(gridDiv);
    }
    stylesheet.insertRule(`#sketchbox {grid-template-columns: repeat(${width}, 1fr); 
                                    grid-template-rows: repeat(${width}, 1fr)}`, 0);
    gridSetUp();
}

function gridSetUp() {
    const grids = Array.from(document.querySelectorAll('.grid'));
    grids.forEach(grid => grid.addEventListener('mouseover', gridChangeColor));
}

function gridChangeColor() {
    this.classList.add('gridAfterHover')
}

createGrid(16);