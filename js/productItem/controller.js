'use strict';

define(['js/productItem/model', 'js/productItem/view'], function(Model, View) {
    var controller = function() {

    };
    controller.prototype = {
        init: function(id) {
            Model.getProduct(id).done(function(data,datas) {
                var view = new View();
                view.init(data, datas);
            });
        }
    }
    var ctr = new controller();
    return ctr;     
})