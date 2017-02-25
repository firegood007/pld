'use strict';

define(['js/common'], function(Model) {

    var model = {
        getProduct:function(id) {
            var defer = $.Deferred()
            Model.getProductList().then(function(data){
                for(var i in data) {
                    $(data[i]).filter(function(j, items) {
                        var filterData = $(items.productList).filter(function(k, item) {
                            if(item.sku === id) {
                                defer.resolve({'data':item,'datas':data});
                                return item;
                            }
                        });
                    });
                }
            });
            return defer.promise();
        }
    }

    return model;
});