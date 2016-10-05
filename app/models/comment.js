import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({  
    body: attr('string'),
    user: belongsTo('user'),
    post: belongsTo('post')
});