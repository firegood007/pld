'use strict';

define(['js/login/view',
        'js/login/model'],
function(View, Model) {
    var pubsub = $({}),view;
    pubsub.on('login', function(e, arg1, arg2) {
        if(Model.login(arg1, arg2)){
            view.submit();
        };
    })
    var controller = function() {

    }
    controller.prototype = {
        init:function(){
            view = new View(pubsub);
            view.init();
            Model.getLocalStorage();
            return true;
        }
    }
    var ctr = new controller();
    return ctr;
});