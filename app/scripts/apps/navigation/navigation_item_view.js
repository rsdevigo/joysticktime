import Marionette from 'marionette';
import * as JST from 'templates';

export default Marionette.ItemView.extend({
  tagName: 'a',
  className: 'mdl-navigation__link',
  template: JST['app/scripts/apps/navigation/navigation_item_view_template.hbs'],
  events: {
    'click': 'clickHandler'
  },

  clickHandler() {
    this.trigger('navigation-item:clicked', this.model);
  }
});
