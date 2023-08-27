
const allClear = document.getElementById('allclear')
const elementClear = document.getElementById('clear')
const equals = document.getElementById('equals')
const outputElement = document.getElementById('output');
const resultElement = document.getElementById('result');
const buttons = document.getElementsByTagName('button')

// дефолтные значения элементов
let expression = '' 
let arrayExpression = []
let indexOperator = -1

let first
let second
let result

// функции для произведения вычислений
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b
};
const divide = function (a, b) {
    return a / b
};
const divideWithRemainder = function (a, b) {
    return a % b
};

// Выражение в массиве. Мы делим массив на первую цифру, вторую и оператор
const updateArrayExpression = () => { 
    arrayExpression = [...expression];

    if(expression.includes('+')) {
        indexOperator = arrayExpression.indexOf('+')
    }

    else if(expression.includes('-')) {
        indexOperator = arrayExpression.indexOf('-')
    }

    else if(expression.includes('*')) {
        indexOperator = arrayExpression.indexOf('*')
    } 
    
    else if(expression.includes('/')) {
        indexOperator = arrayExpression.indexOf('/')
    } 
    
    else if(expression.includes('%')) {
        indexOperator = arrayExpression.indexOf('%')
    }

    // отделяем первую цифру от второй и переводим ее в строку
    first = arrayExpression.slice(0, indexOperator).join('')
    second = arrayExpression.slice(indexOperator + 1).join('')
    // конвертируем строку в цифру
    first = +first
    second = +second
}

// Цикл для проверки нажатой клавиши
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        const buttonText = button.textContent
        if (buttonText === 'C' || buttonText === '=') {
        } else expression += button.textContent
        outputElement.textContent = expression;
        updateArrayExpression();
    });


}
// при нажатии на "АС" очищаем строку вывода
allClear.addEventListener('click', () => {
    expression = ''
    result = ''
    outputElement.textContent = expression;
    resultElement.textContent = result
    updateArrayExpression();
})

// при нажатии на "С" удаляем последний добавлений символ со строки вывода
elementClear.addEventListener('click', () => { 
    expression = expression.slice(0, -1)
    outputElement.textContent = expression;
    updateArrayExpression();
})

// при нажатии на "=" производим рез-ты и выводим их на дисплей
equals.addEventListener('click', () => {
    if (expression[indexOperator] == '+') {
        result = add(first, second)
        resultElement.textContent = result
    }
    else if (expression[indexOperator] == '-') {
        result = subtract(first, second)
        resultElement.textContent = result
    }
    else if (expression[indexOperator] == '*') {
        result = multiply(first, second)
        resultElement.textContent = result
    }
    else if (expression[indexOperator] == '/') {
        result = divide(first, second)
        resultElement.textContent = result
    }
    else if (expression[indexOperator] == '%') {
        result = divideWithRemainder(first, second)
        resultElement.textContent = result
    }
})
