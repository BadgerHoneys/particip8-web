//rename this service to auth service

(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Authentication', [
        	'$resource',
        	'base_url',
        	AuthenticationFactory
        ]);

    function AuthenticationFactory($resource, base_url) {
        return $resource(base_url + '/sessions', {}, {});
    };
})();