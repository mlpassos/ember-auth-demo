import Ember from 'ember';  
import cleanURI from '../utils/clean';  
import getOrCreateUser from '../utils/get-or-create-user';

const {get, set } = Ember;

export default Ember.Route.extend({  
    actions: {
        save(title,body){
            // alert('route');
            let user = null;
            let titleURL= cleanURI(title);
            let uid = this.get('session.uid');
            let date = new Date();
            // console.log(user, titleURL, uid, date);
            let post = this.store.createRecord('post',{
                title: title,
                body: body,
                author: 'test',
                titleURL:titleURL,
                date: date
            });
            // debugger;
            // console.log('aha', this.get('session.currentUser.providerData.[0].displayName'));//.currentUser.providerData.displayName'));
            // let _this = this;
            // console.log(this.get('session.currentUser.providerData')[0].displayName);
            user = getOrCreateUser(uid,this.get('session.currentUser.providerData')[0].displayName,
                                   this.get('session.currentUser.providerData')[0].photoURL,
                                   this.store);
            user.then((userData)=>{
                userData.get('posts').addObject(post);
                post.save().then(()=> {
                    console.log('Dados gravados...');
                    return userData.save();
                });

            });

            set(this, 'title','');
            set(this, 'body','');
            this.transitionTo('index');
        }
    }
});