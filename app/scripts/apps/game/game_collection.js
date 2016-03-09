import {Collection} from 'backbone';
import Model from './game_model';

export default Collection.extend({
    model: Model,
    url: '/jsondata/game-crud-data.json'
});
