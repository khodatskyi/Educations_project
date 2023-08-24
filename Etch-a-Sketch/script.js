
// ждем пока загрузится страница
document.addEventListener("DOMContentLoaded", function () {
    grid()
});


// Создаем num кол-во дивов
const grid = (num = 16) => {
    const gridContainer = document.getElementById("grid-container");

    for(let i = 0; i < num; i++) {
        let createNewDiv = document.createElement("div");
        createNewDiv.className = "divs"; // Устанавливаем ID для нового div
        createNewDiv.textContent = '16';
    
        gridContainer.appendChild(createNewDiv);
    }
}