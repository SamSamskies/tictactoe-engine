# tictactoe-engine

You provide the moves and this module will handle the game logic.

## Installation
NPM
```
$ npm install tictactoe-engine --save
```

## Rules
* There are 2 players 'x' and 'o'
* 'x' always goes first 


## Usage
ES6 Module
```js
import { playRound } from 'tictactoe-engine';

playRound([[0, 0]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0], [0, 2]])
// => { currentPlayer: 'x', isWinner: true }
```

Node
```js
const { playRound } = require('tictactoe-engine');

playRound([[0, 0]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0], [0, 2]])
// => { currentPlayer: 'x', isWinner: true }
```

Script Tag
```html
<script src="node_modules/tictactoe-engine/dist/ticTacToeEngine.js"></script>
<script>
const { playRound } = window.ticTacToeEngine;

playRound([[0, 0]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1]])
// => { currentPlayer: 'x', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0]])
// => { currentPlayer: 'o', isWinner: false }

playRound([[0, 0], [1, 1], [0, 1], [1, 0], [0, 2]])
// => { currentPlayer: 'x', isWinner: true }
</script>
```

Example of Using Logic to Build an HTML TicTacToe Game
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic Tac Toe</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .row {
            display: flex;
        }

        .cell {
            width: 200px;
            height: 200px;
            border: 2px solid black;
            font-size: 200px;
            text-align: center;
            line-height: 160px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="board">
        <div class="row" data-row="0">
            <div class="cell" data-column="0"></div>
            <div class="cell" data-column="1"></div>
            <div class="cell" data-column="2"></div>
        </div>
        <div class="row" data-row="1">
            <div class="cell" data-column="0"></div>
            <div class="cell" data-column="1"></div>
            <div class="cell" data-column="2"></div>
        </div>
        <div class="row" data-row="2">
            <div class="cell" data-column="0"></div>
            <div class="cell" data-column="1"></div>
            <div class="cell" data-column="2"></div>
        </div>
    </div>
    <script src="node_modules/tictactoe-engine/dist/ticTacToeEngine.js"></script>
    <script>
        const { playRound } = window.ticTacToeEngine;
        
        startGame();

        function startGame () {
            let moves = [];

            document.querySelector('.board').addEventListener('click', (e) => {
                const move = convertCellToCoordinates(e.target);

                if (checkIfMoveWasAlreadyMade(moves, move)) {
                    return;
                }

                moves.push(move);

                const { currentPlayer, winner } = playRound(moves);

                updateCellContents(e.target, currentPlayer);

                if (winner === '') {
                    return;
                }

                // Give DOM time to update before showing
                setTimeout(() => {
                    alert(`winner is ${winner}`);
                    window.location.reload();
                }, 100);
            });
        }

        function checkIfMoveWasAlreadyMade (moves, [moveX, moveY]) {
            return moves.find(([x, y]) => moveX === x && moveY === y);
        }

        function convertCellToCoordinates (cellNode) {
            const x = parseInt(cellNode.closest('.row').getAttribute('data-row'));
            const y = parseInt(cellNode.getAttribute('data-column'));

            return [x, y];
        }

        function updateCellContents (cellNode, currentPlayer) {
            cellNode.innerHTML = currentPlayer;
        }
    </script>
</body>
</html>
```


