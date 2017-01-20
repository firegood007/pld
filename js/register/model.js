'use strict';

define([], function() {
    var model = {
        register:function(user,password){
            this.writeLocalStorage(user,password);
            return true
        },
        writeLocalStorage:function(user,password){
            var localUser = localStorage.getItem('user'),usernow ={};
            usernow[user] = password;
            localUser = JSON.parse(localUser);
            localUser = $.extend({},localUser,usernow);
            localUser = JSON.stringify(localUser);
            localStorage.setItem('user',localUser);
        }
    }
    return model;
});