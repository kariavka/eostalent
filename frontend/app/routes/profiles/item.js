import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default Route.extend({
  // Services
  profiles: service(),
  me: service(),

  // Model
  model(params) {
    const profiles = get(this, 'profiles');
    const id = parseInt(params.id);
    return profiles.getById(id);
  },

});
