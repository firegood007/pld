'use strict';

define([], function() {
    var DB = {
        admin: 'admin'
    },
    userDB,
    model = {
        login: function(user,password) {
            userDB = this.getLocalStorage();
            if (userDB[user] === undefined || userDB[user] !== password) {
                alert('Your username or password was incorrect');
                return false;
            } else {
                return true;
            }
        },
        getLocalStorage:function(){
            var user = localStorage.getItem('user');
            if(user){
                user = JSON.parse(user);
                DB = $.extend({},DB,user);  
            }
            localStorage.setItem('user',JSON.stringify(DB));
            return DB;
        },
    }
    return model;
});