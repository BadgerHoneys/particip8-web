(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EmailVerification', ['$resource', 'base_url', EmailVerificationFactory]);

    function EmailVerificationFactory($resource, base_url) {

        return $resource(base_url + '/email_verification', {}, 
        {
        	verify_token: {
        		url: base_url + '/email_verification/verify_token',
        		method:'POST'
            },
            generate_token: {
                url: base_url + '/email_verification/generate_token',
                method:'POST'
            }
    	});
    };
})();