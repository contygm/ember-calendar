import Ember from 'ember';

export default Ember.Controller.extend({
  calendarSorting: ['count:desc'],
  sortedCalendars: Ember.computed.sort('model', 'calendarSorting'),
  session: Ember.inject.service('session'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
