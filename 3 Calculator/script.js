
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
let result


const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};
const divideWithRemainder = function (a, b) {
    return a % b;
};


const calculations = (arrayExpression) => {
    let tokensArray = [];
    let token = '';

    // Разбиваем строку на токены, токены добавляем в отдельный массив
    const getTokens = (expression) => {
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            if (!isNaN(char) || char === '.') { // Проверяем, является ли символ числом или точкой
                token += char;
            } else {
                if (token !== '') { // Добавляем только если токен не пустой
                    tokensArray.push(parseFloat(token));
                    token = ''; // Сбрасываем текущий токен
                }
                tokensArray.push(char); // Добавляем операторы и другие символы в массив
            }
        }
        if (token !== '') { // вызываем для последнего элемента
            tokensArray.push(parseFloat(token));
        }
    }


    // Вызываем функцию getTokens для текущего выражения
    getTokens(arrayExpression);

    // Проходимся по нашему массиву из токенов по приоритету операторов, производим вычисления и подставляем результат в выражение
    for (let i = 0; i < tokensArray.length; i++) {
        const element = tokensArray[i];

        if (element == '*' || element == '/' || element == '%') {
            if (element == '*') {
                const a = tokensArray[i - 1];
                const b = tokensArray[i + 1];
                result = a * b;
            }
            if (element == '/') {
                const a = tokensArray[i - 1];
                const b = tokensArray[i + 1];
                result = a / b;
            }
            if (element == '%') {
                const a = tokensArray[i - 1];
                const b = tokensArray[i + 1];
                result = a % b;
            }

            // Заменяем оператор и операнды на результат операции
            tokensArray.splice(i - 1, 3, result);
            i -= 2; // Возвращаемся на два шага назад
        }
    }

    // Выполняем оставшиеся операции + и -
    /**
     Поскольку у нас осталось выражение только с + и -, то обьявлением переменную и с лева на прово производим вычисления
     А результат записываем в одну и ту же переменную, постоянно ее обновляя
     */
    let finalResult = tokensArray[0];
    for (let i = 1; i < tokensArray.length; i += 2) {
        const operator = tokensArray[i];
        const operand = tokensArray[i + 1];

        if (operator == '+') {
            finalResult += operand;
        }
        if (operator == '-') {
            finalResult -= operand;
        }
    }
    resultElement.textContent = finalResult
}

// Цикл для проверки нажатой клавиши
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        let lastChar = expression[expression.length - 1]
        const buttonText = button.textContent
        if (buttonText === 'C' || buttonText === '=') {
        }
        else if (buttonText === '/' || buttonText === '*' || buttonText === '%' || buttonText === '+' || buttonText === '-') {
            if (lastChar === '/' || lastChar === '*' || lastChar === '%' || lastChar === '+' || lastChar === '-') {
                expression = expression.slice(0, -1) + buttonText;
                outputElement.textContent = expression;
            } else expression += button.textContent
            outputElement.textContent = expression;
        }

        else expression += button.textContent
        outputElement.textContent = expression;
    });

}
// при нажатии на "АС" очищаем строку вывода
allClear.addEventListener('click', () => {
    expression = ''
    result = ''
    outputElement.textContent = expression;
    resultElement.textContent = result
})

// при нажатии на "С" удаляем последний добавлений символ со строки вывода
elementClear.addEventListener('click', () => {
    expression = expression.slice(0, -1)
    outputElement.textContent = expression;
})

equals.addEventListener('click', () => {
    arrayExpression = [...expression];
    calculations(arrayExpression);

})
