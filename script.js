//where to pick up: workthrough the gotchas oh lord 

const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element.addEventListener('click', calculate)
}); 

let numberMemory;
let firstNumber;
let operatorMemory;

function calculate(e) {
    let clickedButton = e.target.innerText;
    console.log(typeof clickedButton);
    if (numberMemory === undefined) {
        if (clickedButton >= 1 || clickedButton <= 9) {
            numberMemory = clickedButton;
            updateDisplay(numberMemory);
        }
        else if (clickedButton === "C") {
            console.log("clear all the sheeee");
            updateDisplay("");
            numberMemory = undefined;
        }
    }
    else { //if (numberMemory !== undefined && operatorMemory === undefined){
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
            let result = operate(operatorMemory,firstNumber,numberMemory);
            updateDisplay(result);
            numberMemory = undefined;
            }
        }
    // else if (numberMemory !== undefined && operatorMemory !== undefined){
    //     let firstNumber = operate(operatorMemory,firstNumber,numberMemory);
    //     updateDisplay("");
    //     numberMemory = undefined;
    // }
    }
    


function updateDisplay(text) {
    const display = document.querySelector(".output");
    display.innerText = text;
    // When clicked, get what button it was
    // Check to see if any numbers are stored in memory
    // If no memory:
    // And number, add to memory
    // And anything else, do nothing
    // If memory:
    // And number, add to memory
    // And operator (not equals), store number, store operator, clear display
    // And decimal, add to memory
    // If operators (and equals), but no other number in memory, present "error"
    // If operator, and equals, and other number in memory: call operate function and display result
    // If it was a clear, clear the display and memory 
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