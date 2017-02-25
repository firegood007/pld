'use strict';

define(['validate','css!style/register/register.css'], function() {
    var view = function(pubsub) {
        this.pubsub = pubsub;
    };

    view.prototype = {
        init: function() {
            this.show();
        },
        show: function() {
            var self = this;
            $.get('html/register.html', function(tpl) {
                $('#page').empty().append(tpl);
                self.event();
            });
        },
        event: function() {
            var self = this;
            $('.register-btn>input').on('click',function(){
                var username = $('.register-input.username').val().trim(),
                password = $('.register-input.password').val().trim();
                if(self.verify (username)){
                    self.pubsub.publish('register', {
                        user: username,
                        password: password
                    });
                }else {
                    alert('submit error,please check your message');
                }
            })
            
        },
        verify:function(username){
            if(JSON.parse(localStorage.getItem('user'))[username] !== undefined){
                alert('Username already exists');
                return false;
            }else{
                return this.validate().form();
            }
        },
        validate:function(){
            return $("#register").validate({
                        rules: {
                            username: {
                                required:true,
                                minlength: 2
                            },
                            password: {
                                required: true,
                                minlength: 5
                            },
                        
                        },
                        messages: {
                            username: {required:'please input usename'},
                            password: {
                                required: '必填',
                                minlength: '最少5个字符'
                            },   
                        }
                    });
        },  
        submit:function(){
            var r = confirm('register success,login in now?');
            if(r) {
                window.open('/#/login','_self');
            }else {
                return;
            }  
        }
    }
    return view;
});