(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Sessions', SessionsFactory);

    function SessionsFactory($resource) {
        return $resource('tcp://localhost:3000/sessions', {}, {});
    };
})();