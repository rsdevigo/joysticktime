import Backbone from 'backbone';
import Marionette from 'marionette';
import Radio from 'radio';
import NavigationCollectionView from './navigation_collection_view';
import NavigationCollection from './navigation_collection';
import NavigationModel from './navigation_model';

export default Marionette.Object.extend({

  initialize(options) {
       this.region = options.region;

       this.channel = Radio.channel('navigation');

       var collection = new NavigationCollection();

       var view = new NavigationCollectionView({collection: collection});

       this.listenTo(view, 'childview:navigation-item:clicked', (view, model) => {
         Backbone.history.navigate(model.get('baseRoute'), {trigger: true});
       });

       this.listenTo(this.channel, 'crud-update', (modelData) => {
         var model = collection.findWhere({name: modelData.name});

         if (model) {
           model.set('count', modelData.count);
         } else {
           collection.add(new NavigationModel(modelData));
         }
       });

       this.region.show(view);
   }
});
