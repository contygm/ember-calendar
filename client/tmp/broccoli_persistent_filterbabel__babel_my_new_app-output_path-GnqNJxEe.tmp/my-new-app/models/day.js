define('my-new-app/models/day', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    date: _emberData.default.attr('string'), // YYYY-MM-DD
    //
    // keeps track of if day is active
    value: _emberData.default.attr('boolean', { default: false }),
    calendar: _emberData.default.belongsTo('calendar')
  });
});