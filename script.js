let mainArray = [];
let operator = "";
let secondArray = [];

function addToArray(value){
    if(operator === ""){
        mainArray.push(value);
        let joined = mainArray.join('');
        mainArray = [parseInt(joined)];
        document.querySelector('#display').value = mainArray
        console.log(mainArray);
        console.log(operator);
    } else {
        secondArray.push(value);
        let joined = secondArray.join('');
        secondArray = [parseInt(joined)];
        document.querySelector('#display').value = secondArray
        console.log(secondArray);
        console.log(operator);
    }
}

function setOperator(value) {
    operator = value;
}

function calculate(){
    if(mainArray.length > 0 && secondArray.length > 0){
        if(operator === "+"){
            let result = mainArray[0] + secondArray[0];
            document.querySelector('#display').value = result
            console.log(result);
            mainArray[0] = result;
        } else if(operator === "-") {
            let result = mainArray[0] - secondArray[0];
            document.querySelector('#display').value = result
            console.log(result);
            mainArray[0] = result;
        } else if(operator === "*") {
            let result = mainArray[0] * secondArray[0];
            document.querySelector('#display').value = result
            console.log(result);
            mainArray[0] = result;
        } else if(operator === "/") {
            let result = mainArray[0] / secondArray[0];
            document.querySelector('#display').value = result
            console.log(result);
            mainArray[0] = result;
        }
    }
    operator = "";
    secondArray = [];
}

function clearContent(){
    document.querySelector('#display').value = ''
    mainArray = [];
    operator = "";
    secondArray = [];
}