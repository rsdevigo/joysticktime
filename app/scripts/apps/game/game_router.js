import Marionette from 'marionette';
import GameController from './game_controller';

export default Marionette.AppRouter.extend({
  initialize(options) {
    this.controller = new GameController({region: options.region});
  },
  appRoutes: {
    'game': 'list',
    'game/new': 'create',
    'game/:id':'detail'
  }
});
