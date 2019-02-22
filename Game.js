//@format

const Board = require('./board.js');

module.exports = class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = new Board();
    this.activePlayer = playerOne;
  }

  play() {
    const move = this.activePlayer.getMove();
    this.board.setMark(move, this.activePlayer.getMark);
    if (this.isOver()) {
    } else {
      this.activePlayer = this.switchPlayer(this.activePlayer);
      this.play();
    }
  }

  isOver() {
    return this.board.isOver();
  }

  switchPlayer(activePlayer) {
    return this.activePlayer == this.playerOne
      ? this.playerTwo
      : this.playerOne;
  }
};
