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