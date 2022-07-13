//divs
const grid = document.querySelector("#grid");
const output = document.querySelector("#calc-output");
const currentCalc = document.querySelector("#calc-current");
const resetbuttons = document.querySelector("#calc-top-row");
const sevenbutton = document.getElementById("7");
const numberButtons = document.querySelector("#numberbtn");
let button;
let result;





// respond to keyboard input
document.addEventListener("keypress", function(event) {
    console.log(event.key);
    let newKey = event.key;
    if (newKey === 'Enter'){
        button = document.getElementById(`=`);
        button.click();
    }
    else if(newKey === 'c'){
        button = document.getElementById(`clearBtn`);
        button.click();
    }else if(document.getElementById(`${event.key}` === null)) {
        return;
    } else {
    console.log(document.getElementById(`${event.key}`));
    button = document.getElementById(`${event.key}`);
    button.click();
}
    //console.log(document.getElementById(`${event.key}`);
    
  });



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
    //console.log(key.classList.value);
    

    if(keyValue === '.' && grid.dataset.dot != '.' && grid.dataset.previousoperatorType != '='){
        
        grid.dataset.dot = keyValue;
        output.textContent = displayValue + keyValue;
    } else if(keyValue === '.' && grid.dataset.dot === '.'){
        return
    }

    console.log(displayValue.length); 
    if(key.classList.value === 'numberbtn' && keyValue != '.'){
        
        if(displayValue === '0'){
            output.textContent = keyValue;  
        } else if (grid.dataset.previousoperatorType === '='){
            return;
        } else if (displayValue.length >= '9'){
            return;
        }else {output.textContent = displayValue + keyValue;
        }
        console.log;
    
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
        grid.dataset.dot = '';
    }

    if(key.classList.value === 'equalbtn'){
        if(calculation === ''){ 
            return;
        } else if (grid.dataset.previousoperatorType === '='){
            return;
        }
        else { 
            result = operation(grid.dataset.previousoperatorType, parseFloat(displayValue), parseFloat(calculation));
            currentCalc.textContent = `${calculation} ${displayValue} ${keyValue}`
            output.textContent = result;
            grid.dataset.previousoperatorType = keyValue;
            if(output.textContent.length > 9){
                output.textContent ='Error';
            }

        }
        
    }
 
});


