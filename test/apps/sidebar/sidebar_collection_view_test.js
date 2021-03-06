import {Collection} from 'backbone';
import helpers from 'helpers/handlebars_helpers';
import {Collection} from 'backbone';
import SidebarCollectionView from 'apps/sidebar/sidebar_collection_view';

describe('SidebarCollectionView view', function() {
  helpers.initialize();

  beforeEach(() => {
    this.collection = new Collection([
      {name: 'Sample', count: 20},
      {name: 'Example', count: 30}
    ]);
    this.view = new SidebarCollectionView({collection: this.collection});
    this.view.render();
  });
  it('render() should return the view object', () => {
    expect(this.view.render()).to.equal(this.view);
  });

  it('should contain 2 item views', () => {
    expect(this.view.render().$el.find('li').length).to.equal(2);
  });
});
