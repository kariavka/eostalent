import Service from '@ember/service';

let neo4j = require('neo4j');
let db = new neo4j.GraphDatabase('http://eostalent:eostalent@localhost:7474');

export default Service.extend({

  cypher(query, params, callback) {
    db.cypher({query, params}, callback);
  },

});
