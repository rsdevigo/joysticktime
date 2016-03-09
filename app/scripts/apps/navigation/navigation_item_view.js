import {ItemView} from 'marionette';
import * as JST from 'templates';

export default ItemView.extend({
  tagName: 'li',
  template: JST['app/scripts/apps/navigation/navigation_template.hbs'],
  triggers: {
    'click a': 'language:click'
  }
});