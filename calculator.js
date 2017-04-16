'use strict';

function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        case '^':
            return Math.pow(num1, num2);
        case '√':
            return Math.sqrt(num1);
        case '%':
            return num1 / 100;
        default:
            return undefined;
                
    }
}

var currNumber = '';
var num1, num2;
var operation;
var calcScreen = document.querySelector('#numbers');

function appendNumber(event){
    var digit = event.target.innerHTML;
    if (digit == '.') {
        if (currNumber.includes('.')) {
            return;
        }
    }
    if(currNumber.length == 10) {
        return;
    }
    currNumber = currNumber + digit;
    calcScreen.innerHTML = currNumber;
    console.log(currNumber);
}

function opPressed(event) {
    if (operation) {
        num2 = +currNumber;
        num1 = calculate(num1, num2, operation);
        calcScreen.innerHTML = num1;
    } else {
        num1 = +currNumber;
    }
    currNumber = '';
    if (event.target.innerHTML == '=') {
        operation = undefined;
    } else {
        operation = event.target.innerHTML;
    }
}

function unaryPressed(event){
    var buttonText = event.target.innerHTML;
    if (operation){
        num2 = calculate(+currNumber, 0, buttonText);
        calcScreen.innerHTML = num2;
    } else {
        num1 = calculate(+currNumber, 0, buttonText);
        calcScreen.innerHTML = num1;
    }
    currNumber = calcScreen.innerHTML;
}


var numButtons = document.querySelectorAll('.number');
numButtons.forEach(function (button) {
    button.addEventListener('click', appendNumber);
});

var opButtons = document.querySelectorAll('.op');
opButtons.forEach(function (button) {
    button.addEventListener('click', opPressed);
});

var clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function (event) {
    num1 = num2 = operation = undefined;
    calcScreen.innerHTML = currNumber = '';
});

var unaryButtons = document.querySelectorAll('.unary');
unaryButtons.forEach((button) => {
    button.addEventListener('click', unaryPressed);
});





