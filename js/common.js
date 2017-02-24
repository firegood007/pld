'use strict';

define(['handlebars'], function(Handlebars) {
    var model = {
        getProductList: function() {
            var self = this;
            var defer = $.Deferred();
            $.ajax({
                url: '/json/productList.json',
                type: 'get',
                dataType: "html",
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function(json) {
                    var data = JSON.parse(json);

                    $.get('html/container-menu.html', function(tpl) {
                        var html = Handlebars.compile(tpl);
                        html = html(data);
                        $('#page').html(html);
                        self.eventListen();
                        defer.resolve(data);
                    })

                },
                error: function(data) {
                    alert('The ajax is error')
                }
            });
            return defer.promise();
        },
        seach: {
            getHtml: function(data) {
                var self = this;
                if ($.isEmptyObject(data) === true) {
                    $('.containert-menu-box').empty().html('<span>Not Found</span>');
                    return;
                }
                $.get('html/seach.html', function(tpl) {
                    var html = Handlebars.compile(tpl);
                    html = html(data);
                    $('.containert-menu-box').empty().html(html);
                });
            },
            filterData: function(data, value) {
                var filter = {};
                for (var i in data) {
                    $(data[i]).each(function(i, items) {
                        var filterData = $(items.productList).each(function(i, item) {
                            if (item.name.toLowerCase().indexOf(value) !== -1) {
                                if (filter.hasOwnProperty("productList") === false) {
                                    filter.productList = [];
                                }
                                filter.productList.push(item);
                            }
                        });
                    });
                }
                return filter;
            },
            event: function(data) {
                var self = this;
                $('.containert-menu-seach').find('input').on('keyup', function() {
                    var text = $(this).val().trim().toLowerCase();
                    if (text !== '') {
                        var filterdata = self.filterData(data, text);
                        self.getHtml(filterdata);
                    }else {
                        self.getHtml({});
                    }
                })
            }
        },
        eventListen: function() {
            var user = localStorage.getItem('userNow');
            $('.user-center').html(user);
            $('#user-center').click(function(e) {
                $('#user-modal').toggleClass("hidden");
            });
            $('.login-out').click(function() {
                localStorage.removeItem('userNow');
            });
        },
        jsonFormat: {
            jsonParse: function(json) {
                var data;
                try {
                    data = JSON.parse(json);
                }catch(er) {
                   alert('JSON is not a Object'); 
                }
                return data;
            },
            jsonStringify: function(data){
                var json;
                try {
                    json = JSON.stringify(data);
                }catch(er) {
                   alert('JSON is not a Object'); 
                }
                return json;
            }   
        }
    }

    return model;
});