//@format

module.exports = class RecordedPlayer {
  constructor(mark, moves) {
    this.mark = mark;
    this.counter = 0;
    this.moves = moves;
  }

  getMark() {
    return this.mark;
  }

  getMove() {
    this.counter++;
    return this.moves[this.counter - 1];
  }
};
