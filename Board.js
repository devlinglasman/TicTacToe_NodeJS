//@format

module.exports = class Board {
  constructor(filledTiles) {
    if (filledTiles == undefined) {
      this.tiles = this.createTiles();
    } else {
      this.tiles = filledTiles;
    }
  }

  createTiles() {
    return Array(9).fill(' ');
  }

  setMark(position, mark) {
    this.tiles[position - 1] = mark;
  }

  isOver() {
    return this.isDraw() || this.isWin();
  }

  isDraw() {
    return !this.tiles.includes(' ');
  }

  isWin() {
    return this.isRowWin() || this.isColWin() || this.isDiagWin();
  }

  isRowWin() {
    return (
      (this.tiles[0] != ' ' &&
        this.tiles[0] == this.tiles[1] &&
        this.tiles[0] == this.tiles[2]) ||
      (this.tiles[3] != ' ' &&
        this.tiles[3] == this.tiles[4] &&
        this.tiles[3] == this.tiles[5]) ||
      (this.tiles[6] != ' ' &&
        this.tiles[6] == this.tiles[7] &&
        this.tiles[6] == this.tiles[8])
    );
  }

  isColWin() {
    return (
      (this.tiles[0] != ' ' &&
        this.tiles[0] == this.tiles[3] &&
        this.tiles[0] == this.tiles[6]) ||
      (this.tiles[1] != ' ' &&
        this.tiles[1] == this.tiles[4] &&
        this.tiles[1] == this.tiles[7]) ||
      (this.tiles[2] != ' ' &&
        this.tiles[2] == this.tiles[5] &&
        this.tiles[2] == this.tiles[8])
    );
  }

  isDiagWin() {
    return (
      (this.tiles[0] != ' ' &&
        this.tiles[0] == this.tiles[4] &&
        this.tiles[0] == this.tiles[8]) ||
      (this.tiles[2] != ' ' &&
        this.tiles[2] == this.tiles[4] &&
        this.tiles[2] == this.tiles[6])
    );
  }
};
