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
    return Array(9).fill('');
  }

  setMark(position, mark) {
    this.tiles[position - 1] = mark;
  }

  isOver() {
    return this.isDraw();
  }

  isDraw() {
    return !this.tiles.includes('');
  }
};
