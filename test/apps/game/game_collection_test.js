'use strict';

import GameCollection from 'apps/game/game_collection';

describe('GameCollection', () => {
  it('has default values', () => {
    var collection = new GameCollection();
    expect(collection).to.be.ok;
  });
});
