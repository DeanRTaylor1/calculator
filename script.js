const grid = document.querySelector("#grid");
const output = document.querySelector("#calc-output");
const oneBtn = document.querySelector("oneBtn");
const twoBtn = document.querySelector("twoBtn");
const threeBtn = document.querySelector("threeBtn");
const fourBtn = document.querySelector("fourBtn");
const fiveBtn = document.querySelector("fiveBtn");
const sixBtn = document.querySelector("sixBtn");
const sevenBtn = document.querySelector("sevenBtn");
const eightBtn = document.querySelector("eightBtn");
const nineBtn = document.querySelector("nineBtn");





function operate(op, num1, num2){

    if (op === 'multiply') return num1 * num2;
    if (op === 'add') return num1 + num2;
    if (op === 'divide') return num1 / num2;
    if (op === 'subtract') return num1 - num2;



}


/*function setupGrid(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.setAttribute(`id`,`${i}`);
       // gridElement.addEventListener('mouseover', changeColor)
       // gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
      
    };

    window.onload = () => {
        setupGrid(4);
        
      }*/