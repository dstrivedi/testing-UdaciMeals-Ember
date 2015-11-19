import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['menu-item'],
  actions: {
    chooseItem(menuCategory, menuItemName) {
      console.log(menuCategory, menuItemName);
    }
  }
});
