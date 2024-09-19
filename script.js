let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const display = document.getElementById('cal_display');
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
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
            return multiply(a , b);
        case '/':
            return divide(a , b);
        default:
            return null;
    }
}

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
