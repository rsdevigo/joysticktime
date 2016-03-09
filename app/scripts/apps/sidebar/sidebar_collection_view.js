import Marionette from 'marionette';
import SidebarItemView from './sidebar_item_view';

export default Marionette.CollectionView.extend({
  childView: SidebarItemView,
  tagName: 'ul',
  className: 'nav nav-pills nav-stacked',

  initialize() {
    this.listenTo(this.collection, 'change', this.render);
  }
});
