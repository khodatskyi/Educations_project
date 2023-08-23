// Даем компьюету выбрать камень, ножницы или бумагу
// Возвращает выбор компьютера (камень, ножницы или бумагу)
const getComputerChoice = () => {
    const choice = Math.random().toFixed(3)
    if (choice <= 0.333) {
        return 'scissors'
    } else if (choice >= 0.333 & choice <= 0.666) {
        return 'paper'
    } else return 'rock'
}

// Даем игроку выбрать камень, ножницы или бумагу
// Возвращает выбор игрока (камень, ножницы или бумагу)
const getPlayerSelection = () => {
    const playerSelection = prompt('scissors, paper or rock?')
    const playerSelectionToLower = playerSelection.toLowerCase()
    if (playerSelectionToLower !== 'scissors' && playerSelectionToLower !== 'paper' && playerSelectionToLower !== 'rock') {
        return 'Вы ввели неправильное значение!'
    } else return playerSelectionToLower
}

// Опеределяем победителя
const game = (playerSelection, computerSelection) => {
    const comp = getComputerChoice() // (камень, ножницы или бумагу)
    const player = getPlayerSelection() // (камень, ножницы или бумагу)

    if (comp === player) {
        return console.log('ничья')
    } else if (
        comp === 'rock' && player === 'scissors' ||
        comp === 'scissors' && player === 'paper' ||
        comp === 'paper' && player === 'rock') {
        return console.log('Выиграл компьютер')
    } else if (
        comp === 'rock' && player === 'paper' ||
        comp === 'scissors' && player === 'rock' ||
        comp === 'paper' && player === 'scissors') {
        return console.log('Выиграл игрок')
    }
}

// game()

// Тестировка нашей игры
    // let wins = 0;
    // let losses = 0;
    // let draws = 0;



    // // Запуск 1000 итераций игры
    // for (let i = 0; i < 1000; i++) {
    //     game();
    // }

    // console.log(`Победы: ${wins}`);
    // console.log(`Поражения: ${losses}`);
    // console.log(`Ничьи: ${draws}`);



