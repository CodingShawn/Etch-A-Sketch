const sketchbox = document.querySelector('#sketchbox');
const stylesheet = document.styleSheets[0];
const resetButton = document.getElementById('resetButton')

function createGrid(width) {
    for (let i = 0; i < width * width; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        sketchbox.appendChild(gridDiv);
    }
    sketchbox.style.cssText = `grid-template-columns: repeat(${width}, 1fr); grid-template-rows: repeat(${width}, 1fr)`
    //stylesheet.insertRule(`#sketchbox {grid-template-columns: repeat(${width}, 1fr); // problematic because cannot remove rule easily
    //                                grid-template-rows: repeat(${width}, 1fr)}`, 0);
    gridSetUp();
}

function gridSetUp() {
    const grids = Array.from(document.querySelectorAll('.grid'));
    grids.forEach(grid => grid.addEventListener('mouseover', gridChangeRainbowColor));
}

function gridChangeColor() {
    this.classList.add('gridAfterHover');
}

function gridChangeRainbowColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `${r},${g},${b}`;
    this.style.cssText = `background-color: rgb(${color})`;
}

resetButton.addEventListener('click', resetSketchbox);

function resetSketchbox() {
    let width = 0;
    while (true) {
        width = prompt("Choose your grid width/length (Do not choose more than 100!)");
        if (width < 1 || width > 100) {
            alert('Invalid size! Choose again!')
        } else break; 
    }
    let gridDivs = Array.from(document.querySelectorAll('.grid'));
    gridDivs.forEach(gridDiv => sketchbox.removeChild(gridDiv));
    createGrid(width);

}

createGrid(16);