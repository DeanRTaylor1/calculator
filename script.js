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

    if(keyValue === '.' && grid.dataset.dot != '.' && grid.dataset.previousoperatorType != '='){
        grid.dataset.dot = keyValue;
        output.textContent = displayValue + keyValue;
    } else if(keyValue === '.' && grid.dataset.dot === '.'){
        return
    }


    if(key.classList.value === 'numberbtn' && keyValue != '.'){
        if(displayValue === '0'){
            output.textContent = keyValue;  
        } else if (grid.dataset.previousoperatorType === '='){
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
            let result = operation(grid.dataset.previousoperatorType, parseFloat(displayValue), parseFloat(calculation));
            currentCalc.textContent = `${calculation} ${displayValue} ${keyValue}`
            output.textContent = result;
            grid.dataset.previousoperatorType = keyValue;

        }

    }
 
});


