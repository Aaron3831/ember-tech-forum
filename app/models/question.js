import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
