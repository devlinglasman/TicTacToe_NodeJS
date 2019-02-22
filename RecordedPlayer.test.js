//@format

const RecordedPlayer = require('./recordedPlayer.js');

describe('RecordedPlayer', () => {
  it('returns next move', () => {
    const recordedPlayer = new RecordedPlayer('X', [1, 2, 3]);

    expect(recordedPlayer.getMove()).toEqual(1);
    expect(recordedPlayer.getMove()).toEqual(2);
    expect(recordedPlayer.getMove()).toEqual(3);
  });
});
