    let display = document.getElementById('display');

    function addToDisplay(value){
    display.value += value;
}

    function calculate(){
    const equation = display.value;
    const operators = ['+', '-', '*', '/'];

    // Sprawdzamy, czy równanie zawiera któryś z operatorów
    const operator = operators.find(op => equation.includes(op));

    if (operator) {
    // Jeśli równanie zawiera operator, dzielimy je na dwie liczby
    const [num1, num2] = equation.split(operator);

    // Wyliczamy wynik w zależności od operatora
    let result;
    switch (operator) {
    case '+':
    result = parseFloat(num1) + parseFloat(num2);
    break;
    case '-':
    result = parseFloat(num1) - parseFloat(num2);
    break;
    case '*':
    result = parseFloat(num1) * parseFloat(num2);
    break;
    case '/':
    result = parseFloat(num1) / parseFloat(num2);
    break;
}

    // Wyświetlamy wynik na ekranie
    display.value = result;
}
}
