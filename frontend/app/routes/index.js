import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';

export default Route.extend({
  // Servcices
  profiles: service(),

  // Params
  queryParams: {
    q: {refreshModel: true},
  },

  // Model
  model(params) {
    const q = params.q;
    const items = get(this, 'profiles').find(q);

    return hash({
      profiles: items,
    });
  },
});
