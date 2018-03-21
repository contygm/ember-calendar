define('my-new-app/controllers/calendars', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    calendarSorting: ['name'],
    sortedCalendars: Ember.computed.sort('model', 'calendarSorting')
  });
});