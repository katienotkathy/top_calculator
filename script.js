//where to pick up: round the numbers

const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element.addEventListener('click', calculate)
}); 

let numberMemory;
let firstNumber;
let operatorMemory;
let result;

function calculate(e) {
    let clickedButton = e.target.innerText;
    if (numberMemory === undefined) {
        if (clickedButton >= 1 || clickedButton <= 9) {
            numberMemory = clickedButton;
            updateDisplay(numberMemory);
        }
        else if (clickedButton === "C") {
            console.log("clear all the sheeee");
            updateDisplay("");
            numberMemory = undefined;
            operatorMemory = undefined;
        }
    }
    else if (numberMemory !== undefined && operatorMemory === undefined) {
        console.log("not the first button");
        if (clickedButton >= 1 || clickedButton <= 9) {
            numberMemory += clickedButton;
            updateDisplay(numberMemory);
            console.log(numberMemory);
        }
        else if (clickedButton === "C") {
            console.log("clear all the sheeee");
            updateDisplay("");
            numberMemory = undefined;
        }
        else if (clickedButton === "x") {
            console.log("multiply");
            firstNumber = numberMemory;
            numberMemory = undefined;
            operatorMemory = "multiply";
        }
        else if (clickedButton === "+") {
            console.log("add");
            firstNumber = numberMemory;
            numberMemory = undefined;
            operatorMemory = "add";
        }
        else if (clickedButton === "-") {
            console.log("minus");
            firstNumber = numberMemory;
            numberMemory = undefined;
            operatorMemory = "subtract";
        }
        else if (clickedButton === "÷") {
            console.log("divide");
            firstNumber = numberMemory;
            numberMemory = undefined;
            operatorMemory = "divide";
        }
        else if (clickedButton === "=") {
            if (firstNumber !== undefined) {
                result = operate(operatorMemory,firstNumber,numberMemory);
                updateDisplay(result);
                numberMemory = undefined;
            }
            
            }
        }
    else {
        console.log("more than one operator");
        if (clickedButton >= 1 || clickedButton <= 9) {
            numberMemory += clickedButton;
            updateDisplay(numberMemory);
            console.log(numberMemory);
            }
        else if (clickedButton === "C") {
            console.log("clear all the sheeee");
            updateDisplay("");
            numberMemory = undefined;
            operatorMemory = undefined;
            }
        else if (clickedButton === "x") {
            console.log("multiply");
            firstNumber = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(firstNumber);
            numberMemory = undefined;
            operatorMemory = "multiply";
            }
        else if (clickedButton === "+") {
            console.log("add");
            firstNumber = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(firstNumber);
            numberMemory = undefined;
            operatorMemory = "add";
            }
        else if (clickedButton === "-") {
            console.log("minus");
            firstNumber = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(firstNumber);
            numberMemory = undefined;
            operatorMemory = "subtract";
            }
        else if (clickedButton === "÷") {
            console.log("divide");
            firstNumber = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(firstNumber);
            numberMemory = undefined;
            operatorMemory = "divide";
            }
        else if (clickedButton === "=") {
            if (operatorMemory === "divide" && numberMemory === "0") {
                updateDisplay("whoopsie, try again");
                numberMemory = undefined;
                operatorMemory = undefined;
            }
            else {
            result = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(result);
            numberMemory = undefined;
            }
        }
        }
    }

    


function updateDisplay(text) {
    const display = document.querySelector(".output");
    display.innerText = text;
}

function operate(operation,a,b) {
    if (operation === "multiply") {
        return multiply(a,b);
    } else if (operation === "divide") {
        return divide(a,b);
    } else if (operation === "add") {
        return add(a,b);
    } else if (operation === "subtract") {
        return subtract(a,b);
    }
}

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}