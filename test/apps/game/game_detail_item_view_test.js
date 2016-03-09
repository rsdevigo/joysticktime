import Backbone from 'backbone';
import helpers from 'helpers/handlebars_helpers';
import GameDetailItemView from 'apps/game/game_detail_item_view';

describe('GameDetailItemView', function() {
  helpers.initialize();

  beforeEach(() => {
    this.date = Date.now();

    this.model = new Backbone.Model({
      text: 'Sample',
      author: 'This Guy',
      created: this.date,
      isPublished: false
    });

    this.view = new GameDetailItemView({model: this.model});
    this.view.render();

    this.eventSpy = sinon.spy();
    this.triggerSpy = sinon.spy();
    this.view.listenTo(this.view, 'game:removeItem', this.triggerSpy);
    this.view.listenTo(this.view, 'game:save', this.eventSpy);
  });

  it('render() should return the view object', () => {
    expect(this.view.render()).to.equal(this.view);
  });

  it('name should equal Sample', () => {
    expect(this.view.render().$('textarea#text').text()).to.equal('Sample');
  });

  it('author should equal This Guy', () => {
    expect(this.view.render().$('#author').val()).to.equal('This Guy');
  });

  it('remove click event should trigger spy', () => {
    this.view.$el.find('button.remove').trigger('click');
    expect(this.triggerSpy.callCount).to.equal(1);
  });

  it('save click event should trigger spy', () => {
    this.view.$el.find('button.save').trigger('click');
    expect(this.eventSpy.callCount).to.equal(1);
  });
});
