import Ember from 'ember';

export default Ember.Controller.extend({
  calendarSorting: ['count'],
  sortedCalendars: Ember.computed.sort('model', 'calendarSorting')
});
