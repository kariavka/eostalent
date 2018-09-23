import Base from 'ember-simple-auth/authenticators/base';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {Promise} from 'rsvp';

export default Base.extend({
  // Services
  cookies: service(),
  me: service(),

  // Keys
  // We assume that this data will be stored on database on beckend
  keys: [
    {
      name: 'kariavka',
      email: 'artem@kariavka.com',
      private: 'privatekey',
      public: 'publikey',
    },
  ],
  name: null,

  // Restore
  restore(data) {
    const me = get(this, 'me');
    const keys = get(this, 'keys');
    const cookieService = this.get('cookies');
    const key = cookieService.read('key');
    const authenticated = keys.filter(item => item.private === key);

    // noinspection UnnecessaryLocalVariableJS
    let promise = new Promise(function (resolve, reject) {

      if (authenticated) {
        set(me, 'data', authenticated[0]);
        resolve();
      } else {
        reject();
      }

    });

    return promise;
  },

  // Authenticate
  authenticate(key) {
    const me = get(this, 'me');
    const keys = get(this, 'keys');
    const authenticated = keys.filter(item => item.private === key);
    const cookieService = this.get('cookies');

    // noinspection UnnecessaryLocalVariableJS
    let promise = new Promise(function (resolve, reject) {

      if (authenticated) {
        set(me, 'data', authenticated[0]);
        cookieService.write('key', key);
        resolve();
      } else {
        reject();
      }

    });

    return promise;
  },

  // Invalidate
  invalidate(data) {
    const me = get(this, 'me');
    const cookieService = this.get('cookies');

    // noinspection UnnecessaryLocalVariableJS
    let promise = new Promise(function (resolve, reject) {
      set(me, 'data', null);
      cookieService.clear('key');
      resolve(data);
    });

    return promise;
  }
});
