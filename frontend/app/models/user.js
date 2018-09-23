import DS from "ember-data";

export default DS.Model.extend({
  // Attributes
  id: DS.attr('number'),
  key: DS.attr('string'),
  email: DS.attr('string'),
});
