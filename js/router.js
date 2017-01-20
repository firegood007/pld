'use strict';

define(['director'], function(Router) {
    var login = function () {require(['login'], function(login) {
        login.init();
    })},
    productList = function () {require(['productList'], function(productList) {
        productList.init();
    })},
    register = function () {require(['register'], function(register) {
        register.init();
    })},
    productItem = function(proId) {require(['productItem'], function(productItem) {
        productItem.init(proId);
    })},
    product = function(proId) {require(['product'], function(product) {
        product.init(proId);
    })},
    linkPage = {
        '/': login,
        '/login': login,
        '/productList': productList, 
        '/register': register, 
        '/productList/:proId': productItem,
        '/productList/procut/:proId': product           
    },
    router = Router(linkPage);
    
    return  router; 
})
