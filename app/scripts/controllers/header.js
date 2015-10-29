(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HeaderController', ['$cookies', '$location', HeaderController]);

    function HeaderController($cookies, $location) {

        this.logout = function(){

            //remove the auth_token from cookies 
            $cookies.remove("auth_token");

            //redirect the user to the root url
            $location.path("/"); 
        }
    }
})();