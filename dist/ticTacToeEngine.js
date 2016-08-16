(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

window.ticTacToeEngine = require('./index');

},{"./index":1}]},{},[2]);
