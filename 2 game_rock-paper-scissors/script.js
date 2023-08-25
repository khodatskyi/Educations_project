// Работа с ДОМ

const paperButton  = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const rockButton = document.getElementById("rock")
const result = document.getElementById('result')
const playerScoreLink = document.getElementById("playerScores")
const compScoreLink = document.getElementById("compScores")
const compImg = document.getElementById("comp_img")

const yourChoose = document.getElementById("yourChoose")
const yourChooseText = yourChoose.textContent // Здесь хранится текст Your choose is 

const compChoose = document.getElementById("compChoose")
const compChooseText = compChoose.textContent // Здесь хранится текст Computer choose is

let playerScores = 0
let compScores = 0


paperButton.addEventListener("click", () => {
    yourChoose.textContent = yourChooseText + 'paper'
    game("paper")
});
scissorsButton.addEventListener("click", () => {
    yourChoose.textContent = yourChooseText + 'scissors'
    game("scissors")
});
rockButton.addEventListener("click", () => {
    yourChoose.textContent = yourChooseText + 'rock'
    game("rock")
});



// Даем компьюету выбрать камень, ножницы или бумагу
// Возвращает выбор компьютера (камень, ножницы или бумагу) + обновляет строку выбора + обновляет картинку
const getComputerChoice = () => {
    const choice = Math.random().toFixed(3)
    if (choice <= 0.333) {
        compChoose.textContent = compChooseText + 'scissors'
        compImg.src = 'img/scissors.png'
        return 'scissors'
    } else if (choice >= 0.333 & choice <= 0.666) {
        compChoose.textContent = compChooseText + 'paper'
        compImg.src = 'img/paper.png'
        return 'paper'
    } else {
        compChoose.textContent = compChooseText + 'rock'
        compImg.src = 'img/stone.png'
        return 'rock'
    }
}

// Когда будет набрано 5 очков, то игра будет обновлена
const gameOver = () => {
    compScores = 0
    playerScores = 0
    playerScoreLink.textContent = `scores ${playerScores}` 
    compScoreLink.textContent =  `scores ${compScores}` 
    return compScores, playerScores, playerScoreLink.textContent, compScoreLink.textContent
}


// Опеределяем победителя
const game = (playerSelection, computerSelection) => {
    const comp = getComputerChoice() // (камень, ножницы или бумагу)
    const player = playerSelection
 
    if (comp === player) {
        return result.textContent = `Ничья!`
    } else if (
        comp === 'rock' && player === 'scissors' ||
        comp === 'scissors' && player === 'paper' ||
        comp === 'paper' && player === 'rock') {
        compScores++
        compScoreLink.textContent =  `scores ${compScores}`  
        if (compScores == 5) { 
            gameOver()
            return result.textContent = `В этом матче выиграл Компьютер!`
        }
        return result.textContent = 'Ты проиграл!'
    } else if (
        comp === 'rock' && player === 'paper' ||
        comp === 'scissors' && player === 'rock' ||
        comp === 'paper' && player === 'scissors') {
        playerScores++    
        playerScoreLink.textContent = `scores ${playerScores}`  
        if (playerScores == 5) { 
            gameOver()
            return result.textContent = `В этом матче Ты выиграл!`
        }
        return result.textContent = 'Ты выиграл!'
    }
}


