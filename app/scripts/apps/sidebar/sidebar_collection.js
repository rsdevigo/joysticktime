import Backbone from 'backbone';
import SidebarModel from './sidebar_model';

export default Backbone.Collection.extend({
  model: SidebarModel
});
