'use strict';

define(['js/common'], function(Model) {
    var model = {
        getProduct: function(id) {
            var defer = $.Deferred()
            Model.getProductList().then(function(data) {
                for(var i in data) {
                    var filterData = $(data[i]).filter(function(i, items) {
                        if(items.id === id) {
                            return items;
                        }
                    });
                    if(filterData.length !== 0){
                        defer.resolve(filterData[0],data); 
                        return; 
                    }   
                }
            });
            return defer.promise(); 
        }
    }
    return model;
});