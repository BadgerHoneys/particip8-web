(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Sessions', SessionsFactory);

    function SessionsFactory($resource) {
        return $resource('http://localhost:3000/sessions', {}, {});
    };
})();