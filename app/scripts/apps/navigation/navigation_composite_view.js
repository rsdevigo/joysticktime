import {CompositeView} from 'marionette';
import * as JST from 'templates';
import NavigationItemView from 'apps/navigation/navigation_item_view';

export default CompositeView.extend({
  tagName: 'div',
  template: JST['app/scripts/apps/navigation/navigation_composite_view_template.hbs'],
  childView: NavigationItemView,
  childViewContainer: '#lang'
});
