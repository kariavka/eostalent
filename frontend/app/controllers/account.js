import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default Controller.extend({
  // Services
  me: service(),

  // Actions
  actions: {

    save() {
      const model = get(this, 'model');
      model.save();
    },

  },
});
