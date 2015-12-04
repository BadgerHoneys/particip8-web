(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('AdminVerification', [
            '$resource',
            'base_url',
            AdminVerificationFactory
        ]);

    function AdminVerificationFactory($resource, base_url) {

        return $resource(base_url + '/admin_verification/:id', {id: '@id'}, 
        {
        	update: {method: 'PUT'}
    	});
    };
})();