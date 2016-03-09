import Marionette from 'marionette';
import * as JST from 'templates';
import _ from 'underscore';

export default Marionette.ItemView.extend({
  template: JST['app/scripts/apps/game/game_detail_item_view_template.hbs'],
  ui: {
    remove: 'button.remove',
    save: 'button.save'
  },
  triggers: {
    'click @ui.remove': 'game:removeItem'
  },
  events: {
    'click @ui.save': 'save'
  },
  save(e) {
    e.preventDefault();
    let data = _.object(_.map(this.$('form').serializeArray(), _.values));
    this.model.unset('isPublished');
    this.model.set(data);
    this.trigger('game:save', {view: this, model: this.model});
  }
});
