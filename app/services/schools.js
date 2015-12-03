(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Schools', ['$resource', 'base_url', SchoolsFactory]);

    function SchoolsFactory($resource, base_url) {
        return $resource(base_url + '/schools/:id', {id: '@id'}, {
        	teachers: {
        		url: base_url + '/schools/:id/teachers',
        		method:'GET',
        		isArray: true
            }
        });
    };
})();