import Model from 'apps/game/game_model';

describe('Model', () => {
  it('has default values', () => {
    let model = new Model();
    expect(model).to.be.ok;
  });
});
