let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const display = document.getElementById('cal_display');
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' || result !== ''){
            display.textContent = '';
            result = '';
        }
        display.textContent += button.textContent;
    })
});

function operate(operator , a , b) {
    switch (operator){
        case '+':
            return add(a , b);
        case '-':
            return subtract(a , b);
        case '*':
        case 'x':
            return multiply(a , b);
        case '/':
        case '÷':
            return divide(a , b);
        default:
            return null;
    }
}

//Equal button
document.getElementById('equal_key').addEventListener('click', () =>{
    secondNumber = display.textContent;
    if (firstNumber && secondNumber && operator){
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
    operator = '';
    }
});

//Reset button
document.getElementById('clear_key').addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
  });

document.querySelectorAll('.operator_key').forEach(button => {
    button.addEventListener('click', () => {
        if (!firstNumber){
            firstNumber = display.textContent;
        }
        operator = button.textContent;
        display.textContent = '';
    })
});
function add(a , b){
    return (a + b);
}

function subtract(a , b){
    return (a - b);
}

function multiply(a , b){
    return (a * b);
}

function divide(a , b){
    if (b === 0){
        return "Error"
    }
    return (a / b);
}
