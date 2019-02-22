//@format

const Game = require('./game.js');
const RecordedPlayer = require('./recordedPlayer.js');

describe('Game', () => {
  it('begins not over', () => {
    const game = new Game();

    expect(game.isOver()).toEqual(false);
  });

  it('ends in draw', () => {
    const recordedPlayerOne = new RecordedPlayer('X', [2, 4, 6, 7, 9]);
    const recordedPlayerTwo = new RecordedPlayer('O', [1, 3, 5, 8]);
    const game = new Game(recordedPlayerOne, recordedPlayerTwo);

    game.play();

    expect(game.isOver()).toEqual(true);
  });
});
