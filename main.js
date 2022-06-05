/*
// NAME: Random Operation
// CONTRIBUTORS: Steph Koopmanschap
// VERSION: 1.0
*/

//GLOBALS

var NumOneInputElement = document.getElementById('numOneInput');
var NumTwoInputElement = document.getElementById('numTwoInput');
var NumOneDisplayElement = document.getElementById('numOneDisplay');
var NumTwoDisplayElement = document.getElementById('numTwoDisplay');
var Result = document.getElementById('result');

//FUNCTIONS

//returns a random integer between min and max
function randIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randOperation(num1, num2) {
    let opSelector = randIntRange(0, 5);
    switch(opSelector) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        case 3:
            return num1 / num2;
        case 4: 
            return Math.pow(num1, num2);
        case 5:
            return randIntRange(num1, num2);
        default:
            return null;
    }       
}

function getInput() {
    let num1 = parseFloat(NumOneInputElement.value);
    let num2 = parseFloat(NumTwoInputElement.value);

    return [num1, num2];
}

function sendOutput() {
    let input = getInput();

    NumOneDisplayElement.innerHTML = "Number 1: " + input[0];
    NumTwoDisplayElement.innerHTML = "Number 2: " + input[1];
    Result.innerHTML = "Result: " + randOperation(input[0], input[1]);
}
    
    
export {randOperation, randIntRange};
