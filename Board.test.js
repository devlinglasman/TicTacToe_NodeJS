//@format

const Board = require('./board.js');

describe('Board', () => {
  it('generates list of 3 empty tiles for 3x3 grid', () => {
    const board = new Board();

    expect(board.tiles).toEqual(Array(9).fill(' '));
  });

  it('set mark', () => {
    const board = new Board();

    board.setMark(2, 'X');

    // prettier-ignore
    const expectedBoard = 
      [' ', 'X', ' ', 
        ' ', ' ', ' ', 
        ' ', ' ', ' '];

    expect(board.tiles).toEqual(expectedBoard);
  });

  it('is not draw', () => {
    // prettier-ignore
    const board = new Board();

    expect(board.isOver()).toEqual(false);
  });

  it('is not draw', () => {
    // prettier-ignore
    const board = new Board(
      ['X', 'X', ' ', 
        'O', 'O', 'X', 
        ' ', ' ', ' ']);

    expect(board.isOver()).toEqual(false);
  });

  it('is draw', () => {
    // prettier-ignore
    const board = new Board(
      ['O', 'X', 'O', 
        'X', 'O', 'X', 
        'X', 'O', 'X']);

    expect(board.isOver()).toEqual(true);
  });

  it('is row win', () => {
    // prettier-ignore
    const board = new Board(
      ['O', ' ', 'O', 
        ' ', ' ', ' ', 
        'X', 'X', 'X']);

    expect(board.isOver()).toEqual(true);
  });

  it('is col win', () => {
    // prettier-ignore
    const board = new Board(
      ['O', ' ', 'O', 
        'O', 'X', 'X', 
        'O', 'X', 'X']);

    expect(board.isOver()).toEqual(true);
  });

  it('is diag win', () => {
    // prettier-ignore
    const board = new Board(
      ['X', ' ', 'O', 
        'O', 'X', 'X', 
        'O', 'X', 'X']);

    expect(board.isOver()).toEqual(true);
  });
});
