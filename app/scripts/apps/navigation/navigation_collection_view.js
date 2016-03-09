import Marionette from 'marionette';
import NavigationItemView from './navigation_item_view';

export default Marionette.CollectionView.extend({
  childView: NavigationItemView,
  tagName: 'nav',
  className: 'mdl-navigation',

  initialize() {
    this.listenTo(this.collection, 'change', this.render);
  }
});
