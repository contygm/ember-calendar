define('my-new-app/models/calendar', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    notes: _emberData.default.attr('string', { defaultValue: '' }),
    // days will have its own model
    days: _emberData.default.hasMany('day')
  });
});