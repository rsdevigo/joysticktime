import SidebarCollection from 'apps/sidebar/sidebar_collection';

describe('SidebarCollection', () => {
  it('has default values', () => {
    var collection = new SidebarCollection();
    expect(collection).to.be.ok;
  });
});
