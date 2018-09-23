import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import EmberObject from '@ember/object';

export default Route.extend({
  // Services
  profiles: service(),
  me: service(),

  // Model
  model() {
    const key = get(this, 'me.data.public');
    return new EmberObject({key});
  },
});
