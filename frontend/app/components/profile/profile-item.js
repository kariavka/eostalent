import Component from '@ember/component';
import {get, set} from '@ember/object';
// import delay from 'ember-delay/delay';

export default Component.extend({
  // Flags
  isRequesting: false,

  // Actions
  actions: {

    request() {

      set(this, 'isRequesting', true);
      // return delay(1000)
      //   .then(() => {
      //     set(this, 'isRequesting, false');
      //   });
    },

  },
});
