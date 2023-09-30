
const Players = (name) => {
    name;

    return { name };
};


const Player1 = Players('Player 1');
const Player2 = Players('Player 2');


const gameBoard = (() => {
    const board = []
    const rows = 3
    const columns = 3
    let round = 1
    let marker = ''


    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push('');
        }
    }

    const choiceActivePlayer = () => {
        // Определяем чья очередь ходить
        if ((round % 2) != 0) {
            round++
            console.log(round)
            return marker = 'X'
        } else {
            round++
            console.log(round)
            return marker = 'O'
        }
    }

    const winnerOrNot = () => {
        // Проверка условия победы
        if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X' ||
            board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X' ||
            board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X' ||
            board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X' ||
            board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X' ||
            board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X' ||
            board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X' ||
            board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
                
            restart.textContent = 'New Game'
            cells.forEach((cell) => {
                if (!cell.classList.contains("clicked")) {
                    cell.classList.add("clicked");
                }
            })
            title.textContent = 'X - You are winner!'

            return console.log('X - You are winner!')
        } else if (
            board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O' ||
            board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O' ||
            board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O' ||
            board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O' ||
            board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O' ||
            board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O' ||
            board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O' ||
            board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
            restart.textContent = 'New Game'
            cells.forEach((cell) => {
                if (!cell.classList.contains("clicked")) {
                    cell.classList.add("clicked");
                }
            })
            title.textContent = 'O - You are winner!'
            return console.log('O - You are winner!')

        }
    }


    return { board, choiceActivePlayer , winnerOrNot}
})()

const cells = document.querySelectorAll(".game-cell");
const restart = document.getElementById('restart')
const title = document.getElementById('game-title')


restart.addEventListener('click', () => {
    location.reload();
})

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!cell.classList.contains("clicked")) {
            cell.textContent = gameBoard.choiceActivePlayer();
            const str = cell.id
            const digit1 = str.charAt(0);
            const digit2 = str.charAt(1);
            gameBoard.board[digit1][digit2] = cell.textContent
            cell.classList.add("clicked");
            gameBoard.winnerOrNot()
        }
    });
});

