//@format

module.exports = class Board {
  constructor() {
    this.tiles = this.createTiles();
  }

  createTiles() {
    return Array(9).fill('');
  }
};
