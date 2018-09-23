import Service from '@ember/service';
import {A} from '@ember/array';
import EmberObject, {get, set} from '@ember/object';

export default Service.extend({
  // We assume that this data will be stored in secure database permissions controlled by blockchain
  items: null,

  init() {
    this._super(...arguments);
    set(this, 'items', A([new EmberObject({
      id: 1,
      key: 'EOSPUBLICKEY1',
      title: 'EOSIO Developer',
      description: 'EOSIO Developer Description',
    }), new EmberObject({
      id: 2,
      key: 'EOSPUBLICKEY1',
      title: 'iOS Developer',
      description: 'iOS Developer Description',
    }), new EmberObject({
      id: 3,
      key: 'EOSPUBLICKEY1',
      title: 'Android Developer',
      description: 'Android Developer Description',
    }), new EmberObject({
      id: 4,
      key: 'EOSPUBLICKEY1',
      title: 'Python Developer',
      description: 'Python Developer Description',
    }), new EmberObject({
      id: 5,
      key: 'EOSPUBLICKEY1',
      title: 'Fullstack Developer',
      description: 'Fullstack Developer Description',
    })]));
  },

  create(data) {
    const items = get(this, 'items');
    const item = A({data});
    items.pushObject(item);
    return item;
  },

  find(q) {
    const items = get(this, 'items');

    if (!q) {
      return items;
    }

    let out = A();

    items.forEach((item) => {
      const title = item.title.toLowerCase();
      const string = q.toLowerCase();

      if (title.includes(string)) {
        out.pushObject(item);
      }
    });

    return out;
  },

  getById(id) {
    const items = get(this, 'items');
    let out = null;

    if (!id) {
      return null;
    }

    items.forEach((item) => {
      if (parseInt(item.id) === parseInt(id)) {
        out = item;
      }
    });

    return out;
  },
});
