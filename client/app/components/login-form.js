import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  // TODO: handle failed login w screen n everything
  //
  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      console.log('authenticate', username, password);
      this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
        Ember.Logger.error(reason.error || reason);
      });
    }
  }
});
