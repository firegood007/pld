'use strict';

define(['css!style/login/login.css'], function() {
    var view = function(pubsub) {
        this.pubsub = pubsub;
    };

    view.prototype = {
        init: function() {
            this.show();
        },
        show: function() {
            var self = this;
            $.get('html/login.html', function(tpl) {
                $('#page').empty().append(tpl);
                self.event();
            });
        },
        event: function() {
            var self = this;
            $('input[type="button"]').on('click', function() {
                self.login();
            });

            $("body").keydown(function(e) {
                e = event? event : e;
                if (event.keyCode === 13) {
                    self.login();
                }
            });
        },
        login: function() {
            var username = $('.login-input.user').val().trim(),
                password = $('.login-input.password').val().trim();

            this.pubsub.trigger('login', [username, password]);
            localStorage.setItem('userNow', username);
        },
        submit: function() {
            //$('#login').submit();
            window.open('/#/productList','_self');
        }
    }

    return view;
});
