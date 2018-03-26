"use strict";



define('my-new-app/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _dataAdapterMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend(_dataAdapterMixin.default, {
    namespace: 'api',
    authorizer: 'authorizer:application'
  });
});
define('my-new-app/app', ['exports', 'my-new-app/resolver', 'ember-load-initializers', 'my-new-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('my-new-app/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _oauth2PasswordGrant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2PasswordGrant.default.extend({
    serverTokenEndpoint: '/token'
  });
});
define('my-new-app/authorizers/application', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _oauth2Bearer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2Bearer.default.extend();
});
define('my-new-app/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('my-new-app/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('my-new-app/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('my-new-app/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('my-new-app/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('my-new-app/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('my-new-app/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('my-new-app/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('my-new-app/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('my-new-app/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('my-new-app/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('my-new-app/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('my-new-app/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('my-new-app/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('my-new-app/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('my-new-app/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('my-new-app/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('my-new-app/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('my-new-app/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('my-new-app/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('my-new-app/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('my-new-app/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('my-new-app/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('my-new-app/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('my-new-app/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('my-new-app/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('my-new-app/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('my-new-app/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('my-new-app/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('my-new-app/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('my-new-app/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('my-new-app/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('my-new-app/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('my-new-app/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('my-new-app/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('my-new-app/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('my-new-app/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('my-new-app/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('my-new-app/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('my-new-app/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('my-new-app/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('my-new-app/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('my-new-app/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('my-new-app/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('my-new-app/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('my-new-app/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('my-new-app/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('my-new-app/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('my-new-app/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('my-new-app/components/calendar-cell', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td',

    // NOTE: classNameBindings the property which needs to be camelCase
    // HOWEVER, when class is applied, it will be hyphenated aka not-current
    //
    classNameBindings: ['notCurrent', 'hasValue'],
    notCurrent: Ember.computed('day.currentMonth', function () {
      return !this.get('day.isCurrentMonth');
    }),

    hasValue: Ember.computed('day.value', function () {
      return this.get('day.value');
    }),

    click: function click() {
      var date = this.get('day.date');
      if (this.get('day.isCurrentMonth') && moment().isSameOrAfter(date)) {
        var newValue = !this.get('day.value');

        this.set('day.value', newValue);
        this.get('markDay')(date, newValue);
      }
    }
  });
});
define('my-new-app/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('my-new-app/components/login-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service('session'),
    // TODO: handle failed login w screen n everything
    //
    actions: {
      authenticate: function authenticate() {
        var _getProperties = this.getProperties('username', 'password'),
            username = _getProperties.username,
            password = _getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', username, password).catch(function (reason) {
          Ember.Logger.error(reason.error || reason);
        });
      }
    }
  });
});
define('my-new-app/components/month-view', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // TODO: extract
  // this gets the model's value for each day
  function getValue(days, dayObj) {
    var day = days.filter(function (day) {
      return day.get('date') === dayObj.date;
    })[0];
    if (day) {
      dayObj.value = day.get('value');
    }
  }

  exports.default = Ember.Component.extend({
    // NOTE: days comes from the component's instantiation
    // NOTE: computed mechanics (callings days)
    //
    weeks: Ember.computed('days', function () {
      // doing things cuz days are loaded seperately from the server
      // so it returns promise, not array
      //
      return _emberData.default.PromiseArray.create({
        promise: this.get('days').then(function (days) {
          // first day of current month
          //
          var day = moment().date(1);
          var currentMonth = day.month();

          // if the day isn't the first day of the week (Sunday)
          //
          if (day.day() !== 0) {
            // make it the first day of the week
            //
            day.day(0);
          }

          var weeks = [];

          // TODO: refactor, feels a bit ineffecient, also why not put name of day in day obj
          // https://momentjs.com/docs/#/parsing/
          //
          while (day.month() <= currentMonth) {
            var week = [];
            for (var i = 0; i < 7; i++) {
              var dayObj = {
                date: day.format('YYYY-MM-DD'),
                num: day.format('D'),
                isCurrentMonth: currentMonth === day.month()
              };
              getValue(days, dayObj);
              week.push(dayObj);
              day.add(1, 'd');
            }
            weeks.push(week);
          }

          return weeks;
        })
      });
    }),
    store: Ember.inject.service(),
    actions: {
      markDay: function markDay(date, value) {
        var existingRecord = this.get('days').filterBy('date', date)[0];

        if (existingRecord) {
          existingRecord.set('value', value);
          existingRecord.save();
        } else {
          var newRecord = this.get('store').createRecord('day', {
            date: date,
            value: value
          });

          this.get('days').pushObject(newRecord);
          newRecord.save();
        }
      }
    }
  });
});
define('my-new-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('my-new-app/controllers/calendar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    monthName: moment().format('MMMM YYYY')
  });
});
define('my-new-app/controllers/calendars', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    calendarSorting: ['count:desc'],
    sortedCalendars: Ember.computed.sort('model', 'calendarSorting'),
    session: Ember.inject.service('session'),
    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });
});
define('my-new-app/controllers/edit', ['exports'], function (exports) {
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
          return Ember.Logger.error('MODEL DID NOT SAVE');
        });
      },
      delete: function _delete() {
        var _this2 = this;

        // NOTE: destroyRecord sends to server to actually delete record
        // See note in new Controller
        //
        this.get('model').destroyRecord().then(function () {
          return _this2.transitionToRoute('calendars');
        }, function () {
          return Ember.Logger.error('MODEL DID DELETE');
        });
      }
    }
  });
});
define('my-new-app/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    session: Ember.inject.service('session')
  });
});
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
          return Ember.Logger.error('MODEL DID NOT SAVE');
        });
      },
      cancel: function cancel() {
        // NOTE: deleteRecord deletes from local storage so
        // nothing sent to server.
        // Fine since record hasn't been created yet
        //
        this.get('model').deleteRecord();

        // allows controller's cancel() to bubble up to route/new
        //
        return true;
      }
    }
  });
});
define('my-new-app/helpers/app-version', ['exports', 'my-new-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('my-new-app/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('my-new-app/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('my-new-app/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('my-new-app/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('my-new-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('my-new-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('my-new-app/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('my-new-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'my-new-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('my-new-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('my-new-app/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('my-new-app/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('my-new-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('my-new-app/initializers/ember-simple-auth', ['exports', 'my-new-app/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('my-new-app/initializers/export-application-global', ['exports', 'my-new-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('my-new-app/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('my-new-app/initializers/load-bootstrap-config', ['exports', 'my-new-app/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('my-new-app/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('my-new-app/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("my-new-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('my-new-app/models/calendar', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    notes: _emberData.default.attr('string', { defaultValue: '' }),
    days: _emberData.default.hasMany('day'),
    count: 0,
    // TODO: fix so loads after refresh
    counter: Ember.observer('days.@each.value', function () {
      var _this = this;

      this.get('days').then(function (days) {
        var count = 0;
        var day = moment();

        var ds = days.filterBy('date', day.format('YYYY-MM-DD'));
        while (ds.length === 1 && ds[0].get('value')) {
          count++;
          day.subtract(1, 'd');
          ds = days.filterBy('date', day.format('YYYY-MM-DD'));
        }
        _this.set('count', count);
      });
    })
  });
});
define('my-new-app/models/day', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    date: _emberData.default.attr('string'), // YYYY-MM-DD

    // keeps track of if day is active
    //
    value: _emberData.default.attr('boolean', { default: false }),
    calendar: _emberData.default.belongsTo('calendar')
  });
});
define('my-new-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
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

    this.route('new', {
      path: 'calendars/new'
    });

    this.route('calendar', {
      path: 'calendars/:calendar_id'
    });

    this.route('edit', {
      path: 'calendars/:calendar_id/edit'
    });
    this.route('login');
  });

  exports.default = Router;
});
define('my-new-app/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default);
});
define('my-new-app/routes/calendar', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {});
});
define('my-new-app/routes/calendars', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
    model: function model() {
      return this.store.findAll('calendar');
    }
  });
});
define('my-new-app/routes/edit', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {

    actions: {
      cancel: function cancel() {
        this.transitionTo('calendars');
      }
    }
  });
});
define('my-new-app/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('my-new-app/routes/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    session: Ember.inject.service('session')
  });
});
define('my-new-app/routes/new', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
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
define('my-new-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('my-new-app/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('my-new-app/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('my-new-app/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("my-new-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BdUYvx1d", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/application.hbs" } });
});
define("my-new-app/templates/calendar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "P42/oNdp", "block": "{\"statements\":[[6,[\"link-to\"],[\"calendars\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"  Back\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"h1\",[]],[13],[1,[28,[\"model\",\"name\"]],false],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"\"],[13],[0,\"\\n  \"],[11,\"h2\",[]],[13],[1,[26,[\"monthName\"]],false],[14],[0,\"\\n\\n  \"],[1,[33,[\"month-view\"],null,[[\"days\"],[[28,[\"model\",\"days\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/calendar.hbs" } });
});
define("my-new-app/templates/calendars", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NwPsQIGd", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[15,\"class\",\"h1\"],[13],[0,\" Calendars \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"toolbar\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"new\"],[[\"class\"],[\"btn btn-success\"]],{\"statements\":[[0,\"      Create Calendar\\n\"]],\"locals\":[]},null],[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"name\",\"logout-button\"],[5,[\"action\"],[[28,[null]],\"logout\"]],[13],[0,\"Log Out\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"ul\",[]],[15,\"class\",\"cal-list\"],[13],[0,\"\\n    \"],[11,\"li\",[]],[15,\"class\",\"row title-row\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-3\"],[13],[0,\"Name\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-6\"],[13],[0,\"Note\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-1\"],[13],[0,\"Streak\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-2 action-title\"],[13],[0,\"Actions\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"sortedCalendars\"]]],null,{\"statements\":[[0,\"       \"],[11,\"li\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"name col-md-3\"],[13],[1,[28,[\"cal\",\"name\"]],false],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"notes col-md-6\"],[13],[1,[28,[\"cal\",\"notes\"]],false],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[1,[28,[\"cal\",\"count\"]],false],[0,\" days\"],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"calendar\",[28,[\"cal\"]]],[[\"class\"],[\"btn btn-info\"]],{\"statements\":[[0,\"             View\\n\"]],\"locals\":[]},null],[0,\"         \"],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"edit\",[28,[\"cal\"]]],[[\"class\"],[\"btn btn-warning\"]],{\"statements\":[[0,\"             Edit\\n\"]],\"locals\":[]},null],[0,\"         \"],[14],[0,\"\\n       \"],[14],[0,\"\\n\"]],\"locals\":[\"cal\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/calendars.hbs" } });
});
define("my-new-app/templates/components/calendar-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l9tvC4Ea", "block": "{\"statements\":[[11,\"span\",[]],[15,\"class\",\"num\"],[13],[1,[28,[\"day\",\"num\"]],false],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/components/calendar-cell.hbs" } });
});
define('my-new-app/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("my-new-app/templates/components/login-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sH+NjRb4", "block": "{\"statements\":[[11,\"form\",[]],[5,[\"action\"],[[28,[null]],\"authenticate\"],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \"],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\"],[[28,[\"username\"]],\"Username\"]]],false],[0,\"\\n  \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"placeholder\"],[\"password\",[28,[\"password\"]],\"p@$$W0rd\"]]],false],[0,\"\\n  \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"name\",\"login-button\"],[13],[0,\"Log In\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/components/login-form.hbs" } });
});
define("my-new-app/templates/components/month-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HprzR4f1", "block": "{\"statements\":[[11,\"table\",[]],[13],[0,\"\\n  \"],[11,\"thead\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Sunday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Monday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Tuesday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Wednesday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Thursday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Friday \"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\" Saturday \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"weeks\"]]],null,{\"statements\":[[0,\"      \"],[11,\"tr\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"week\"]]],null,{\"statements\":[[0,\"          \"],[1,[33,[\"calendar-cell\"],null,[[\"day\",\"markDay\"],[[28,[\"day\"]],[33,[\"action\"],[[28,[null]],\"markDay\"],null]]]],false],[0,\"\\n\"]],\"locals\":[\"day\"]},null],[0,\"      \"],[14],[0,\"\\n\"]],\"locals\":[\"week\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/components/month-view.hbs" } });
});
define("my-new-app/templates/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TqkHIuoM", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Edit Calendar\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n  \"],[11,\"form\",[]],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Name: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"value\"],[\"text\",\"name\",[28,[\"model\",\"name\"]]]]],false],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Notes: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"textarea\"],null,[[\"id\",\"value\"],[\"notes\",[28,[\"model\",\"notes\"]]]]],false],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[5,[\"action\"],[[28,[null]],\"save\"]],[13],[0,\"Save\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"delete\"]],[13],[0,\"Delete\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/edit.hbs" } });
});
define("my-new-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lu7Fs1Iv", "block": "{\"statements\":[[1,[33,[\"log\"],[\"session\",[28,[\"session\"]]],null],false],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"  \"],[11,\"p\",[]],[13],[0,\"Logged In\"],[14],[0,\"\\n  \"],[6,[\"link-to\"],[\"calendars\"],null,{\"statements\":[[0,\"See your calendars\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[11,\"p\",[]],[13],[6,[\"link-to\"],[\"login\"],null,{\"statements\":[[0,\"Login\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/index.hbs" } });
});
define("my-new-app/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A9+6TnME", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Login\"],[14],[0,\"\\n\\n\"],[1,[26,[\"login-form\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/login.hbs" } });
});
define("my-new-app/templates/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3KuKs1VF", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"New Calendar\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n  \"],[11,\"form\",[]],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Name: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"value\"],[\"text\",\"name\",[28,[\"model\",\"name\"]]]]],false],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Notes: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"textarea\"],null,[[\"id\",\"value\"],[\"notes\",[28,[\"model\",\"notes\"]]]]],false],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[5,[\"action\"],[[28,[null]],\"save\"]],[13],[0,\"Save\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/new.hbs" } });
});


define('my-new-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'my-new-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("my-new-app/app")["default"].create({"name":"my-new-app","version":"0.0.0+03870101"});
}
//# sourceMappingURL=my-new-app.map
