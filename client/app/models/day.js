import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'), // YYYY-MM-DD
  //
  // keeps track of if day is active
  value: DS.attr('boolean', { default: false}),
  calendar: DS.belongsTo('calendar'),
});
