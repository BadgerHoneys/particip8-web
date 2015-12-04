//rename this service to auth service

(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Session', [
        	SessionService
        ]);

    function SessionService() {

    	var vm = this;

    	vm.username = null;

    	vm.create = function(username){
    		vm.username = username
    	}

    	vm.destroy = function(){
    		vm.username = null;
    	}
    };
})();