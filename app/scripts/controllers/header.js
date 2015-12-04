(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HeaderController', ['$cookies', '$http', '$location', HeaderController]);

    function HeaderController($cookies, $http, $location) {

        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];

        var vm = this;

        //replace this with logic from an injected session controller
        vm.logged_in = true;

        this.logout = function(){

            //remove the auth_token from cookies 
            $cookies.remove("auth_token");

            //redirect the user to the root url
            $location.path("/"); 
        }
    }
})();