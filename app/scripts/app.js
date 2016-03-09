import { Application } from 'marionette';
import Backbone from 'backbone';
import Fastclick from 'fastclick';
import MainLayoutView from './apps/main/main_layout_view';
import NavigationController from './apps/navigation/navigation_controller';
import HomeRouter from './apps/home/home_router';
import helpers from './helpers/handlebars_helpers';
import GameRouter from 'apps/game/game_router';
helpers.initialize();
let App = new Application();
var initializeUI = function () {
    let rootView = new MainLayoutView();
    rootView.render();
    new NavigationController({ region: rootView.navigationRegion });
    new HomeRouter({ region: rootView.contentRegion });
    new GameRouter({ region: rootView.contentRegion });
};
App.on('start', function () {
    initializeUI();
    Fastclick.attach(document.body);
    if (Backbone.history) {
        Backbone.history.start();
    }
});
export default App;
