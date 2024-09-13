let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === '' || operator === '') return;

    
    secondOperand = currentInput;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    currentInput = result.toString();
    firstOperand = '';
    secondOperand = '';
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('display').value = '';
}
