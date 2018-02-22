import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string', { defaultValue: ''}),
  // days will have its own model
  days: DS.hasMany('day'),
});
