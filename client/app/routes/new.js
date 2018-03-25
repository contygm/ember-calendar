import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    // returns new calendar model
    return this.store.createRecord('calendar');
  },
  actions: {
    cancel: function () {
      // occurs after controller's cancel() is done
      this.transitionTo('calendars');
    }
  }
})
