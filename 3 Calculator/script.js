
const allClear = document.getElementById('allclear')
const elementClear = document.getElementById('clear')
const buttons = document.getElementsByTagName('button')
let expression = ''
const outputElement = document.getElementById('output');
let arrayExpression = []
let indexOperator = -1
let first = 0
let second = 0
let firstNum
let secondNum


const updateArrayExpression = () => { 
    arrayExpression = [...expression];
    indexOperator = arrayExpression.indexOf('+') 
    first = arrayExpression.slice(0, indexOperator).join('')
    second = arrayExpression.slice(indexOperator + 1).join('')
    firstNum = +first
    secondNum = +second
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        const buttonText = button.textContent
        if (buttonText === 'C') {
        } else expression += button.textContent
        outputElement.textContent = expression;
        updateArrayExpression();
    });


}

allClear.addEventListener('click', () => {
    expression = ''
    outputElement.textContent = expression;
    updateArrayExpression();
})

elementClear.addEventListener('click', () => {
    expression = expression.slice(0, -1)
    outputElement.textContent = expression;
    updateArrayExpression();
})

