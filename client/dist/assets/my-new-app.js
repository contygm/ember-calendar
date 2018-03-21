"use strict";



define('my-new-app/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('my-new-app/app', ['exports', 'my-new-app/resolver', 'ember-load-initializers', 'my-new-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
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
    // days will have its own model
    days: _emberData.default.hasMany('day')
  });
});
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

    this.route('new', { path: 'calendars/new' });
    this.route('calendar', { path: 'calendars/:calendar_id' });

    this.route('edit', { path: 'calendars/:calendar_id/edit' });
  });

  exports.default = Router;
});
define('my-new-app/routes/calendar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('my-new-app/routes/calendars', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('calendar');
    }
  });
});
define('my-new-app/routes/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
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
  exports.default = Ember.HTMLBars.template({ "id": "TLawkOkM", "block": "{\"statements\":[[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/calendar.hbs" } });
});
define("my-new-app/templates/calendars", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KnTEmeec", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[15,\"class\",\"h1\"],[13],[0,\" Calendars \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"toolbar\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"new\"],[[\"class\"],[\"btn btn-success\"]],{\"statements\":[[0,\"      Create Calendar\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"ul\",[]],[15,\"class\",\"cal-list\"],[13],[0,\"\\n    \"],[11,\"li\",[]],[15,\"class\",\"row title-row\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-3\"],[13],[0,\"Name\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-6\"],[13],[0,\"Note\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-1\"],[13],[0,\"Streak\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"title col-md-2 action-title\"],[13],[0,\"Actions\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"sortedCalendars\"]]],null,{\"statements\":[[0,\"       \"],[11,\"li\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"name col-md-3\"],[13],[1,[28,[\"cal\",\"name\"]],false],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"notes col-md-6\"],[13],[1,[28,[\"cal\",\"notes\"]],false],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[0,\"X days\"],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"edit\",[28,[\"cal\"]]],[[\"class\"],[\"btn btn-info\"]],{\"statements\":[[0,\"             View\\n\"]],\"locals\":[]},null],[0,\"         \"],[14],[0,\"\\n         \"],[11,\"span\",[]],[15,\"class\",\"streak col-md-1\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"calendar\",[28,[\"cal\"]]],[[\"class\"],[\"btn btn-warning\"]],{\"statements\":[[0,\"             Edit\\n\"]],\"locals\":[]},null],[0,\"         \"],[14],[0,\"\\n       \"],[14],[0,\"\\n\"]],\"locals\":[\"cal\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/calendars.hbs" } });
});
define("my-new-app/templates/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wD0n5x5W", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/edit.hbs" } });
});
define("my-new-app/templates/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "E2CR7J9X", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"New Calendar\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n  \"],[11,\"form\",[]],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Name: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"value\"],[\"text\",\"name\",[28,[\"model\",\"name\"]]]]],false],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\" Notes: \"],[14],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[33,[\"textarea\"],null,[[\"id\",\"value\"],[\"notes\",[28,[\"model\",\"notes\"]]]]],false],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"save\"]],[13],[0,\"Save\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "my-new-app/templates/new.hbs" } });
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
  require("my-new-app/app")["default"].create({"name":"my-new-app","version":"0.0.0+9e23ad4c"});
}
//# sourceMappingURL=my-new-app.map
