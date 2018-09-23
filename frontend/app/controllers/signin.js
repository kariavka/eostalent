import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default Controller.extend({
  session: service(),
  router: service(),

  actions: {

    login() {
      const router = get(this, 'router');
      const session = get(this, 'session');
      const key = get(this, 'key');
      session.authenticate('authenticator:custom', key)
        .then(() => {
          router.transitionTo('index');
        });
    }

  }
});
