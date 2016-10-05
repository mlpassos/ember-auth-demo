import Ember from 'ember';

const {RSVP: {Promise}} = Ember;

export default function getOrCreateUser(uid,username,avatar,store) {
    // alert('aqui');
    console.log(uid,username,avatar);
    return new Promise((resolve)=>{
        store.query('user', {orderBy: 'uid', equalTo: uid }).then( (records) =>{
            // console.log(records);
            if(records.get('length') === 0){
                alert('criando user');
                resolve(store.createRecord('user',{
                    uid: uid,
                    username:username,
                    avatar:avatar
                }));// end resolve
            }// end if
            else{
                resolve(records.get('firstObject'));
            }// end else
        });// end store
    }); // end promise
}