define('my-new-app/router', ['exports', 'my-new-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('calendars');

    this.route('new', { path: 'calendars/new' });
    this.route('calendar', { path: 'calendars/:calendar_id' });

    this.route('edit', { path: 'calendars/:calendar_id/edit' });
  });

  exports.default = Router;
});