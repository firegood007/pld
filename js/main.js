requirejs.config({  
    baseUrl: '',
    paths: {
        jquery      : 'js/lib/jquery.min',
        director    : 'js/lib/director',
        router      : 'js/router',
        login       : 'js/login/controller',
        productList : 'js/productList/controller',
        productItem : 'js/productItem/controller',
        product     : 'js/product/controller',
        register    : 'js/register/controller',
        css         : 'js/lib/css.min',
        handlebars  : 'js/lib/handlebars-v4.0.5',
        validate    : 'js/lib/jquery.validate.min'
    },
    shim: {
        handlebars: {  
            exports: 'Handlebars'  
        },
        validate: {
          deps: ['jquery']
        }      
    }    
});

require(['router', 'jquery', 'css!/style/main/main.css'], function(router, $) {
    window.$ = $;
    router.init('/');
});