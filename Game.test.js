//@format

const Game = require('./game.js');
const RecordedPlayer = require('./recordedPlayer.js');

describe('Game', () => {
  it('begins not over', () => {
    const game = new Game();

    expect(game.isOver()).toEqual(false);
  });

  it('ends in draw', () => {
    const recordedPlayerOne = new RecordedPlayer('X', [1, 2, 3, 4, 5]);
    const recordedPlayerTwo = new RecordedPlayer('O', [6, 7, 8, 9]);
    const game = new Game(recordedPlayerOne, recordedPlayerTwo);

    game.play();

    expect(game.isOver()).toEqual(true);
  });
});
