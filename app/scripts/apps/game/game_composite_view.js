'use strict';

import Marionette from 'marionette';
import * as JST from 'templates';
import GameItemView from './game_item_view';

export default Marionette.CompositeView.extend({
    template: JST['app/scripts/apps/game/game_composite_view_template.hbs'],
    childView: GameItemView,
    childViewContainer: '#item-view-container',
    className: '',
    ui: {
      create: 'button.create'
    },
    triggers: {
      'click @ui.create': 'game:navigateNew'
    },
    collectionEvents: {
      'update': 'render'
    }
});
