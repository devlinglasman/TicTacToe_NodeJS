//@format

module.exports = class RecordedPlayer {
  constructor(moves) {
    this.counter = 0;
    this.moves = moves;
  }

  getMove() {
    this.counter++;
    return this.moves[this.counter - 1];
  }
};
