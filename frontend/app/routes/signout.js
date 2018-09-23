import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default Route.extend({
  // Services
  session: service(),

  beforeModel() {
    const session = get(this, 'session');
    session.invalidate();
    this.transitionTo('index');
  },
});
