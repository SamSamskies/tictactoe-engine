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

Script Tag
```js
<script src="node_modules/tictactoe-engine/dist/ticTacToeEngine.js"></script>
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

