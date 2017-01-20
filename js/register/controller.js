'use strict';

define(['js/register/view',
        'js/register/model'
    ],
    function(View, Model) {
        var pubsub = $({});
        var view;
        pubsub.on('register', function(e, arg1, arg2) {
            if(Model.register(arg1, arg2)){
                view.submit();
            };
        })
        var controller = function() {

        }
        controller.prototype = {
            init: function() {
                view = new View(pubsub);
                view.init();
                return true;
            }
        }
        var ctr = new controller();
        return ctr;
    });