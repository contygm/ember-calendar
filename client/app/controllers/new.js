import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function () {
      this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => Ember.Logger.error('MODEL DID NOT SAVE')
      );
    },
    cancel: function () {
      // NOTE: deleteRecord deletes from local storage so
      // nothing sent to server.
      // Fine since record hasn't been created yet
      //
      this.get('model').deleteRecord();

      // allows controller's cancel() to bubble up to route/new
      //
      return true;
    }
  }
});
