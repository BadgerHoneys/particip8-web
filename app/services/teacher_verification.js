(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('TeacherVerification', [
            '$resource',
            'base_url',
            TeacherVerificationFactory
        ]);

    function TeacherVerificationFactory($resource, base_url) {

        return $resource(base_url + '/teacher_verification/:id', {id: '@id'}, 
        {
        	update: {method: 'PUT'}
    	});
    };
})();