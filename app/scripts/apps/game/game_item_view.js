import Marionette from 'marionette';
import * as JST from 'templates';

export default Marionette.ItemView.extend({
  template: JST['app/scripts/apps/game/game_item_view_template.hbs'],
  tagName: 'li',
  className: 'list-group-item clearfix',
  ui: {
    button: 'button.edit'
  },
  triggers: {
    'click @ui.button': 'game:showDetail'
  }
});
