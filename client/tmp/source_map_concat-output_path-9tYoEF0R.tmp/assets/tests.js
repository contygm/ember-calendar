'use strict';

define('my-new-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/calendars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/calendars.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/new.js should pass ESLint\n\n8:15 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/calendar.js should pass ESLint\n\n');
  });

  QUnit.test('models/day.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/day.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/calendar.js should pass ESLint\n\n');
  });

  QUnit.test('routes/calendars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/calendars.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new.js should pass ESLint\n\n');
  });
});
define('my-new-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('my-new-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'my-new-app/tests/helpers/start-app', 'my-new-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = Ember.RSVP.Promise;
});
define('my-new-app/tests/helpers/resolver', ['exports', 'my-new-app/resolver', 'my-new-app/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('my-new-app/tests/helpers/start-app', ['exports', 'my-new-app/app', 'my-new-app/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('my-new-app/tests/test-helper', ['my-new-app/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('my-new-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/calendars-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/calendars-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/calendar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/calendar-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/calendars-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/calendars-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-test.js should pass ESLint\n\n');
  });
});
define('my-new-app/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('my-new-app/tests/unit/controllers/calendars-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:calendars', 'Unit | Controller | calendars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('my-new-app/tests/unit/controllers/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new', 'Unit | Controller | new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('my-new-app/tests/unit/routes/calendar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:calendar', 'Unit | Route | calendar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('my-new-app/tests/unit/routes/calendars-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:calendars', 'Unit | Route | calendars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('my-new-app/tests/unit/routes/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:edit', 'Unit | Route | edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('my-new-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
