import _ from 'underscore';
import Marionette from 'marionette';
import * as JST from 'templates';

export default Marionette.ItemView.extend({
  template: JST['app/scripts/apps/game/game_create_item_view_template.hbs'],

  events: {
    'click button.create': 'createItem'
  },

  initialize() {
    this.model.set('created', Date.now());
  },

  createItem(e) {
    e.preventDefault();

    let data = _.object(_.map(this.$('form').serializeArray(), _.values));
    this.model.set(data);

    this.trigger('game:createItem', this.model);
  }
});
