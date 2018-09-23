import Base from 'ember-simple-auth/authenticators/base';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {Promise} from 'rsvp';

export default Base.extend({
  // Services
  cookies: service(),
  me: service(),

  // Keys
  keys: [{key: 'test', name: 'test'}],
  name: null,

  // Restore
  restore(data) {
    const me = get(this, 'me');
    const keys = get(this, 'keys');
    const cookieService = this.get('cookies');
    const key = cookieService.read('key');
    const authenticated = keys.filter(item => item.key === key);

    // noinspection UnnecessaryLocalVariableJS
    let promise = new Promise(function (resolve, reject) {

      if (authenticated) {
        set(me, 'name', authenticated[0].name);
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
    const authenticated = keys.filter(item => item.key === key);
    const cookieService = this.get('cookies');

    // noinspection UnnecessaryLocalVariableJS
    let promise = new Promise(function (resolve, reject) {

      if (authenticated) {
        set(me, 'name', authenticated[0].name);
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
      set(me, 'name', null);
      cookieService.clear('key');
      resolve(data);
    });

    return promise;
  }
});
