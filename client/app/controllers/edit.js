import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function () {
      this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => Ember.Logger.error('MODEL DID NOT SAVE')
      );
    },
    delete() {
      // NOTE: destroyRecord sends to server to actually delete record
      // See note in new Controller
      //
      this.get('model').destroyRecord().then(
        () => this.transitionToRoute('calendars'),
        () => Ember.Logger.error('MODEL DID DELETE')
      );
    }
  }
});
