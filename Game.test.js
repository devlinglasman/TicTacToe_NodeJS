//@format

const Game = require('./game.js');

describe('Game', () => {
  it('begins not over', () => {
    const game = new Game();

    expect(game.isOver()).toEqual(false);
  });
  //
  //  it('ends in draw', () => {
  //    const game = new Game();
  //
  //    game.play();
  //
  //    expect(game.isOver).toBeTrue;
  //  });
});
