//@format

const Board = require('./board.js');

describe('Board', () => {
  it('generates list of 3 empty tiles for 3x3 grid', () => {
    const board = new Board();

    expect(board.tiles).toEqual(Array(9).fill(''));
  });
});
