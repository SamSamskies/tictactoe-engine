'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.playRound = playRound;
function playRound(moves) {
  var currentPlayer = getCurrentPlayer(moves);
  var currentPlayerIndex = getCurrentPlayerIndex(currentPlayer);
  var currentPlayerMoves = getCurrentPlayerMoves(moves, currentPlayerIndex);
  var currentPlayerIsWinner = checkIfCurrentPlayerWon(currentPlayerMoves);
  var turnNumber = moves.length;

  return {
    currentPlayer: currentPlayer,
    winner: getWinner(currentPlayer, currentPlayerIsWinner, turnNumber)
  };
}

function getCurrentPlayer(moves) {
  return moves.length % 2 === 0 ? 'o' : 'x';
}

function getWinner(currentPlayer, currentPlayerIsWinner, turnNumber) {
  if (currentPlayerIsWinner) {
    return currentPlayer;
  }

  if (turnNumber === 9) {
    return 'draw';
  }

  return '';
}

function checkIfCurrentPlayerWon(currentPlayerMoves) {
  var allWinningCoordinates = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]]];

  return allWinningCoordinates.some(function (winningCoordinates) {
    return winningCoordinates.every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var winningX = _ref2[0];
      var winningY = _ref2[1];

      return currentPlayerMoves.find(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2);

        var x = _ref4[0];
        var y = _ref4[1];
        return winningX === x && winningY === y;
      });
    });
  });
}

function getCurrentPlayerIndex(currentPlayer) {
  return currentPlayer === 'x' ? 0 : 1;
}

function getCurrentPlayerMoves(moves, currentPlayerIndex) {
  return moves.filter(function (coordinates, i) {
    return i % 2 === currentPlayerIndex;
  });
}
//# sourceMappingURL=data:application/json;base64,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QVA7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpNLENBQVA7QUFLRDs7QUFFRCxTQUFTLHFCQUFULENBQWdDLGFBQWhDLEVBQStDO0FBQzdDLFNBQU8sa0JBQWtCLEdBQWxCLEdBQXdCLENBQXhCLEdBQTRCLENBQW5DO0FBQ0Q7O0FBRUQsU0FBUyxxQkFBVCxDQUFnQyxLQUFoQyxFQUF1QyxrQkFBdkMsRUFBMkQ7QUFDekQsU0FBTyxNQUFNLE1BQU4sQ0FBYSxVQUFDLFdBQUQsRUFBYyxDQUFkO0FBQUEsV0FBb0IsSUFBSSxDQUFKLEtBQVUsa0JBQTlCO0FBQUEsR0FBYixDQUFQO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcGxheVJvdW5kIChtb3Zlcykge1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcihtb3Zlcyk7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJJbmRleCA9IGdldEN1cnJlbnRQbGF5ZXJJbmRleChjdXJyZW50UGxheWVyKTtcbiAgY29uc3QgY3VycmVudFBsYXllck1vdmVzID0gZ2V0Q3VycmVudFBsYXllck1vdmVzKG1vdmVzLCBjdXJyZW50UGxheWVySW5kZXgpO1xuICBjb25zdCBjdXJyZW50UGxheWVySXNXaW5uZXIgPSBjaGVja0lmQ3VycmVudFBsYXllcldvbihjdXJyZW50UGxheWVyTW92ZXMpO1xuICBjb25zdCB0dXJuTnVtYmVyID0gbW92ZXMubGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFBsYXllcixcbiAgICB3aW5uZXI6IGdldFdpbm5lcihjdXJyZW50UGxheWVyLCBjdXJyZW50UGxheWVySXNXaW5uZXIsIHR1cm5OdW1iZXIpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXIgKG1vdmVzKSB7XG4gIHJldHVybiBtb3Zlcy5sZW5ndGggJSAyID09PSAwID8gJ28nIDogJ3gnO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5uZXIgKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJJc1dpbm5lciwgdHVybk51bWJlcikge1xuICBpZiAoY3VycmVudFBsYXllcklzV2lubmVyKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gIH1cblxuICBpZiAodHVybk51bWJlciA9PT0gOSkge1xuICAgIHJldHVybiAnZHJhdyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZDdXJyZW50UGxheWVyV29uIChjdXJyZW50UGxheWVyTW92ZXMpIHtcbiAgY29uc3QgYWxsV2lubmluZ0Nvb3JkaW5hdGVzID0gW1xuICAgIFtbMCwwXSwgWzAsIDFdLCBbMCwgMl1dLFxuICAgIFtbMSwwXSwgWzEsIDFdLCBbMSwgMl1dLFxuICAgIFtbMiwwXSwgWzIsIDFdLCBbMiwgMl1dLFxuICAgIFtbMCwwXSwgWzEsIDBdLCBbMiwgMF1dLFxuICAgIFtbMCwxXSwgWzEsIDFdLCBbMiwgMV1dLFxuICAgIFtbMCwyXSwgWzEsIDJdLCBbMiwgMl1dLFxuICAgIFtbMCwwXSwgWzEsIDFdLCBbMiwgMl1dLFxuICAgIFtbMiwwXSwgWzEsIDFdLCBbMCwgMl1dLFxuICBdO1xuXG4gIHJldHVybiBhbGxXaW5uaW5nQ29vcmRpbmF0ZXMuc29tZSgod2lubmluZ0Nvb3JkaW5hdGVzKSA9PiB7XG4gICAgcmV0dXJuIHdpbm5pbmdDb29yZGluYXRlcy5ldmVyeSgoW3dpbm5pbmdYLCB3aW5uaW5nWV0pID0+IHtcbiAgICAgIHJldHVybiBjdXJyZW50UGxheWVyTW92ZXMuZmluZCgoW3gsIHldKSA9PiB3aW5uaW5nWCA9PT0geCAmJiB3aW5uaW5nWSA9PT0geSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWVySW5kZXggKGN1cnJlbnRQbGF5ZXIpIHtcbiAgcmV0dXJuIGN1cnJlbnRQbGF5ZXIgPT09ICd4JyA/IDAgOiAxO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyTW92ZXMgKG1vdmVzLCBjdXJyZW50UGxheWVySW5kZXgpIHtcbiAgcmV0dXJuIG1vdmVzLmZpbHRlcigoY29vcmRpbmF0ZXMsIGkpID0+IGkgJSAyID09PSBjdXJyZW50UGxheWVySW5kZXgpO1xufVxuIl19