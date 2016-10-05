import Ember from 'ember';  
const {set} = Ember;  
export default Ember.Component.extend({  
    classNames: 'new',
    actions:{
        save(title, body){
            this.sendAction('on-submit',title, body);
            set(this,'title','');
            set(this,'body','');

        }
    }
});