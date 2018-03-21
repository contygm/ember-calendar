define('my-new-app/controllers/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      save: function save() {
        var _this = this;

        this.get('model').save().then(function () {
          return _this.transitionToRoute('calendars');
        }, function () {
          return console.log('OOPS MODEL DID N0T SAVE');
        });
      },
      cancel: function cancel() {
        this.get('model').deleteRecord();
        // allows controller's cancel() to bubble up to route/new
        return true;
      }
    }
  });
});