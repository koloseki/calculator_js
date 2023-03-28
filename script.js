let display = document.querySelector('#display');
let expression = [];
display.value = ''

function addDigitToExpression(digit) {
    expression.push(digit);
    display.value = expression.join('');
}

function addOperatorToExpression(operator) {
    expression.push(operator);
    display.value = expression.join('');
}

function calculate() {
    let result = null;
    let currentNumber = null;
    let currentOperator = null;

    for (let i = 0; i < expression.length; i++) {
        let currentChar = expression[i];

        if (isNaN(currentChar)) {
            // currentChar is an operator
            if (currentOperator === null) {
                // First operator encountered, so set currentOperator to currentChar
                currentOperator = currentChar;
                result = currentNumber;
                currentNumber = null;
            } else {
                // Perform the operation indicated by currentOperator and the currentNumber
                if (currentOperator === '+') {
                    result += currentNumber;
                } else if (currentOperator === '-') {
                    result -= currentNumber;
                } else if (currentOperator === '*') {
                    result *= currentNumber;
                } else if (currentOperator === '/') {
                    result /= currentNumber;
                }
                currentOperator = currentChar;
                currentNumber = null;
            }
        } else {
            // currentChar is a digit
            if (currentNumber === null) {
                // First digit encountered, so set currentNumber to currentChar
                currentNumber = Number(currentChar);
            } else {
                // Append currentChar to currentNumber
                currentNumber = currentNumber * 10 + Number(currentChar);
            }
        }
    }

    // Perform the final operation indicated by currentOperator and the currentNumber
    if (currentOperator === '+') {
        result += currentNumber;
    } else if (currentOperator === '-') {
        result -= currentNumber;
    } else if (currentOperator === '*') {
        result *= currentNumber;
    } else if (currentOperator === '/') {
        result /= currentNumber;
    } else {
        // No operator encountered, so the entire expression is just a single number
        result = currentNumber;
    }

    display.value = result;
    expression = [result];
}

function clearContent() {
    display.value = '';
    expression = [];
}
