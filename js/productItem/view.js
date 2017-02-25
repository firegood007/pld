'use strict';

define(['handlebars', 'js/common', 'css!style/productList/productList.css'], function(Handlebars, seach) {
    var view = function(){
        this.container = $('#container-product');
    }
    view.prototype = {
        init: function(obj) {
            this.show(obj.data, obj.datas);
        },
        show: function(data, datas) {
            var self = this;
            $.get('html/productItem.html', function(tpl) {
                var html = Handlebars.compile(tpl);
                html = html(data);
                self.clean();
                self.container.html(html);
                seach.seach.event(datas);
            });
        },
        clean: function(){
            this.container.empty();
        }
    }
    return view;
});