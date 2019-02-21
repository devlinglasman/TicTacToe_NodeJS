//@format

const Board = require('./board.js');

module.exports = class Game {
  constructor() {
    this.board = new Board();
  }

  play() {}

  playTurn() {
    move = player.getMove();
    this.board.setMark(move, player.getMark);
    if (isOver()) {
      announceResult();
    }
  }

  isOver() {
    return this.board.isOver();
  }
};
