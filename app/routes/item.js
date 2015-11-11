import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let menuItem = params.item_name;
    return $.get( `menu/${menuItem}.json` );
  }
});
