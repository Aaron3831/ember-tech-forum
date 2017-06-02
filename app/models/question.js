import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  text: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
