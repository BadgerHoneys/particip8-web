(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EmailVerification', [
            '$resource',
            'base_url',
            EmailVerificationFactory
        ]);

    function EmailVerificationFactory($resource, base_url) {

        return $resource(base_url + '/email_verification', {id: '@id'}, 
        {
        	update: {method: 'PUT'}
    	});
    };
})();