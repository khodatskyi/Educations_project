

// ждем пока загрузится страница
document.addEventListener("DOMContentLoaded", function () {
    grid()
});


const grid = (num = 16) => {
    const  divs = document.getElementsByClassName('divs')

    // Создаем num кол-во дивов, num зависит от аргумента
    for(let i = 0; i < num; i++) {
        const gridContainer = document.getElementById("grid-container");
        const createNewDiv = document.createElement("div");

        createNewDiv.className = "divs"; // Устанавливаем class для нового div
        gridContainer.appendChild(createNewDiv);
    }
    // к каждому элементу на который наводится мышка мы присваиваем новый класс
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseenter', (e) => {
            let enteredElement = e.target // e.target содержит элемент, на котором произошло событие
            enteredElement.classList.add('black')
        });
    }
}