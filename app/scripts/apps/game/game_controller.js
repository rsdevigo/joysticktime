import Backbone from 'backbone';
import Marionette from 'marionette';
import Radio from 'radio';
import Model from './game_model';
import GameCollection from './game_collection';
import GameDetailItemView from './game_detail_item_view';
import GameCreateItemView from './game_create_item_view';
import GameCompositeView from './game_composite_view';

let msg = {};
msg.CREATE_ITEM = 'game:createItem';
msg.REMOVE_ITEM = 'game:removeItem';
msg.SAVE = 'game:save';
msg.SHOW_DETAIL = 'childview:game:showDetail';
msg.NAVIGATE_NEW = 'game:navigateNew';
msg.CRUD_UPDATE = 'crud-update';

let feature = {
  name: 'game',
  baseRoute: '#game'
};

export default Marionette.Object.extend({
  initialize(options) {
    let that = this;
    this.channel = Radio.channel('sidebar');

    this.collection = new GameCollection();
    this.collection.fetch({
      success() {
        that.channel.trigger(msg.CRUD_UPDATE, {
          name: feature.name, count: that.collection.length, baseRoute: feature.baseRoute
        });
      }
    });

    this.region = options.region;
  },
  list() {
    let view = new GameCompositeView({collection: this.collection});
    view.listenTo(view, msg.NAVIGATE_NEW, () => {
      Backbone.history.navigate('#game/new', {trigger: true});
    });
    view.listenTo(view, msg.SHOW_DETAIL, args => {
      Backbone.history.navigate('#game/' + args.model.cid, {trigger: true});
    });
    this.region.show(view);
  },
  create() {
    let view = new GameCreateItemView({model: new Model()});
    view.listenTo(view, msg.CREATE_ITEM, model => {
      this.collection.add(model);
      //TODO: model.save();
      this.channel.trigger(msg.CRUD_UPDATE, {name: feature.name, count: this.collection.length, baseRoute: feature.baseRoute});
      Backbone.history.navigate('#game', {trigger: true});
    });
    this.region.show(view);
  },
  detail(id) {
    let view = new GameDetailItemView({model: this.collection.get(id)});
    view.listenTo(view, msg.REMOVE_ITEM, args => {
      this.collection.remove(args.model.cid);
      this.channel.trigger(msg.CRUD_UPDATE, {name: feature.name, count: this.collection.length, baseRoute: feature.baseRoute});
      Backbone.history.navigate('#game', {trigger: true});
    });
    view.listenTo(view, msg.SAVE, (/*args*/) => {
      //TODO: model save e.g. args.model.save();
      Backbone.history.navigate('#game', {trigger: true});
    });
    this.region.show(view);
  }
});
