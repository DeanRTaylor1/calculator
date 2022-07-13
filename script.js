//divs
const grid = document.querySelector("#grid");
const output = document.querySelector("#calc-output");
const currentCalc = document.querySelector("#calc-current");
const resetbuttons = document.querySelector("#calc-top-row");






function operation(operation, num2, num1){
    if(operation === '×'){
        return num1 * num2;
    }
    if(operation === '+'){
        return num1 + num2;
    }
    if(operation === '-'){
        return num1 - num2;
    }
    if(operation === '÷'){
        return num1 / num2;
    }


}

resetbuttons.addEventListener('click', event => {  
    if(!event.target.closest('button')) return; 

    const key = event.target;
    const displayValue = output.textContent;
    const calculation = currentCalc.textContent;
    clearbtn = 'clearBtn';
    


    if(key.classList.value === 'clearbtn'){
        output.textContent = '0';
        currentCalc.textContent = '';
    }
    if(key.classList.value === 'deletebtn'){
       if(displayValue.length === 1 && displayValue != '0' && grid.dataset.previousoperatorType != '='){
        output.textContent = '0';
       } else if(grid.dataset.previousoperatorType === '=' || displayValue === '0'){
        return;
    }   else {        
        let newVal = displayValue.slice(0, -1);        
        output.textContent = newVal;
       }
    }

});

grid.addEventListener('click', event => {  
    if(!event.target.closest('button')) return;  

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = output.textContent;
    const calculation = currentCalc.textContent;
    console.log(key.classList.value);

    if(key.classList.value === 'numberbtn'){
        if(displayValue === '0'){
            output.textContent = keyValue;  
        } else {output.textContent = displayValue + keyValue;
        }
    
}

   if(key.classList.value === 'operatorbtn'){
        if(calculation === ''){
        currentCalc.textContent = ` ${displayValue} ${keyValue}`;
        grid.dataset.previousoperatorType = keyValue;
        output.textContent = '0';

        } else if(grid.dataset.previousoperatorType === '='){
            currentCalc.textContent = ` ${displayValue} ${keyValue}`;
            grid.dataset.previousoperatorType = keyValue;
            //let displayNumber = operation(grid.dataset.previousoperatorType, parseFloat(displayValue), parseFloat(calculation));
            output.textContent = 0;
        }else {
            output.textContent = '0';
            let displayNumber = operation(grid.dataset.previousoperatorType, parseFloat(displayValue), parseFloat(calculation));
            currentCalc.textContent = `${displayNumber} ${keyValue}`;
            grid.dataset.previousoperatorType = keyValue;


        }
        
     

        


        
    }

    if(key.classList.value === 'equalbtn'){
        if(calculation === ''){ 
            return;
        } else if (grid.dataset.previousoperatorType === '='){
            return;
        }
        else { 
            let result = operation(grid.dataset.previousoperatorType, parseFloat(displayValue), parseFloat(calculation));
            currentCalc.textContent = `${calculation} ${displayValue} ${keyValue}`
            output.textContent = result;
            grid.dataset.previousoperatorType = keyValue;

        }



    }
   
    

    console.log(grid.dataset.previousKeyType);


    


});







/*


//buttons
const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");
const threeBtn = document.querySelector("#threeBtn");
const fourBtn = document.querySelector("#fourBtn");
const fiveBtn = document.querySelector("#fiveBtn");
const sixBtn = document.querySelector("#sixBtn");
const sevenBtn = document.querySelector("#sevenBtn");
const eightBtn = document.querySelector("#eightBtn");
const nineBtn = document.querySelector("#nineBtn");
const zeroBtn = document.querySelector("#zeroBtn");
const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const dotBtn = document.querySelector("#dotBtn");
const calculateBtn = document.querySelector("#calculateBtn");
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");

let currentNum = '';
let storedNum = 0;
let currentOperater = '';

console.log(sevenBtn.id);

//numbers

zeroBtn.onclick = () => updateOutput(0);
oneBtn.onclick = () => updateOutput(1);
twoBtn.onclick = () => updateOutput(2);
threeBtn.onclick = () => updateOutput(3);
fourBtn.onclick = () => updateOutput(4);
fiveBtn.onclick = () => updateOutput(5);
sixBtn.onclick = () => updateOutput(6);
sevenBtn.onclick = () => updateOutput(7);
eightBtn.onclick = () => updateOutput(8);
nineBtn.onclick = () => updateOutput(9);

// function buttons 

clearBtn.onclick = () => clearOutput();
deleteBtn.onclick = () => deleteOutput();
addBtn.onclick = () => addition(currentNum);
subtractBtn.onclick = () => subtraction(currentNum);


function subtraction (num) {

console.log(parseInt(currentNum));

if (currentNum != 0){

    storedNum += parseInt(currentNum);
    currentCalc.innerHTML = '' ;
    currentCalc.append(storedNum + ' - ');      
    currentNum = '';
    output.innerHTML= 0;
    console.log(parseInt(storedNum));
    
    
} else {return;}

}

function addition (num) {

    console.log(parseInt(currentNum));
    
    if (currentNum != 0){
    
        storedNum += parseInt(currentNum);
        currentCalc.innerHTML = '' ;
        currentCalc.append(parseInt(storedNum) + ' + ');      
        currentNum = '';
        output.innerHTML= 0;
        
        console.log(parseInt(storedNum));
        
        
    } else {return;}
    
    }




function deleteOutput() {
    
    
    
    const currentOutput = output.innerHTML;    
    const newOutput = currentOutput.slice(0, -1);
    const tempNum = currentNum.slice(0, -1);
    output.innerHTML = '';
    output.innerHTML = newOutput;
    currentNum = tempNum;
    console.log(currentNum);
    checkOutput();



}


function checkOutput() {

    const isZero = output.innerHTML;

    console.log(isZero.length);

    if(isZero === ""){
    output.innerHTML = 0;

}

    else {return;}

}

function clearOutput() {
    output.innerHTML = 0;
    currentNum = '0';
    currentCalc.innerHTML = '' ;
    storedNum = '0'
    


}



function updateOutput(num) {

    numOutput = parseInt(num);
    currentOutput = parseInt(output.innerHTML);

    console.log(currentOutput === 0);

    if (currentOutput === 0){

        output.innerHTML = '';
                    
        output.append(numOutput);
        currentNum = currentNum + numOutput;
        console.log(currentNum);



    }

    else {

    numOutput = parseInt(num);            
    output.append(numOutput);
    currentNum = currentNum + numOutput;
    console.log(currentNum);

}
    






}





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
*/


  //  window.onload = () => {
      //  updateOutput(0);
        
      //}