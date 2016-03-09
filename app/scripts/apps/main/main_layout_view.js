import {LayoutView} from 'marionette';
import * as JST from 'templates';

export default LayoutView.extend({
  template: JST['app/scripts/apps/main/main_layout_view_template.hbs'],
  regions: {
      'contentRegion': '.page-content',
      'navigationRegion': '.navigation',
  },
  el: '#wrapper'
});
