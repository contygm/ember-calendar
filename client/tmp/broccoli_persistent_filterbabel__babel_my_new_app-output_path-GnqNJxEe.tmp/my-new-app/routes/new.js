define('my-new-app/routes/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      // returns new calendar model
      return this.store.createRecord('calendar');
    },

    actions: {
      cancel: function cancel() {
        // occurs after controller's cancel() is done
        this.transitionTo('calendars');
      }
    }
  });
});