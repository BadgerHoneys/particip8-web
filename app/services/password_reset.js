(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('PasswordReset', [
            '$resource',
            'base_url',
            PasswordResetFactory
        ]);

    function PasswordResetFactory($resource, base_url) {

        return $resource(base_url + '/password_reset/:id', {id: '@id'}, {
            update: {method: 'PUT'}
        });
    };
})();