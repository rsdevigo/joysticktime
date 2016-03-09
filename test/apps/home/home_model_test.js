import HomeModel from 'apps/home/home_model';

describe('HomeModel', () => {
  it('has default values', () => {
    let model = new HomeModel();
    expect(model).to.be.ok;
  });
});
