define('ember-bootstrap/components/bs-popover/element', ['exports', 'ember-bootstrap/components/base/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    popperClassNames: Ember.computed('fade', 'actualPlacement', 'showHelp', function () {
      var classes = ['popover', 'bs-popover-' + this.get('actualPlacement')];
      if (this.get('fade')) {
        classes.push('fade');
      }
      if (this.get('showHelp')) {
        classes.push('show');
      }
      return classes;
    }),

    /**
     * @property titleClass
     * @private
     */
    titleClass: 'popover-header',

    /**
     * @property contentClass
     * @private
     */
    contentClass: 'popover-body'
  });
});