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

        return $resource(base_url + '/password_reset', {}, 
        {
        	verify_token: {
        		url: base_url + '/password_reset/verify_token',
        		method:'POST'
            },
            generate_token: {
                url: base_url + '/password_reset/generate_token',
                method:'POST'
            }
    	});
    };
})();