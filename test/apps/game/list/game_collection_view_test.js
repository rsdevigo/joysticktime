import GameCollectionView from 'apps/game/list/game_collection_view';
import {Collection} from 'backbone';

describe('GameCollectionView view', () => {
  let view;
  beforeEach(() => {
    let collection = new Collection([
      {'message': 'Hello world'},
      {'message': 'How are you?'}
    ]);
    view = new GameCollectionView({collection: collection});
    view.render();
  });
  it('render() should return the view object', () => {
    expect(view.render()).to.equal(view);
  });

  it('should contain 2 item views', () => {
    expect(view.render().$el.find('h2').length).to.equal(2);
  });
});
