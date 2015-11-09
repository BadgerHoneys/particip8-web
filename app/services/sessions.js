(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Sessions', ['$resource', 'base_url', SessionsFactory]);

    function SessionsFactory($resource, base_url) {
        return $resource(base_url + '/sessions', {}, {});
    };
})();