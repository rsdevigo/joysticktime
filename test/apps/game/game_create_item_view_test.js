import Backbone from 'backbone';
import helpers from 'helpers/handlebars_helpers';
import GameCreateItemView from 'apps/game/game_create_item_view';

describe('GameCreateItemView', function() {
  helpers.initialize();

  beforeEach(() => {
    this.date = Date.now();

    this.model = new Backbone.Model({});

    this.view = new GameCreateItemView({model: this.model});
    this.view.render();

    this.eventSpy = sinon.spy();
    this.view.listenTo(this.view, 'game:createItem', this.eventSpy);
  });

  it('render() should return the view object', () => {
    expect(this.view.render()).to.equal(this.view);
  });

  it('text are should render', () => {
    expect(this.view.render().$('textarea#text')).not.to.equal(null);
  });

  it('author should be of type text', () => {
    expect(this.view.render().$('#author')).not.to.equal(null);
    expect(this.view.render().$('#author').attr('type')).to.equal('text');
  });

  it('created should be of type text', () => {
    expect(this.view.render().$('#created')).not.to.equal(null);
    expect(this.view.render().$('#created').attr('type')).to.equal('text');
  });

  it('click event should trigger spy', () => {
    this.view.$el.find('button.create').trigger('click');
    expect(this.eventSpy.callCount).to.equal(1);
  });

});
