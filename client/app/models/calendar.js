import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string', { defaultValue: ''}),
  days: DS.hasMany('day'),
  count: 0,
  // TODO: fix so loads streak initally
  counter: Ember.observer('days.@each.value', function() {
    this.get('days').then(days => {
      let count = 0;
      const day = moment();

      let ds = days.filterBy('date', day.format('YYYY-MM-DD'));
      while (ds.length === 1 && ds[0].get('value')) {
        count++;
        day.subtract(1, 'd');
        ds = days.filterBy('date', day.format('YYYY-MM-DD'));
      }
      this.set('count', count)
    })
  })
});
