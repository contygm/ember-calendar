import Ember from 'ember';
import DS from 'ember-data';

// TODO: extract
// this gets the model's value for each day
function getValue(days, dayObj) {
  const day = days.filter(day => day.get('date') === dayObj.date[0]);

  if (day) {
    dayObj.value = day.get('value');
  }
}

export default Ember.Component.extend({
  // NOTE: days comes from the component's instantiation
  // NOTE: computed mechanics (callings days)
  //
  weeks: Ember.computed('days', function () {
    // doing things cuz days are loaded seperately from the server
    // so it returns promise, not array
    //
    return DS.PromiseArray.create({
      promise: this.get('days').then(function (days) {
        // first day of current month
        //
        console.log(days);
        const day = moment().date(1);
        const currentMonth = day.month();

        // if the day isn't the first day of the week (Sunday)
        //
        if (day.day() !== 0) {
          // make it the first day of the week
          //
          day.day(0);
        }

        let weeks = [];

        // TODO: refactor, feels a bit ineffecient, also why not put name of day in day obj
        // https://momentjs.com/docs/#/parsing/
        //
        while (day.month() <= currentMonth) {
          let week = [];
          for (let i = 0; i < 7; i++) {
            const dayObj = {
              date: day.format('YYYY-MM-DD'),
              num: day.format('D'),
              isCurrentMonth: currentMonth === day.month(),
            }
            getValue(days, dayObj);
            week.push(dayObj);
            day.add(1, 'd');
          }
          weeks.push(week);
        }

        return weeks;
      })
    })
  })
});
