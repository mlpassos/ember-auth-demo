import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({  
  uid: attr('string'),
  username: attr('string'),
  avatar: attr('string'),
  posts: hasMany('post'),
  comments: hasMany('comment')
});