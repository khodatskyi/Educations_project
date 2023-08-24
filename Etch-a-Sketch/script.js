
const userNum = Number(prompt('Введите любое число от 0 до 100'))

// ждем пока загрузится страница
document.addEventListener("DOMContentLoaded", function () {
    grid(userNum)
});

const grid = (num = 16) => {
    const  divs = document.getElementsByClassName('divs')
    const gridContainer = document.getElementById("grid-container");
    
    // получаем в аргументе выбор числа от пользователя и выставляем размеры поля по формуле 
    const resolutionField = (num) => {
        let widthField = Math.round(Math.sqrt(num))
        widthField *= 50
        gridContainer.style.width = widthField + 'px'
    }
    resolutionField(num)

    // Создаем num кол-во дивов и добавляем их в нашу сетку
    for(let i = 0; i < num; i++) {
        const createNewDiv = document.createElement("div");

        createNewDiv.className = "divs"; // Устанавливаем class для нового div
        gridContainer.appendChild(createNewDiv);
    }
    // к каждому элементу на который наводится мышка мы присваиваем новый класс в котором мы меняем цвет фона
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseenter', (e) => {
            let enteredElement = e.target 
            enteredElement.classList.add('black')
        });
    }
}