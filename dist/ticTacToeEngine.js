'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  var window = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  window.ticTacToeEngine = { playRound: playRound };

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
})(window);
//# sourceMappingURL=data:application/json;base64,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QUFFLENBQUY7QUFBQSxjQUFLLENBQUw7QUFBQSxpQkFBWSxhQUFhLENBQWIsSUFBa0IsYUFBYSxDQUEzQztBQUFBLFNBQXhCLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUpNLENBQVA7QUFLRDs7QUFFRCxXQUFTLHFCQUFULENBQWdDLGFBQWhDLEVBQStDO0FBQzdDLFdBQU8sa0JBQWtCLEdBQWxCLEdBQXdCLENBQXhCLEdBQTRCLENBQW5DO0FBQ0Q7O0FBRUQsV0FBUyxxQkFBVCxDQUFnQyxLQUFoQyxFQUF1QyxrQkFBdkMsRUFBMkQ7QUFDekQsV0FBTyxNQUFNLE1BQU4sQ0FBYSxVQUFDLFdBQUQsRUFBYyxDQUFkO0FBQUEsYUFBb0IsSUFBSSxDQUFKLEtBQVUsa0JBQTlCO0FBQUEsS0FBYixDQUFQO0FBQ0Q7QUFFRixDQTNERCxFQTJERyxNQTNESCIsImZpbGUiOiJ0aWNUYWNUb2VFbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHdpbmRvdyA9IHt9KSB7XG4gIHdpbmRvdy50aWNUYWNUb2VFbmdpbmUgPSB7IHBsYXlSb3VuZCB9O1xuXG4gIGZ1bmN0aW9uIHBsYXlSb3VuZCAobW92ZXMpIHtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcihtb3Zlcyk7XG4gICAgY29uc3QgY3VycmVudFBsYXllckluZGV4ID0gZ2V0Q3VycmVudFBsYXllckluZGV4KGN1cnJlbnRQbGF5ZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJNb3ZlcyA9IGdldEN1cnJlbnRQbGF5ZXJNb3Zlcyhtb3ZlcywgY3VycmVudFBsYXllckluZGV4KTtcbiAgICBjb25zdCBjdXJyZW50UGxheWVySXNXaW5uZXIgPSBjaGVja0lmQ3VycmVudFBsYXllcldvbihjdXJyZW50UGxheWVyTW92ZXMpO1xuICAgIGNvbnN0IHR1cm5OdW1iZXIgPSBtb3Zlcy5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBsYXllcixcbiAgICAgIHdpbm5lcjogZ2V0V2lubmVyKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJJc1dpbm5lciwgdHVybk51bWJlcilcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllciAobW92ZXMpIHtcbiAgICByZXR1cm4gbW92ZXMubGVuZ3RoICUgMiA9PT0gMCA/ICdvJyA6ICd4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbm5lciAoY3VycmVudFBsYXllciwgY3VycmVudFBsYXllcklzV2lubmVyLCB0dXJuTnVtYmVyKSB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXJJc1dpbm5lcikge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gICAgfVxuXG4gICAgaWYgKHR1cm5OdW1iZXIgPT09IDkpIHtcbiAgICAgIHJldHVybiAnZHJhdyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZkN1cnJlbnRQbGF5ZXJXb24gKGN1cnJlbnRQbGF5ZXJNb3Zlcykge1xuICAgIGNvbnN0IGFsbFdpbm5pbmdDb29yZGluYXRlcyA9IFtcbiAgICAgIFtbMCwwXSwgWzAsIDFdLCBbMCwgMl1dLFxuICAgICAgW1sxLDBdLCBbMSwgMV0sIFsxLCAyXV0sXG4gICAgICBbWzIsMF0sIFsyLCAxXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwwXSwgWzEsIDBdLCBbMiwgMF1dLFxuICAgICAgW1swLDFdLCBbMSwgMV0sIFsyLCAxXV0sXG4gICAgICBbWzAsMl0sIFsxLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwwXSwgWzEsIDFdLCBbMiwgMl1dLFxuICAgICAgW1syLDBdLCBbMSwgMV0sIFswLCAyXV0sXG4gICAgXTtcblxuICAgIHJldHVybiBhbGxXaW5uaW5nQ29vcmRpbmF0ZXMuc29tZSgod2lubmluZ0Nvb3JkaW5hdGVzKSA9PiB7XG4gICAgICByZXR1cm4gd2lubmluZ0Nvb3JkaW5hdGVzLmV2ZXJ5KChbd2lubmluZ1gsIHdpbm5pbmdZXSkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudFBsYXllck1vdmVzLmZpbmQoKFt4LCB5XSkgPT4gd2lubmluZ1ggPT09IHggJiYgd2lubmluZ1kgPT09IHkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVySW5kZXggKGN1cnJlbnRQbGF5ZXIpIHtcbiAgICByZXR1cm4gY3VycmVudFBsYXllciA9PT0gJ3gnID8gMCA6IDE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyTW92ZXMgKG1vdmVzLCBjdXJyZW50UGxheWVySW5kZXgpIHtcbiAgICByZXR1cm4gbW92ZXMuZmlsdGVyKChjb29yZGluYXRlcywgaSkgPT4gaSAlIDIgPT09IGN1cnJlbnRQbGF5ZXJJbmRleCk7XG4gIH1cblxufSkod2luZG93KTtcbiJdfQ==