import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default Component.extend({
  // Services
  router: service(),
  session: service(),
  me: service(),

  // Actions
  actions: {

    search() {
      const q = get(this, 'q');
      const router = get(this, 'router');
      router.transitionTo('index', {queryParams: {q}})
    },

  },
});
