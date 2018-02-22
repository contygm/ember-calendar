import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // returns new calendar model
    return this.store.createRecord('calendar');
  }
})
