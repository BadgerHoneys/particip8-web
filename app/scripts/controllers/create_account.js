(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateAccountController', ['$routeParams', CreateAccountController]);

    function CreateAccountController($routeParams) {
    	this.email_token = $routeParams.token;

    	console.log(this.email_token);

    }
})();