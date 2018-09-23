import DS from "ember-data";

export default DS.Model.extend({
  // Attributes
  id: DS.attr('number'),
  key: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
});
