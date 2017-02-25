'use strict';

define(['js/product/model', 'js/product/view'], function(Model, View) {
    var controller = function() {

    }
    controller.prototype = {
        init: function(id){
            Model.getProduct(id).done(function(obj) {
                var view = new View();
                view.init(obj);
            });
        }
    }
    var ctr = new controller();
    return ctr;     
});