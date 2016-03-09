import {Object as Obj} from 'marionette';
import HomeItemView from './home_item_view';
import HomeModel from './home_model';

export default Obj.extend({
    initialize(options) {
         this.region = options.region;
     },
     default() {
         let model = new HomeModel({name: 'Home'});
         let view = new HomeItemView({model: model});
         this.region.show(view);
     }
});
