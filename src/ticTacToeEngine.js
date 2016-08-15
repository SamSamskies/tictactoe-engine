(function (window = {}) {
  window.ticTacToeEngine = { playRound };

  function playRound (moves) {
    const currentPlayer = getCurrentPlayer(moves);
    const currentPlayerIndex = getCurrentPlayerIndex(currentPlayer);
    const currentPlayerMoves = getCurrentPlayerMoves(moves, currentPlayerIndex);
    const currentPlayerIsWinner = checkIfCurrentPlayerWon(currentPlayerMoves);
    const turnNumber = moves.length;

    return {
      currentPlayer,
      winner: getWinner(currentPlayer, currentPlayerIsWinner, turnNumber)
    };
  }

  function getCurrentPlayer (moves) {
    return moves.length % 2 === 0 ? 'o' : 'x';
  }

  function getWinner (currentPlayer, currentPlayerIsWinner, turnNumber) {
    if (currentPlayerIsWinner) {
      return currentPlayer;
    }

    if (turnNumber === 9) {
      return 'draw';
    }

    return '';
  }

  function checkIfCurrentPlayerWon (currentPlayerMoves) {
    const allWinningCoordinates = [
      [[0,0], [0, 1], [0, 2]],
      [[1,0], [1, 1], [1, 2]],
      [[2,0], [2, 1], [2, 2]],
      [[0,0], [1, 0], [2, 0]],
      [[0,1], [1, 1], [2, 1]],
      [[0,2], [1, 2], [2, 2]],
      [[0,0], [1, 1], [2, 2]],
      [[2,0], [1, 1], [0, 2]],
    ];

    return allWinningCoordinates.some((winningCoordinates) => {
      return winningCoordinates.every(([winningX, winningY]) => {
        return currentPlayerMoves.find(([x, y]) => winningX === x && winningY === y);
      });
    });
  }

  function getCurrentPlayerIndex (currentPlayer) {
    return currentPlayer === 'x' ? 0 : 1;
  }

  function getCurrentPlayerMoves (moves, currentPlayerIndex) {
    return moves.filter((coordinates, i) => i % 2 === currentPlayerIndex);
  }

})(window);
