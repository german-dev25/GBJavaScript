/**
1. Создать функцию, генерирующую шахматную доску.
При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
*/

// // 1.
const gameChess = {

    gameZone: document.querySelector('.chess'),

    generateChessBoard() {
        const chessRows = ['-', 8, 7, 6, 5, 4, 3, 2, 1, '-'],
            chessCols = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '-'];

        for (let row = 0; row < 10; row++) {
            const tr = document.createElement('tr');
            this.gameZone.appendChild(tr);

            for (let col = 0; col < 10; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (chessRows[row] === '-' && chessCols[col] !== '-') {
                    td.innerHTML = chessCols[col];
                } else if (chessCols[col] === '-' && chessRows[row] !== '-') {
                    td.innerHTML = chessRows[row].toString();
                }

                if (this.blackSquare(row, col)) {
                    td.style.backgroundColor = 'brown';
                } else {
                    td.style.backgroundColor = 'wheat';
                }
            }
        }
    },

    blackSquare(row, col) {
        if (row === 0 || row === 9 || col === 0 || col === 9) {
            return false;
        }

        if ((row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)) {
            return true;
        }
    }
}

gameChess.generateChessBoard();
