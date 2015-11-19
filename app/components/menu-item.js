import Ember from 'ember';

export default Ember.Component.extend({
  orderManager: Ember.inject.service('order-manager'),
  tagName: 'li',
  classNames: ['menu-item'],
  actions: {
    chooseItem(menuCategory, menuItemName) {
      this.get('orderManager').chooseMenuOption(menuCategory, menuItemName);
    }
  }
});
