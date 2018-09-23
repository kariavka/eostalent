import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  // Profiles
  profiles: service(),
  router: service(),

  // Actions
  actions: {
    save(model) {
      const profiles = get(this, 'profiles');
      profiles.save(model);
      router.transitionTo('index', (queryParams = {}));
    },
  },
});
