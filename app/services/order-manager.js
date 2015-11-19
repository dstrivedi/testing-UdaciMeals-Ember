import Ember from 'ember';

export default Ember.Service.extend({
  selectedDay: 'Monday',
  menuSelection: {
    Monday: {
      salad: '',
      sandwich: '',
      meal: '',
      dessert: '',
      drink: '',
      snack: ''
    },
    Tuesday: {
      salad: '',
      sandwich: '',
      meal: '',
      dessert: '',
      drink: '',
      snack: ''
    },
    Wednesday: {
      salad: '',
      sandwich: '',
      meal: '',
      dessert: '',
      drink: '',
      snack: ''
    },
    Thursday: {
      salad: '',
      sandwich: '',
      meal: '',
      dessert: '',
      drink: '',
      snack: ''
    },
    Friday: {
      salad: '',
      sandwich: '',
      meal: '',
      dessert: '',
      drink: '',
      snack: ''
    }
  }
});
