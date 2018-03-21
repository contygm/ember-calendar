import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function () {
      this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => console.log('OOPS MODEL DID N0T SAVE')
      );
    },
    cancel: function () {
      this.get('model').deleteRecord();
      // allows controller's cancel() to bubble up to route/new
      return true;
    }
  }
});
