QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/calendars.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/calendars.js should pass ESLint\n\n');
});

QUnit.test('controllers/new.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/new.js should pass ESLint\n\n8:15 - Unexpected console statement. (no-console)');
});

QUnit.test('models/calendar.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/calendar.js should pass ESLint\n\n');
});

QUnit.test('models/day.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/day.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/calendar.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/calendar.js should pass ESLint\n\n');
});

QUnit.test('routes/calendars.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/calendars.js should pass ESLint\n\n');
});

QUnit.test('routes/edit.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/edit.js should pass ESLint\n\n');
});

QUnit.test('routes/new.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/new.js should pass ESLint\n\n');
});

