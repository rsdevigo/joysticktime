import Marionette from 'marionette';
import * as JST from 'templates';

export default Marionette.ItemView.extend({
  template: JST['app/scripts/apps/game/game_item_view_template.hbs'],
  tagName: 'div',
  className: 'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--3-col-phone mdl-card mdl-shadow--3dp',
  ui: {
    button: 'button.edit'
  },
  triggers: {
    'click @ui.button': 'game:showDetail'
  }
});
