import Backbone from 'backbone';
import NavigationModel from './navigation_model';

export default Backbone.Collection.extend({
  model: NavigationModel
});
